export default {
  "radioEncrypt": false,
  "4-digit_passcode": 1234,
  "activeClaim": false,
  "age": 18,
  "ageOfUser": 18,
  "Attestation": "the above statements are true and correct",
  "public_ethereumAddress": "0x1234567891011121314151617181920212223242",
  "worldlawClaimHash": "0x0444444444444444",
  "contactTelNumber": "999-999-9999",
  "currentColor": "#00ff00",
  "dayOfMonth": "I am unsure of the actual date, but I am sure it happened in the month selected below.",
  "disabled": "0x0123456789876543211",
  "readonly": "0x1234567891011121314151617181920212223241",
  "electronicSignature": "0x09999999999999999",
  "identityHash": "0x12345678910111213141516171819202",
  "integer": 10,
  "integerRange": 20,
  "integerRangeSteps": 10,
  "LegalElement1": "LegalElementOption #1",
  "LegalElement10": "LegalElementOption #10",
  "LegalElement2": "LegalElementOption #2",
  "LegalElement3": "LegalElementOption #3",
  "LegalElement4": "LegalElementOption #4",
  "LegalElement5": "LegalElementOption #5",
  "LegalElement6": "LegalElementOption #6",
  "LegalElement7": "LegalElementOption #7",
  "LegalElement8": "LegalElementOption #8",
  "LegalElement9": "LegalElementOption #9",
  "mnemonicHash": "2366663030303077696e746572303063617230303030301000",
  "Month": "I am unsure of the actual month, but I am sure it happened in the year selected below.",
  "number": 150,
  "numberEnum": 0,
  "pass1": "notthisoneone",
  "pass2": "notthisonetwo",
  "password": "2366663030303077696e746572303063617230303030301000",
  "otherPublicIdentity": "0x012345678987654321",
  "public_identityHash": "0x012345678912345678",
  "seasonOption": "winter",
  "selectWidgetOptions": "oneChoice",
  "stringFoundationalStatement": "Choose the claim descriptions in logical order",
  "title": "ESI Content Upload Tasks",
  "transpoOption": "train",
  "userClaimReference": "for example: John Doe - file 1234567 - Tortious interference with prospective economic advantage",
  "widgetOptions": "I am a selected color.",
  "claimant_identity": {
    "Public Identity": "0x123456789101112131415160",
    "County": "Claimant County",
    "State": "California"
  },
  "agent_identity": {
    "Public Identity": "0x123456789101112131415160",
    "County": "Agent County",
    "State": "California"
  },
  "bidirectional": {
    "esi_hash": "0x099999999999999999",
    "unique_claimant_hash": "0x123456789101112131415163",
    "user_mnemonic": "2366663030303077696e746572303063617230303030301000",
    "name": "IdentityTwoHash"
  },
  "core": {
    "esi_hash": "0x099999999999999999",
    "unique_claimant_hash": "0x123456789101112131415163",
    "worldlawPublicIdentityHash": "WorldlawUserIdentityHash",
    "user_mnemonic": "USERMNEMONIC"
  },
  "conditional": {
    "The client is a victim of a legal wrong.": "Yes: More than one time",
    "Do you want to file a legal claim?": false
  },
  "stringFormats": {
    "email": "blackboxlaw@blackboxlaw.com",
    "uri": "https://onelaw.us/"
  },
  "boolean": {
    "default": false,
    "radio": false,
    "select": false
  },
  "string": {
    "default": "Enter a short description of the events giving rise to the claim described above.",
    "textarea": "Enter a detailed recollection of the events giving rise to the claim described above.",
    "color": "#0008ff"
  },
  "listOfESIStatements": [
    "I am a victim.",
    "I represent a victim."
  ],
  "esiTrueStatements": [
    "I witnessed this",
    "I heard about this",
    "This happended to me",
    "This happened to a spouse or family member."
  ],
  "fixedListOfRelatedHashes": [
    "Description of related hashes",
    false,
77
  ],
  "fixedNoToolbar": [
    20,
    false,
    "additional ESI container one",
    "additional ESI container two"
  ],
  "worldlawServices": [
    "Evidence Management",
    "Claim Management",
    "Claim Resolution"
  ],
  "multipleChoicesList": [
    "MC01_Encrypt_Content",
    "MC02_Upload_Content",
    "MC03_Record_Content_to_Claim",
    "MC04_Record_Claim_to_Blockchain"
  ],
  "arrayOfConditionals": [
    {
      "The client is a victim of a legal wrong.": "Yes: More than one time",
      "About how many times were you wronged?": 1,
      "Do you want to file a legal claim?": false
    },
    {
      "The client is a victim of a legal wrong.": "Yes: More than one time",
      "Do you want to file a claim?": false,
      "Do you want to file a legal claim?": false
    }
  ],
  "fixedArrayOfConditionals": [
    {
      "The client is a victim of a legal wrong.": "Yes: More than one time",
      "Do you want to file a legal claim?": false
    },
    {
      "The client is a victim of a legal wrong..": "Yes: More than one time",
      "About how many times were you wronged?": 2,
      "Do you want to file a legal claim?": false
    },
    {
      "The client is a victim of a legal wrong.": "Yes: More than one time",
      "Do you want to file a claim?": false,
      "Do you want to file a legal claim?": false
    }
  ],
  "nestedList": [
    [
      "PartOneNestedList",
      "PartTwoNestedList"
    ],
    [
      "SubPartNestedList"
    ]
  ],
  "tasks": [
    {
      "title": "Upload Content to Swarm/IPFS",
      "details": "ESI must be saved in a system of node connected computers to ensure accuracy and availablity.",
      "done": false
    },
    {
      "title": "Verify ESI Content Files and Testimony",
      "details": "Paste your return .json file that includes the ESI content hashes here.",
      "done": false
    }
  ]
}
