import { Near } from "near-kit";
import type { PrivateKey } from "near-kit";
// ==============================================
// Load environment variables from .env file
import * as dotenv from "dotenv";
dotenv.config();
// ==============================================
// NETWORK_ID values are exactly `mainnet` or `testnet`. To target a
// custom RPC URL, build a `Near` instance yourself with
// `new Near({ rpcUrl, ... })` instead of using `near_kit_env`.
export const NEAR_NETWORK: "mainnet" | "testnet" =
  (process.env.NEAR_NETWORK as "mainnet" | "testnet") || "testnet";

export const NEAR_ACCOUNT_ID: string = process.env.NEAR_ACCOUNT_ID ?? "";

export const NEAR_PRIVATE_KEY: PrivateKey | undefined =
  process.env.NEAR_PRIVATE_KEY as PrivateKey | undefined;

// ==============================================
// Initialize for backend/scripts
export const near_kit_env = new Near({
  network: NEAR_NETWORK,
  privateKey: NEAR_PRIVATE_KEY,
  defaultSignerId: NEAR_ACCOUNT_ID,
});
// ==============================================
// copyright 2026 by sleet.near
