// =================================================
// bin/rhea_ammv2/rhea_get_pool.ts
//
// View: reads a single pool descriptor by id.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_get_pool.ts --pool-id <id> [--contract-id <id>]
// =================================================
import { parseArgs, requireNumber } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_get_pool_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_get_pool.ts --pool-id <id> [--contract-id <id>]";
const args = parseArgs();
const poolId = requireNumber(args, "pool-id", usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `get_pool ${poolId} @ ${contractId}`,
  await rhea_ammv2_get_pool_fun_json(near_kit_env, contractId, poolId),
);
// =================================================
// copyright 2026 by sleet.near
