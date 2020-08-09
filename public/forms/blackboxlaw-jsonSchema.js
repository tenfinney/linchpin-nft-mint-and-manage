export default {
  "title": "Worldlaw BlackBoxLaw Security Portal",
  "description": "Use this form to pass checkpoint data and verify functionality",


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
        "the statements including in the form are correct",
        "0x1234567891011121314151617181920212223245",
        "0x1234567891011121314151617181920212223246",
        "0x1234567891011121314151617181920212223247",
        "0x1234567891011121314151617181920212223248"
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


    }


  },


  "type": "object",


  "required": [
    "identityHash",
    "mnemonicHash",
    "currentColor",
    "seasonOption",
    "transpoOption",
    "pass1",
    "pass2",
    "4-digit_passcode"
  ],


  "title": "BlackBoxLaw Security Protocols",


  "properties": {


    "public_identityHash": {
      "title": "Wardens Identity Hash",
      "description": "If you have a custom identity you would like to attached to string enter it here.",
      "type": "string",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "otherPublicIdentity": {
      "type": "string",
      "title": "Secondary Administration Hash",
      "description": "Uport, Blockstack or 3box public identity hash (minimum 16 characters)",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "activeClaim": {
      "type": "boolean",
      "title": "Check box to make a Worldlaw claim ACTIVE.",
      "description": "Check the current status of the claim. Submitting this form may change the claim status. If the choice here is the same as the current status, the status will not change."
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
      "title": "Swarmers Mnemonic Hash",
      "description": "This is the claimant's passcode to view the Worldlaw claim file and all of the E.S.I. evidence along with testimonies and attestations."
    },


    "evidencerHash": {
      "type": "string",
      "title": "Enter the Evidencer Hash",
      "description": "The Evidencer file contains an array of the E.S.I. that will be used to prove the claimants claim. (minimum of 16 characters)",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "currentColor": {
      "$ref": "#/definitions/Color",
      "title": "Select a color to build a BlackBoxLaw security mnemomic."
    },


    "seasonOption": {
      "title": "Select a season to be added to the mnemonic.",
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
      "title": "Select a mode to be added to the mnemonic.",
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
      "title": "Enter a memorable four digit number to be added to the mnemonic.",
      "description": "No leading zeros are allowed. Minimum is 1000. Range of 0001-0999 is invalid.",
      "minimum": 1000,
      "maximum": 9999
    },


    "mnemonicHash": {
      "type": "string",
      "title": "Blackboxlaw Mnemonic Hash",
      "description": "This is the claimant's passcode to view the Worldlaw claim file and all of the E.S.I. evidence along with testimonies and attestations. Must be exactly 50 bytes."
    },


    "stringFormats": {


      "type": "object",


      "title": "Multi-Factor Account Verification",


      "properties": {


        "email": {
          "type": "string",
      "title": "Verification Email",
      "description": "This email will be used as a second source to verify the owner of the claim.",
          "format": "email"
        },


        "uri": {
          "type": "string",
      "title": "Verification URL",
      "description": "This page number will be used to verify the claim.",
          "format": "uri"
        }


      }
    },


    "contactTelNumber": {
      "type": "string",
      "title": "Contact Telephone Number",
      "description": "This telephone number will be used to second-source verify the owner of the claim.",
      "minLength": 10
    },


    "string": {


      "type": "object",


      "title": "Factual Background of the Claim",


      "properties": {


        "default": {
          "type": "string",
          "title": "Security Submission Purpose",
          "description": "Enter the facts giving rise to this security submission."
        },


        "textarea": {
          "type": "string",
          "title": "Security Submission Objective",
          "description": "Enter the issues required to succesfully manage the security objective."
        },


        "color": {
          "type": "string",
          "title": "Enter the passcode the claimant selected with the original Worldlaw claim submission. ",
          "description": "Select the color that was sumbitted in the original Worldlaw claim submission. This number must be entered in the hexadecimal conversion of the color including the hash # symbol. For example Hex Red is #ff0000 which is further translated in hexadecimal as 23464630303030. If you are unsure about how this works contact blackboxlaw@blackboxlaw.com.",
          "default": "#0008ff"
        }


      }
    },


    "selectWidgetOptions": {


      "title": "Checkpoint Schema for Application Testing",
      "description": "Select the schema that best fits the security purpose of this form submission.",
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
      "title": "Bonded Ether Amount Verification",
      "description": "Enter the bonded amount verified in the on-chain transaction. Use Etherscan or other.",
      "minimum": 1,
      "type": "number"
    },


    "integer": {
      "title": "Claimant's original estimated damages.",
      "description": "Enter the amount that was claimed in the initial filing of the Worldlaw claim.",
          "minimum": 1,
      "type": "integer"
    },


    "ageOfUser": {
      "type": "integer",
      "title": "Age of the claimant.",
      "description": "Enter the age of the claimant a the time the Worldlaw claim was filed."
    },


    "alternative": {
      "title": "Date Stamp Verification",
      "description": "Enter the date that you would like to verify in the transaction.",


      "type": "object",


      "properties": {


        "alt-date": {
          "type": "string",
      "title": "Reference Date",
          "format": "date"
        }


      }
    },


    "Attestation": {
      "title": "Attestation of the Veracity of this Data",
      "description": "This field is used to manage critical components of the Worldlaw claim system.  Do not submit this form without carefully verifying each form element.  If you are unsure of an answer contact an authorized professional to help get the proper guidance.",
      "$ref": "#/definitions/largeEnum"
    },


    "primaryElectronicSignature": {
      "title": "Primary Signing Authority",
      "description": "Enter the primary public Ethereum account to execute the on-chain interactions.",
      "$ref": "#/definitions/largeEnum"
    },


    "secondaryElectronicSignature": {
      "title": "Secondary Signing Authority",
      "description": "Enter the secondary public Ethereum account to execute the on-chain interactions.",
      "$ref": "#/definitions/largeEnum"
    },


    "backupElectronicSignature": {
      "title": "Backup Signing Authority",
      "description": "Enter the backup public Ethereum account to execute the on-chain interactions.",
      "$ref": "#/definitions/largeEnum"
    },


    "pass1": {
      "title": "Password to secure the Judiciary portal",
      "type": "string",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the BlackBoxLaw portal",
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
      "maximum": 100,
      "multipleOf": 1
    },


        "radioEncrypt": {
          "type": "boolean",
          "title": "Encrypt this Form Data",
          "description": "If you do not select this button your data will NOT be encrypted and will be viewable on the nodes. Select this button to encrypt your data before it is sent to the nodes and blockchain."
        }


  }
}
