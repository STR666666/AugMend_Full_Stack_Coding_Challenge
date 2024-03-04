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
        
#         # Create a new survey response record
#         survey_response = models.SurveyResponse.create(**survey_dict)
        
#         return {"message": "Survey submitted successfully"}
#     except Exception as e:
#         raise HTTPException(status_code=400, detail=f"Error submitting survey: {str(e)}")

import os
import sys
cur_path = os.path.abspath(os.path.dirname(__file__))
sys.path.insert(0, cur_path+"/..")

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from database.models import SurveyResponse  # Assuming this is your Peewee model

from fastapi import FastAPI, HTTPException
from fastapi.encoders import jsonable_encoder
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from database import models

app = FastAPI()

@app.get("/get-survey-responses/")
async def get_survey_responses():
    try:
        responses = SurveyResponse.select()  # Retrieve all responses
        response_data = [response for response in responses.dicts()]  # Convert responses to dicts
        return JSONResponse(content={"responses": response_data})
    except Exception as e:
        return JSONResponse(status_code=400, content={"message": str(e)})
