import { near_kit_env } from "../packages/env/src/index.js";
import { add_key_fun, delete_key_fun } from "../packages/fun/src/index.js";

const signerId = "sleet.testnet";
const publicKey = "ed25519:6NpfCCFDdqYNNEEXiVDxsc1JKCv87WDpMTxNZeorkhf";
const hello_contractId = "hello_contractId_for_network_env";

console.log("=== Adding Full Access Key ===");
const fullAccessResult = await add_key_fun(near_kit_env, signerId, publicKey, {
  type: "fullAccess",
});
console.log(fullAccessResult);

console.log("=== Adding Limited Access Key (set_greeting on hello_contract) ===");
const limitedAccessResult = await add_key_fun(
  near_kit_env,
  signerId,
  publicKey,
  {
    type: "functionCall",
    receiverId: hello_contractId,
    methodNames: ["set_greeting"],
  },
);
console.log(limitedAccessResult);

console.log("=== Deleting Key ===");
const deleteResult = await delete_key_fun(near_kit_env, signerId, publicKey);
console.log(deleteResult);