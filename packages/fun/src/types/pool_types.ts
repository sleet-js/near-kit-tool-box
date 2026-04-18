// ===========================================
interface POOL_GET_ACCOUNTS_ACCOUNT_INTERFACE {
  account_id: string;
  unstaked_balance: string;
  staked_balance: string;
  can_withdraw: boolean;
}
// ===========================================
export type POOL_GET_ACCOUNTS_ACCOUNTS_TYPE =
  POOL_GET_ACCOUNTS_ACCOUNT_INTERFACE[];
// ===========================================
