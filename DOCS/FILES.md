# FILES

files/folders
- bin/ - runable ts files for testing the fun package
- scripts/
- example/ - a ui example
- DOCS/SC/ - per-contract documentation, one .md per smart contract

packages
- packages/fun
  - src/fun/<contract>/ — one folder per contract, one .ts per function (`<contract>_<method>_fun_json.ts`)
  - src/lib/methods/ — method name constants, `methods_<contract>.ts` per contract
  - src/lib/const_id/ — `*_contract_id_const.ts` per contract plus a shared CONTRACT_ID_CONST_TYPE
  - src/lib/args/ — one args interface file per contract (`<contract>_args.ts`)
  - src/types/ — response type definitions
- packages/env
- packages/web



==================
<br/>
copyright 2026 by sleet.near
