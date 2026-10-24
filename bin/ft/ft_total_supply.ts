// =================================================
// bin/ft/ft_total_supply.ts
//
// View (NEP-145): reads the total supply of the token.
//
// usage:
//   bun run bin/ft/ft_total_supply.ts --contract-id <id>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env } from "../_shared/env.js";
import { ft_total_supply_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage = "bun run bin/ft/ft_total_supply.ts --contract-id <id>";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
// =================================================
logResult(
  `ft_total_supply @ ${contractId}`,
  await ft_total_supply_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
