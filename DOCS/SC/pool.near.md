# pool.near

the NEAR staking-pool factory contract (v1). Staking pools are
created via this factory and addressed individually.

---

#### DETAILS

**CONTRACT ID PER NETWORK**
- MAINNET: pool.near
- TESTNET: pool.f863607.m0e2.testnet

```sh
# near cli - get a list of methods on a factory-deployed pool
near contract inspect pool.f863607.m0e2.testnet network-config testnet now
```

#### FILES

- `packages/fun/src/lib/methods/methods_pool.ts`
- `packages/fun/src/lib/const_id/pool_contract_id_const.ts`
- `packages/fun/src/types/pool_types.ts`
- `packages/fun/src/fun/pool/pool_get_number_of_accounts_fun_json.ts`, `packages/fun/src/fun/pool/pool_get_accounts_fun_json.ts`, `packages/fun/src/fun/pool/pool_deposit_and_stake_fun_json.ts`, `packages/fun/src/fun/pool/pool_ping_fun_json.ts`



==========================
<br/>
copyright 2026 by sleet.near
