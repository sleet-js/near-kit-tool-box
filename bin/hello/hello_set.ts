// =================================================
// bin/hello/hello_set.ts
//
// Call: sets the greeting on the greeting contract.
//
// usage:
//   bun run bin/hello/hello_set.ts --greeting "Hello NEAR" [--contract-id <id>]
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import {
  greeting_contractid,
  logResult,
  NEAR_KIT_NETWORK,
  near_kit_env,
  requireSigner,
  resolveContractId,
} from "../_shared/env.js";
import { greeting_set_greeting_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  'bun run bin/hello/hello_set.ts --greeting "Hello NEAR" [--contract-id <id>]';
const args = parseArgs();
const greeting = requireString(args, "greeting", usage);
requireSigner(usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  greeting_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `set_greeting @ ${contractId} (${NEAR_KIT_NETWORK})`,
  await greeting_set_greeting_fun_json(near_kit_env, contractId, greeting),
);
// =================================================
// copyright 2026 by sleet.near
