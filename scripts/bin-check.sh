#!/usr/bin/env bash
# =================================================
# scripts/bin-check.sh
#
# Sanity-checks every bin: each one must start, and either print a
# result or exit with a clean error message (never a crash/traceback).
# =================================================
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

PASS=0
FAIL=0

# =================================================
# Runs a bin and checks that it either produced output or exited
# cleanly with an `error:` message (no unhandled exception).
check() {
  local label="$1"; shift
  local out
  out=$(bun run "$@" 2>&1 | grep -v "injected env")
  if echo "$out" | grep -qE "^error:|^\{|^---|^\[|^\"|^[0-9]"; then
    printf "  PASS  %s\n" "$label"
    PASS=$((PASS + 1))
  elif echo "$out" | grep -qE "^(TypeError|ReferenceError|SyntaxError|Error:|RangeError)"; then
    printf "  FAIL  %s\n" "$label"
    echo "$out" | head -8 | sed 's/^/          /'
    FAIL=$((FAIL + 1))
  else
    printf "  WARN  %s (no recognizable output)\n" "$label"
    echo "$out" | head -5 | sed 's/^/          /'
    FAIL=$((FAIL + 1))
  fi
}

FT=shit-237.factory.v10.meme-cooking.testnet

echo "== hello =="
check "hello_get" bin/hello/hello_get.ts
check "hello_set" bin/hello/hello_set.ts --greeting "Hello from near kit"

echo "== ft =="
check "ft_balance_of"     bin/ft/ft_balance_of.ts --contract-id "$FT" --account-id sleet.testnet
check "ft_total_supply"   bin/ft/ft_total_supply.ts --contract-id "$FT"
check "ft_metadata"       bin/ft/ft_metadata.ts --contract-id "$FT"
check "ft_storage_deposit" bin/ft/ft_storage_deposit.ts --contract-id "$FT"
check "ft_transfer"       bin/ft/ft_transfer.ts --contract-id "$FT" --receiver-id sleet.testnet --amount 1000
check "ft_transfer_call"  bin/ft/ft_transfer_call.ts --contract-id "$FT" --receiver-id sleet.testnet --amount 1000

echo "== rhea_ammv2 =="
check "rhea_get_number_of_pools" bin/rhea_ammv2/rhea_get_number_of_pools.ts
check "rhea_get_pool"            bin/rhea_ammv2/rhea_get_pool.ts --pool-id 100
check "rhea_get_pools"           bin/rhea_ammv2/rhea_get_pools.ts --from-index 0 --limit 2
check "rhea_get_deposits"        bin/rhea_ammv2/rhea_get_deposits.ts --account-id sleet.testnet
check "rhea_storage_balance_of"  bin/rhea_ammv2/rhea_storage_balance_of.ts --account-id sleet.testnet
check "rhea_get_return"          bin/rhea_ammv2/rhea_get_return.ts --pool-id 2459 --token-in wrap.testnet --amount-in 1000 --token-out "$FT"
check "rhea_storage_deposit"     bin/rhea_ammv2/rhea_storage_deposit.ts --deposit "0.00125 NEAR"
check "rhea_withdraw"            bin/rhea_ammv2/rhea_withdraw.ts --amount 1000 --token-id "$FT"
check "rhea_swap"                bin/rhea_ammv2/rhea_swap.ts --pool-id 2459 --token-in wrap.testnet --token-out "$FT" --amount-in 1000
check "rhea_add_simple_pool"     bin/rhea_ammv2/rhea_add_simple_pool.ts --fee 30 --tokens wrap.testnet,"$FT"

echo "== near =="
check "near_create_account" bin/near/near_create_account.ts --account-id new.testnet --public-key ed25519:abc
check "near_delete_account" bin/near/near_delete_account.ts --signer-id a.testnet --beneficiary b.testnet
check "near_add_key"        bin/near/near_add_key.ts --signer-id a.testnet --public-key ed25519:abc --permission full-access
check "near_delete_key"     bin/near/near_delete_key.ts --signer-id a.testnet --public-key ed25519:abc

echo "== wrap_near =="
check "wrap_near_deposit"  bin/wrap_near/wrap_near_deposit.ts --amount "2 NEAR"
check "wrap_near_withdraw" bin/wrap_near/wrap_near_withdraw.ts --amount 2000000000000000000000000

echo "== pool =="
check "pool_get_number_of_accounts" bin/pool/pool_get_number_of_accounts.ts --contract-id everything.pool.near
check "pool_get_accounts"           bin/pool/pool_get_accounts.ts --contract-id everything.pool.near --limit 2
check "pool_deposit_and_stake"      bin/pool/pool_deposit_and_stake.ts --contract-id everything.pool.near --deposit "5 NEAR"
check "pool_ping"                   bin/pool/pool_ping.ts --contract-id everything.pool.near

echo "== pumpopoly_world =="
check "pumpopoly_world_move_player" bin/pumpopoly_world/pumpopoly_world_move_player.ts
check "pumpopoly_world_elite_move"  bin/pumpopoly_world/pumpopoly_world_elite_move.ts

echo
echo "passed: $PASS   failed: $FAIL"
[ "$FAIL" -eq 0 ]
