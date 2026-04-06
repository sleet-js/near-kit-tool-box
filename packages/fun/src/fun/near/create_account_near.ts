import { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
const method_create_account = "create_account";
// ===========================================
export async function near_create_account_near_fun(
  near: Near,
  near_contractId: string,
  new_account_id: string,
  new_public_key: string,
) {
  const result = await near.call(
    near_contractId,
    method_create_account,
    { new_account_id: new_account_id, new_public_key: new_public_key },
    { gas: "30 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
