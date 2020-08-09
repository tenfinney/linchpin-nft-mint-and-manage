tarvos@tarvos:/media/tarvos/WORLDLAW-00/APPDEV/v60/bluefin-app-v60$ truffle compile        

Compiling your contracts...
===========================
> Compiling ./src/contracts/ClaimManager.sol
> Compiling ./src/contracts/ContentLoader.sol
> Compiling ./src/contracts/EvidenceManagement.sol
> Compiling ./src/contracts/Marketplace.sol
> Compiling ./src/contracts/Migrations.sol
> Compiling ./src/contracts/WLPawn.sol
> Artifacts written to /media/tarvos/WORLDLAW-00/APPDEV/v60/bluefin-app-v60/src/abis
> Compiled successfully using:
   - solc: 0.5.8+commit.23d335f2.Emscripten.clang

tarvos@tarvos:/media/tarvos/WORLDLAW-00/APPDEV/v60/bluefin-app-v60$ truffle migrate --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 0x6691b7


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x96dccee6269b76af4e96223493eefadc8da45150ed36e2390a2b004c9b135fe5
   > Blocks: 0            Seconds: 0
   > contract address:    0x20cA44DC775A0543213e6730BF3e49b8B893a40f
   > block number:        552
   > block timestamp:     1576254550
   > account:             0x4101d5864731524c2725BBe20dF7cd70713885AC
   > balance:             95.78707998
   > gas used:            261393
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00522786 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00522786 ETH


2_deploy_content_loader.js
==========================

   Replacing 'ContentLoader'
   -------------------------
   > transaction hash:    0x96cf502d24ce19125b1fcb1aa90a4788137a5a450cf6ff444b9e4d12b96f4053
   > Blocks: 0            Seconds: 0
   > contract address:    0x7b6405aBB7869B9A1Cf467B976B23749Ab8A0517
   > block number:        554
   > block timestamp:     1576254551
   > account:             0x4101d5864731524c2725BBe20dF7cd70713885AC
   > balance:             95.7771298
   > gas used:            455486
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00910972 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00910972 ETH


3_deploy_evidence_management.js
===============================

   Replacing 'EvidenceManagement'
   ------------------------------
   > transaction hash:    0xe2870714bca565ead98de162beadda297781dcb6e0b4faa3fb60b37faf952651
   > Blocks: 0            Seconds: 0
   > contract address:    0x94EeA99311F3d9c42f108c133BF60baA6590CA9D
   > block number:        556
   > block timestamp:     1576254551
   > account:             0x4101d5864731524c2725BBe20dF7cd70713885AC
   > balance:             95.75948624
   > gas used:            855155
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0171031 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0171031 ETH


4_deploy_claim_manager.js
=========================

   Replacing 'ClaimManager'
   ------------------------
   > transaction hash:    0x46c3b8ec92a96cc5d7d759d5c8d7f00273dbd721f41b3036b9f9f877466bd451
   > Blocks: 0            Seconds: 0
   > contract address:    0xb9a9d6068dC2Df8E0135EA849a3f7d55D1b7bDa1
   > block number:        558
   > block timestamp:     1576254552
   > account:             0x4101d5864731524c2725BBe20dF7cd70713885AC
   > balance:             95.74085496
   > gas used:            904541
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01809082 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01809082 ETH


5_deploy_marketplace.js
=======================

   Replacing 'Marketplace'
   -----------------------
   > transaction hash:    0x61606f0259d6701a24d9515a21bb9328edc5344009c89907655a36b5d2b27364
   > Blocks: 0            Seconds: 0
   > contract address:    0xb5287010334A1C0B7A8174b9f2E2cee79855ddf9
   > block number:        560
   > block timestamp:     1576254552
   > account:             0x4101d5864731524c2725BBe20dF7cd70713885AC
   > balance:             95.7214044
   > gas used:            945505
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0189101 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0189101 ETH


6_deploy_wlp.js
===============

   Replacing 'WLPawn'
   ------------------
   > transaction hash:    0xb4fc52660f4814eec6a93ff20b261dccd8c1b9251ea873cc9c63f420ff85a542
   > Blocks: 0            Seconds: 0
   > contract address:    0x78dccA9E1414bB283A7E196c7CADF71F16cb6629
   > block number:        562
   > block timestamp:     1576254553
   > account:             0x4101d5864731524c2725BBe20dF7cd70713885AC
   > balance:             95.67872236
   > gas used:            2107079
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04214158 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04214158 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.11058318 ETH


tarvos@tarvos:/media/tarvos/WORLDLAW-00/APPDEV/v60/bluefin-app-v60$ 

