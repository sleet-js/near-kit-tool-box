import {
  MY_ENV_NEAR_networkId,
  near_kit_env,
} from "../packages/env/src/index.js";
import {
  greeting_contractid,
  greeting_set_greeting_fun_json,
} from "../packages/fun/src/index.js";
// ==============================================
const greeting = "Hello from near kit bin";
// ==============================================
const networkId: "mainnet" | "testnet" =
  MY_ENV_NEAR_networkId === "mainnet" ? "mainnet" : "testnet";
const greeting_contractId = greeting_contractid(networkId);
// ==============================================
console.log(
  await greeting_set_greeting_fun_json(
    near_kit_env,
    greeting_contractId,
    greeting,
  ),
);
// ==============================================
