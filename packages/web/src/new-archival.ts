import { Near } from "near-kit";
// ==============================================
const NETWORK_STORAGE_KEY = "network_id"; // used for network toggle
// ==============================================
// Create a NEAR instance using the connector
const near_kit_mainnet_archival = new Near({
  network: "mainnet",
  rpcUrl: "https://archival-rpc.mainnet.fastnear.com",
});
const near_kit_testnet_archival = new Near({
  network: "mainnet",
  rpcUrl: "https://archival-rpc.testnet.fastnear.com",
});
// ==============================================
function getStoredNetworkId(): "mainnet" | "testnet" {
  const raw = localStorage.getItem(NETWORK_STORAGE_KEY);
  const value = (raw || "mainnet").trim().toLowerCase();
  return value === "testnet" ? "testnet" : "mainnet";
}
// ==============================================
// ==============================================
export function near_kit_client_archival() {
  const networkId = getStoredNetworkId();
  const client =
    networkId === "testnet"
      ? near_kit_testnet_archival
      : near_kit_mainnet_archival;
  console.log("[near_kit_client] networkId:", networkId);
  console.log(
    "[near_kit_client] client:",
    networkId === "testnet"
      ? "near_kit_testnet_archival"
      : "near_kit_mainnet_archival",
  );

  return client;
}
// ==============================================
// ==============================================
// copyright: 2026 by sleet.near
