# BIN

Runnable examples for every helper in `@near-kit-tool-box/fun`.

One bin per function, grouped into a folder per contract family.
Every bin takes its arguments as CLI flags — nothing is hardcoded.

## setup

```sh
cp .env.example .env
# no `source` needed — dotenv loads .env from the cwd automatically
```

`.env` needs `NEAR_KIT_NETWORK` (`mainnet` | `testnet`). View bins
work without a signer; call bins need `NEAR_KIT_ACCOUNT_ID` and
`NEAR_KIT_PRIVATE_KEY`.

## conventions

- `--flag value` and `--flag=value` both work.
- Contract ids default to the per-network id for that contract
  (`ref-finance-101.testnet`, `wrap.testnet`, `hello.sleet.testnet`, ...).
  Pass `--contract-id` to override, or `--tld-contract-id` for the
  registrar in `near/`.
- Amounts are `"<n> NEAR"`, `"<n> yocto"`, or a raw yocto integer.
- A missing flag or an unconfigured signer exits with code `1` and
  prints the usage line.

---

## hello — greeting contract

```sh
# view: read the current greeting
bun run bin/hello/hello_get.ts
bun run bin/hello/hello_get.ts --contract-id hello.sleet.testnet

# call: set the greeting (needs a signer)
bun run bin/hello/hello_set.ts --greeting "Hello from near kit"
```

## ft — NEP-141 / NEP-145 fungible tokens

```sh
# view: token metadata
bun run bin/ft/ft_metadata.ts --contract-id shit-237.factory.v10.meme-cooking.testnet

# view: total supply
bun run bin/ft/ft_total_supply.ts --contract-id shit-237.factory.v10.meme-cooking.testnet

# view: balance of an account
bun run bin/ft/ft_balance_of.ts \
  --contract-id shit-237.factory.v10.meme-cooking.testnet \
  --account-id sleet.testnet

# call: register the signer's storage
bun run bin/ft/ft_storage_deposit.ts --contract-id shit-237.factory.v10.meme-cooking.testnet

# call: transfer tokens
bun run bin/ft/ft_transfer.ts \
  --contract-id shit-237.factory.v10.meme-cooking.testnet \
  --receiver-id sleet.testnet \
  --amount 1000000000000000000000

# call: transfer + invoke the receiver's ft_on_transfer
bun run bin/ft/ft_transfer_call.ts \
  --contract-id shit-237.factory.v10.meme-cooking.testnet \
  --receiver-id ref-finance-101.testnet \
  --amount 1000000000000000000000 \
  --msg ""
```

## rhea_ammv2 — AMM / ref-finance

```sh
# view: how many pools are registered
bun run bin/rhea_ammv2/rhea_get_number_of_pools.ts

# view: a single pool
bun run bin/rhea_ammv2/rhea_get_pool.ts --pool-id 2459

# view: a page of pools
bun run bin/rhea_ammv2/rhea_get_pools.ts --from-index 0 --limit 10

# view: deposited balances of an account
bun run bin/rhea_ammv2/rhea_get_deposits.ts --account-id sleet.testnet

# view: storage balance of an account
bun run bin/rhea_ammv2/rhea_storage_balance_of.ts --account-id sleet.testnet

# view: quote a swap
bun run bin/rhea_ammv2/rhea_get_return.ts \
  --pool-id 2459 \
  --token-in wrap.testnet \
  --amount-in 1000000000000000000000000 \
  --token-out shit-237.factory.v10.meme-cooking.testnet

# call: register the signer's storage
bun run bin/rhea_ammv2/rhea_storage_deposit.ts --deposit "0.00125 NEAR"

# call: withdraw a deposited token
bun run bin/rhea_ammv2/rhea_withdraw.ts \
  --amount 1000000000000000000000 \
  --token-id shit-237.factory.v10.meme-cooking.testnet

# call: swap — one action
bun run bin/rhea_ammv2/rhea_swap.ts \
  --pool-id 2459 \
  --token-in wrap.testnet \
  --token-out shit-237.factory.v10.meme-cooking.testnet \
  --amount-in 1000000000000000000000000 \
  --min-amount-out 0

# call: swap — two hops (repeat the flags for each action)
bun run bin/rhea_ammv2/rhea_swap.ts \
  --pool-id 2459 --token-in wrap.testnet \
  --token-out shit-237.factory.v10.meme-cooking.testnet --min-amount-out 0 \
  --pool-id 2459 --token-in shit-237.factory.v10.meme-cooking.testnet \
  --token-out wrap.testnet --min-amount-out 0 \
  --referral-id ref.huggies.testnet

# call: create a new simple pool
bun run bin/rhea_ammv2/rhea_add_simple_pool.ts \
  --fee 30 \
  --tokens wrap.testnet,shit-237.factory.v10.meme-cooking.testnet
```

