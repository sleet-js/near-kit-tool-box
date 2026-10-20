import { NEAR_NETWORK, near_kit_env } from "../../packages/env/src/index.js";
import {
  rhea_ammv2_contractid,
  rhea_ammv2_get_deposits_fun_json,
  rhea_ammv2_get_number_of_pools_fun_json,
  rhea_ammv2_get_pool_fun_json,
  rhea_ammv2_get_pools_fun_json,
  rhea_ammv2_get_return_fun_json,
  rhea_ammv2_storage_balance_of_fun_json,
} from "../../packages/fun/src/index.js";
// ==============================================
const rhea_contractId = rhea_ammv2_contractid(NEAR_NETWORK);
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_number_of_pools_fun_json(near_kit_env, rhea_contractId),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_pool_fun_json(near_kit_env, rhea_contractId, 100),
);
console.log("==============================================");

// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_pools_fun_json(near_kit_env, rhea_contractId, 0, 10),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_deposits_fun_json(
    near_kit_env,
    rhea_contractId,
    "sleet.testnet",
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_storage_balance_of_fun_json(
    near_kit_env,
    rhea_contractId,
    "sleet.testnet",
  ),
);
console.log("==============================================");
// ==============================================
console.log("==============================================");
console.log(
  await rhea_ammv2_get_return_fun_json(
    near_kit_env,
    rhea_contractId,
    2459,
    "shit-237.factory.v10.meme-cooking.testnet",
    "1000",
    "wrap.testnet",
  ),
);
console.log("==============================================");
// ==============================================
