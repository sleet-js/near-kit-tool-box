// =================================================
// bin/hello/hello_get.ts
//
// View: reads the greeting stored on the greeting contract.
//
// usage:
//   bun run bin/hello/hello_get.ts [--contract-id <id>]
// =================================================
import { parseArgs } from "../_shared/args.js";
import {
  greeting_contractid,
  logResult,
  NEAR_KIT_NETWORK,
  near_kit_env,
  resolveContractId,
} from "../_shared/env.js";
import { greeting_get_greeting_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage = "bun run bin/hello/hello_get.ts [--contract-id <id>]";
const args = parseArgs();
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  greeting_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `get_greeting @ ${contractId} (${NEAR_KIT_NETWORK})`,
  await greeting_get_greeting_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
