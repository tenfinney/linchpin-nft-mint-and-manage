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
  "ageOfUser": {
    "ui:widget": "updown"
  },
  "userSwarmersReference": {
    "ui:widget": "textarea"
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
    "color": {
      "ui:widget": "color"
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
  },
  "Attestation": {
    "ui:placeholder": "Choose one"
  },
  "electronicSignature": {
    "ui:placeholder": "Choose one"
  }
}
