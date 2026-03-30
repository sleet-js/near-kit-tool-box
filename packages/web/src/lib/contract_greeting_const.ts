// ===========================================
// web-only version - no dotenv dependency
import { getStoredNetworkId } from "../new-hot";
// ===========================================
const hello_testnet_contractId_const = "hello.sleet.testnet";
const hello_mainnet_contractId_const = "hello.sleet.near";
// ===========================================
// web
export function hello_contractId_for_network_web() {
  const networkId = getStoredNetworkId();
  const hello_contractId =
    networkId === "testnet"
      ? hello_testnet_contractId_const
      : hello_mainnet_contractId_const;
  console.log("hello contractId", hello_contractId);
  return hello_contractId;
}
// ===========================================
// contact methods
export const greeting_contract_methods = {
  get_greeting: "get_greeting",
  set_greeting: "set_greeting",
};
// ===========================================
