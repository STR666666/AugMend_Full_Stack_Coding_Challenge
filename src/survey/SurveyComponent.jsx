import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { json } from "./json"; // Make sure this imports your survey configuration

function SurveyComponent() {
  const survey = new Model(json);
  survey.applyTheme(themeJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3)); // Logging the data for debugging

    fetch('http://127.0.0.1:8000/submit_survey/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sender.data),
    })
    .then(response => {
      if (!response.ok) {
        // If response is not ok, throw an error including the status text
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
      }
      return response.json(); // Parse JSON only if response is ok
    })
    .then(data => {
      console.log('Survey submission successful:', data); // Log successful data submission
      alert('Survey submitted successfully!');
    })
    .catch(error => {
      console.error('Error during survey submission:', error);
      // Check if the error is due to the response being undefined or another issue
      if (error.message.includes('HTTP error')) {
        alert(`Failed to submit survey: ${error.message}`);
      } else {
        alert('Failed to submit survey. Please check your network connection and try again.');
      }
    });
  });
  
  return <Survey model={survey} />;
}

export default SurveyComponent;
