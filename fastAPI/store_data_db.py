import os
import sys
cur_path = os.path.abspath(os.path.dirname(__file__))
sys.path.insert(0, cur_path+"/..")

from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import date

from fastapi import FastAPI, HTTPException
import json  # For parsing the JSON string
from database import models
from database.models import SurveyResponse, db  # Import your Peewee model
from fastapi.middleware.cors import CORSMiddleware

class SurveyResponseSchema(BaseModel):
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[EmailStr]
    birthdate: Optional[date]
    marital_status: Optional[str]
    gender: Optional[str]
    address: Optional[str]
    apartment_number: Optional[str] = None
    city: Optional[str]
    state: Optional[str]
    zip_code: Optional[str]
    seen_therapist: str
    medications: str
    medication_details: Optional[str] = None  # JSON string

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # This allows all origins, adjust in production
    allow_credentials=True,
    allow_methods=["*"],  # This allows all methods
    allow_headers=["*"],  # This allows all headers
)

@app.post("/submit-survey/")
async def submit_survey(survey_data: SurveyResponseSchema):
    print(f"Received data: {survey_data.dict()}")
    try:
        survey_dict = survey_data.dict()
        SurveyResponse.create(**survey_dict)
        return {"message": "Survey submitted successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error submitting survey: {str(e)}")

    
# @app.post("/submit-survey/")
# async def submit_survey(survey_data: SurveyResponseSchema):
#     try:
#         survey_dict = survey_data.dict()
#         SurveyResponse.create(**survey_dict)
#         return {"message": "Survey submitted successfully"}
#     except Exception as e:
#         raise HTTPException(status_code=400, detail=f"Error submitting survey: {str(e)}")

# import os
# import sys
# cur_path = os.path.abspath(os.path.dirname(__file__))
# sys.path.insert(0, cur_path+"/..")

# from fastapi import FastAPI, HTTPException
# from fastapi.encoders import jsonable_encoder
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from database import models

# app = FastAPI()

# # CORS middleware setup to allow requests from your React app
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Adjust this in production
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class SurveyData(BaseModel):
#     # Define the structure of your survey data here
#     first_name: str
#     last_name: str
#     email: str
#     # Add other fields as needed

# @app.post("/submit-survey/")
# async def submit_survey(survey_data: SurveyData):
#     try:
#         # Convert Pydantic object to dict
#         survey_dict = jsonable_encoder(survey_data)
        
# #         # Create a new survey response record
# #         survey_response = models.SurveyResponse.create(**survey_dict)
        
# #         return {"message": "Survey submitted successfully"}
# #     except Exception as e:
# #         raise HTTPException(status_code=400, detail=f"Error submitting survey: {str(e)}")

# import os
# import sys
# cur_path = os.path.abspath(os.path.dirname(__file__))
# sys.path.insert(0, cur_path+"/..")

# from fastapi import FastAPI
# from fastapi.responses import JSONResponse
# from database.models import SurveyResponse  # Assuming this is your Peewee model

# from fastapi import FastAPI, HTTPException
# from fastapi.encoders import jsonable_encoder
# # from fastapi.middleware.cors import CORSMiddleware
# # from pydantic import BaseModel
# # from database import models

# app = FastAPI()

# @app.get("/get-survey-responses/")
# async def get_survey_responses():
#     try:
#         responses = SurveyResponse.select()  # Retrieve all responses
#         response_data = [response for response in responses.dicts()]  # Convert responses to dicts
#         return JSONResponse(content={"responses": response_data})
#     except Exception as e:
#         return JSONResponse(status_code=400, content={"message": str(e)})
