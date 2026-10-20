// =================================================
// near_delete_account_fun_json
//
// Local NEAR account action: delete account `signerId`, transferring
// any remaining balance to `beneficiary`. The transaction is signed
// and submitted through the supplied `near` client.
import type { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";
// =================================================
export async function near_delete_account_fun_json(
  near: Near,
  signerId: string,
  beneficiary: string,
): Promise<FinalExecutionOutcome> {
  const result = await near
    .transaction(signerId)
    .deleteAccount({ beneficiary })
    .send();
  return result;
}
// =================================================
// copyright 2026 by sleet.near
