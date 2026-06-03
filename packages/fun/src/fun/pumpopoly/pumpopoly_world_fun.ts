import { Near } from "near-kit";
import { world_pumpopoly_methods_const } from "@sleet-js/pumpopoly-contract-methods-const";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
// call
// move_player
// elite_move
// ===========================================
// pumpopoly_move_player_fun
export async function pumpopoly_move_player_fun(
  near: Near,
  pumpopoly_contractId: string,
) {
  const result = await near.call(
    pumpopoly_contractId,
    world_pumpopoly_methods_const.move_player,
    {},
    { gas: "60 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
// pumpopoly_elite_move_fun
export async function pumpopoly_elite_move_fun(
  near: Near,
  pumpopoly_contractId: string,
) {
  const result = await near.call(
    pumpopoly_contractId,
    world_pumpopoly_methods_const.elite_move,
    { contract_id: "1" },
    { gas: "100 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
