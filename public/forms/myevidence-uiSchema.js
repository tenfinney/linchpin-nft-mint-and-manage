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
  "ageOfUser": {
    "ui:widget": "updown"
  },
  "userClaimReference": {
    "ui:widget": "textarea"
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
  "pass1": {
    "ui:widget": "password"
  },
  "pass2": {
    "ui:widget": "password"
  },
  "integerRange": {
    "ui:widget": "range"
  },
  "integerRangeSteps": {
    "ui:widget": "range"
  }
}
