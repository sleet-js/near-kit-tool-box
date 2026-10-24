// =================================================
// bin/ft/ft_balance_of.ts
//
// View (NEP-145): reads the token balance of an account.
//
// usage:
//   bun run bin/ft/ft_balance_of.ts --contract-id <id> --account-id <id>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env } from "../_shared/env.js";
import { ft_balance_of_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/ft/ft_balance_of.ts --contract-id <id> --account-id <id>";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
const accountId = requireString(args, "account-id", usage);
// =================================================
logResult(
  `ft_balance_of @ ${contractId}`,
  await ft_balance_of_fun_json(near_kit_env, contractId, accountId),
);
// =================================================
// copyright 2026 by sleet.near
