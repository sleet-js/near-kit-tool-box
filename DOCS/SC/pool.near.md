# staking pools

The standard NEAR validator staking-pool child contracts. There is no
single canonical id on either network — staking pools are deployed
**per-validator** by the `pool.near` factory (v2 pools) and by the
legacy `poolv1.near` factory (v1 pools).

Pass the specific pool account id into `pool_*_fun_json` helpers in
this package. The factory contract ids (if you need them) live at:

- `pool.near` (mainnet) / `pool.testnet` (testnet) — v2 factory
- `poolv1.near` (mainnet) / `poolv1.testnet` (testnet) — v1 factory

To call a method on a specific pool, replace `<pool_account>` with
the validator's pool account id (`<validator>.pool.near` on mainnet,
`<validator>.pool.testnet` on testnet, etc.):

```sh
# near cli - get a list of methods
near contract inspect <pool_account> network-config mainnet now
```

#### KNOWN POOLS

| pool account id | factory | network |
| --- | --- | --- |
| `everything.pool.near` | pool.near (v2) | mainnet |

The TS fun package ships no pooled-resolver helpers — pass the
concrete pool account id into each `pool_*_fun_json` call.

#### FILES

- `packages/fun/src/lib/methods/methods_pool.ts`
- `packages/fun/src/fun/pool/pool_get_number_of_accounts_fun_json.ts`, `packages/fun/src/fun/pool/pool_get_accounts_fun_json.ts`, `packages/fun/src/fun/pool/pool_deposit_and_stake_fun_json.ts`, `packages/fun/src/fun/pool/pool_ping_fun_json.ts`



==========================
<br/>
copyright 2026 by sleet.near
