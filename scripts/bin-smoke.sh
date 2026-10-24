#!/usr/bin/env bash
# =================================================
# scripts/bin-smoke.sh
#
# Runs every view bin against the active network and reports PASS/FAIL.
# View bins need no signer — only a reachable RPC endpoint.
# =================================================
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

PASS=0
FAIL=0

run() {
  local label="$1"; shift
  local out
  out=$(bun run "$@" 2>&1 | grep -v "injected env")
  if echo "$out" | grep -q "^---"; then
    printf "  PASS  %s\n" "$label"
    PASS=$((PASS + 1))
  else
    printf "  FAIL  %s\n" "$label"
    echo "$out" | head -6 | sed 's/^/          /'
    FAIL=$((FAIL + 1))
  fi
}

run_mainnet() {
  local label="$1"; shift
  local out
  out=$(NEAR_KIT_NETWORK=mainnet bun run "$@" 2>&1 | grep -v "injected env")
  if echo "$out" | grep -q "^---"; then
    printf "  PASS  %s\n" "$label"
    PASS=$((PASS + 1))
  else
    printf "  FAIL  %s\n" "$label"
    echo "$out" | head -6 | sed 's/^/          /'
    FAIL=$((FAIL + 1))
  fi
}

FT=shit-237.factory.v10.meme-cooking.testnet

echo "== hello =="
run "hello_get"            bin/hello/hello_get.ts
run "hello_get (override)" bin/hello/hello_get.ts --contract-id hello.sleet.testnet

echo "== ft =="
run "ft_metadata"          bin/ft/ft_metadata.ts --contract-id "$FT"
run "ft_total_supply"      bin/ft/ft_total_supply.ts --contract-id "$FT"
run "ft_balance_of"        bin/ft/ft_balance_of.ts --contract-id "$FT" --account-id sleet.testnet

echo "== rhea_ammv2 =="
run "rhea_get_number_of_pools"   bin/rhea_ammv2/rhea_get_number_of_pools.ts
run "rhea_get_pool"              bin/rhea_ammv2/rhea_get_pool.ts --pool-id 100
run "rhea_get_pools"             bin/rhea_ammv2/rhea_get_pools.ts --from-index 0 --limit 2
run "rhea_get_deposits"          bin/rhea_ammv2/rhea_get_deposits.ts --account-id sleet.testnet
run "rhea_storage_balance_of"    bin/rhea_ammv2/rhea_storage_balance_of.ts --account-id sleet.testnet
run "rhea_get_return"            bin/rhea_ammv2/rhea_get_return.ts --pool-id 2459 --token-in wrap.testnet --amount-in 1000000000000000000000000 --token-out "$FT"

# =================================================
# Staking pools are deployed per-validator with no canonical id, and
# the known pool accounts live on mainnet — so these run against
# mainnet regardless of the active network.
echo "== pool (mainnet) =="
run_mainnet "pool_get_number_of_accounts" bin/pool/pool_get_number_of_accounts.ts --contract-id everything.pool.near
run_mainnet "pool_get_accounts"           bin/pool/pool_get_accounts.ts --contract-id everything.pool.near --limit 2

echo
echo "passed: $PASS   failed: $FAIL"
[ "$FAIL" -eq 0 ]
