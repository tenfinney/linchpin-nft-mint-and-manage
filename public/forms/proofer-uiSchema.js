export default {
  "tasks": {
    "items": {
      "details": {
        "ui:widget": "textarea"
      }
    }
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
  "alternative": {
    "alt-datetime": {
      "ui:widget": "alt-datetime",
      "ui:options": {
        "yearsRange": [
          2000,
2024
        ]
      }
    },
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
  "listOfESIStatements": {
    "items": {
      "ui:emptyValue": ""
    }
  },
  "esiTrueStatements": {
    "ui:widget": "checkboxes"
  },
    "color": {
      "ui:widget": "color"
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
  "worldlawClaimHash": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "unorderable": {
    "ui:options": {
      "orderable": false
    }
  },
  "unremovable": {
    "ui:options": {
      "removable": false
    }
  },
  "noToolbar": {
    "ui:options": {
      "addable": false,
      "orderable": false,
      "removable": false
    }
  },
  "fixedNoToolbar": {
    "ui:options": {
      "addable": false,
      "orderable": false,
      "removable": false
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
  "radioEncrypt": {
    "ui:widget": "radio"
  },
  "pass1": {
    "ui:widget": "password"
  },
  "pass2": {
    "ui:widget": "password"
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
