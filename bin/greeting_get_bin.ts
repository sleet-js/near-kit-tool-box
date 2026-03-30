import {
  near_kit_env,
  hello_contractId_for_network_env,
} from "@near-kit-tool-box/env";
import { greeting_get_greeting_fun } from "@near-kit-tool-box/fun";
// ==============================================
console.log(
  await greeting_get_greeting_fun(
    near_kit_env,
    hello_contractId_for_network_env,
  ),
);
// ==============================================
