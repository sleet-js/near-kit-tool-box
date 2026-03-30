import { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";
import { greeting_contract_methods } from "../../lib/contract_greeting_const";
import type { greeting_args_params_interface } from "../../lib/contract_greeting_args";
// ===========================================
export async function greeting_set_greeting_fun(
  near: Near,
  greeting_contractId: string,
  greeting: greeting_args_params_interface["greeting"],
) {
  const result = await near.call(
    greeting_contractId,
    greeting_contract_methods.set_greeting,
    { greeting: greeting },
    { gas: "3 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
