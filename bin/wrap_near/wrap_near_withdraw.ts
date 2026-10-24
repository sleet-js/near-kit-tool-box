// =================================================
// bin/wrap_near/wrap_near_withdraw.ts
//
// Call: unwraps wNEAR back into NEAR.
//
// usage:
//   bun run bin/wrap_near/wrap_near_withdraw.ts --amount <raw> [--contract-id <id>]
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  requireSigner,
  resolveContractId,
  wrap_near_contractid,
} from "../_shared/env.js";
import { wrap_near_withdraw_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/wrap_near/wrap_near_withdraw.ts --amount <raw> [--contract-id <id>]";
const args = parseArgs();
const amount = requireString(args, "amount", usage);
requireSigner(usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  wrap_near_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `near_withdraw ${amount} @ ${contractId}`,
  await wrap_near_withdraw_fun_json(near_kit_env, contractId, amount),
);
// =================================================
// copyright 2026 by sleet.near
