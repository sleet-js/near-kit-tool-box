import {
  near_kit_env,
  rhea_contractId_for_network_env,
} from "../../packages/env/src/index.js";
import {
  rhea_ammv2_get_number_of_pools_fun_json,
  rhea_ammv2_get_pool_fun_json,
  rhea_ammv2_get_pools_fun_json,
  rhea_ammv2_get_deposits_fun_json,
  rhea_ammv2_get_return_fun_json,
  rhea_ammv2_storage_balance_of_fun_json,
} from "../../packages/fun/src/index.js";
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_number_of_pools_fun_json(
    near_kit_env,
    rhea_contractId_for_network_env,
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_pool_fun_json(
    near_kit_env,
    rhea_contractId_for_network_env,
    100,
  ),
);
console.log("==============================================");

// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_pools_fun_json(
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
  await rhea_ammv2_get_deposits_fun_json(
    near_kit_env,
    rhea_contractId_for_network_env,
    "sleet.testnet",
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_storage_balance_of_fun_json(
    near_kit_env,
    rhea_contractId_for_network_env,
    "sleet.testnet",
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_return_fun_json(
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
