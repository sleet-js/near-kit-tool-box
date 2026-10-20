import {
  MY_ENV_NEAR_networkId,
  near_kit_env,
} from "../packages/env/src/index.js";
import {
  near_add_key_fun_json,
  near_delete_key_fun_json,
  rhea_ammv2_contractid,
} from "../packages/fun/src/index.js";
// ==============================================
const networkId: "mainnet" | "testnet" =
  MY_ENV_NEAR_networkId === "mainnet" ? "mainnet" : "testnet";
const rhea_contractId = rhea_ammv2_contractid(networkId);
const signerId = "sleet.testnet";
const publicKeyLimited = "ed25519:9vnVSMT1hv2Q1vuZzbjStFieqGbTrwqe4KcvfqYAkb5T";
// ==============================================
console.log("=== Adding Limited Access Key (add_simple_pool on rhea) ===");
const limitedAccessResult = await near_add_key_fun_json(
  near_kit_env,
  signerId,
  publicKeyLimited,
  {
    type: "functionCall",
    receiverId: rhea_contractId,
    methodNames: ["add_simple_pool"],
    allowance: "1 NEAR",
  },
);
console.log(limitedAccessResult);
// ==============================================
console.log("=== Deleting Limited Access Key ===");
const deleteLimitedResult = await near_delete_key_fun_json(
  near_kit_env,
  signerId,
  publicKeyLimited,
);
console.log(deleteLimitedResult);
// ==============================================
