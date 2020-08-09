export default {
  "title": "Worldlaw Tidbits Evidence Upload Form",
  "description": "Use this form to upload Electronically Stored Evidence  (E.S.I.) and assign testimony to each piece of E.S.I.",


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
        "January",
        "I am unsure of the actual month, but I am sure it happened in the year selected below.",
        "legalElementOption #0",
        "legalElementOption #1",
        "legalElementOption #2",
        "legalElementOption #3",
        "legalElementOption #4",
        "legalElementOption #5",
        "legalElementOption #6",
        "legalElementOption #7",
        "legalElementOption #8",
        "legalElementOption #9",
        "legalElementOption #10",
        "legalElementOption #11",
        "legalElementOption #12",
        "legalElementOption #13",
        "legalElementOption #14",
        "legalElementOption #15",
        "legalElementOption #16",
        "legalElementOption #17",
        "legalElementOption #18",
        "legalElementOption #19",
        "legalElementOption #20",
        "legalElementOption #21",
        "legalElementOption #22",
        "legalElementOption #23",
        "legalElementOption #24",
        "legalElementOption #25",
        "legalElementOption #26",
        "legalElementOption #27",
        "legalElementOption #28",
        "legalElementOption #29",
        "legalElementOption #30",
        "legalElementOption #31",
        "legalElementOption #32",
        "legalElementOption #33",
        "legalElementOption #34",
        "legalElementOption #35",
        "legalElementOption #36",
        "legalElementOption #37",
        "legalElementOption #38",
        "legalElementOption #39",
        "legalElementOption #40",
        "legalElementOption #41",
        "legalElementOption #42",
        "legalElementOption #43",
        "legalElementOption #44",
        "legalElementOption #45",
        "legalElementOption #46",
        "legalElementOption #47",
        "legalElementOption #48",
        "legalElementOption #49",
        "legalElementOption #50",
        "legalElementOption #51",
        "legalElementOption #52",
        "legalElementOption #53",
        "legalElementOption #54",
        "legalElementOption #55",
        "legalElementOption #56",
        "legalElementOption #57",
        "legalElementOption #58",
        "legalElementOption #59",
        "legalElementOption #60",
        "legalElementOption #61",
        "legalElementOption #62",
        "legalElementOption #63",
        "legalElementOption #64",
        "legalElementOption #65",
        "legalElementOption #66",
        "legalElementOption #67",
        "legalElementOption #68",
        "legalElementOption #69",
        "legalElementOption #70",
        "legalElementOption #71",
        "legalElementOption #72",
        "legalElementOption #73",
        "legalElementOption #74",
        "legalElementOption #75",
        "legalElementOption #76",
        "legalElementOption #77",
        "legalElementOption #78",
        "legalElementOption #79",
        "legalElementOption #80",
        "legalElementOption #81",
        "legalElementOption #82",
        "legalElementOption #83",
        "legalElementOption #84",
        "legalElementOption #85",
        "legalElementOption #86",
        "legalElementOption #87",
        "legalElementOption #88",
        "legalElementOption #89",
        "legalElementOption #90",
        "legalElementOption #91",
        "legalElementOption #92",
        "legalElementOption #93",
        "legalElementOption #94",
        "legalElementOption #95",
        "legalElementOption #96",
        "legalElementOption #97",
        "the above statements are true and correct",
        "0x09999999999999999"
      ]


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


    "mnemonic_identity": {
      "title": "Mnemonic Access and Reference Key",
      "description": "(this field is used to mask the content and is also used as a an access key for shared content)",
      "$ref": "#/definitions/mnemonicBuild"
    },


    "listOfESIStatements": {
      "type": "array",


      "title": "Testimonial statement related to the E.S.I.  Select one and remove the others.",


      "items": {
        "type": "string",
        "default": "storedEvidenceHash"
      }


    },


    "esiTrueStatements": {
      "type": "array",


      "title": "Relationship and source of ESI. Select one and remove the others.",


      "items": {
        "type": "string",


        "enum": [
          "I witnessed this.",
          "I heard about this.",
          "I was given this.",
          "I do not know the origin of this.",
          "This happended to me.",
          "This happened to a spouse or family member.",
          "I do not know what this is, but I am uploading it anyway.",
          "I know what this content represents, but decline to say here."
        ]
      },
      "uniqueItems": false
    },


    "fixedListOfRelatedHashes": {


      "type": "array",
      "title": "The Electronically Stored Information E.S.I.",


      "items": [


        {
          "title": "Description of the E.S.I.",
          "type": "string",
          "default": "the ESI represents .."
        },


        {
          "title": "I was the originator of the ESI",
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


    "number": {
      "title": "Amount in gWei Ether to attach to the E.S.I.",
      "type": "number"
    },


    "integer": {
      "title": "Estimated Damages in $ U.S.D. (must be greater than $0)",
      "type": "integer",
      "minimum": 1
    },


    "dayOfMonth": {
      "title": "The day of month this happened.",
      "$ref": "#/definitions/largeEnum"
    },


    "Month": {
      "title": "The month this happened.",
      "$ref": "#/definitions/largeEnum"
    },


    "numberEnumRadio": {
      "type": "number",
      "title": "Select the year this happened.",
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


    "file": {
      "type": "string",
      "title": "Upload a Single File of E.S.I.",
      "description": "This is the where you add your file to the system of nodes on Swarm and IPFS to secure your E.S.I. into a permanent state. Once the file is uploaded you will receive a return data string in a JSON format that includes the hashes of the location of the E.S.I. content files.",
      "format": "data-url"
    },


    "latitude": {
      "type": "number",
      "title": "Latitude location (optional)",
      "description": "Enter the latitude of the location of origin of the E.S.I. that will help verify its authenticity and relevance."
    },


    "longitude": {
      "type": "number",
      "title": "Longitude location (optional)",
      "description": "Enter the longitude of the location of origin of the E.S.I. that will help verify its authenticity and relevance."
    },


    "string": {
      "type": "string",
      "title": "Foundational statement of the E.S.I.",
      "description": "Select the statement that best describes the information submitted here is true and establishes a foundation as admissible evidence. This means the E.S.I. must be preliminarily show signs of the authenticity and relevance for the admission as material evidence."
    },


    "Attestation": {
      "title": "Attestation",
      "description": "Select the statement that best describes the information submitted here is true and establishes a foundation as admissible evidence.",
      "$ref": "#/definitions/largeEnum"
    },


    "electronicSignature": {
      "title": "Submission",
      "description": "Enter your name or other identifying string of information as a signature representing an affirmative act to establish the the E.S.I. as an self-authenticating for admissibility purposes.",
      "$ref": "#/definitions/largeEnum"
    },


    "fixedNoToolbar": {
      "title": "E.S.I. Administrative Reference Information",
      "type": "array",


      "items": [


        {
          "title": "A sequence or Bates number",
          "type": "number",
          "default": 20
        },


        {
          "title": "I have additional statements related to the E.S.I. (Select the + symbol to add more attestations.",
          "type": "boolean",
          "default": false
        }


      ],


      "additionalItems": {
        "title": "Supplemental Attestations",
      "description": "I attest and represent that the following statements are true and accurate under penalty of perjury if used in a legal court proceeding.",
        "type": "string",
        "default": "Add additional factual statements to support the authenticity of the E.S.I."
      }


    },


    "userClaimReference": {
      "type": "string",
      "title": "Reference or statement to assist in the development of a legal claim managed in the Worldlaw system.",
      "description": "This is the Worldlaw hash of the Swarmer's claim."
    },


    "pass1": {
      "title": "Password to secure the Tidbits E.S.I. portal",
      "type": "string",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the Tidbits E.S.I. portal",
      "type": "string",
      "minLength": 4
    },


    "age": {
      "title": "The age of the person submitting this form",
      "type": "number",
      "minimum": 14
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


    "alternative": {
      "title": "Attestation and Submission",
      "description": "Enter a date such as birthdate or other memorable date to help attach the identity to you.",


      "type": "object",


      "properties": {


        "alt-date": {
      "title": "Choose a date to attach to this E.S.I. form submission.",
      "description": "Do not enter the date of the crime or tort unless the occurrence and today's date are the same.",
          "type": "string",
          "format": "date"
        }

      }
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


        "radioEncrypt": {
          "type": "boolean",
          "title": "Encrypt this Form Data",
          "description": "If you do not select the YES button your data will NOT be encrypted and will be viewable on the nodes. Select this button to encrypt your data before it is sent to the nodes and blockchain."
        }


  }
}
