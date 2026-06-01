import { Near } from "near-kit";
import type { FinalExecutionOutcome } from "near-kit";

export async function add_key_fun(
  near: Near,
  signerId: string,
  publicKey: string,
  permission: Parameters<ReturnType<typeof near.transaction>["addKey"]>[1],
) {
  const result = await near
    .transaction(signerId)
    .addKey(publicKey, permission)
    .send();
  return result as FinalExecutionOutcome;
}