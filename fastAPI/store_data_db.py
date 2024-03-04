from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import date
import os
import sys

# Assuming your Peewee models and database initialization logic are in database/models.py
cur_path = os.path.abspath(os.path.dirname(__file__))
sys.path.insert(0, cur_path+"/..")
from database.models import db, initialize_db, SurveyResponse, MedicationDetail

app = FastAPI()

# Initialize the database
initialize_db()

# CORS middleware setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust as necessary
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Pydantic models for request validation
class MedicationDetailSchema(BaseModel):
    medication_name: Optional[str] = Field(None, alias="medicationName")
    medication_detail: Optional[str] = Field(None, alias="medicationDetail")

    class Config:
        from_attributes = True
        populate_by_name = True 

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
    seen_therapist: Optional[str] = Field(None, alias="seen-therapist")
    medications: Optional[str] = Field(None, alias="medications")
    medication_details: Optional[List[MedicationDetailSchema]] = Field(None, alias="medicationDetails")

# Endpoint to submit a survey response
@app.post("/submit_survey/")
async def submit_survey(survey_data: SurveyResponseSchema):
    data_dict = survey_data.dict(by_alias=True)
    medication_details = data_dict.pop("medicationDetails", None)  # Remove and capture medication_details

    with db.atomic():  # Ensures transactional integrity
        # Create the SurveyResponse record
        new_survey_response = SurveyResponse.create(
            first_name=data_dict.get("first-name", None),  # Using get() to avoid KeyError if key is missing
            last_name=data_dict.get("last-name", None),
            email=data_dict.get("email", None),
            birthdate=data_dict.get("birthdate", None),
            marital_status=data_dict.get("marital-status", None),
            gender=data_dict.get("gender", None),
            address=data_dict.get("address", None),
            apartment_number=data_dict.get("apartment-number", None),
            city=data_dict.get("city", None),
            state=data_dict.get("state", None),
            zip_code=data_dict.get("zip-code", None),
            seen_therapist=data_dict["seen-therapist"],  # Assuming these fields are mandatory and always present
            medications=data_dict["medications"],
        )
        print(medication_details)
        
        # Process medication details if present
        if data_dict["medications"] == "Yes" and medication_details:
            for detail in medication_details:
                MedicationDetail.create(
                    survey_response=new_survey_response,
                    medication_name=detail["medicationName"],
                    medication_detail=detail["medicationDetail"]
                )
    
    return {"message": "Survey submitted successfully"}