================================================================================
================================================================================
================================================================================
HYDRA
================================================================================
================================================================================
================================================================================


hydra@hydra:/media/hydra/WORLDLAW-00/APPDEV/v60/cm-bluefin-app-v60$ truffle compile

Compiling your contracts...
===========================
> Compiling ./src/contracts/ClaimManager.sol
> Compiling ./src/contracts/ContentLoader.sol
> Compiling ./src/contracts/EvidenceManagement.sol
> Compiling ./src/contracts/Marketplace.sol
> Compiling ./src/contracts/Migrations.sol
> Compiling ./src/contracts/WLPawn.sol
> Artifacts written to /media/hydra/WORLDLAW-00/APPDEV/v60/cm-bluefin-app-v60/src/abis
> Compiled successfully using:
   - solc: 0.5.12+commit.7709ece9.Emscripten.clang

hydra@hydra:/media/hydra/WORLDLAW-00/APPDEV/v60/cm-bluefin-app-v60$ truffle migrate

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 0x6691b7


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x9daf21672b0d6e9fd2a7185c48b601c843c80351b9979893efbb6413ea28308f
   > Blocks: 0            Seconds: 0
   > contract address:    0xa90e4dE7DAc4f7B7c09c86b3D00c93Dfa9eeeC34
   > block number:        403
   > block timestamp:     1576657387
   > account:             0xf17358b9e833E429B8fEbe51B08D6212543e3e5F
   > balance:             97.7193699
   > gas used:            263677
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00527354 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00527354 ETH


2_deploy_content_loader.js
==========================

   Replacing 'ContentLoader'
   -------------------------
   > transaction hash:    0x526bb29e65700b982158725bb32f84391e88b28c9f52d26a52dba780031c9c1e
   > Blocks: 0            Seconds: 0
   > contract address:    0x79b6DB8d2B25029349866e599dCD710BbC0349cb
   > block number:        405
   > block timestamp:     1576657387
   > account:             0xf17358b9e833E429B8fEbe51B08D6212543e3e5F
   > balance:             97.70937264
   > gas used:            457840
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0091568 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0091568 ETH


3_deploy_evidence_management.js
===============================

   Replacing 'EvidenceManagement'
   ------------------------------
   > transaction hash:    0x55df779e9d777508a0ce907a32a0e91ca084e75d6a3e96b6c4eeffaeaed71504
   > Blocks: 0            Seconds: 0
   > contract address:    0x24846E4ECc228e848BfAffC0B778F2BA1B857315
   > block number:        407
   > block timestamp:     1576657388
   > account:             0xf17358b9e833E429B8fEbe51B08D6212543e3e5F
   > balance:             97.69168212
   > gas used:            857503
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01715006 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01715006 ETH


4_deploy_claim_manager.js
=========================

   Replacing 'ClaimManager'
   ------------------------
   > transaction hash:    0x663ebcc6a2d1d95e6d71feb9e819a3c2ec54381241b7fdcaa021df239da8f43d
   > Blocks: 0            Seconds: 0
   > contract address:    0x0EfE33eef621a2c93bc56b6D37D4E604AA024f36
   > block number:        409
   > block timestamp:     1576657388
   > account:             0xf17358b9e833E429B8fEbe51B08D6212543e3e5F
   > balance:             97.67300388
   > gas used:            906889
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01813778 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01813778 ETH


5_deploy_marketplace.js
=======================

   Replacing 'Marketplace'
   -----------------------
   > transaction hash:    0xea8dd1bbbc2b689adf20321335eb771ae33db037b81b896249ebe4e1bfeb6f10
   > Blocks: 0            Seconds: 0
   > contract address:    0x9fA3Eb1d74f810D2035E8BEAC8600eb842B2729c
   > block number:        411
   > block timestamp:     1576657389
   > account:             0xf17358b9e833E429B8fEbe51B08D6212543e3e5F
   > balance:             97.65350636
   > gas used:            947853
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01895706 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01895706 ETH


6_deploy_wlp.js
===============

   Replacing 'WLPawn'
   ------------------
   > transaction hash:    0x4df0e119b466791402cf1ad04659cfc90cfb3513f98136aaaa3b6d50d8e7e067
   > Blocks: 0            Seconds: 0
   > contract address:    0x4157d03491870F1B916C609C6935eA7E1326F7f5
   > block number:        413
   > block timestamp:     1576657389
   > account:             0xf17358b9e833E429B8fEbe51B08D6212543e3e5F
   > balance:             97.61077736
   > gas used:            2109427
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04218854 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04218854 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.11086378 ETH
