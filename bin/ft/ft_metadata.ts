// =================================================
// bin/ft/ft_metadata.ts
//
// View (NEP-145): reads the token metadata (spec, name, symbol, icon,
// decimals, ...).
//
// usage:
//   bun run bin/ft/ft_metadata.ts --contract-id <id>
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import { logResult, near_kit_env } from "../_shared/env.js";
import { ft_metadata_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage = "bun run bin/ft/ft_metadata.ts --contract-id <id>";
const args = parseArgs();
const contractId = requireString(args, "contract-id", usage);
// =================================================
logResult(
  `ft_metadata @ ${contractId}`,
  await ft_metadata_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
