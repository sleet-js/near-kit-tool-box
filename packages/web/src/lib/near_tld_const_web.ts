// ===========================================
// web-only version - no dotenv dependency
import { getStoredNetworkId } from "../new-hot";
// ===========================================
const near_testnet_tld = "testnet";
const near_mainnet_tld = "near";
// ===========================================
// web
export function near_tld_for_network_web() {
  const networkId = getStoredNetworkId();
  const near_tld =
    networkId === "testnet" ? near_testnet_tld : near_mainnet_tld;
  console.log("near tld", near_tld);
  return near_tld;
}
// ===========================================
