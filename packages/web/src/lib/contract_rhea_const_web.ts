// ===========================================
// web-only version - no dotenv dependency
export { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import {
  ref_mainnet_contractId_const,
  ref_testnet_contractId_const,
} from "@sleet-js/ref-exchange-methods-const";
import { getStoredNetworkId } from "../new-hot";
// ===========================================
// web
export function rhea_contractId_for_network_web() {
  const networkId = getStoredNetworkId();
  const rhea_contractId =
    networkId === "testnet"
      ? ref_testnet_contractId_const
      : ref_mainnet_contractId_const;
  console.log("rhea contractId", rhea_contractId);
  return rhea_contractId;
}
// ===========================================
