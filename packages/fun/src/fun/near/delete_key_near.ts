import { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";

export async function delete_key_fun(
  near: Near,
  signerId: string,
  publicKey: string,
) {
  const result = await near
    .transaction(signerId)
    .deleteKey(signerId, publicKey)
    .send();
  return result as FinalExecutionOutcome;
}