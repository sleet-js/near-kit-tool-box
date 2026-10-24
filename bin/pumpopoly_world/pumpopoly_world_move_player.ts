// =================================================
// bin/pumpopoly_world/pumpopoly_world_move_player.ts
//
// Call: moves the signer one step on the pumpopoly world map.
//
// usage:
//   bun run bin/pumpopoly_world/pumpopoly_world_move_player.ts [--contract-id <id>]
// =================================================
import { parseArgs } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  pumpopoly_world_contractid,
  requireSigner,
  resolveContractId,
} from "../_shared/env.js";
import { pumpopoly_world_move_player_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/pumpopoly_world/pumpopoly_world_move_player.ts [--contract-id <id>]";
const args = parseArgs();
requireSigner(usage);
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  pumpopoly_world_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `move_player @ ${contractId} (${NEAR_KIT_NETWORK})`,
  await pumpopoly_world_move_player_fun_json(near_kit_env, contractId),
);
// =================================================
// copyright 2026 by sleet.near
