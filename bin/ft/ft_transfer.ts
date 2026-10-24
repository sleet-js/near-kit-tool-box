// =================================================
// bin/ft/ft_transfer.ts
//
// Call (NEP-141): transfers `amount` of the token to `receiver_id`.
//
// usage:
//   bun run bin/ft/ft_transfer.ts --contract-id <id> --receiver-id <id> --amount <raw>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { ft_transfer_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/ft/ft_transfer.ts --contract-id <id> --receiver-id <id> --amount <raw>";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
const receiverId = requireString(args, "receiver-id", usage);
const amount = requireString(args, "amount", usage);
requireSigner(usage);
// =================================================
logResult(
  `ft_transfer @ ${contractId} -> ${receiverId}`,
  await ft_transfer_fun_json(near_kit_env, contractId, receiverId, amount),
);
// =================================================
// copyright 2026 by sleet.near
