// =================================================
// bin/wrap_near/wrap_near_deposit.ts
//
// Call: wraps NEAR into wNEAR (NEP-141).
//
// usage:
//   bun run bin/wrap_near/wrap_near_deposit.ts --amount "2 NEAR" [--contract-id <id>]
// =================================================
import { parseArgs, requireAmount } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  requireSigner,
  resolveContractId,
  wrap_near_contractid,
} from "../_shared/env.js";
import { wrap_near_deposit_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  'bun run bin/wrap_near/wrap_near_deposit.ts --amount "2 NEAR" [--contract-id <id>]';
const args = parseArgs();
const amount = requireAmount(args, "amount", usage);
requireSigner(usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  wrap_near_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `near_deposit ${amount} @ ${contractId}`,
  await wrap_near_deposit_fun_json(near_kit_env, contractId, amount),
);
// =================================================
// copyright 2026 by sleet.near
