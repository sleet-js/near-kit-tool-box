// =================================================
// bin/rhea_ammv2/rhea_storage_deposit.ts
//
// Call: pays the storage deposit to register the signer's storage on
// the AMM contract.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_storage_deposit.ts --deposit "0.00125 NEAR" [--contract-id <id>]
// =================================================
import { parseArgs, requireAmount } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  requireSigner,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_storage_deposit_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  'bun run bin/rhea_ammv2/rhea_storage_deposit.ts --deposit "0.00125 NEAR" [--contract-id <id>]';
const args = parseArgs();
const deposit = requireAmount(args, "deposit", usage);
requireSigner(usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `storage_deposit @ ${contractId}`,
  await rhea_ammv2_storage_deposit_fun_json(near_kit_env, contractId, deposit),
);
// =================================================
// copyright 2026 by sleet.near
