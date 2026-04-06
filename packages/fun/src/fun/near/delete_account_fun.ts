import { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
export async function delete_account_fun(
  near: Near,
  signerId: string,
  beneficiary: string,
) {
  const result = await near
    .transaction(signerId)
    .deleteAccount({ beneficiary: beneficiary })
    .send();
  return result as FinalExecutionOutcome;
}
// ===========================================
