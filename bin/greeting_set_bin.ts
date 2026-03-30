import {
  near_kit_env,
  hello_contractId_for_network_env,
} from "../packages/env/src/index.js";
import { greeting_set_greeting_fun } from "../packages/fun/src/index.js";
// ==============================================
const greeting = "Hello from near kit bin";
// ==============================================
console.log(
  await greeting_set_greeting_fun(
    near_kit_env,
    hello_contractId_for_network_env,
    greeting,
  ),
);
// ==============================================
