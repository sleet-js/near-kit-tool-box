import { near_kit_env } from "../packages/env/src/index.js";
import { delete_account_fun } from "../packages/fun/src/index.js";
// ==============================================
const signerId = "account.testnet"; // TODO: Replace with account to delete
const beneficiary = "beneficiary.testnet"; // TODO: Replace with beneficiary account
// ==============================================
console.log(
  await delete_account_fun(
    near_kit_env,
    signerId,
    beneficiary,
  ),
);
// ==============================================
