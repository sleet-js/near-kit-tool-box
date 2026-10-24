// =================================================
// bin/pool/pool_get_number_of_accounts.ts
//
// View: reads the total number of staking accounts on a staking pool.
//
// usage:
//   bun run bin/pool/pool_get_number_of_accounts.ts --contract-id <pool_id>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env } from "../_shared/env.js";
import { pool_get_number_of_accounts_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/pool/pool_get_number_of_accounts.ts --contract-id <pool_id>";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
// =================================================
logResult(
  `get_number_of_accounts @ ${contractId}`,
  await pool_get_number_of_accounts_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
