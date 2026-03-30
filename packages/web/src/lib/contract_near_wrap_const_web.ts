// ===========================================
// web-only version - no dotenv dependency
export { wrap_near_methods_const } from "@sleet-js/wrap-near-contract-methods-const";
import { getStoredNetworkId } from "../new-hot";
// ===========================================
const wrap_testnet_contractId_const = "wrap.testnet";
const wrap_mainnet_contractId_const = "wrap.near";
// ===========================================
// web
export function wrap_contractId_for_network_web() {
  const networkId = getStoredNetworkId();
  const wrap_contractId =
    networkId === "testnet"
      ? wrap_testnet_contractId_const
      : wrap_mainnet_contractId_const;
  console.log("wrap near contractId", wrap_contractId);
  return wrap_contractId;
}
// ===========================================
