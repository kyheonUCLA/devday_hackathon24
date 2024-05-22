# MED DOJO 

Doctors often face the challenge of making critical decisions with limited information, especially in complex cases. Access to similar case studies can significantly enhance decision-making and treatment precision. However, searching for relevant cases in vast medical databases is time-consuming and inefficient. Studies show that 70% of medical errors are related to decision-making issues, and having access to similar case studies could potentially reduce diagnostic errors by up to 50% (Journal of Patient Safety). Additionally, the average doctor spends about 20 minutes per patient searching for relevant case information, which can add up to several hours a day, detracting from direct patient care.

# What it does
Med Dojo addresses this issue by providing doctors with an efficient tool to search for similar cases, thereby enhancing decision-making and treatment precision. Our solution leverages advanced AI technologies to streamline this process:

- Case Similarity Search: Using Retrieval-Augmented Generation (RAG) and a vector database integrated with AWS Bedrock through LangChain, Med Dojo allows doctors to upload patient medical files or record patient answers during triage. The system then shows all similar cases, ranked from most similar to least similar, and highlights the top two reasons for their similarity.
+ Amazon Bedrock (Claude Model): Utilized to process the input query and generate responses. The model configuration includes parameters like temperature, top_k, and max_tokens_to_sample to control the response generation.
+  LangChain: Combines the language model and the retriever into a RetrievalQA chain that processes input queries, retrieves relevant documents, and generates a structured output.
+ Amazon Knowledge Bases Retriever: Configured to retrieve patient data from a vector database. The retriever is set to fetch a maximum of 4 results based on vector similarity search.

- Automated Transcription: Doctors don't have to type the patient's answers. Using speech-to-text technology, Med Dojo transcribes patient responses accurately and efficiently.
- Accessibility Features: Utilizing LaunchDarkly, Med Dojo adapts the user interface based on the doctor's age. Doctors over 40 years old are provided with larger fonts and a white mode, while doctors under 40 have smaller fonts and a dark mode, ensuring optimal readability and comfort.
- Real-Time Search: With Convex, Med Dojo performs API calls to the backend for top case searches using RAG, delivering fast and relevant results.


Med Dojo improves the accuracy of diagnoses and treatment plans, ultimately leading to better patient outcomes. By providing quick access to similar cases, doctors can make more informed decisions and reduce the risk of errors.

# How we built it
Med Dojo was developed with the goal of enhancing doctors' decision-making capabilities by leveraging advanced AI technologies. Key components include:

- Knowledge Base and Vector Database: We utilized AWS Bedrock and LangChain to create a robust vector database, enabling efficient retrieval of similar cases.
- User Interface Customization: LaunchDarkly was employed to tailor the user experience based on the doctor's age, ensuring accessibility and comfort.
- Backend Integration: Convex was used to handle API calls for real-time case searches, providing quick and accurate results.
- Speech-to-Text Technology: Integrated speech-to-text capabilities to automate the transcription of patient responses, saving time and reducing manual input errors.

# Expected Impacts
## Reduction in Diagnostic Errors: 
By providing access to similar case studies, Med Dojo helps doctors make more informed and accurate diagnoses. This reduces the incidence of diagnostic errors, which are estimated to cost the healthcare system billions annually. Improved accuracy in initial diagnoses can decrease the need for additional tests, treatments and follow-up visits, resulting in substantial cost savings for healthcare facilities.

## Time Efficiency: 
Med Dojo's advanced AI capabilities, including automated transcription and real-time case searches, save doctors significant time. On average, doctors spend about 20 minutes per patient searching for relevant case information. By reducing this time to just a few minutes, Med Dojo allows doctors to see more patients per day, improving overall productivity and reducing labor costs.

## Reduced Length of Hospital Stays: 
Enhanced decision-making and treatment precision can lead to quicker patient recovery times and reduced hospital stays. Shorter stays not only improve patient turnover rates but also lower the costs associated with extended hospitalizations, such as room charges, nursing care, and other hospital resources.

