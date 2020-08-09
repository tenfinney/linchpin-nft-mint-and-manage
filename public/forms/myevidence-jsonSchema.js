export default {


  "title": "Worldlaw MyEvidence E.S.I. Content Manager",
  "description": "Use this form to manage your Worldlaw Tidbits E.S.I. Step 1 is to associate a Worldlaw Swarmers public identity hash to your E.S.I. Tidbits",


  "definitions": {


    "Electronically_Stored_Evidence": {


      "type": "object",


      "properties": {


        "esi_hash": {
          "type": "string",
          "default": "0x010101010101010101010101010"
        }


      }


    },


    "worldlawIdentity": {


      "type": "object",


      "properties": {


        "Public Identity": {
          "type": "string"
        },


        "County": {
          "type": "string"
        },


        "State": {
          "type": "string"
        }


      },


      "required": [
        "Public Identity",
        "County",
        "State"
      ]


    },


    "mnemonicBuild": {


      "type": "object",


      "properties": {


        "Mnemonic Hint": {
          "type": "string"
        },


        "children": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/mnemonicBuild"
          }
        }


      }
    },


    "coreTestimony": {
      "title": "Core Testimonial Statements",


      "type": "object",


      "properties": {
        "I am a victim of a legal wrong.": {
          "type": "string",


          "enum": [
            "No",
            "Yes: At least one time",
            "Yes: More than one time"
          ],


          "default": "No"
        }
      },


      "required": [
        "I am a victim of a legal wrong."
      ],


      "dependencies": {


        "I am a victim of a legal wrong.": {
          "oneOf": [


            {
              "properties": {


                "I am a victim of a legal wrong.": {


                  "enum": [
                    "No"
                  ]


                }
              }
            },


            {
              "properties": {


                "I am a victim of a legal wrong.": {
                  "enum": [
                    "Yes: At least one time"
                  ]
                },


                "About how many times were you wronged?": {
                  "type": "number"
                }


              },


              "required": [
                "How many times were you wronged?"
              ]
            },


            {
              "properties": {


                "I am a victim of a legal wrong.": {
                  "enum": [
                    "Yes: More than one time"
                  ]
                },


                "Do you want to file a legal claim?": {
                  "type": "boolean"
                }
              },


              "required": [
                "Do you want to file a legal claim?"
              ]
            }
          ]


        }
      }
    }


  },


  "type": "object",


  "properties": {


    "claimant_identity": {
      "title": "Claimant's Public Swarmers Identity",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "agent_identity": {
      "title": "Agent's Public Bluefin Identity",
      "description": "These fields must not be left empty. If no present representation place NA in the fields.",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "otherPublicIdentity": {
      "type": "string",
      "title": "Other Public Identity Hash",
      "description": "Uport, Blockstack or 3box public identity hash (minimum 16 characters)",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "worldlawClaimHash": {
      "type": "string",
      "title": "Worldlaw Claim Hash",
      "description": "The Worldlaw claim hash file contains all of the related form data nad associated E.S.I. and testimonial statements that will be used to prove the claimants claim. (minimum of 16 characters).",
      "minLength": 16,
      "pattern": "\\d+"
    },


        "fourDigitPasscode": {
      "title": "4-digit Swarmers Passcode",
          "type": "number",
      "minimum": 1000,
      "maximum": 9999
        },


    "userClaimReference": {
      "type": "string",
      "title": "Reference Code for Worldlaw Claim",
      "description": "Enter a short description of the claim's legal cause of action."
    },


    "conditional": {
      "title": "Basis of the Legal Claim",
      "$ref": "#/definitions/coreTestimony"
    },


    "arrayOfConditionals": {


      "title": "Array of Claim Instances",
      "description": "Enter all that apply to the claim.",
      "type": "array",


      "items": {
        "$ref": "#/definitions/coreTestimony"
      }


    },


    "fixedarrayOfConditionals": {


      "title": "Fixed Array of Claim Instances",
      "description": "Enter all that apply to the claim.",
      "type": "array",


      "items": [
        {
          "$ref": "#/definitions/coreTestimony"
        }
      ],


      "additionalItems": {
        "$ref": "#/definitions/coreTestimony"
      }


    },


    "listOfESIStatements": {
      "type": "array",


      "title": "Requisite elements to file a claim.",
      "description": "You must either be a victim or legally representing a victim to file a Worldlaw claim.  Select one option and delete the incorrect option.",


      "items": {
        "type": "string",
        "default": "storedEvidenceHash"
      }


    },


    "esiTrueStatements": {
      "type": "array",


      "title": "Relationship to the stored E.S.I.",
      "description": "Select all that are true regarding the capture and storing of the E.S.I. evidence. Delete all the choices that are not applicable or untrue.",


      "items": {
        "type": "string",


        "enum": [
          "I witnessed this",
          "I heard about this",
          "This happended to me",
          "This happened to a spouse or family member."
        ]
      },
      "uniqueItems": false
    },


    "minItemsList": {
      "type": "array",
      "title": "E.S.I. hashes from Worldlaw Tidbits portal",
      "description": "Add as many hashes as necessary to complete claim by selecting the + sysmbol to add more E.S.I. hashes.",
      "minItems": 2,


      "items": {
        "$ref": "#/definitions/Electronically_Stored_Evidence"
      }
    },


    "fixedListOfRelatedHashes": {


      "type": "array",
      "title": "A list of hashes for related ESI",


      "items": [


        {
          "title": "Description of the ESI",
      "description": "Describe in general terms the body of E.S.I. evidence attached to this claim.",
          "type": "string",
          "default": "the ESI represents .."
        },


        {
          "title": "I am the owner of the Worldlaw Tidbits E.S.I. account.",
          "type": "boolean"
        }
      ],


      "additionalItems": {
        "title": "Reliability Score of the E.S.I. if applicable",
      "description": "score on scale of 1-100, 100 being most reliable",
        "type": "number",
      "minimum": 1,
      "maximum": 100
      }

    },


    "defaultsAndMinItems": {


      "type": "array",
      "title": "Timing of E.S.I.",
      "minItems": 5,
      "default": [
        "contemporaneous",
        "post_event",
        "pre-trial",
        "general_circ",
        "unknown-origin"
      ],


      "items": {
        "type": "string",
        "default": "unidentified"
      }


    },


    "nestedList": {
      "type": "array",
      "title": "Top-level E.S.I.",
      "items": {
        "type": "array",
        "title": "Sub-level E.S.I.",
        "items": {
          "type": "string",
          "default": "describe the NestedInner ESI in detail"
        }
      }
    },


    "fixedNoToolbar": {
      "title": "E.S.I. Reference and Validation",
      "type": "array",


      "items": [


        {
          "title": "Enter a sequence number to be used for claim sorting.",
          "type": "number",
          "minimum": 1
        },


        {
          "title": "I have good reason to believe a claim is legal claim is warranted.",
          "type": "boolean",
          "default": false
        }


      ],


      "additionalItems": {
        "title": "Attestation to the accuracy of the E.S.I.",
        "type": "string",
        "default": "Electronic signature and affirmation statement"
      }


    },


    "alternative": {
      "title": "MyEvidence E.S.I. Submission",


      "type": "object",


      "properties": {


        "alt-date": {
      "title": "Enter today's date",
      "description": "Do not enter the date of the crime or tort unless the occurrence and today's date are the same.",
          "type": "string",
          "format": "date"
        }

      }
    },


    "pass1": {
      "title": "Password to secure MyEvidence portal",
      "type": "string",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the MyEvidence portal",
      "type": "string",
      "minLength": 4
    },


    "public_ethereumAddress": {
      "type": "string",
      "title": "Public Ethereum Address",
      "description": "Enter the public Ethereum address hash that you would like to associated with this form data.",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "integerRange": {
      "title": "Amount in gWei (Ether) to pay blockchain transaction costs",
      "description": "A higher number represents a faster transaction at a higher cost.  Under normal system load 20 giga-wei is enough Ether to process the transaction.",
      "type": "integer",
      "minimum": 10,
      "maximum": 100
    },


    "integerRangeSteps": {
      "title": "Amount in Finney (Ether) to pay Worldlaw service costs",
      "description": "The number of Finney must match the services selected in the Worldlaw services section.  1 Finney = 1/1000 of an Ether.  As of June 2018, 1 Ether = approximately $200 U.S.D. which makes 1 Finney approximately = to $0.20 U.S.D., 10 Finney approximately = to $2.00 U.S.D., and 100 Finney approximately = to $20.00 U.S.D.",
      "type": "integer",
      "minimum": 1,
      "maximum": 200,
      "multipleOf": 1
    },


        "radioEncrypt": {
          "type": "boolean",
          "title": "Encrypt this Form Data",
          "description": "If you do not select this button your data will NOT be encrypted and will be viewable on the nodes. Select this button to encrypt your data before it is sent to the nodes and blockchain."
        }




  }
}
