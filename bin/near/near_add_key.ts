// =================================================
// bin/near/near_add_key.ts
//
// Local action: appends an access key to the signer account.
//
// Two permission shapes are supported:
//   --permission full-access
//   --permission function-call --receiver-id <id> --method-names "a,b" [--allowance "1 NEAR"]
//
// usage:
//   bun run bin/near/near_add_key.ts --signer-id <id> --public-key <ed25519:...>
//     --permission <full-access|function-call> [--receiver-id <id>] [--method-names "a,b"] [--allowance "1 NEAR"]
// =================================================
import type { AmountInput } from "../../packages/fun/src/index.js";
import {
  parseArgs,
  optionalString,
  requireAmount,
  requireString,
} from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { near_add_key_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  'bun run bin/near/near_add_key.ts --signer-id <id> --public-key <ed25519:...> --permission <full-access|function-call> [--receiver-id <id>] [--method-names "a,b"] [--allowance "1 NEAR"]';
const args = parseArgs();
const signerId = requireString(args, "signer-id", usage);
const publicKey = requireString(args, "public-key", usage);
const permissionKind = requireString(args, "permission", usage);
requireSigner(usage);
// =================================================
// Build the NEAR-kit AccessKeyPermission value from the CLI flags.
let permission:
  | { type: "fullAccess" }
  | {
      type: "functionCall";
      receiverId: string;
      methodNames: string[];
      allowance: AmountInput;
    };
if (permissionKind === "fullAccess" || permissionKind === "full-access") {
  permission = { type: "fullAccess" };
} else if (
  permissionKind === "functionCall" ||
  permissionKind === "function-call"
) {
  const receiverId = requireString(args, "receiver-id", usage);
  const methodNames = optionalString(args, "method-names", "")
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name.length > 0);
  if (methodNames.length === 0) {
    console.error(
      "error: --method-names is required when --permission is function-call",
    );
    console.error(`usage: ${usage}`);
    process.exit(1);
  }
  permission = {
    type: "functionCall",
    receiverId,
    methodNames,
    allowance: args["allowance"]
      ? requireAmount(args, "allowance", usage)
      : ("1 NEAR" as AmountInput),
  };
} else {
  console.error(
    `error: unknown --permission "${permissionKind}" (use full-access or function-call)`,
  );
  console.error(`usage: ${usage}`);
  process.exit(1);
}
// =================================================
logResult(
  `add_key ${publicKey} on ${signerId}`,
  await near_add_key_fun_json(near_kit_env, signerId, publicKey, permission),
);
// =================================================
// copyright 2026 by sleet.near
