import { NETWORK_STORAGE_KEY, getStoredNetworkId } from "./new-hot";
// ===========================================
// Reads the current network via `getStoredNetworkId()`, which normalizes
// the stored value. Using the raw localStorage value here previously let
// a dirty value (e.g. "MainNet") normalize to "mainnet" while the toggle
// compared it against the literal "mainnet", so the toggle was a no-op
// and the UI could show one network while signing for another.
// ===========================================
export function toggleNetwork() {
  const newNetwork = getStoredNetworkId() === "mainnet" ? "testnet" : "mainnet";
  localStorage.setItem(NETWORK_STORAGE_KEY, newNetwork);
  console.info(newNetwork);
}
//
export function setNetwork_mainnet() {
  localStorage.setItem(NETWORK_STORAGE_KEY, "mainnet");
}
export function setNetwork_testnet() {
  localStorage.setItem(NETWORK_STORAGE_KEY, "testnet");
}
