export default {
  "radioEncrypt": false,
  "activeClaim": false,
  "age": 18,
  "public_ethereumAddress": "0x1234567891011121314151617181920212223242",
  "worldlawClaimHash": "0x123456789101112131415164",
  "otherPublicIdentity": "0x1234567891011121",
  "Attestation": "the above statements are true and correct",
  "dayOfMonth": "I am unsure of the actual date, but I am sure it happened in the month selected below.",
  "disabled": "0x0123456789876543211",
  "electronicSignature": "0x09999999999999999",
  "worldlawClaimHash": "0x123456789101112131415164",
  "integer": 100,
  "integerRange": 20,
  "integerRangeSteps": 10,
  "latitude": 0,
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
  "longitude": 0,
  "Month": "I am unsure of the actual month, but I am sure it happened in the year selected below.",
  "number": 10,
  "numberEnum": 0,
  "pass1": "notthisoneone",
  "pass2": "notthisonetwo",
  "otherPublicIdentity": "0x012345678987654321",
  "public_identityHash": "0x012345678912345678",
  "readonly": "0x1234567891011121314151617181920212223241",
  "secret": "ThisIsTextLineForHiddenSaltAndPepper",
  "string": "Choose the claim descriptions in logical order",
  "title": "ESI Content Upload Tasks",
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
  "unorderable": [
    "I seek justice in punishing the offender.",
    "I am seeking damages and finacial compensation."
  ],
  "unremovable": [
    "I seek justice in punishing the offender.",
    "I am seeking damages and finacial compensation."
  ],
  "noToolbar": [
    "one container of ESI",
    "two container of ESI"
  ],
  "fixedNoToolbar": [
    20,
    false,
    "I have reviewed the E.S.I. CONTENT, and is true and accurate.",
    "I have reviewed the E.S.I. TESTIMONY, and is true and accurate."
  ],
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
