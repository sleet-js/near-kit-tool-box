import {
  near_kit_env,
  rhea_contractId_for_network_env,
  wrap_contractId_for_network_env,
} from "@near-kit-tool-box/env";
import type { AmountInput } from "@near-kit-tool-box/fun";
import {
  wrap_near_deposit_fun,
  ft_transfer_call_fun,
  ref_swap_function,
} from "@near-kit-tool-box/fun";
import type { ref_swap_action_type } from "@near-kit-tool-box/fun";
// ==============================================
// complete flow
// 1. wrap NEAR
// 2. rhea storage deposit ❌
// 2. deposit/transfer to rhea
// 3. swap
// 4. withdraw ❌
// 5. un wrap ❌
// ==============================================
const amount_near: AmountInput = "2 NEAR";
const ft_contractId = wrap_contractId_for_network_env;
const receiver_id = rhea_contractId_for_network_env;
const msg = "";
const amount = "2000000000000000000000000"; // 2 NEAR
const swap_actions: ref_swap_action_type[] = [
  {
    pool_id: 2459,
    token_in: "wrap.testnet",
    amount_in: "2000000000000000000000000",
    token_out: "shit-237.factory.v10.meme-cooking.testnet",
    min_amount_out: "0",
  },
  {
    pool_id: 2459,
    token_in: "shit-237.factory.v10.meme-cooking.testnet",
    token_out: "wrap.testnet",
    min_amount_out: "0",
  },
];
// ==============================================
console.log("==============================================");
// console.log(
//   await wrap_near_deposit_fun(near_kit_env, ft_contractId, amount_near),
// );
console.log("==============================================");
// ==============================================
console.log("==============================================");
// console.log(
//   await ft_transfer_call_fun(
//     near_kit_env,
//     ft_contractId,
//     receiver_id,
//     msg,
//     amount,
//   ),
// );
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await ref_swap_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    swap_actions,
    "ref.huggies.testnet",
  ),
);
console.log("==============================================");
// ==============================================
