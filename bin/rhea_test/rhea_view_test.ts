import {
  near_kit_env,
  rhea_contractId_for_network_env,
} from "../../packages/env/src/index.js";
import {
  ref_get_number_of_pools_function,
  ref_get_pool_function,
  ref_get_pools_function,
  ref_get_deposits_function,
  ref_get_return_function,
  ref_storage_balance_of_function,
} from "../../packages/fun/src/index.js";
// ==============================================
console.log("==============================================");
console.log(
  await ref_get_number_of_pools_function(
    near_kit_env,
    rhea_contractId_for_network_env,
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await ref_get_pool_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    100,
  ),
);
console.log("==============================================");

// ==============================================
console.log("==============================================");
console.log(
  await ref_get_pools_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    0,
    10,
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await ref_get_deposits_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    "sleet.testnet",
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await ref_storage_balance_of_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    "sleet.testnet",
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await ref_get_return_function(
    near_kit_env,
    rhea_contractId_for_network_env,
    2459,
    "shit-237.factory.v10.meme-cooking.testnet",
    "1000",
    "wrap.testnet",
  ),
);
console.log("==============================================");
// ==============================================
