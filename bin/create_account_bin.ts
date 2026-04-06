import { near_kit_env, near_tld_for_network_env } from "../packages/env/src/index.js";
import { near_create_account_near_fun } from "../packages/fun/src/index.js";
// ==============================================
const new_account_id = "newaccounttests." + near_tld_for_network_env;
const new_public_key = "ed25519:..."; // TODO: Replace with new public key
// ==============================================
console.log(
  await near_create_account_near_fun(
    near_kit_env,
    near_tld_for_network_env,
    new_account_id,
    new_public_key,
  ),
);
// ==============================================
