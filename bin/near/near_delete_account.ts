// =================================================
// bin/near/near_delete_account.ts
//
// Local action: deletes the signer account, sending the remaining
// balance to `beneficiary`.
//
// usage:
//   bun run bin/near/near_delete_account.ts --signer-id <id> --beneficiary <id>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { near_delete_account_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/near/near_delete_account.ts --signer-id <id> --beneficiary <id>";
const args = parseArgs();
const signerId = requireString(args, "signer-id", usage);
const beneficiary = requireString(args, "beneficiary", usage);
requireSigner(usage);
// =================================================
logResult(
  `delete_account ${signerId} -> ${beneficiary}`,
  await near_delete_account_fun_json(near_kit_env, signerId, beneficiary),
);
// =================================================
// copyright 2026 by sleet.near
