import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from langchain.chains import RetrievalQA
from langchain_community.retrievers import AmazonKnowledgeBasesRetriever
from langchain_aws import BedrockLLM
import ldclient
from ldclient.config import Config
from ldclient import Context
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set up AWS credentials and configuration
aws_access_key_id = os.getenv('AWS_ACCESS_KEY_ID')
aws_secret_access_key = os.getenv('AWS_SECRET_ACCESS_KEY')
aws_region = os.getenv('AWS_REGION')
aws_session_token = os.getenv('AWS_SESSION_TOKEN')

# Configure AWS Boto3 to use the loaded credentials
import boto3
boto3.setup_default_session(
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    region_name=aws_region,
    aws_session_token=aws_session_token
)

# Initialize the retriever
retriever = AmazonKnowledgeBasesRetriever(
    knowledge_base_id="4LQYUUFKRO",
    retrieval_config={"vectorSearchConfiguration": {"numberOfResults": 10}}
)

# Model configuration
model_kwargs_claude = {
    "temperature": 0,
    "top_k": 10,
    "max_tokens_to_sample": 750
}

# Initialize the language model
llm = BedrockLLM(model_id="anthropic.claude-instant-v1", model_kwargs=model_kwargs_claude)

# Initialize the QA chain
qa = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True
)

# Create Flask app
app = Flask(__name__)

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    input = data.get('query', '')
    query = f"Your main task is to find similar patients from conversation transcript that \
        will be give below who have the same medical condition form the vector database where \
            the data is stored in json. First return the most similar documents from the dataset \
                in json format. Secondly return why you thought the patients are similar. \
                    Please return everything in JSON format. Converasation Transcript {input}"
    if not query:
        return jsonify({'error': 'Query is required'}), 400
    
    try:
        output = qa.invoke(query)
        return jsonify({'result': output['result']})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

FLAG_SDK_KEY = os.getenv("FLAG_SDK_KEY")

ldclient.set_config(Config(FLAG_SDK_KEY))

client = ldclient.get()

context = Context.builder("context-key-123abc").set("key", "youth").build()

@app.route('/ld', methods=['GET'])
def ld():
    flag_value = client.variation("entitlement", context, False)
    return flag_value

if __name__ == '__main__':
    app.run(debug=True)
