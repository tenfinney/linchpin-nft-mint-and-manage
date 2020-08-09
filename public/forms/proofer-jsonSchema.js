export default {
  "title": "Worldlaw E.S.I. Claim Proofer and Verifier",
  "description": "This form is used to verify the claim content prior to Judiciary resolution. If the claimant shares their nmenomic passcode this form data will be made public upon its submission and will be accessible by third parties and court officers who possess the mnemonic passcode.",


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


    "Electronically_Stored_Evidence": {


      "type": "object",


      "properties": {


        "esi_hash": {
          "type": "string",
          "default": "0x010101010101010101010101010"
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


    }
  },


  "type": "object",


  "required": [
    "title",
    "identityHash"
  ],


  "properties": {


    "otherPublicIdentity": {
      "type": "string",
      "title": "Claimant's Non-Worldlaw Public Identity Hash",
      "description": "Uport, Blockstack or 3box public identity hash (minimum 16 characters)",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "claimant_identity": {
      "title": "Claimant's Public Swarmers Identity",
      "description": "These fields must not be left empty. If no present representation place NA in the fields.",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "agent_identity": {
      "title": "Agent's Public Bluefin Identity",
      "description": "These fields must not be left empty. If no present representation place NA in the fields.",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "userClaimReference": {
      "type": "string",
      "title": "Reference statement describing the  claim and claimant.",
      "description": "This is the Worldlaw hash of the Swarmer's claim."
    },


    "activeClaim": {
      "type": "boolean",
      "title": "This claim has a service agreement with a Worldlaw Bluefin."
    },


    "worldlawClaimHash": {
      "type": "string",
      "title": "Worldlaw Claim Hash",
      "description": "The Worldlaw claim hash file contains all of the related form data nad associated E.S.I. and testimonial statements that will be used to prove the claimants claim. (minimum of 16 characters).",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "evidencerHash": {
      "type": "string",
      "title": "Enter the Evidencer Hash",
      "description": "The Evidencer file contains an array of the E.S.I. that will be used to prove the claimants claim. (minimum of 16 characters)",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "contactTelNumber": {
      "type": "string",
      "title": "Claimant (or Agent) Contact Telephone Number",
      "description": "Enter the telephone number of the responsible party managing the claim.",
      "minLength": 10
    },


    "password": {
      "type": "string",
      "title": "Swarmers Mnemonic Passcode.",
      "description": "This is required to access Worldlaw claim E.S.I. content files (must be 50 bytes). The mnemonic phrase was created by the claimant when they submitted theirs original Swarmers identity form submission.",
      "minLength": 50
    },


    "worldlawServices": {
      "title": "The Swarmers/Bluefin client has requested these Worldlaw services:",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 5
      }
    },


    "multipleChoicesList": {
      "type": "array",
      "title": "Select the Proofer services being rendered.",
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


    "title": {
      "type": "string",
      "title": "General Description of Proofer Service Agreement"
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


    "string": {
      "type": "string",
      "title": "Swarmers and Bluefin Foundational Statements",
      "description": "Proofer verification that the statements are in close association."
    },


    "listOfESIStatements": {
      "type": "array",


      "title": "Claimant's E.S.I. Testimonial Statements",


      "items": {
        "type": "string",
        "default": "storedEvidenceHash"
      }


    },


    "esiTrueStatements": {
      "type": "array",


      "title": "Claimant's Claims",


      "items": {
        "type": "string",


        "enum": [
          "The claimant claims to be a witness",
          "The claimant claims to have heard this",
          "The claimant claims to be a victim of a harmful physical act",
          "The claimant claims to be a family member of a victim."
        ]
      },
      "uniqueItems": false
    },


    "fixedListOfRelatedHashes": {


      "type": "array",
      "title": "Worldlaw Stored Claimant E.S.I. Evidence",


      "items": [


        {
          "title": "Description of the E.S.I.",
          "description": "Describe the E.S.I. from a general non-legal advice rendering perspective. Proofer's subjective opinion.",
          "type": "string",
          "default": "the ESI represents .."
        },


        {
          "title": "The Recorded E.S.I.",
          "description": "The E.S.I. appears to have been recorded contemporaneously at the time of the event/incident giving rise to the claim.",
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


    "latitude": {
      "type": "number",
      "title": "Latitude location",
      "description": "Enter the ACTUAL latitude of the location of origin of the E.S.I. verified by Proofer."
    },


    "longitude": {
      "type": "number",
      "title": "Longitude location",
      "description": "Enter the ACTUAL longitude of the location of origin of the E.S.I. verified by Proofer."
    },


    "minItemsList": {
      "type": "array",
      "title": "Relevant E.S.I.",
      "description": "Add as many hashes as necessary to complete the Proofer claim analysis by selecting the + sysmbol to add more E.S.I. hashes.",
      "minItems": 2,
      "items": {
        "$ref": "#/definitions/Electronically_Stored_Evidence"
      }
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


    "number": {
      "title": "The amount in Ether the claimant bonded to the claim.",
      "description": "The Proofer must check the Ethereum chain record to verify there is a bonded amount in the Worldlaw claim transaction held in trust for the benefit of the Swarmer claimant. The bonded Ether amount shown in the record must be entered here.",
      "minimum": 1,
      "type": "number"
    },


    "integer": {
      "title": "Proofer estimated reasonable damages in $ U.S.D. (must be greater than $0)",
          "minimum": 1,
      "type": "integer"
    },


    "dayOfMonth": {
      "title": "Enter the day of the month that corresponds to the Actual Date of the legally material event.",
      "$ref": "#/definitions/largeEnum"
    },


    "Month": {
      "title": "The month the legally significant event happened.",
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


    "fixedNoToolbar": {
      "title": "Worldlaw Proofer Adminstration and Verification",
          "description": "The followinf fields are used as administative and verification purposes:",
      "type": "array",


      "items": [


        {
          "title": "A sequence number for sorting Proofer claim files.",
          "description": "Use this field to enter a sequential number you want to use sort your Proofer files.",
          "type": "number",
          "minimum": 1,
          "default": 20
        },


        {
          "title": "This E.S.I. content supports a CURRENT claim being adjudicated in the Worldlaw Judiciary system.",
          "type": "boolean",
          "default": false
        }


      ],


      "additionalItems": {
        "title": "A Proofer attestation to veracity of the evidence represented in the Tidbits and Evidencer form data.",
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
      "description": "Enter your name or other identifying string of information as a signature representing an affirmative act to verify the veracity of a Worldlaw claim.",
      "$ref": "#/definitions/largeEnum"
    },


        "color": {
          "type": "string",
          "title": "Select a Passcode Color.",
          "description": "The hexadecimal code assigned to the color will be used as your unique passcode to access the claim data.",
          "default": "#0008ff"
    },


    "pass1": {
      "title": "Password to secure the Proofer portal",
      "type": "string",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the Proofer portal",
      "type": "string",
      "minLength": 4
    },


    "age": {
      "title": "The age of the person submitting this form",
      "type": "number",
      "minimum": 14
    },


    "alternative": {
      "title": "Claim Date Stamping by Proofer",
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
      "title": "Proofer's Public Ethereum Address",
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
