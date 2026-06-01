import { near_kit_env } from "../packages/env/src/index.js";
import { add_key_fun, delete_key_fun } from "../packages/fun/src/index.js";
// ==============================================
const signerId = "sleet.testnet";
const publicKeyFull = "ed25519:HDaBzemF6CYnQ2A3CgAh8vK7stWp5aXvKMKzKDe6s3QZ";
// ==============================================
console.log("=== Adding Full Access Key ===");
const fullAccessResult = await add_key_fun(
  near_kit_env,
  signerId,
  publicKeyFull,
  { type: "fullAccess" },
);
console.log(fullAccessResult);
// ==============================================
console.log("=== Deleting Full Access Key ===");
const deleteFullResult = await delete_key_fun(
  near_kit_env,
  signerId,
  publicKeyFull,
);
console.log(deleteFullResult);
// ==============================================
