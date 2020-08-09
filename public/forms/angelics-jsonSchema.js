export default {
  "title": "Worldlaw Angelics Legal Assistance",
  "description": "Use this form to purchase Worldlaw pawns to provide legal services to victims.",


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
        "0x09999999999999999"
      ]


    }
  },


  "type": "object",


  "required": [
    "identityHash",
    "mnemonicHash"
  ],


  "properties": {


    "public_identityHash": {
      "title": "Your Public Swarmers Identity Hash",
      "description": "If you have a custom identity you would like to attached to string enter it here.",
      "type": "string",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "otherPublicIdentity": {
      "type": "string",
      "title": "Claimant's Non-Worldlaw Public Identity Hash",
      "description": "Uport, Blockstack or 3box public identity hash (minimum 16 characters)",
      "minLength": 16,
      "pattern": "\\d+"
    },


    "worldlawServices": {
      "title": "I wish to support victims by contributing to these Worldlaw services:",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 5
      }
    },


    "activeClaim": {
      "type": "boolean",
      "title": "Please make my Angelics account active so I can spend my Worldlaw pawns on system services."
    },


    "multipleChoicesList": {
      "type": "array",
      "title": "Worldlaw Services Available to Legal Aid",
      "description": "The following services are used to help resolve and adjudicate Worldlaw claims. Your contributions will specifically be used to the services you select. Choose as many as you like.",
      "uniqueItems": true,
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


    "claimant_identity": {
      "title": "Claimant's Public Swarmers Identity",
      "description": "If you are contributing resources to the general legal fund enter GENERALFUND in these fields. The fields must not be left empty.",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "agent_identity": {
      "title": "Claimant's Agent's Public Bluefin Identity if available.",
      "description": "If you are contributing to a specific Swarmers Worldlaw claim and the claimant has an agent or lawyer enter the Bluefin identity of the agent. These fields must not be left empty; if no claimant has no present representation place NA in the fields.",
      "$ref": "#/definitions/worldlawIdentity"
    },


    "number": {
      "title": "Amount in Ether to contribute to the Worldlaw System or an individual claimant.",
      "description": "This amount in Ether will be held in trust under the ownership of the Worldlaw system and will only be released to claimants under the obligations set forth in it binding agreements found at onelaw.us (minimum 1 Ether = approximately $200 U.S.D. as of June 2018.",
      "minimum": 1,
      "type": "number"
    },


    "integer": {
      "title": "Legal damage claim range in U.S.D.",
      "description": "I am most interested in assisting victims with monetary claims of LESS than this amount in U.S.D. (must be greater than $ 10 U.S.D.)",
      "minimum": 10,
      "type": "integer"
    },


    "boolean": {


      "type": "object",


      "title": "Angelics Application Questionnaire",


      "properties": {


        "default": {
          "type": "boolean",
          "title": "Yes",
          "description": "I am a citizen of the United States of America"
        },


        "radio": {
          "type": "boolean",
          "title": "Yes",
          "description": "I am a citizen of another country, but not included on this list: https://www.treasury.gov/resource-center/sanctions/Programs/Pages/Programs.aspx"
        },


        "select": {
          "type": "boolean",
          "title": "Yes.",
          "description": "I do not know or am unwilling to disclose my origins but would like to contribute anonomously to the Worldlaw system to help victims."
        }


      }
    },


    "title": {
      "type": "string",
      "title": "Describe how your would like you contribution to be labelled."
    },


    "string": {
      "type": "string",
      "title": "Describe the claims you are interested in supporting.  ",
      "description": "For example; you can describe a cause of action like Tortious Interference in a Prospective Economic Advantage or simply stated as Cheating people out of their money. Or you can write, I want to help victims of Domestic Violence with assisting in their legal costs."
    },


    "LegalElement1": {
      "title": "Select something that is important to mention with this contribution.",
      "description": "Select the statements that best articulate essential legal elements in proving your claim.  See jury instructions.",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement2": {
      "title": "Select something else that is important and worth mentioning.",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement3": {
      "title": "Select a third thing that is important to note with this contribution.",
      "$ref": "#/definitions/largeEnum"
    },


    "LegalElement4": {
      "title": "Select a final thought that is important to mentioning with your contribution.",
      "$ref": "#/definitions/largeEnum"
    },


    "identityHash": {
      "type": "string",
      "title": "Particular Importance Worldlaw Claim Hash",
      "description": "The following Worldlaw claim hash has particular importance to me and I would like to to get special attention with my contribution."
    },


    "mnemonicHash": {
      "type": "string",
      "title": "Mnemonic Hash to View the Claim Content File",
      "description": "If the Worldlaw Swarmers claimant has issued a public mnemonic passcode to view the claim file, enter it here."
    },


    "tasks": {
      "type": "array",
      "title": "Two-Part Identity Verification (optional)",
      "description": "This step is not necessary unless your contribution has international tax implications. Please consult with a professional.",


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


    "file": {
      "title": "KYC/AML for Recordkeeping (Optional)",
      "description": "If you wish to participate in an offerings for an equity opportunity in Worldlaw you must request a verified identity by uploading a identity verification document.",
      "type": "string",
      "format": "data-url"
    },


    "stringFormats": {


      "type": "object",


      "title": "Supplemental Information attached to the Angelics account",


      "properties": {


        "email": {
      "title": "Email",
      "description": "Enter an email that can be used to verify data if necessary. (optional)",
          "type": "string",
          "format": "email"
        },


        "uri": {
      "title": "Website",
      "description": "Enter a website that can be used to help understand your business, trust or charity. (optional)",
          "type": "string",
          "format": "uri"
        }


      }
    },


    "contactTelNumber": {
      "type": "string",
      "title": "Contact Telephone (optional)",
      "minLength": 10
    },


    "Attestation": {
      "title": "Attestation",
      "description": "Select the statement that best describes the information submitted here is true and a complete record to establish an Angelics account in the Worldlaw system.",
      "$ref": "#/definitions/largeEnum"
    },


    "electronicSignature": {
      "title": "Submission",
      "description": "Enter your name or other identifying string of information as a signature representing an affirmative act to participate in the Worldlaw system as an Angelic contributor.",
      "$ref": "#/definitions/largeEnum"
    },


    "pass1": {
      "title": "Password to secure the Angelics portal",
      "type": "string",
      "minLength": 4
    },


    "pass2": {
      "title": "Repeat the password to secure the Angelics portal",
      "type": "string",
      "minLength": 4
    },


    "age": {
      "title": "The age of the person submitting this Angelics form",
      "type": "number",
      "minimum": 18
    },


    "alternative": {
      "title": "Contribution Activation Date",
      "description": "If you select a date before today your contribution will process immediately.",


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
