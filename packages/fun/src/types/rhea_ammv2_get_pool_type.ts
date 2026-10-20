import * as z from "zod";
// =================================================
// RHEA_AMMV2_GET_POOL_TYPE
//
// Shape returned by the rhea_ammv2 `get_pool` and `get_pools` view
// calls.
// =================================================

export interface RHEA_AMMV2_GET_POOL_TYPE {
  pool_kind: string;
  token_account_ids: string[];
  amounts: string[];
  total_fee: number;
  shares_total_supply: string;
  amp: number;
}

export const RHEA_AMMV2_GET_POOL_TYPE_Z_CONST = z.object({
  pool_kind: z.string(),
  token_account_ids: z.array(z.string()),
  amounts: z.array(z.string()),
  total_fee: z.number(),
  shares_total_supply: z.string(),
  amp: z.number(),
}) satisfies z.ZodType<RHEA_AMMV2_GET_POOL_TYPE>;

export const RHEA_AMMV2_GET_POOLS_TYPE_Z_CONST = z.array(
  RHEA_AMMV2_GET_POOL_TYPE_Z_CONST,
);
// =================================================
// copyright 2026 by sleet.near
