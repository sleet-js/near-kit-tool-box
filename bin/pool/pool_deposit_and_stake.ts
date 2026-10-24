// =================================================
// bin/pool/pool_deposit_and_stake.ts
//
// Call: deposits the signer's balance into the staking pool and stakes
// it in the same transaction.
//
// usage:
//   bun run bin/pool/pool_deposit_and_stake.ts --contract-id <pool_id> --deposit "5 NEAR"
// =================================================
import { parseArgs, requireAmount, requireString } from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { pool_deposit_and_stake_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  'bun run bin/pool/pool_deposit_and_stake.ts --contract-id <pool_id> --deposit "5 NEAR"';
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
const deposit = requireAmount(args, "deposit", usage);
requireSigner(usage);
// =================================================
logResult(
  `deposit_and_stake ${deposit} @ ${contractId}`,
  await pool_deposit_and_stake_fun_json(near_kit_env, contractId, deposit),
);
// =================================================
// copyright 2026 by sleet.near
