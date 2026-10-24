// =================================================
// bin/rhea_ammv2/rhea_withdraw.ts
//
// Call: withdraws `amount` of `token-id` from the signer's deposited
// balance on the AMM.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_withdraw.ts --amount <raw> --token-id <id> [--contract-id <id>]
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  requireSigner,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_withdraw_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_withdraw.ts --amount <raw> --token-id <id> [--contract-id <id>]";
const args = parseArgs();
const amount = requireString(args, "amount", usage);
const tokenId = requireString(args, "token-id", usage);
requireSigner(usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `withdraw ${amount} ${tokenId} @ ${contractId}`,
  await rhea_ammv2_withdraw_fun_json(near_kit_env, contractId, amount, tokenId),
);
// =================================================
// copyright 2026 by sleet.near
