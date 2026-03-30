// ================================================
export interface ref_args_params_interface {
  from_index: number;
  limit: number;
  fee: number;
  tokens: string[];
  account_id: string;
  deposit: string;
  token_id: string;
  amount: string;
  referral_id: string;
  // swap actions
  pool_id: number;
  token_in: string;
  amount_in: string;
  token_out: string;
  min_amount_out: string;
}
// ================================================
export type ref_swap_action_type = {
  pool_id: number;
  token_in: string;
  amount_in?: string;
  token_out: string;
  min_amount_out: string;
};
// ================================================
// The full args object for the swap function
export interface ref_swap_function_args {
  actions: ref_swap_action_type[];
  referral_id: ref_args_params_interface["referral_id"];
}
// ================================================
// export interface ref_get_return_function_args {
//   pool_id: number;
//   token_in: string;
//   amount_in: string;
//   token_out: string;
// }
// ================================================
// ================================================
