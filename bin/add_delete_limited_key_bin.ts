import {
  near_kit_env,
  rhea_contractId_for_network_env,
} from "../packages/env/src/index.js";
import { add_key_fun, delete_key_fun } from "../packages/fun/src/index.js";
// ==============================================
const signerId = "sleet.testnet";
const publicKeyLimited = "ed25519:9vnVSMT1hv2Q1vuZzbjStFieqGbTrwqe4KcvfqYAkb5T";
// ==============================================
console.log("=== Adding Limited Access Key (add_simple_pool on rhea) ===");
const limitedAccessResult = await add_key_fun(
  near_kit_env,
  signerId,
  publicKeyLimited,
  {
    type: "functionCall",
    receiverId: rhea_contractId_for_network_env,
    methodNames: ["add_simple_pool"],
  },
);
console.log(limitedAccessResult);
// ==============================================
console.log("=== Deleting Limited Access Key ===");
const deleteLimitedResult = await delete_key_fun(
  near_kit_env,
  signerId,
  publicKeyLimited,
);
console.log(deleteLimitedResult);
// ==============================================
