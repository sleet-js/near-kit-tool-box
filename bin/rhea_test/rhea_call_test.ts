import {
  NEAR_NETWORK,
  near_kit_env,
} from "../../packages/env/src/index.js";
import type {
  AmountInput,
  rhea_ammv2_swap_action_type,
} from "../../packages/fun/src/index.js";
import {
  ft_transfer_call_fun_json,
  rhea_ammv2_contractid,
  rhea_ammv2_swap_fun_json,
  wrap_near_contractid,
  wrap_near_deposit_fun_json,
} from "../../packages/fun/src/index.js";
// ==============================================
// complete flow
// 1. wrap NEAR
// 2. rhea storage deposit ❌
// 2. deposit/transfer to rhea
// 3. swap
// 4. withdraw ❌
// 5. un wrap ❌
// ==============================================
const rhea_contractId = rhea_ammv2_contractid(NEAR_NETWORK);
const ft_contractId = wrap_near_contractid(NEAR_NETWORK);
const amount_near: AmountInput = "2 NEAR";
const receiver_id = rhea_contractId;
const msg = "";
const amount = "2000000000000000000000000"; // 2 NEAR
const swap_actions: rhea_ammv2_swap_action_type[] = [
  {
    pool_id: 2459,
    token_in: ft_contractId,
    amount_in: "2000000000000000000000000",
    token_out: "shit-237.factory.v10.meme-cooking.testnet",
    min_amount_out: "0",
  },
  {
    pool_id: 2459,
    token_in: "shit-237.factory.v10.meme-cooking.testnet",
    token_out: ft_contractId,
    min_amount_out: "0",
  },
];
// ==============================================
console.log("==============================================");
// console.log(
//   await wrap_near_deposit_fun_json(near_kit_env, ft_contractId, amount_near),
// );
console.log("==============================================");
// ==============================================
console.log("==============================================");
// console.log(
//   await ft_transfer_call_fun_json(
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
  await rhea_ammv2_swap_fun_json(
    near_kit_env,
    rhea_contractId,
    swap_actions,
    "ref.huggies.testnet",
  ),
);
console.log("==============================================");
// ==============================================
