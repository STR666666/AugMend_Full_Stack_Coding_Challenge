### AugMend Health Login/Register + Survey

## Requirements
Please see requirements.txt

## Usage

# Run
1. pip install -r requirements.txt
2. Input firebase configuration in src/firebase/firebase.js
3. Both fastAPI and the frontend NEEDS to be run together. To do so, you can open two new terminals
    i. fastAPI
        a. cd fastAPI
        b. uvicorn store_data_db:app --reload
    ii. frontend
        a. cd src
        b. npm install
        c. npm start
4. Go to http://localhost:3000/ and begin your process.

# Check Database
1. Download SQLite in Extension
2. After completing the survey, right click on survey.db under fastAPI
3. Then, click on Open Database.
4. On the left down corner, go to SQLITE EXPLORER
5. Click on surveyresponse to see the surveys
6. Click on medicationdetail if the user answered 'YES' on "Are you taking any medications? "


