export default {
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
    }
  },
  "secret": {
    "ui:widget": "hidden"
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
  "worldlawClaimHash": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "integerRange": {
    "ui:widget": "range"
  },
  "integerRangeSteps": {
    "ui:widget": "range"
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
  "tasks": {
    "items": {
      "details": {
        "ui:widget": "textarea"
      }
    }
  }
}
