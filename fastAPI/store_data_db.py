# import os
# import sys
# cur_path = os.path.abspath(os.path.dirname(__file__))
# sys.path.insert(0, cur_path+"/..")
# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel, Field, EmailStr
# from typing import Optional
# from datetime import date
# from database.models import SurveyResponse, initialize_db

# app = FastAPI()

# # Initialize the database
# initialize_db()

# # CORS middleware setup to allow requests from your React app
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # This allows all origins, adjust in production
#     allow_credentials=True,
#     allow_methods=["*"],  # This allows all methods
#     allow_headers=["*"],  # This allows all headers
# )

# class SurveyResponseSchema(BaseModel):
#     first_name: Optional[str] = Field(None, alias="first-name")
#     last_name: Optional[str] = Field(None, alias="last-name")
#     email: Optional[EmailStr] = Field(None, alias="email")
#     birthdate: Optional[date] = Field(None, alias="birthdate")
#     marital_status: Optional[str] = Field(None, alias="marital-status")
#     gender: Optional[str] = Field(None, alias="gender")
#     address: Optional[str] = Field(None, alias="address")
#     apartment_number: Optional[str] = Field(None, alias="apartment-number")
#     city: Optional[str] = Field(None, alias="city")
#     state: Optional[str] = Field(None, alias="state")
#     zip_code: Optional[str] = Field(None, alias="zip-code")
#     seen_therapist: str = Field(..., alias="seen-therapist")
#     medications: str = Field(..., alias="medications")
#     medication_details: Optional[str] = Field(None, alias="medication-details")  # Assuming JSON string

#     class Config:
#         allow_population_by_field_name = True

# @app.post("/submit-survey/")
# async def submit_survey(survey_data: SurveyResponseSchema):
#     survey_dict = survey_data.dict(by_alias=True)  # Use by_alias=True to handle field aliases
#     # Convert the birthdate to string as Peewee's DateField expects a date in string format for SQLite
#     # if survey_dict.get("birthdate"):
#     #     survey_dict["birthdate"] = survey_dict["birthdate"].isoformat()
#     try:
#         # Directly unpack survey_dict into SurveyResponse.create()
#         SurveyResponse.create(**survey_dict)
#         return {"message": "Survey submitted successfully"}
#     except Exception as e:
#         print(f"Error: {e}")
#         raise HTTPException(status_code=400, detail=f"Error submitting survey: {str(e)}")

import os
import sys
cur_path = os.path.abspath(os.path.dirname(__file__))
sys.path.insert(0, cur_path+"/..")

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import date
from database.models import SurveyResponse, initialize_db

app = FastAPI()

# Initialize the database
initialize_db()

# CORS middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Specific to your React app's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SurveyResponseSchema(BaseModel):
    first_name: Optional[str] = Field(None, alias="first-name")
    last_name: Optional[str] = Field(None, alias="last-name")
    email: Optional[EmailStr] = Field(None, alias="email")
    birthdate: Optional[date] = Field(None, alias="birthdate")
    marital_status: Optional[str] = Field(None, alias="marital-status")
    gender: Optional[str] = Field(None, alias="gender")
    address: Optional[str] = Field(None, alias="address")
    apartment_number: Optional[str] = Field(None, alias="apartment-number")
    city: Optional[str] = Field(None, alias="city")
    state: Optional[str] = Field(None, alias="state")
    zip_code: Optional[str] = Field(None, alias="zip")
    seen_therapist: str = Field(..., alias="seen-therapist")
    medications: str = Field(..., alias="medications")
    medication_details: Optional[str] = Field(None, alias="medication-details")

    class Config:
        allow_population_by_field_name = True

@app.post("/submit_survey/")
async def submit_survey(survey_data: SurveyResponseSchema):
    # try:
    # Use Pydantic model's .dict() method with by_alias=True to respect field aliases
    data_dict = survey_data.dict(by_alias=True)
    print(data_dict)
    # Optionally transform any data as needed before saving
    # For example, handling date conversion if not automatically done by Pydantic

    # Create a new SurveyResponse record using the transformed data
    SurveyResponse.create(**data_dict)

    return {"message": "Survey submitted successfully"}
    # except Exception as e:
    #     print(f"Error saving survey response: {e}")
    #     raise HTTPException(status_code=500, detail="Failed to submit survey.")