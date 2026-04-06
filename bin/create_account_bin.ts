import { near_kit_env, near_tld_for_network_env } from "../packages/env/src/index.js";
import { near_create_account_near_fun } from "../packages/fun/src/index.js";
// ==============================================
const near_contractId = "near." + near_tld_for_network_env; // NEAR account creation contract
const new_account_id = "newaccount." + near_tld_for_network_env; // TODO: Replace with new account ID
const new_public_key = "ed25519:..."; // TODO: Replace with new public key
// ==============================================
console.log(
  await near_create_account_near_fun(
    near_kit_env,
    near_contractId,
    new_account_id,
    new_public_key,
  ),
);
// ==============================================
