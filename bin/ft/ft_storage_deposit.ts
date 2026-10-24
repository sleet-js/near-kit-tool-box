// =================================================
// bin/ft/ft_storage_deposit.ts
//
// Call (NEP-145): pays the standard storage deposit to register the
// signer's storage on the token contract.
//
// usage:
//   bun run bin/ft/ft_storage_deposit.ts --contract-id <id>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { ft_storage_deposit_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage = "bun run bin/ft/ft_storage_deposit.ts --contract-id <id>";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
requireSigner(usage);
// =================================================
logResult(
  `storage_deposit @ ${contractId}`,
  await ft_storage_deposit_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
