export default {
  "bidirectional": {
    "unique_claimant_hash": {
      "ui:help": {
        "type": "p",
        "key": null,
        "ref": null,
        "props": {
          "children": [
            "\"Add your mnemonic hash here ",
            {
              "type": "code",
              "key": null,
              "ref": null,
              "props": {
                "children": "user_mnemonic"
              },
              "_owner": null
            },
            " because it will become required."
          ]
        },
        "_owner": null
      }
    },
    "user_mnemonic": {
      "ui:help": {
        "type": "p",
        "key": null,
        "ref": null,
        "props": {
          "children": [
            "Add your public ethereum hash here ",
            {
              "type": "code",
              "key": null,
              "ref": null,
              "props": {
                "children": "unique_claimant_hash"
              },
              "_owner": null
            },
            " because it will become required."
          ]
        },
        "_owner": null
      }
    }
  },
  "causeOfAction1": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction2": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction3": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction4": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction5": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction6": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction7": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction8": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction9": {
    "ui:placeholder": "Choose one"
  },
  "causeOfAction10": {
    "ui:placeholder": "Choose one"
  },
  "legalElement1": {
    "ui:placeholder": "Choose one"
  },
  "legalElement2": {
    "ui:placeholder": "Choose one"
  },
  "legalElement3": {
    "ui:placeholder": "Choose one"
  },
  "legalElement4": {
    "ui:placeholder": "Choose one"
  },
  "legalElement5": {
    "ui:placeholder": "Choose one"
  },
  "legalElement6": {
    "ui:placeholder": "Choose one"
  },
  "legalElement7": {
    "ui:placeholder": "Choose one"
  },
  "legalElement8": {
    "ui:placeholder": "Choose one"
  },
  "legalElement9": {
    "ui:placeholder": "Choose one"
  },
  "legalElement10": {
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
  "fixedNoToolbar": {
    "ui:options": {
      "addable": false,
      "orderable": false,
      "removable": false
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
  "secret": {
    "ui:widget": "hidden"
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
  "radioEncrypt": {
    "ui:widget": "radio"
  },
  "pass1": {
    "ui:widget": "password"
  },
  "pass2": {
    "ui:widget": "password"
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
