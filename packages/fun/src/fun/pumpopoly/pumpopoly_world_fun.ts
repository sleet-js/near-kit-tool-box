import { Near } from "near-kit";
import { world_pumpopoly_methods_const } from "@sleet-js/pumpopoly-contract-methods-const";
import type { FinalExecutionOutcome } from "near-kit";

export async function pumpopoly_move_player_fun(
  near: Near,
  pumpopoly_contractId: string,
) {
  const result = await near.call(
    pumpopoly_contractId,
    world_pumpopoly_methods_const.move_player,
    {},
    { gas: "30 Tgas" },
  );
  return result as FinalExecutionOutcome;
}