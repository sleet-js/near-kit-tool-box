// =================================================
// bin/rhea_ammv2/rhea_get_number_of_pools.ts
//
// View: reads the total number of pools registered on the AMM.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_get_number_of_pools.ts [--contract-id <id>]
// =================================================
import { parseArgs } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_get_number_of_pools_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_get_number_of_pools.ts [--contract-id <id>]";
const args = parseArgs();
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `get_number_of_pools @ ${contractId} (${NEAR_KIT_NETWORK})`,
  await rhea_ammv2_get_number_of_pools_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
