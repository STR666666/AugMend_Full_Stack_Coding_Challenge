# AugMend Health Login/Register + Survey

# Requirements
Please see requirements.txt

# Usage

## Run
1. pip install -r requirements.txt
2. Add in firebase configuration in src/firebase/firebase.js
3. Both fastAPI and the frontend NEEDS to be run together. To do so, you can open two new terminals
    i. fastAPI
        a. cd fastAPI
        b. uvicorn store_data_db:app --reload
    ii. frontend
        a. cd src
        b. npm install
        c. npm start
4. Go to http://localhost:3000/ and begin your process.

## Check Database
1. Download SQLite in Extension
2. After completing the survey, right click on survey.db under fastAPI
3. Then, click on Open Database.
4. On the left down corner, go to SQLITE EXPLORER
5. Click on surveyresponse to see the surveys
6. Click on medicationdetail if the user answered 'YES' on "Are you taking any medications? "


# My Thought Process 

## Overview

### UI/UX Development
Initially, I contemplated creating an email login system. However, after its implementation, I considered how to integrate third-party authentication. This data needed to be stored in a database. Yet, I discovered that hardcoding Google verification/configuration was time-consuming, and managing a database was overly complicated. Despite these challenges, I attempted to hardcode it anyway. The repetitive nature of the Google sign-in, the redundancy of daily registration, and the unappealing look of the website prompted me to start over.

Then, I discovered Firebase, which offers a broad range of authentication methods, including Google, LinkedIn, email, and phone. Learning Firebase was time-consuming because it required coding for login, logout, email registration, Google registration, and authentication. However, a significant advantage is that Firebase has its own database that efficiently manages user information. Once the login/register functionality was operational, I focused on improving the page's appearance to align with AugMend Health's color scheme and logo, which made my project appear more professional.

Later, I attempted to hardcode the survey part using JavaScript. However, after some research, I discovered SurveyJS, an incredibly efficient tool. I then learned how to use it and implemented it according to the instructions, even experimenting with new features like a camera.

### fastAPI
Fortunately, I had some experience with FastAPI. I developed store_data_db.py to be highly efficient, but connecting the frontend and backend was time-consuming. I managed to figure out how to use HTTP requests and fetch operations for the UI, then worked on linking the users' information to FastAPI. Although SurveyJS facilitated the creation of JSON files for the frontend, merging this data with the backend was challenging. Running 'npm start' with the console open only indicated when an instruction was incorrect, without specifying the error. I encountered various errors, including 3000, 404, and 4000, which took a long time to resolve. Eventually, I identified the issue as a mismatch between FastAPI's Pydantic Models and the content from JSON.stringify(sender.data) in SurveyComponent.jsx under src/survey. Encountering both successful and unsuccessful messages repeatedly was frustrating, as I was trying to implement a dynamic ORM database.

### Database
I opted to use Peewee for the database. Peewee is a compact, expressive ORM tool for Python, designed to make database interactions simpler by mapping Python classes to database tables. A limitation is that it is not a cloud database, so the data is only stored locally. I chose Peewee because I needed an ORM tool for table connections and to prevent SQL injection, as mentioned in the instructions. Initially, I had considered using MongoDB.

The need to implement two tables/databases in Peewee arose due to a dynamic factor—namely, the uncertain number of "medications" to be added. This was one of the most significant challenges I faced. The issue was the mismatched connectors between the UI and FastAPI. Moreover, I could only call the SurveyResponseSchema parameter in async def submit_survey(survey_data: SurveyResponseSchema) from store_data_db.py, instead of also calling MedicationDetailSchema. Thus, async def submit_survey(survey_data: SurveyResponseSchema, medication: MedicationDetailSchema) would be problematic. The challenge arises when a function like submit_survey expects two complex Pydantic models (SurveyResponseSchema and MedicationDetailSchema). FastAPI tries to parse the request body into both parameters, which fails because a request can only have one body. Consequently, FastAPI struggles to correctly parse and inject the data into both parameters from a single JSON body. This design is intended to prevent ambiguity and ensure clarity in how data is passed to the function.

After identifying this issue, I sought methods to link each medication to the survey. To this end, I implemented IDs, which are observable when testing the database using the SQLite table.