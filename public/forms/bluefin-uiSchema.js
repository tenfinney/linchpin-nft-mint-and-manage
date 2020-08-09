export default {
  "conditional": {
    "Do you want to file a claim?": {
      "ui:widget": "radio"
    }
  },
  "arrayOfConditionals": {
    "items": {
      "Do you want to file a claim?": {
        "ui:widget": "radio"
      }
    }
  },
  "fixedArrayOfConditionals": {
    "items": {
      "Do you want to file a claim?": {
        "ui:widget": "radio"
      }
    },
    "additionalItems": {
      "Do you want to file a claim?": {
        "ui:widget": "radio"
      }
    }
  },
  "identityHash": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "mnemonicHash": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "worldlawClaimHash": {
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
  "radioEncrypt": {
    "ui:widget": "radio"
  },
  "pass1": {
    "ui:widget": "password"
  },
  "pass2": {
    "ui:widget": "password"
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
  "disabled": {
    "ui:disabled": true
  },
  "readonly": {
    "ui:readonly": true
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
  "listOfESIStatements": {
    "items": {
      "ui:emptyValue": ""
    }
  },
  "esiTrueStatements": {
    "ui:widget": "checkboxes"
  },
  "fixedListOfRelatedHashes": {
    "items": [
      {
        "ui:widget": "textarea"
      },
      {
        "ui:widget": "select"
      }
    ],
    "additionalItems": {
      "ui:widget": "updown"
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
  "fixedNoToolbar": {
    "ui:options": {
      "addable": false,
      "orderable": false,
      "removable": false
    }
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
  }
}
