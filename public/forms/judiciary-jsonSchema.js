export default {
  "title": "Judiciary Claim Adjudication and Resolution",
  "description": "Use this form to execute a claim for dispute resolution",


  "definitions": {


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


    "coreTestimony": {
      "title": "The Adjudication",


      "type": "object",


      "properties": {
        "The claimant was a victim of a legal wrong.": {
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
        "The claimant was a victim of a legal wrong."
      ],


      "dependencies": {


        "The claimant was a victim of a legal wrong.": {
          "oneOf": [


            {
              "properties": {


                "The claimant was a victim of a legal wrong.": {


                  "enum": [
                    "No"
                  ]


                }
              }
            },


            {
              "properties": {


                "The claimant was a victim of a legal wrong.": {
                  "enum": [
                    "Yes: At least one time"
                  ]
                },


                "How many times was the claimant wronged?": {
                  "type": "number"
                }


              },


              "required": [
                "How many times was the claimant wronged?"
              ]
            },


            {
              "properties": {


                "The claimant was a victim of a legal wrong.": {
                  "enum": [
                    "Yes: More than one time"
                  ]
                },


                "Is this a final judgment?": {
                  "type": "boolean"
                }
              },


              "required": [
                "Is this a final judgment?"
              ]
            }
          ]


        }
      }
    }
  },


  "type": "object",


  "required": [
    "identityHash",
    "mnemonicHash",
    "contactTelNumber",
    "title"
  ],


  "properties": {


    "public_identityHash": {
      "title": "Your Public Identity Hash",
      "description": "If you have a custom identity you would like to attached to string enter it here.",
      "type": "string",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "otherPublicIdentity": {
      "type": "string",
      "title": "Other Public Identity Hash",
      "description": "Uport, Blockstack or 3box public identity hash (minimum 16 characters)",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "activeClaim": {
      "type": "boolean",
      "title": "This is Worldlaw claim ACTIVE and waiting for resolution."
    },


    "worldlawServices": {
      "title": "Worldlaw Judiciary Services",
      "description": "I am participating in the Worldlaw Judiciary by providing the following services. Add additional service by selecting the + sign. Delete any that do not apply.",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 5
      }
    },


    "multipleChoicesList": {
      "type": "array",
      "title": "Required Worldlaw Portals for Claim Resolution",
      "description": "Select the Worldlaw portals that are necessary to adjudicate and successfully resolve the Swarmers claim. The most common Worldlaw portals are listed below.  Select all that apply.",
      "uniqueItems": true,
      "maxItems": 11,
      "items": {
        "type": "string",
        "enum": [
          "Swarmers Identity",
          "Tidbits E.S.I. Upload Center",
          "Worldlaw Claim Manager",
          "MyEvidence E.S.I. Manager",
          "Evidencer E.S.I. and Claim Preparer",
          "Bluefin Lawyer and Agent Manager",
          "Proofer Claim Verifier",
          "Angelics Legal Fund",
          "Voteable Claim Resolution Queue",
          "Judiciary Claim Adjudication and Resolution",
          "BlackBoxLaw Security Checkpoint Channels",
          "MC01_Encrypt_Content",
          "MC02_Upload_Content",
          "MC03_Record_Content_to_Claim",
          "MC04_Record_Claim_to_Blockchain"
        ]
      }
    },


    "identityHash": {
      "type": "string",
      "title": "Swarmers Claimant Identity Hash",
      "description": "This is the Worldlaw issued Swarmers public identity."
    },


    "userClaimReference": {
      "type": "string",
      "title": "Worldlaw Claim Reference String",
      "description": "This is the string that was originally used when submitting the Worllawclaim."
    },


    "worldlawClaimHash": {
      "type": "string",
      "title": "Worldlaw Claim Hash",
      "description": "The Worldlaw claim hash file contains all of the related form data nad associated E.S.I. and testimonial statements that will be used to prove the claimants claim. (minimum of 16 characters).",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "password": {
      "type": "string",
      "title": "Swarmers Mnemonic Passcode.",
      "description": "This is required to access Worldlaw claim E.S.I. content files (must be 50 bytes). The mnemonic phrase was created by the claimant when they submitted theirs original Swarmers identity form submission.",
      "minLength": 50
    },


    "stringFormats": {


      "type": "object",


      "title": "Supplemental Claim Information",
      "description": "The following information can be used to help resolve and adjudicate the claim.",


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
      "title": "Contact Telephone Number",
      "description": "This telephone number will be used to verify the resolution is verified through a second source.",
      "minLength": 10
    },


    "native": {
      "title": "Claim Closing Date",
      "description": "Enter the date that this claim is scheduled to be closed.  See the Voteable portal for details.",


      "type": "object",


      "properties": {


        "date": {
      "title": "Actual Closing Date",
          "type": "string",
          "format": "date"
        }


      }
    },


    "number": {
      "title": "Bonded Claim Amount in Ether",
      "description": "Before rendering any decision the Judiciary MUST check the Ethereum chain record to verify there is a bonded amount in the Worldlaw claim transaction held in trust for the benefit of the Swarmers claimant. The bonded Ether amount shown in the record must be entered here.",
      "minimum": 1,
      "type": "number"
    },


    "string": {


      "type": "object",


      "title": "Factual Background of the Claim",


      "properties": {


        "default": {
          "type": "string",
          "title": "Enter the core facts giving rise to the claim."
        },


        "textarea": {
          "type": "string",
          "title": "Enter the legal issues required to adjudicate the claim."
        },


        "color": {
          "type": "string",
          "title": "Enter the Claim Passcode Color",
          "description": "Select the color that was sumbitted in the original Worldlaw claim submission. This number must be entered in the hexadecimal conversion of the color including the hash # symbol. For example Hex Red is #ff0000 which is further translated in hexadecimal as 23464630303030. If you are unsure about how this works contact blackboxlaw@blackboxlaw.com.",
          "default": "#0008ff"
        }


      }
    },


    "stringJudiciaryInstructions": {
      "type": "string",
      "title": "Judiciary Instructions",
      "description": "Describe the approved Judiciary instructions to be used with this claim. Be precise and note the jurisdiction. This information was provided in the Worldlaw Voteable portal chen the claim becaime public in the Worldlaw claim system."
    },


    "LegalElement1": {
      "title": "Is the first legal element met?",
      "description": "Select the statements that best articulate essential legal elements in proving your claim.  See jury instructions.",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement2": {
      "title": "Is the second legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement3": {
      "title": "Is the third legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement4": {
      "title": "Is the fourth legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement5": {
      "title": "Is the fifth legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement6": {
      "title": "Is the sixth legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement7": {
      "title": "Is the seventh legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement8": {
      "title": "Is the eigth legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement9": {
      "title": "Is the ninth legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement10": {
      "title": "Is the tenth legal element met?",
      "$ref": "#/definitions/largeEnum"
    },


    "conditional": {
      "title": "Conditional Claim Resolution",
      "$ref": "#/definitions/coreTestimony"
    },


    "arrayOfConditionals": {


      "title": "Multi-layered Conditional Claim Resolution",
      "type": "array",


      "items": {
        "$ref": "#/definitions/coreTestimony"
      }


    },


    "fixedarrayOfConditionals": {


      "title": "Fixed Array Claim Resolution",
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


    "boolean": {


      "type": "object",


      "title": "Intermediate Claim Adjudication",


      "properties": {


        "default": {
          "type": "boolean",
          "title": "The claim was a victim of a legal wrong.",
          "description": "The Ruling on Claimant's Main Claim"
        },


        "radio": {
          "type": "boolean",
          "title": "The claimant suffered compensatory SPECIAL damages such as economic loss.",
          "description": "Ruling on Special Damages"
        },


        "select": {
          "type": "boolean",
          "title": "The claimant suffered compensatory GENERAL damages such as suffer and lost opportunity.",
          "description": "Ruling on General Damages"
        }


      }
    },


    "selectWidgetOptions": {


      "title": "Final Adjudication and Ruling",
      "description": "Select the ruling that best describes your decision.",
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


    "dayOfMonth": {
      "title": "Enter the day of the month that corresponds to the proved Actual Date of the legally material event.",
      "$ref": "#/definitions/largeEnum"
    },


    "Month": {
      "title": "The proved month the legally significant event happened.",
      "$ref": "#/definitions/largeEnum"
    },


    "numberEnumRadio": {
      "type": "number",
      "title": "Select the year the legally significant event happened.",
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


    "title": {
      "type": "string",
      "title": "Claim Resolution Objective",
      "description": "Enter the exact claim objective phrase found in the Voteable protocol assigned to this claim."
    },


    "tasks": {
      "type": "array",
      "title": "Final Claim Resolution",


      "items": {


        "type": "object",


        "required": [
          "title"
        ],


        "properties": {


          "title": {
            "type": "string",
            "title": "Final adjudication task to complete",
            "description": "You will receive return .json files"
          },


          "details": {
            "type": "string",
            "title": "Memorialize a record of the claim resolution.",
            "description": "Enter Return .json String Here"
          },


          "done": {
            "type": "boolean",
            "title": "This final claim resolution task is complete.",
            "default": false
          }


        }


      }
    },


    "integer": {
      "title": "The Judiciary has determined a reasonable damages claim is proper for this amount in $ U.S.D. (if claim is unsuccessful enter 0)",
          "minimum": 0,
      "type": "integer"
    },


    "Attestation": {
      "title": "Attestation of Final Adjudication",
      "description": "Select the statement that best describes the information submitted here is a true and complete record to establish a Worldlaw claim.",
      "$ref": "#/definitions/largeEnum"
    },


    "electronicSignature": {
      "title": "Submission of Final Adjudication",
      "description": "Enter your name or other identifying string of information as a signature representing an affirmative act to verify the veracity of a Worldlaw claim.",
      "$ref": "#/definitions/largeEnum"
    },


    "pass1": {
      "title": "Password to secure the Judiciary portal",
      "type": "string",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the Judiciary portal",
      "type": "string",
      "minLength": 4
    },


    "age": {
      "title": "The age of the person submitting this form",
      "type": "number",
      "minimum": 14
    },


    "alternative": {
      "title": "Claim Resolution Date Stamp",
      "description": "These work on most platforms.",


      "type": "object",


      "properties": {


        "alt-date": {
      "title": "Enter today's date.",
          "type": "string",
          "format": "date"
        }


      }
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
