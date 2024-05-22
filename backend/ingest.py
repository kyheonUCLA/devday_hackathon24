import boto3
import json
import os
from dotenv import load_dotenv
from botocore.exceptions import NoCredentialsError

load_dotenv()

aws_access_key_id = os.getenv('AWS_ACCESS_KEY_ID')
aws_secret_access_key = os.getenv('AWS_SECRET_ACCESS_KEY')
aws_region = os.getenv('AWS_REGION')
aws_session_token = os.getenv('AWS_SESSION_TOKEN')

s3 = boto3.client(
    's3',
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    region_name=aws_region,
    aws_session_token=aws_session_token
)

# Function to upload JSON object to S3
def upload_json_to_s3(bucket_name, json_object, object_name):
    try:
        json_string = json.dumps(json_object)
        s3.put_object(Bucket=bucket_name, Key=object_name, Body=json_string, ContentType='application/json')
        print(f"Successfully uploaded {object_name} to {bucket_name}")
    except NoCredentialsError:
        print("Credentials not available")

bucket_name = 'patient-hack24'
subfolder = 'root/'

with open(r'C:\Users\Aayush\OneDrive\Desktop\projects\devday_hackathon24\backend\patients.json', 'r') as file:
    patients_data = json.load(file)

for patient in patients_data:
    object_name = f"{subfolder}patient_{patient['patient_id']}.json"  # Define the object name (key) in S3
    upload_json_to_s3(bucket_name, patient, object_name)
