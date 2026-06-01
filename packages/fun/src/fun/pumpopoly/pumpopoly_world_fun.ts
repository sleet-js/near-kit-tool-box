import { Near } from "near-kit";
import { world_pumpopoly_methods_const } from "@sleet-js/pumpopoly-contract-methods-const";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
// call
// move_player
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
    { gas: "5 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
