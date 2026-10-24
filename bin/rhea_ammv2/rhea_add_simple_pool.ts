// =================================================
// bin/rhea_ammv2/rhea_add_simple_pool.ts
//
// Call: creates a new simple (constant-product) pool with the given fee
// (basis points) and an ordered list of NEP-141 tokens.
//
// usage:
//   bun run bin/rhea_ammv2/rhea_add_simple_pool.ts --fee <bps> --tokens <id1,id2> [--contract-id <id>]
// =================================================
import { parseArgs, requireList, requireNumber } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  requireSigner,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_add_simple_pool_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_add_simple_pool.ts --fee <bps> --tokens <id1,id2> [--contract-id <id>]";
const args = parseArgs();
const fee = requireNumber(args, "fee", usage);
const tokens = requireList(args, "tokens", usage);
requireSigner(usage);
if (tokens.length < 2) {
  console.error("error: --tokens needs at least two token ids");
  console.error(`usage: ${usage}`);
  process.exit(1);
}
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `add_simple_pool ${tokens.join(" / ")} @ ${contractId}`,
  await rhea_ammv2_add_simple_pool_fun_json(
    near_kit_env,
    contractId,
    fee,
    tokens,
  ),
);
// =================================================
// copyright 2026 by sleet.near
