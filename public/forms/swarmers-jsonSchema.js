export default {
  "title": "Worldlaw Swarmers Identity Registration",
  "description": "Create a Swarmers identity by providing the following information: The first section creates a Simple Secret Mnemonic.",


  "definitions": {


    "Color": {
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


    "largeEnum": {


      "type": "string",


      "enum": [
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


  "required": [
    "currentColor",
    "seasonOption",
    "transpoOption",
    "pass1",
    "pass2",
    "4-digit_passcode"
  ],


  "properties": {


    "currentColor": {
      "$ref": "#/definitions/Color",
      "title": "Select a color to build your security mnemomic."
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


    "mnemonicHash": {
      "type": "string",
      "title": "Enter your mnemonic hash if you already have one."
    },


    "identityHash": {
      "type": "string",
      "title": "Enter your identity hash from Uport, Blockstack or 3box if you have one."
    },


    "public_ethereumAddress": {
      "type": "string",
      "title": "Public Ethereum Address",
      "description": "Enter the public Ethereum address hash that you would like to associated with this form data.",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "userSwarmersReference": {
      "type": "string",
      "title": "Enter a reference code for your Swarmers identity",
      "description": "Enter a short phrase that you can identity you as the owner of the identity file such as an address, or telephone number associated with you."
    },


    "latitude": {
      "type": "number",
      "title": "Latitude location (optional)",
      "description": "Enter the latitude of a location that will help you verify your identity."
    },


    "longitude": {
      "type": "number",
      "title": "Longitude location (optional)",
      "description": "Enter the longitude of a location that will help you verify your identity."
    },


        "color": {
          "type": "string",
          "title": "Select a Passcode Color.",
          "description": "The hexadecimal code assigned to the color will be used as your unique passcode to access the claim data.",
          "default": "#0008ff"
    },


    "pass1": {
      "type": "string",
      "title": "Enter a password to secure your profile and E.S.I. content.",
      "description": "This password will be used to access your Worldlaw portal.",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the Swarmers portal",
      "type": "string",
      "minLength": 4
    },


    "alternative": {
      "title": "Attestation and Submission",
      "description": "Enter a date such as birthdate or other memorable date to help attach the identity to you.",


      "type": "object",


      "properties": {


        "alt-date": {
      "title": "Choose a date to attach to your identity.",
          "type": "string",
          "format": "date"
        }


      }
    },


    "string": {
      "type": "string",
      "title": "Secondary identification to help prove identity",
      "description": "Enter your name or other identifying string of information."
    },


    "age": {
      "title": "The age of the person submitting this form",
      "type": "number",
      "minimum": 14
    },


    "Attestation": {
      "title": "Attestation",
      "description": "Select the statement that best describes the information submitted here is a true and complete record to establish a Worldlaw Swarmers identity.",
      "$ref": "#/definitions/largeEnum"
    },


    "electronicSignature": {
      "title": "Submission",
      "description": "Enter your name or other identifying string of information as a signature representing an affirmative act to establish a identity to be used in the Worldlaw system.",
      "$ref": "#/definitions/largeEnum"
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
