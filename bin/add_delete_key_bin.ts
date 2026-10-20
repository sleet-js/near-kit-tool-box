import { near_kit_env } from "../packages/env/src/index.js";
import {
  near_add_key_fun_json,
  near_delete_key_fun_json,
} from "../packages/fun/src/index.js";
// ==============================================
const signerId = "sleet.testnet";
const publicKeyFull = "ed25519:HDaBzemF6CYnQ2A3CgAh8vK7stWp5aXvKMKzKDe6s3QZ";
// ==============================================
console.log("=== Adding Full Access Key ===");
const fullAccessResult = await near_add_key_fun_json(
  near_kit_env,
  signerId,
  publicKeyFull,
  { type: "fullAccess" },
);
console.log(fullAccessResult);
// ==============================================
console.log("=== Deleting Full Access Key ===");
const deleteFullResult = await near_delete_key_fun_json(
  near_kit_env,
  signerId,
  publicKeyFull,
);
console.log(deleteFullResult);
// ==============================================
