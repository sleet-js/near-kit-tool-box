// =================================================
// bin/rhea_ammv2/rhea_storage_balance_of.ts
//
// View: reads the NEP-145 storage balance of an account on the AMM.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_storage_balance_of.ts --account-id <id> [--contract-id <id>]
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_storage_balance_of_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_storage_balance_of.ts --account-id <id> [--contract-id <id>]";
const args = parseArgs();
const accountId = requireString(args, "account-id", usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `storage_balance_of ${accountId} @ ${contractId}`,
  await rhea_ammv2_storage_balance_of_fun_json(
    near_kit_env,
    contractId,
    accountId,
  ),
);
// =================================================
// copyright 2026 by sleet.near
