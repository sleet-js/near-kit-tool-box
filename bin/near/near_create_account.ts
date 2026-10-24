// =================================================
// bin/near/near_create_account.ts
//
// Call: creates a sub-account on the TLD registrar / linkdrop contract
// and grants `new_public_key` full access on it.
//
// usage:
//   bun run bin/near/near_create_account.ts --account-id <new_account_id> --public-key <ed25519:...>
//     [--tld-contract-id <id>]
// =================================================
import { parseArgs, requireString } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  near_tld_contractid,
  NEAR_KIT_NETWORK,
  requireSigner,
  resolveContractId,
} from "../_shared/env.js";
import { near_create_account_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/near/near_create_account.ts --account-id <new_account_id> --public-key <ed25519:...> [--tld-contract-id <id>]";
const args = parseArgs();
const newAccountId = requireString(args, "account-id", usage);
const newPublicKey = requireString(args, "public-key", usage);
requireSigner(usage);
const tldContractId = resolveContractId(
  typeof args["tld-contract-id"] === "string"
    ? args["tld-contract-id"]
    : undefined,
  near_tld_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `create_account ${newAccountId} @ ${tldContractId} (${NEAR_KIT_NETWORK})`,
  await near_create_account_fun_json(
    near_kit_env,
    tldContractId,
    newAccountId,
    newPublicKey,
  ),
);
// =================================================
// copyright 2026 by sleet.near
