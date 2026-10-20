import {
  NEAR_NETWORK,
  near_kit_env,
} from "../packages/env/src/index.js";
import {
  near_create_account_fun_json,
  near_tld_contractid,
} from "../packages/fun/src/index.js";
// ==============================================
const new_public_key = "ed25519:56CJx1YrTJ6nBmJb8DoXwBm5HLHZcoyAt8FQDmcvkjFE"; // update before you run
const tld_contractId = near_tld_contractid(NEAR_NETWORK);
const new_account_id = "newaccounttests." + tld_contractId;
// ==============================================
console.log(
  await near_create_account_fun_json(
    near_kit_env,
    tld_contractId,
    new_account_id,
    new_public_key,
  ),
);
// ==============================================
