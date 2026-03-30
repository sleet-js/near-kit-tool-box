import { NearConnector } from "@hot-labs/near-connect";
import { Near, fromHotConnect } from "near-kit";
// ==============================================
export const NETWORK_STORAGE_KEY = "network_id"; // used for network toggle
// ==============================================
// Initialize the connector
const near_connect_mainnet = new NearConnector({ network: "mainnet" });
const near_connect_testnet = new NearConnector({ network: "testnet" });
// ==============================================
// Create a NEAR instance using the connector
// Type assertion needed for near-kit 0.12.0+ compatibility
const near_kit_mainnet = new Near({
  network: "mainnet",
  wallet: fromHotConnect(near_connect_mainnet as any),
});
const near_kit_testnet = new Near({
  network: "testnet",
  wallet: fromHotConnect(near_connect_testnet as any),
});
// ==============================================
export function getStoredNetworkId(): "mainnet" | "testnet" {
  const raw = localStorage.getItem(NETWORK_STORAGE_KEY);
  const value = (raw || "mainnet").trim().toLowerCase();
  return value === "testnet" ? "testnet" : "mainnet";
}
// ==============================================
// ==============================================
export function near_kit_client() {
  const networkId = getStoredNetworkId();
  const client = networkId === "testnet" ? near_kit_testnet : near_kit_mainnet;
  console.log("[near_kit_client] networkId:", networkId);
  console.log(
    "[near_kit_client] client:",
    networkId === "testnet" ? "near_kit_testnet" : "near_kit_mainnet",
  );

  return client;
}
// ==============================================
export function near_connect_client() {
  const networkId = getStoredNetworkId();
  const client =
    networkId === "testnet" ? near_connect_testnet : near_connect_mainnet;
  console.log("[near_connect_client] networkId:", networkId);
  console.log(
    "[near_connect_client] client:",
    networkId === "testnet" ? "near_connect_testnet" : "near_connect_mainnet",
  );

  return client;
}
// ==============================================
// ==============================================
// copyright: 2026 by sleet.near
