export default {
  "title": "Bluefin Claim Manager",
  "description": "This form is to be used only by lawyers and legal agents representing Swarmers clients and Worldlaw claims.",


  "definitions": {


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


    "Color": {
      "title": "Choose a color to create a mnemonic",
      "type": "string",


      "anyOf": [


        {
          "type": "string",
          "enum": [
            "#ff0000"
          ],
          "title": "Red"
        },


        {
          "type": "string",
          "enum": [
            "#00ff00"
          ],
          "title": "Green"
        },


        {
          "type": "string",
          "enum": [
            "#0000ff"
          ],
          "title": "Blue"
        },


        {
          "type": "string",
          "enum": [
            "#4b0082"
          ],
          "title": "Indigo"
        },


        {
          "type": "string",
          "enum": [
            "#ffff00"
          ],
          "title": "Yellow"
        },


        {
          "type": "string",
          "enum": [
            "#ff7f00"
          ],
          "title": "Orange"
        },


        {
          "type": "string",
          "enum": [
            "#9400d3"
          ],
          "title": "Violet"
        },


        {
          "type": "string",
          "enum": [
            "#000000"
          ],
          "title": "Black"
        }


      ]


    },


    "coreTestimony": {
      "title": "Claimant Statements",
      "type": "object",


      "properties": {
        "The client is a victim of a legal wrong.": {
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
        "The client is a victim of a legal wrong."
      ],


      "dependencies": {


        "The client is a victim of a legal wrong.": {
          "oneOf": [


            {
              "properties": {


                "The client is a victim of a legal wrong.": {


                  "enum": [
                    "No"
                  ]


                }
              }
            },


            {
              "properties": {


                "The client is a victim of a legal wrong.": {
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


                "The client is a victim of a legal wrong.": {
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
    },


    "largeEnum": {
      "type": "string",


      "enum": [
        "On or about the first (1st) day of",
        "On or about the second (2nd) day of",
        "On or about the third (3rd) day of",
        "On or about the fourth (4th) day of",
        "On or about the fifth (5th) day of",
        "On or about the sixth (6th) day of",
        "On or about the seventh (7th) day of",
        "On or about the eigth (8th) day of",
        "On or about the ninth (9th) day of",
        "On or about the tenth (10th) day of",
        "On or about the eleventh (11th) day of",
        "On or about the twelfth (12th) day of",
        "On or about the thirteenth (13th) day of",
        "On or about the fourteenth (14th) day of",
        "On or about the fifteenth (15th) day of",
        "On or about the sixteenth (16th) day of",
        "On or about the seventeenth (17th) day of",
        "On or about the eighteenth (18th) day of",
        "On or about the nineteenth (19th) day of",
        "On or about the twentieth (20th) day of",
        "On or about the twenty-first (21st) day of",
        "On or about the twenty-second (22nd) day of",
        "On or about the twenty-third (23rd) day of",
        "On or about the twenty-fourth (24th) day of",
        "On or about the twenty-fifth (25th) day of",
        "On or about the twenty-sixth (26th) day of",
        "On or about the twenty-seventh (27th) day of",
        "On or about the twenty-eigth (28th) day of",
        "On or about the twenty-ninth (29th) day of",
        "On or about the thirtieth (30th) day of",
        "On or about the thirty-first (31st) day of",
        "I am unsure of the actual date, but I am sure it happened in the month selected below.",
        "I am unsure of the actual date, but I am sure it happened around the month selected below.",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        "I am unsure of the actual month, but I am sure it happened in the year selected below.",
        "LegalElementOption #0",
        "LegalElementOption #1",
        "LegalElementOption #2",
        "LegalElementOption #3",
        "LegalElementOption #4",
        "LegalElementOption #5",
        "LegalElementOption #6",
        "LegalElementOption #7",
        "LegalElementOption #8",
        "LegalElementOption #9",
        "LegalElementOption #10",
        "LegalElementOption #11",
        "LegalElementOption #12",
        "LegalElementOption #13",
        "LegalElementOption #14",
        "LegalElementOption #15",
        "LegalElementOption #16",
        "LegalElementOption #17",
        "LegalElementOption #18",
        "LegalElementOption #19",
        "LegalElementOption #20",
        "LegalElementOption #21",
        "LegalElementOption #22",
        "LegalElementOption #23",
        "LegalElementOption #24",
        "LegalElementOption #25",
        "LegalElementOption #26",
        "LegalElementOption #27",
        "LegalElementOption #28",
        "LegalElementOption #29",
        "LegalElementOption #30",
        "LegalElementOption #31",
        "LegalElementOption #32",
        "LegalElementOption #33",
        "LegalElementOption #34",
        "LegalElementOption #35",
        "LegalElementOption #36",
        "LegalElementOption #37",
        "LegalElementOption #38",
        "LegalElementOption #39",
        "LegalElementOption #40",
        "LegalElementOption #41",
        "LegalElementOption #42",
        "LegalElementOption #43",
        "LegalElementOption #44",
        "LegalElementOption #45",
        "LegalElementOption #46",
        "LegalElementOption #47",
        "LegalElementOption #48",
        "LegalElementOption #49",
        "LegalElementOption #50",
        "LegalElementOption #51",
        "LegalElementOption #52",
        "LegalElementOption #53",
        "LegalElementOption #54",
        "LegalElementOption #55",
        "LegalElementOption #56",
        "LegalElementOption #57",
        "LegalElementOption #58",
        "LegalElementOption #59",
        "LegalElementOption #60",
        "LegalElementOption #61",
        "LegalElementOption #62",
        "LegalElementOption #63",
        "LegalElementOption #64",
        "LegalElementOption #65",
        "LegalElementOption #66",
        "LegalElementOption #67",
        "LegalElementOption #68",
        "LegalElementOption #69",
        "LegalElementOption #70",
        "LegalElementOption #71",
        "LegalElementOption #72",
        "LegalElementOption #73",
        "LegalElementOption #74",
        "LegalElementOption #75",
        "LegalElementOption #76",
        "LegalElementOption #77",
        "LegalElementOption #78",
        "LegalElementOption #79",
        "LegalElementOption #80",
        "LegalElementOption #81",
        "LegalElementOption #82",
        "LegalElementOption #83",
        "LegalElementOption #84",
        "LegalElementOption #85",
        "LegalElementOption #86",
        "LegalElementOption #87",
        "LegalElementOption #88",
        "LegalElementOption #89",
        "LegalElementOption #90",
        "LegalElementOption #91",
        "LegalElementOption #92",
        "LegalElementOption #93",
        "LegalElementOption #94",
        "LegalElementOption #95",
        "LegalElementOption #96",
        "LegalElementOption #97",
        "the above statements are true and correct",
        "0x09999999999999999"
      ]


    },


    "Electronically_Stored_Evidence": {


      "type": "object",


      "properties": {


        "esi_hash": {
          "type": "string",
          "default": "0x010101010101010101010101010"
        }


      }


    }
  },


  "type": "object",


  "required": [
    "currentColor",
    "seasonOption",
    "transpoOption",
    "pass1",
    "pass2",
    "4-digit_passcode"
  ],


  "properties": {


    "claimant_identity": {
      "title": "Client's public Swarmers identity",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "agent_identity": {
      "title": "Agent's Public Bluefin Identity",
      "description": "These fields must not be left empty. If this is the first time using the Worldlaw Bluefin portal place NA in the fields until you received your Bluefin identification hash.",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "public_identityHash": {
      "type": "string",
      "title": "Agent's Secondary Public Identity Hash",
      "description": "To create a proper Bluefin identity for use in the Worldlaw system it is reccomended to first create an additional identity that can be used as a secondary identity verification process. Uport, Blockstack and 3box are examples that you can  use.",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "currentColor": {
      "$ref": "#/definitions/Color",
      "title": "Select a color to build a Bluefin security mnemomic."
    },


    "seasonOption": {
      "title": "Select a season to be added to your mnemonic.",
      "type": "string",


      "enum": [
        "winter",
        "spring",
        "summer",
        "fall"
      ],


      "enumNames": [
        "Winter",
        "Spring",
        "Summer",
        "Fall"
      ]


    },


    "transpoOption": {
      "title": "Select a mode to be added to your mnemonic.",
      "type": "string",


      "enum": [
        "car",
        "truck",
        "train",
        "airplane",
        "boat",
        "bicycle"
      ],


      "enumNames": [
        "Car",
        "Truck",
        "Train",
        "Airplane",
        "Boat",
        "Bicycle"
      ]


    },


    "4-digit_passcode": {
      "type": "integer",
      "title": "Enter a memorable four digit number to be added to your mnemonic.",
      "minimum": 1000,
      "maximum": 9999
    },




    "stringFormats": {


      "type": "object",


      "title": "Client Contact Information and URL",


      "properties": {


        "email": {
      "title": "Claimant Email",
      "description": "Enter an email that can be used to verify claim data.",
          "type": "string",
          "format": "email"
        },


        "uri": {
      "title": "Claimant Website",
      "description": "Enter the website that can be used to help analyze the E.S.I. evidence and claim testimony.",
          "type": "string",
          "format": "uri"
        }


      }
    },


    "contactTelNumber": {
      "type": "string",
      "title": "Client contact telephone number.",
      "minLength": 10
    },


    "userClaimReference": {
      "type": "string",
      "title": "Claim Reference Code",
      "description": "This is an administrative description of the claim. Enter a file number or coded description for internal reference."
    },


    "ageOfUser": {
      "type": "integer",
      "title": "Age of the client."
    },


    "worldlawClaimHash": {
      "type": "string",
      "title": "Worldlaw Claim Hash",
      "description": "The Worldlaw claim hash file contains all of the related form data nad associated E.S.I. and testimonial statements that will be used to prove the claimants claim. (minimum of 16 characters).",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "mnemonicHash": {
      "type": "string",
      "title": "Swarmers Mnemonic Hash",
      "description": "Enter the client's private mnemonic hash to access the Worldlaw claim and E.S.I. evidence."
    },


    "activeClaim": {
      "type": "boolean",
      "title": "This claim is currently active in the Worldlaw system."
    },


    "worldlawServices": {
      "title": "The client has requested these Worldlaw services:",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 5
      }
    },


    "multipleChoicesList": {
      "type": "array",
      "title": "The specific tasks required to provide the client's services.",
      "uniqueItems": true,
      "maxItems": 4,
      "items": {
        "type": "string",
        "enum": [
          "MC01_Encrypt_Content",
          "MC02_Upload_Content",
          "MC03_Record_Content_to_Claim",
          "MC04_Record_Claim_to_Blockchain"
        ]
      }
    },


    "selectWidgetOptions": {


      "title": "Overall general assessment of the client's Worldlaw claim.",
      "type": "string",


      "enum": [
         "oneChoice",
         "twoChoice",
         "threeChoice",
         "fourChoice",
         "fiveChoice",
         "sixChoice",
         "sevenChoice",
         "eightChoice",
         "nineChoice",
         "tenChoice"
      ],


      "enumNames": [
         "The_One_Choice",
         "The_Two_Choice",
         "The_Three_Choice",
         "The_Four_Choice",
         "The_Five_Choice",
         "The_Six_Choice",
         "The_Seven Choice",
         "The_Eight_Choice",
         "The_Nine_Choice",
         "The_Ten_Choice"
      ]
    },


    "number": {
      "title": "The amount in Ether to bond the client's claim.",
      "description": "You may want to bond the claim which places Ether and/or Worldlaw system pawns to secure adjudication services and compensation to the other party in case your claim is unsuccessful. Until the claim is properly adjudicated the bonded funds are held in an escrow account and may not be removed by any party once an equal cooperative bond is also secured in the Worldlaw system. (minimum 1 Ether = approximately $200 U.S.D. as of June 2018).",
      "minimum": 1,
      "type": "number"
    },


    "integer": {
      "title": "Estimated client damages in $ U.S.D.",
      "minimum": 1,
      "type": "integer"
    },


    "dayOfMonth": {
      "title": "The damage described in the claim took place …",
      "$ref": "#/definitions/largeEnum"
    },


    "Month": {
      "title": "The damage described in the claim took place in the month …",
      "$ref": "#/definitions/largeEnum"
    },


    "numberEnumRadio": {
      "type": "number",
      "title": "The damage described in the claim took place in the year …",
      "enum": [
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
2024
      ]
    },


    "boolean": {


      "type": "object",


      "title": "The Client's Claims",


      "properties": {


        "default": {
          "type": "boolean",
          "title": "The client claims damages as victim of a crime or tort.",
          "description": "Victim's Statement"
        },


        "radio": {
          "type": "boolean",
          "title": "Actual Damages.",
          "description": "The client has suffererred actual damages."
        },


        "select": {
          "type": "boolean",
          "title": "General Damages Claimed",
          "description": "The client has suffered general damages."
        }


      }
    },


    "string": {


      "type": "object",


      "title": "Enter a full description of the events giving rise to the claim.",


      "properties": {


        "default": {
          "type": "string",
          "title": "Enter short decription here:"
        },


        "textarea": {
          "type": "string",
          "title": "Enter detailed decription here:"
        },


        "color": {
          "type": "string",
          "title": "Select color. This will be the passcode to access the claim.",
          "default": "#0008ff"
        }


      }
    },


    "conditional": {
      "title": "Basis of the Claim",
      "$ref": "#/definitions/coreTestimony"
    },


    "arrayOfConditionals": {


      "title": "Requisite damages requirements.",
      "type": "array",


      "items": {
        "$ref": "#/definitions/coreTestimony"
      }


    },


    "fixedarrayOfConditionals": {


      "title": "The client requests an injuction",
      "type": "array",


      "items": [
        {
          "title": "This is an emergency injuction claim.",
          "$ref": "#/definitions/coreTestimony"
        }
      ],


      "additionalItems": {
        "title": "Additional claimant or witness",
        "$ref": "#/definitions/coreTestimony"
      }


    },


    "fixedListOfRelatedHashes": {


      "type": "array",
      "title": "Worldlaw Stored Claimant E.S.I. Evidence",


      "items": [


        {
          "title": "Description of the E.S.I.",
          "description": "Describe the E.S.I. from an agent's perspective.",
          "type": "string",
          "default": "the ESI represents .."
        },


        {
          "title": "The Recorded E.S.I.",
          "description": "The E.S.I. was recorded at the direction of the client.",
          "type": "boolean"
        }
      ],


      "additionalItems": {
        "title": "Reliability Score of the E.S.I. if applicable",
      "description": "score on scale of 1-100, 100 being most reliable. If you want to enter additional reliability scores, select the + button.",
        "type": "number",
      "minimum": 1,
      "maximum": 100
      }


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


    "stringFoundationalStatement": {
      "type": "string",
      "title": "E.S.I Evidence Foundational Statement",
      "description": "Select the statement that best describes the information submitted here is true and establishes a foundation as admissible evidence. This means the E.S.I. must be preliminarily show signs of the authenticity and relevance for the admission as material evidence."
    },


    "LegalElement1": {
      "title": "First legal element to prove the claim",
      "description": "Select the statements that best articulate essential legal elements in proving your claim.  See jury instructions.",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement2": {
      "title": "Second legal element to prove the claim1",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement3": {
      "title": "Third legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement4": {
      "title": "Fourth legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement5": {
      "title": "Fifth legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement6": {
      "title": "Sixth legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement7": {
      "title": "Seventh legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement8": {
      "title": "Eighth legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement9": {
      "title": "Ninth legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement10": {
      "title": "Tenth legal element to prove the claim",
      "$ref": "#/definitions/largeEnum"
    },


    "tasks": {
      "type": "array",
      "title": "Two-Part E.S.I. Verification",


      "items": {


        "type": "object",


        "required": [
          "title"
        ],


        "properties": {


          "title": {
            "type": "string",
            "title": "Task to complete",
            "description": "You will receive return .json files"
          },


          "details": {
            "type": "string",
            "title": "Memorialize return record",
            "description": "Enter Return .json String Here"
          },


          "done": {
            "type": "boolean",
            "title": "This task is complete.",
            "default": false
          }


        }


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


    "Attestation": {
      "title": "Attestation",
      "description": "Select the statement that best describes the information submitted here is a true and complete record to establish a Worldlaw claim.",
      "$ref": "#/definitions/largeEnum"
    },


    "electronicSignature": {
      "title": "Submission",
      "description": "Enter your name or other identifying string of information as a signature representing an affirmative act to create a Worldlaw claim.",
      "$ref": "#/definitions/largeEnum"
    },


    "alternative": {
      "title": "Evidencer Claim Details Submission",


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
      "title": "Password to secure the Evidencer portal",
      "type": "string",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the Bluefin portal",
      "type": "string",
      "minLength": 4
    },


    "bidirectional": {


      "title": "Bidirectional association between an identity and claim hash.",
      "src": "https://onelaw.us",
      "description": "The following section allows for a user defined mnemonic to be associated to a preferred ID. This allows for easy access to claim files and ESI records to trusted third parties without sharing a user password.",


      "type": "object",


      "properties": {


        "esi_hash": {
      "title": "Preferred Electronic Identity Hash",
          "type": "string"
        },


        "unique_claimant_hash": {
      "title": "Worldlaw Claim Hash",
          "type": "string"
        },


        "user_mnemonic": {
      "title": "Swarmers User Mnemonic",
          "type": "string"
        }


      },


      "required": [
        "esi_hash"
      ],


      "dependencies": {


        "unique_claimant_hash": [
          "user_mnemonic"
        ],


        "user_mnemonic": [
          "unique_claimant_hash"
        ]


      }
    },


    "public_ethereumAddress": {
      "type": "string",
      "title": "Bluefin's Public Ethereum Address",
      "description": "Enter the public Ethereum address hash that you would like to associated with this form data.",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "disabled": {
      "type": "string",
      "title": "Master Bluefin Processing Account",
      "description": "This is the hash of the master Bluefin account to process the transaction.",
      "default": "0x000000000000000000000000"
    },


    "readonly": {
      "type": "string",
      "title": "Master Worldlaw Processing Account",
      "description": "This is the hash of the master Worldlaw account to process the transaction.",
      "default": "0x111111111111111111111111"
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