## Lowered Risk of Malpractice: 
With access to a comprehensive database of similar cases and AI-driven insights, doctors can make better-informed decisions, reducing the risk of malpractice claims. Malpractice litigation is a significant cost burden on the healthcare system, and reducing the incidence of errors can lead to substantial savings in legal fees and insurance premiums.

# Scalability & Market Opportunities
Med Dojo is designed to be scalable, capable of handling increasing volumes of data and user interactions as it expands across healthcare facilities. By leveraging cloud-based infrastructure and scalable AI technologies, Med Dojo can accommodate the needs of both small clinics and large hospital networks. The global healthcare market is projected to reach over $10 trillion by 2022, with an increasing emphasis on digital health solutions. Med Dojo's ability to enhance clinical decision-making and improve patient outcomes positions it well within this growing market. We anticipate that Med Dojo will not only improve healthcare delivery but also create new opportunities for collaboration with healthcare providers, researchers, and technology partners.

# Data Privacy, Security, and Patient Consent
In the healthcare sector, data privacy and security are paramount. Med Dojo is built with robust security measures to ensure the confidentiality and integrity of patient data. We comply with industry standards such as HIPAA and GDPR, implementing encryption, secure access controls, and regular audits to protect sensitive information. Additionally, patient consent is a core component of our system. Med Dojo includes features that ensure patients are informed about how their data will be used, and explicit consent is obtained before any data is processed. This commitment to privacy and security not only protects patient information but also fosters trust between healthcare providers and patients.


# Challenges we ran into
One major challenge was ensuring the accuracy of the similarity search in diverse and complex medical cases. Additionally, integrating various AI technologies and maintaining data privacy and security were significant technical hurdles.

# Accomplishments that we're proud of
We are proud of Med Dojo’s ability to streamline the search for similar cases, significantly enhancing doctors' decision-making processes. The system’s high accuracy in identifying similar cases and its user-friendly interface have received positive feedback from medical professionals.

# What we learned
Developing Med Dojo highlighted the importance of user-centric design, particularly in the healthcare industry. Close collaboration with doctors provided invaluable insights, helping us create a practical and effective tool. We also gained a deeper understanding of integrating AI technologies with existing healthcare systems and protocols.

# What's next for Med Dojo
Looking ahead, we plan to expand Med Dojo’s capabilities to further improve healthcare delivery:

1. Allow Nurses to Search for Similar Cases: Extend the functionality to nurses, enabling them to leverage the same powerful case similarity search.
2. Sentiment Analysis: Analyze the sentiment of patient responses, showcasing the top five emotions to provide deeper insights into patient well-being.
3. Enhanced Accessibility Features:
- Adjustable Contrast: Offer high contrast modes for doctors with visual impairments.
Voice Command Navigation: Enable voice command features for hands-free operation.
- Customizable Font Sizes: Allow users to customize font sizes beyond the automatic adjustments based on age.
4. Tone of Voice Analysis: Use the Hume API to analyze the tone of voice, helping to identify emotional states and stress levels.
5. Detailed Speech Analysis Capabilities:
- Frequency of Stop Words and Pauses: Analyze the frequency and patterns of stop words and pauses in patient speech. These can indicate cognitive load, stress levels, or hesitation, suggesting discomfort or uncertainty about their health condition.
- Analysis of Speech Patterns: Examine how patients use language and express themselves to gain insights into their mental health and overall well-being. Variations in speech rate, tone, and volume may reveal anxiety, depression, or other emotional states.
- Cultural Sensitivity in Communication: Identify cultural nuances in communication that may affect how patients report symptoms or respond to healthcare providers. This helps develop more culturally sensitive approaches to treatment.

Med Dojo is committed to transforming healthcare by empowering doctors and nurses with the tools they need to make precise and informed decisions, ultimately improving patient care and outcomes.
