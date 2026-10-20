// =================================================
// wrap_near_deposit_fun_json
//
// Call: `near_deposit` on the wrap.near contract. Wraps `amount`
// NEAR into wNEAR (NEP-141) at the wrap.near contract. The wrap.near
// contract id (`wrap.testnet` / `wrap.near`) is resolved by the caller.
import type { FinalExecutionOutcome, Near } from "near-kit";
import { wrap_near_methods_const } from "../../lib/methods/methods_wrap_near";
import type { AmountInput } from "../../types/AmountInput";
// =================================================
export async function wrap_near_deposit_fun_json(
  near: Near,
  wrap_contractId: string,
  amount: AmountInput,
): Promise<FinalExecutionOutcome> {
  const result = await near.call(
    wrap_contractId,
    wrap_near_methods_const.near_deposit,
    {},
    { attachedDeposit: amount },
  );
  return result;
}
// =================================================
// copyright 2026 by sleet.near
