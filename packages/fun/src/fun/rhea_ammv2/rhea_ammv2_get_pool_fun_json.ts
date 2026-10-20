// =================================================
// rhea_ammv2_get_pool_fun_json
//
// View: `get_pool`. Returns the pool descriptor at `pool_id` as raw
// JSON. (If you'd like the parsed shape see
// `RHEA_AMMV2_GET_POOL_TYPE`.)
import type { Near } from "near-kit";
import { rhea_ammv2_methods_const } from "../../lib/methods/methods_rhea_ammv2";
import type { rhea_ammv2_args } from "../../lib/args/rhea_ammv2_args";
// =================================================
export async function rhea_ammv2_get_pool_fun_json(
  near: Near,
  rhea_ammv2_contractId: string,
  pool_id: rhea_ammv2_args["pool_id"],
): Promise<unknown> {
  const result = await near.view(
    rhea_ammv2_contractId,
    rhea_ammv2_methods_const.get_pool,
    { pool_id },
  );
  return result;
}
// =================================================
// copyright 2026 by sleet.near
