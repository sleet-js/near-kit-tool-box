import { near_kit_env } from "../../packages/env/src/index.js";
import { ft_balance_of_fun } from "../../packages/fun/src/index.js";
// ==============================================
const shit_ca = "shit-237.factory.v10.meme-cooking.testnet";
const account_id = "sleet.testnet";
// ==============================================
console.log(await ft_balance_of_fun(near_kit_env, shit_ca, account_id));
// ==============================================
