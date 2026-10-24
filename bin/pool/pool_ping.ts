// =================================================
// bin/pool/pool_ping.ts
//
// Call: pings the staking pool contract (no-op method, useful for
// checking connectivity).
//
// usage:
//   bun run bin/pool/pool_ping.ts --contract-id <pool_id>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { pool_ping_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage = "bun run bin/pool/pool_ping.ts --contract-id <pool_id>";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
requireSigner(usage);
// =================================================
logResult(
  `ping @ ${contractId}`,
  await pool_ping_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
