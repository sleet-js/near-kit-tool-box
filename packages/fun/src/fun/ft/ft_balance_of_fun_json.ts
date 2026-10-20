// =================================================
// ft_balance_of_fun_json
//
// View (NEP-145): `ft_balance_of`. Returns the call's token balance
// (decimal string) for `account_id` as raw JSON.
import type { Near } from "near-kit";
import { ft_methods_const } from "../../lib/methods/methods_ft";
import type { ft_args } from "../../lib/args/ft_args";
// =================================================
export async function ft_balance_of_fun_json(
  near: Near,
  ft_contractId: string,
  account_id: ft_args["account_id"],
): Promise<string> {
  const result = await near.view(
    ft_contractId,
    ft_methods_const.ft_balance_of,
    { account_id },
  );
  return result as string;
}
// =================================================
// copyright 2026 by sleet.near
