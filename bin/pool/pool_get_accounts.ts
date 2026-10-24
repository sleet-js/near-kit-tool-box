// =================================================
// bin/pool/pool_get_accounts.ts
//
// View: reads a paginated list of staking accounts on a staking pool.
//
// usage:
//   bun run bin/pool/pool_get_accounts.ts --contract-id <pool_id> [--from-index <n>] [--limit <n>]
// =================================================
import { optionalNumber, parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env } from "../_shared/env.js";
import { pool_get_accounts_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/pool/pool_get_accounts.ts --contract-id <pool_id> [--from-index <n>] [--limit <n>]";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
const fromIndex = optionalNumber(args, "from-index", 0);
const limit = optionalNumber(args, "limit", 10);
// =================================================
logResult(
  `get_accounts ${fromIndex}..${fromIndex + limit} @ ${contractId}`,
  await pool_get_accounts_fun_json(near_kit_env, contractId, fromIndex, limit),
);
// =================================================
// copyright 2026 by sleet.near
