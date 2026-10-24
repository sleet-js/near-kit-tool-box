// =================================================
// bin/rhea_ammv2/rhea_get_pools.ts
//
// View: reads a paginated list of pool descriptors.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_get_pools.ts [--from-index <n>] [--limit <n>] [--contract-id <id>]
// =================================================
import { optionalNumber, parseArgs } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_get_pools_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_get_pools.ts [--from-index <n>] [--limit <n>] [--contract-id <id>]";
const args = parseArgs();
const fromIndex = optionalNumber(args, "from-index", 0);
const limit = optionalNumber(args, "limit", 10);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `get_pools ${fromIndex}..${fromIndex + limit} @ ${contractId}`,
  await rhea_ammv2_get_pools_fun_json(
    near_kit_env,
    contractId,
    fromIndex,
    limit,
  ),
);
// =================================================
// copyright 2026 by sleet.near
