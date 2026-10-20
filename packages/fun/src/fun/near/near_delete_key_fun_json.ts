// =================================================
// near_delete_key_fun_json
//
// Local NEAR account action: delete access key `publicKey` from
// `signerId`. The transaction is signed and submitted through the
// supplied `near` client.
import type { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";
// =================================================
export async function near_delete_key_fun_json(
  near: Near,
  signerId: string,
  publicKey: string,
): Promise<FinalExecutionOutcome> {
  const result = await near
    .transaction(signerId)
    .deleteKey(signerId, publicKey)
    .send();
  return result;
}
// =================================================
// copyright 2026 by sleet.near
