// =================================================
// methods_near
//
// Method name constants for the `near` (mainnet) and `testnet`
// (testnet) top-level-domain registrar / linkdrop contracts. Both
// contracts share the `near-linkdrop` source — only the deploy account
// differs.
// =================================================
export const near_methods_const = {
  claim: "claim",
  contract_source_metadata: "contract_source_metadata",
  create_account: "create_account",
  create_account_advanced: "create_account_advanced",
  create_account_and_claim: "create_account_and_claim",
  get_key_balance: "get_key_balance",
  get_key_information: "get_key_information",
  new: "new",
  on_account_created: "on_account_created",
  on_account_created_and_claimed: "on_account_created_and_claimed",
  send: "send",
} as const;
// =================================================
// copyright 2026 by sleet.near
