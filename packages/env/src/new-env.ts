import { Near } from "near-kit";
import type { PrivateKey } from "near-kit";
// ==============================================
// Load environment variables from .env file
import * as dotenv from "dotenv";
dotenv.config();
// ==============================================
// MY_ENV
export const MY_ENV_NEAR_networkId:
  | "mainnet"
  | "testnet"
  | "localnet"
  | "betanet"
  | { rpcUrl: string; networkId: string } =
  (process.env.env_networkId as
    | "mainnet"
    | "testnet"
    | "localnet"
    | "betanet") || "testnet";
export const MY_ENV_NEAR_accountId: string = process.env.env_accountId!;
export const MY_ENV_NEAR_publicKey = process.env.env_publicKey;
// Handle private key format (with or without ed25519: prefix)
export const MY_ENV_NEAR_privateKey: PrivateKey | undefined = process.env
  .env_privateKey as PrivateKey | undefined;
// ==============================================
// Initialize for backend/scripts
export const near_kit_env = new Near({
  network: MY_ENV_NEAR_networkId,
  privateKey: MY_ENV_NEAR_privateKey,
  defaultSignerId: MY_ENV_NEAR_accountId,
});
// ==============================================
