export default {
  "conditional": {
    "Is this a final judgment?": {
      "ui:widget": "radio"
    }
  },
  "arrayOfConditionals": {
    "items": {
      "Is this a final judgment?": {
        "ui:widget": "radio"
      }
    }
  },
  "fixedArrayOfConditionals": {
    "items": {
      "Is this a final judgment?": {
        "ui:widget": "radio"
      }
    },
    "additionalItems": {
      "Is this a final judgment?": {
        "ui:widget": "radio"
      }
    }
  },
  "tasks": {
    "items": {
      "details": {
        "ui:widget": "textarea"
      }
    }
  },
  "ageOfUser": {
    "ui:widget": "updown"
  },
  "userClaimReference": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "The claimant created this passcode when the set up their Worldlaw Swarmers identity."
  },
  "radioEncrypt": {
    "ui:widget": "radio"
  },
  "pass1": {
    "ui:widget": "password"
  },
  "pass2": {
    "ui:widget": "password"
  },
  "identityHash": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "mnemonicHash": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "ageOfUser": {
    "ui:widget": "updown",
    "ui:title": "Age of person submitting this form",
    "ui:description": "to establish capacity"
  },
  "userClaimReference": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "The claimant created this passcode when the set up their Worldlaw Swarmers identity."
  },
  "timestamp": {
    "ui:widget": "alt-datetime"
  },
  "contactTelNumber": {
    "ui:options": {
      "inputType": "tel"
    }
  },
  "boolean": {
    "radio": {
      "ui:widget": "radio"
    },
    "select": {
      "ui:widget": "select"
    }
  },
  "string": {
    "textarea": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "color": {
      "ui:widget": "color"
    }
  },
  "widgetOptions": {
    "ui:options": {
      "backgroundColor": "yellow"
    }
  },
  "selectWidgetOptions": {
    "ui:options": {
      "backgroundColor": "pink"
    }
  },
  "LegalElement1": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement2": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement3": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement4": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement5": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement6": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement7": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement8": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement9": {
    "ui:placeholder": "Choose one"
  },
  "LegalElement10": {
    "ui:placeholder": "Choose one"
  },
  "Attestation": {
    "ui:placeholder": "Choose one"
  },
  "electronicSignature": {
    "ui:placeholder": "Choose one"
  },
  "alternative": {
    "alt-date": {
      "ui:widget": "alt-date",
      "ui:options": {
        "yearsRange": [
          2000,
2024
        ]
      }
    }
  },
  "integer": {
    "ui:widget": "updown"
  },
  "numberEnumRadio": {
    "ui:widget": "radio",
    "ui:options": {
      "inline": true
    }
  },
  "integerRange": {
    "ui:widget": "range"
  },
  "integerRangeSteps": {
    "ui:widget": "range"
  }
}
