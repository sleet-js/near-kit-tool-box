import {
  NEAR_NETWORK,
  near_kit_env,
} from "../packages/env/src/index.js";
import {
  greeting_contractid,
  greeting_set_greeting_fun_json,
} from "../packages/fun/src/index.js";
// ==============================================
const greeting = "Hello from near kit bin";
// ==============================================
const greeting_contractId = greeting_contractid(NEAR_NETWORK);
// ==============================================
console.log(
  await greeting_set_greeting_fun_json(
    near_kit_env,
    greeting_contractId,
    greeting,
  ),
);
// ==============================================
