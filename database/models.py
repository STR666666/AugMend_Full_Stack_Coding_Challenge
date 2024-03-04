import os
import sys
from peewee import *  # Imports all elements from the Peewee library

# Adjusts the system path to ensure the script can import modules from the parent directory
cur_path = os.path.abspath(os.path.dirname(__file__))
sys.path.insert(0, cur_path+"/..")

# Initializes a SQLite database named 'survey.db'
db = SqliteDatabase('survey.db')

# BaseModel class to serve as a base for other models, specifying the database to use
class BaseModel(Model):
    class Meta:
        database = db

# Model representing a survey response, inheriting from BaseModel
class SurveyResponse(BaseModel):
    # Fields for the survey response, such as personal information and survey answers
    first_name = CharField(null=True)
    last_name = CharField(null=True)
    email = CharField(null=True)
    birthdate = DateField(null=True)
    marital_status = CharField(null=True)
    gender = CharField(null=True)
    address = CharField(null=True)
    apartment_number = CharField(null=True)
    city = CharField(null=True)
    state = CharField(null=True)
    zip_code = CharField(null=True)
    seen_therapist = CharField(null=True)
    medications = CharField(null=True)

# Model for storing details about medications related to a survey response
class MedicationDetail(BaseModel):
    # ForeignKeyField creates a relationship between this model and SurveyResponse
    survey_response = ForeignKeyField(SurveyResponse, backref='medicationDetails')
    medication_name = CharField(null=True)
    medication_detail = TextField(null=True)

# Function to initialize the database by connecting and creating the necessary tables
def initialize_db():
    db.connect()  # Connects to the database
    db.create_tables([SurveyResponse, MedicationDetail], safe=True)  # Creates tables if they don't already exist