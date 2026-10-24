// =================================================
// bin/rhea_ammv2/rhea_get_return.ts
//
// View: quotes the output amount for swapping `amount_in` of `token_in`
// into `token_out` on a pool.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_get_return.ts --pool-id <id> --token-in <id>
//     --amount-in <raw> --token-out <id> [--contract-id <id>]
// =================================================
import { parseArgs, requireNumber, requireString } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_get_return_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_get_return.ts --pool-id <id> --token-in <id> --amount-in <raw> --token-out <id> [--contract-id <id>]";
const args = parseArgs();
const poolId = requireNumber(args, "pool-id", usage);
const tokenIn = requireString(args, "token-in", usage);
const amountIn = requireString(args, "amount-in", usage);
const tokenOut = requireString(args, "token-out", usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `get_return pool ${poolId} @ ${contractId}`,
  await rhea_ammv2_get_return_fun_json(
    near_kit_env,
    contractId,
    poolId,
    tokenIn,
    amountIn,
    tokenOut,
  ),
);
// =================================================
// copyright 2026 by sleet.near
