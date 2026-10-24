// =================================================
// bin/near/near_delete_key.ts
//
// Local action: deletes an access key from the signer account.
//
// usage:
//   bun run bin/near/near_delete_key.ts --signer-id <id> --public-key <ed25519:...>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { near_delete_key_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/near/near_delete_key.ts --signer-id <id> --public-key <ed25519:...>";
const args = parseArgs();
const signerId = requireString(args, "signer-id", usage);
const publicKey = requireString(args, "public-key", usage);
requireSigner(usage);
// =================================================
logResult(
  `delete_key ${publicKey} on ${signerId}`,
  await near_delete_key_fun_json(near_kit_env, signerId, publicKey),
);
// =================================================
// copyright 2026 by sleet.near
