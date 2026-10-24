// =================================================
// bin/ft/ft_transfer_call.ts
//
// Call (NEP-141): transfers `amount` of the token to `receiver_id` and
// calls the receiver's `ft_on_transfer` with `msg`.
//
// usage:
//   bun run bin/ft/ft_transfer_call.ts --contract-id <id> --receiver-id <id> --amount <raw> --msg <json>
// =================================================
import { parseArgs, optionalString, requireString } from "../_shared/args.js";
import { logResult, near_kit_env, requireSigner } from "../_shared/env.js";
import { ft_transfer_call_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/ft/ft_transfer_call.ts --contract-id <id> --receiver-id <id> --amount <raw> [--msg <json>]";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
const receiverId = requireString(args, "receiver-id", usage);
const amount = requireString(args, "amount", usage);
const msg = optionalString(args, "msg", "");
requireSigner(usage);
// =================================================
logResult(
  `ft_transfer_call @ ${contractId} -> ${receiverId}`,
  await ft_transfer_call_fun_json(
    near_kit_env,
    contractId,
    receiverId,
    msg,
    amount,
  ),
);
// =================================================
// copyright 2026 by sleet.near
