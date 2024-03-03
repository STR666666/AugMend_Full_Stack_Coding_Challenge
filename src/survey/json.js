export const json = {
    "title": "Patient Registration Form",
    "description": "Your privacy is important to us. All information received through our forms and other communications is subject to our Patient Privacy Policy.",
    "logo": "https://assets-global.website-files.com/63ed66efadb8bc109fc6330c/63ee84caab7b90b056549581_220921_logo_transparent-37.png",
    "logoWidth": "70",
    "logoHeight": "96",
    "completedHtml": "<div style=\"max-width:540px;text-align:left;margin:0px auto 16px auto;border: 1px solid rgba(0,0,0,0.25);padding:40px 48px 48px 48px;background-color:#fff;\">\n\n<h4>Thank you for completing your patient registration form.</h4>\n<br>\n<p>Dear {firstname-for-complete-page},\n<br>\nYour information has been successfully received, and we look forward to providing you with the highest level of care. \n<br><br>\nIf you have any questions or need to schedule an appointment, please don't hesitate to reach out to our office. Our team is here to assist you every step of the way.\n<br><br>\nWarm regards,\n<br>\nCentral Hospital.</p>\n\n</div>",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "panel",
            "name": "personal-information",
            "elements": [
              {
                "type": "text",
                "name": "first-name",
                "width": "50%",
                "minWidth": "256px",
                "title": "First Name"
              },
              {
                "type": "text",
                "name": "last-name",
                "width": "50%",
                "minWidth": "256px",
                "startWithNewLine": false,
                "title": "Last Name"
              },
              {
                "type": "text",
                "name": "ssn",
                "width": "50%",
                "minWidth": "256px",
                "title": "Social Security #"
              },
              {
                "type": "text",
                "name": "birthdate",
                "width": "50%",
                "minWidth": "256px",
                "startWithNewLine": false,
                "title": "Date of Birth",
                "inputType": "date"
              },
              {
                "type": "dropdown",
                "name": "marital-status",
                "width": "50%",
                "minWidth": "256px",
                "title": "Marital Status",
                "choices": [ "Single", "Married", "Widowed", "Divorced", "Separated" ],
                "choicesOrder": "random",
                "placeholder": "",
                "allowClear": false
              },
              {
                "type": "dropdown",
                "name": "gender",
                "width": "50%",
                "minWidth": "256px",
                "startWithNewLine": false,
                "title": "Gender",
                "choices": [ "Male", "Female" ],
                "choicesOrder": "random",
                "placeholder": "",
                "allowClear": false
              }
            ],
            "width": "69%",
            "minWidth": "256px"
          },
          {
            "type": "file",
            "name": "photo",
            "width": "31%",
            "imageWidth": "532",
            "imageHeight": "576",
            "minWidth": "256px",
            "startWithNewLine": false,
            "titleLocation": "hidden",
            "sourceType": "camera",
            "photoPlaceholder": " "
          },
          {
            "type": "panel",
            "name": "contact-information",
            "elements": [
              {
                "type": "text",
                "name": "address",
                "width": "66%",
                "minWidth": "256px",
                "title": "Address"
              },
              {
                "type": "text",
                "name": "apartment-number",
                "width": "34%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "Apartment #"
              },
              {
                "type": "text",
                "name": "city",
                "width": "34%",
                "minWidth": "128px",
                "title": "City"
              },
              {
                "type": "text",
                "name": "state",
                "width": "32%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "State"
              },
              {
                "type": "text",
                "name": "zip",
                "width": "34%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "Zip Code"
              },
              {
                "type": "text",
                "name": "phone",
                "width": "34%",
                "minWidth": "128px",
                "title": "Phone #"
              },
              {
                "type": "text",
                "name": "email",
                "width": "66%",
                "minWidth": "256px",
                "startWithNewLine": false,
                "title": "Email Address"
              }
            ],
            "title": "Contact Information",
            "width": "100%",
            "minWidth": "256px"
          },
          {
            "type": "panel",
            "name": "emergency-contact",
            "elements": [
              {
                "type": "text",
                "name": "emergency-contact-full-name",
                "width": "66%",
                "minWidth": "256px",
                "title": "Full Name"
              },
              {
                "type": "dropdown",
                "name": "emergency-contact-relationship",
                "width": "34%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "Relationship",
                "choices": [ "Family Member", "Friend", "Partner", "Work Colleague" ], 
                "choicesOrder": "random",
                "placeholder": "",
                "allowClear": false
              },
              {
                "type": "text",
                "name": "emergency-contact-phone",
                "width": "34%",
                "minWidth": "128px",
                "title": "Phone #"
              },
              {
                "type": "text",
                "name": "emergency-contact-address",
                "width": "66%",
                "minWidth": "256px",
                "startWithNewLine": false,
                "title": "Address"
              }
            ],
            "title": "Emergency Contact Information",
            "width": "100%",
            "minWidth": "256px"
          },
          {
            "type": "panel",
            "name": "insurance",
            "elements": [
              {
                "type": "text",
                "name": "insurance-company",
                "width": "66%",
                "minWidth": "256px",
                "title": "Insurance Company"
              },
              {
                "type": "text",
                "name": "insurance-policy-number",
                "width": "34%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "Policy #"
              },
              {
                "type": "radiogroup",
                "name": "insurance-policyholder",
                "width": "100%",
                "minWidth": "256px",
                "title": "Policyholder",
                "defaultValue": "Personal",
                "choices": [ "Personal", "Other" ],
                "colCount": 0
              },
              {
                "type": "text",
                "name": "policyholder-name",
                "visibleIf": "{insurance-policyholder} = 'Other'",
                "width": "66%",
                "minWidth": "256px",
                "title": "Holder Name"
              },
              {
                "type": "dropdown",
                "name": "policyholder-relationship",
                "visibleIf": "{insurance-policyholder} = 'Other'",
                "width": "34%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "Relationship",
                "choicesFromQuestion": "emergency-contact-relationship",
                "choicesOrder": "random",
                "placeholder": "",
                "allowClear": false
              },
              {
                "type": "text",
                "name": "policyholder-birthdate",
                "visibleIf": "{insurance-policyholder} = 'Other'",
                "width": "34%",
                "minWidth": "128px",
                "title": "Date of Birth",
                "inputType": "date"
              },
              {
                "type": "text",
                "name": "policyholder-ssn",
                "visibleIf": "{insurance-policyholder} = 'Other'",
                "width": "32%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "Social Security #"
              },
              {
                "type": "text",
                "name": "policyholder-phone",
                "visibleIf": "{insurance-policyholder} = 'Other'",
                "width": "34%",
                "minWidth": "128px",
                "startWithNewLine": false,
                "title": "Phone #"
              },
              {
                "type": "comment",
                "name": "policyholder-address",
                "visibleIf": "{insurance-policyholder} = 'Other'",
                "width": "100%",
                "minWidth": "256px",
                "title": "Address",
                "autoGrow": true,
                "allowResize": false
              }
            ],
            "title": "Insurance Information",
            "width": "100%",
            "minWidth": "256px"
          }
        ]
      }
    ],
    "calculatedValues": [{
      "name": "firstname-for-complete-page",
      "expression": "iif({first-name} notempty, {first-name}, patient)"
    }],
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "completeText": "Register",
    "questionsOnPageMode": "singlePage",
    "widthMode": "static",
    "width": "1024",
    "fitToContainer": true
  };