export default {
  "radioEncrypt": false,
  "ageOfUser": 18,
  "identityHash": "0x12345678910111213141516171819202",
  "public_ethereumAddress": "0x1234567891011121314151617181920212223242",
  "fourDigitPasscode": 3456,
  "integer": 100,
  "integerRange": 20,
  "integerRangeSteps": 10,
  "mnemonicHash": "2366663030303077696e746572303063617230303030301000",
  "worldlawClaimHash": "0x123456789101112131415164",
  "otherPublicIdentity": "0x1234567891011121",
  "number": 10,
  "numberEnum": 0,
  "pass1": "notthisoneone",
  "pass2": "notthisonetwo",
  "userClaimReference": "for example: John Doe - file 1234567 - Tortious interference with prospective economic advantage",
  "core": {
    "esi_hash": "0x099999999999999999",
    "unique_claimant_hash": "0x123456789101112131415163",
    "worldlawPublicIdentityHash": "WorldlawUserIdentityHash",
    "user_mnemonic": "SeasonColorModeCode"
  },
  "conditional": {
    "I am a victim of a legal wrong.": "Yes: More than one time",
    "Do you want to file a legal claim?": false
  },
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
    "one container of ESI",
    "two container of ESI"
  ],
  "unremovable": [
    "one container of ESI",
    "two container of ESI"
  ],
  "noToolbar": [
    "one container of ESI",
    "two container of ESI"
  ],
  "fixedNoToolbar": [
    1,
    false,
    "I have reviewed the E.S.I. CONTENT, and is true and accurate.",
    "I have reviewed the E.S.I. TESTIMONY, and is true and accurate."
  ],
  "arrayOfConditionals": [
    {
      "I am a victim of a legal wrong.": "Yes: More than one time",
      "About how many times were you wronged?": 1,
      "Do you want to file a legal claim?": false
    },
    {
      "I am a victim of a legal wrong.": "Yes: More than one time",
      "Do you want to file a legal claim?": false,
      "Do you want to file a legal claim?": false
    }
  ],
  "fixedArrayOfConditionals": [
    {
      "I am a victim of a legal wrong": "Yes: More than one time",
      "Do you want to file a legal claim?": false
    },
    {
      "I am a victim of a legal wrong": "Yes: More than one time",
      "About how many times were you wronged?": 2,
      "Do you want to file a legal claim?": false
    },
    {
      "I am a victim of a legal wrong.": "Yes: More than one time",
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
  ]
}