## near — registrar + account keys

```sh
# call: create a sub-account through the TLD registrar
bun run bin/near/near_create_account.ts \
  --account-id newaccounttests.testnet \
  --public-key ed25519:56CJx1YrTJ6nBmJb8DoXwBm5HLHZcoyAt8FQDmcvkjFE

# call: delete an account, refunding the balance to a beneficiary
bun run bin/near/near_delete_account.ts \
  --signer-id newaccounttests.testnet \
  --beneficiary sleet.testnet

# call: add a full-access key
bun run bin/near/near_add_key.ts \
  --signer-id sleet.testnet \
  --public-key ed25519:HDaBzemF6CYnQ2A3CgAh8vK7stWp5aXvKMKzKDe6s3QZ \
  --permission full-access

# call: add a function-call key (limited access)
bun run bin/near/near_add_key.ts \
  --signer-id sleet.testnet \
  --public-key ed25519:9vnVSMT1hv2Q1vuZzbjStFieqGbTrwqe4KcvfqYAkb5T \
  --permission function-call \
  --receiver-id ref-finance-101.testnet \
  --method-names "add_simple_pool" \
  --allowance "1 NEAR"

# call: delete a key
bun run bin/near/near_delete_key.ts \
  --signer-id sleet.testnet \
  --public-key ed25519:HDaBzemF6CYnQ2A3CgAh8vK7stWp5aXvKMKzKDe6s3QZ
```

## wrap_near — wNEAR

```sh
# call: wrap NEAR into wNEAR
bun run bin/wrap_near/wrap_near_deposit.ts --amount "2 NEAR"

# call: unwrap wNEAR back into NEAR (amount in yocto)
bun run bin/wrap_near/wrap_near_withdraw.ts --amount 2000000000000000000000000
```

## pool — staking pools

Staking pools are deployed per-validator, so there is no canonical
contract id — pass the pool account explicitly.

```sh
# view: how many accounts are staking
bun run bin/pool/pool_get_number_of_accounts.ts --contract-id everything.pool.near

# view: a page of staking accounts
bun run bin/pool/pool_get_accounts.ts --contract-id everything.pool.near --from-index 0 --limit 10

# call: deposit and stake in one transaction
bun run bin/pool/pool_deposit_and_stake.ts \
  --contract-id everything.pool.near \
  --deposit "5 NEAR"

# call: ping the pool contract
bun run bin/pool/pool_ping.ts --contract-id everything.pool.near
```

## pumpopoly_world — world game

```sh
# call: move the player one step
bun run bin/pumpopoly_world/pumpopoly_world_move_player.ts

# call: elite move
bun run bin/pumpopoly_world/pumpopoly_world_elite_move.ts
```

---

## layout

```
bin/
  _shared/          # flag parser + env/contract-id helpers (not runnable)
  ft/               # NEP-141 / NEP-145
  hello/            # greeting contract
  near/             # registrar + account keys
  pool/             # staking pools
  pumpopoly_world/  # world game
  rhea_ammv2/       # AMM / ref-finance
  wrap_near/        # wNEAR
```

---

copyright 2026 by sleet.near
