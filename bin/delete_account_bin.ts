import { near_kit_env } from "../packages/env/src/index.js";
import { near_delete_account_fun_json } from "../packages/fun/src/index.js";
// ==============================================
const signerId = "newaccounttests.testnet"; // TODO: Replace with account to delete
const beneficiary = "sleet.testnet"; // TODO: Replace with beneficiary account
// ==============================================
console.log(
  await near_delete_account_fun_json(near_kit_env, signerId, beneficiary),
);
// ==============================================
