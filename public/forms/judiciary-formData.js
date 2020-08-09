export default {
  "radioEncrypt": false,
  "activeClaim": false,
  "age": 18,
  "ageOfUser": 18,
  "ageOfUser": 18,
  "Attestation": "the above statements are true and correct",
  "contactTelNumber": "999-999-9999",
  "dayOfMonth": "I am unsure of the actual date, but I am sure it happened in the month selected below.",
  "electronicSignature": "0x09999999999999999",
  "identityHash": "0x12345678910111213141516171819202",
  "public_ethereumAddress": "0x1234567891011121314151617181920212223242",
  "worldlawClaimHash": "0x0444444444444444",
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
  "mnemonicHash": "2366663030303077696e746572303063617230303030301000",
  "Month": "I am unsure of the actual month, but I am sure it happened in the year selected below.",
  "number": 150,
  "numberEnum": 0,
  "pass1": "notthisoneone",
  "pass2": "notthisonetwo",
  "password": "2366663030303077696e746572303063617230303030301000",
  "otherPublicIdentity": "0x012345678987654321",
  "public_identityHash": "0x012345678912345678",
  "selectWidgetOptions": "oneChoice",
  "stringJudiciaryInstructions": "Enter the agreed upon jury instructions here.",
  "title": "To prove this claim the claimant must prove by a preponderance of the evidence …..",
  "userClaimReference": "for example: John Doe - file 1234567 - Tortious interference with prospective economic advantage",
  "userClaimReference": "for example: John Doe - file 1234567 - Tortious interference with prospective economic advantage",
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
    "textarea": "Enter a detailed analysis of the legal issues that must be addressed and proved to adjudicate the claim.",
    "color": "#0008ff"
  },
  "core": {
    "esi_hash": "0x099999999999999999",
    "unique_claimant_hash": "0x123456789101112131415163",
    "worldlawPublicIdentityHash": "WorldlawUserIdentityHash",
    "user_mnemonic": "USERMNEMONIC"
  },
  "conditional": {
    "The claimant was a victim of a legal wrong.": "Yes: More than one time",
    "Is this a final judgment?": true
  },
  "worldlawServices": [
    "Preliminary Judiciary Services",
    "Intermediate Judiciary Services",
    "Final Adjudication Judiciary Services"
  ],
  "multipleChoicesList": [
    "MC01_Encrypt_Content",
    "MC02_Upload_Content",
    "MC03_Record_Content_to_Claim",
    "MC04_Record_Claim_to_Blockchain"
  ],
  "arrayOfConditionals": [
    {
      "The claimant was a victim of a legal wrong.": "Yes: More than one time",
      "Was this a single incident?": 1,
      "Is this a final judgment?": true
    },
    {
      "The claimant was a victim of a legal wrong.": "Yes: More than one time",
      "Do you want to file a claim?": false,
      "Is this a final judgment?": true
    }
  ],
  "fixedArrayOfConditionals": [
    {
      "The claimant was a victim of a legal wrong.": "Yes: More than one time",
      "Is this a final judgment?": true
    },
    {
      "The claimant was a victim of a legal wrong.": "Yes: More than one time",
      "How many instances of wrongful conduct?": 2,
      "Is this a final judgment?": true
    },
    {
      "The claimant was a victim of a legal wrong.": "Yes: More than one time",
      "Do you want to file a claim?": false,
      "Is this a final judgment?": true
    }
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
