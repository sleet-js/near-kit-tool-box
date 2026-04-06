import { near_kit_env } from "../packages/env/src/index.js";
import { delete_account_fun } from "../packages/fun/src/index.js";
// ==============================================
const signerId = "newaccounttests.testnet"; // TODO: Replace with account to delete
const beneficiary = "sleet.testnet"; // TODO: Replace with beneficiary account
// ==============================================
console.log(await delete_account_fun(near_kit_env, signerId, beneficiary));
// ==============================================
