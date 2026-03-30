import { Near } from "near-kit";
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import type { ref_args_params_interface } from "../../lib/contract_rhea_args";
import type {
  REF_GET_POOL_TYPE,
  REF_GET_DEPOSITS_TYPE,
  STORAGE_BALANCE_OF_RESPONSE_TYPE,
} from "../../types/rhea_ref_types";
import {
  REF_GET_POOL_TYPE_Z_CONST,
  REF_GET_POOLS_TYPE_Z_CONST,
} from "../../types/rhea_ref_types";
// ===========================================
// view
// get_number_of_pools
// get_pool
// get_deposits
// get_pools
// get_return
// storage_balance_of
// ===========================================
// ===========================================
// ref_get_number_of_pools_function
export async function ref_get_number_of_pools_function(
  near: Near,
  rhea_contractId: string,
): Promise<number> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.get_number_of_pools,
    {},
  );
  return result as number;
}
// ===========================================
// ref_get_pool_function
export async function ref_get_pool_function(
  near: Near,
  rhea_contractId: string,
  pool_id: ref_args_params_interface["pool_id"],
): Promise<REF_GET_POOL_TYPE> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.get_pool,
    { pool_id: pool_id },
  );
  return REF_GET_POOL_TYPE_Z_CONST.parse(result);
}
// ===========================================
// ref_get_deposits_function
export async function ref_get_deposits_function(
  near: Near,
  rhea_contractId: string,
  accountId: ref_args_params_interface["account_id"],
): Promise<REF_GET_DEPOSITS_TYPE> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.get_deposits,
    { account_id: accountId },
  );
  return result as REF_GET_DEPOSITS_TYPE;
}
// ===========================================
// ref_get_pools_function
export async function ref_get_pools_function(
  near: Near,
  rhea_contractId: string,
  from_index: ref_args_params_interface["from_index"],
  limit: ref_args_params_interface["limit"],
): Promise<REF_GET_POOL_TYPE[]> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.get_pools,
    { from_index: from_index, limit: limit },
  );
  return REF_GET_POOLS_TYPE_Z_CONST.parse(result);
}
// ===========================================
// ref_get_return_function
export async function ref_get_return_function(
  near: Near,
  rhea_contractId: string,
  pool_id: ref_args_params_interface["pool_id"],
  token_in: ref_args_params_interface["token_in"],
  amount_in: ref_args_params_interface["amount_in"],
  token_out: ref_args_params_interface["token_out"],
): Promise<string> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.get_return,
    {
      pool_id: pool_id,
      token_in: token_in,
      amount_in: amount_in,
      token_out: token_out,
    },
  );
  return result as string;
}
// ================================================
// ref_get_deposits_function
export async function ref_storage_balance_of_function(
  near: Near,
  rhea_contractId: string,
  accountId: ref_args_params_interface["account_id"],
): Promise<STORAGE_BALANCE_OF_RESPONSE_TYPE> {
  const result = await near.view(
    rhea_contractId,
    ref_exchange_methods_const.storage_balance_of,
    { account_id: accountId },
  );
  return result as STORAGE_BALANCE_OF_RESPONSE_TYPE;
}
// ===========================================
// ===========================================
