import * as z from "zod";
// ================================================
export interface FT_METADATA_TYPE {
  spec: string;
  name: string;
  symbol: string;
  icon: string | null;
  reference: string | null;
  reference_hash: string | null;
  decimals: number;
}
// ================================================
export const FT_METADATA_TYPE_Z_CONST = z.object({
  spec: z.string(),
  name: z.string(),
  symbol: z.string(),
  icon: z.string().nullable(),
  reference: z.string().nullable(),
  reference_hash: z.string().nullable(),
  decimals: z.number(),
}) satisfies z.ZodType<FT_METADATA_TYPE>;
// ================================================
// copyright 2026 by sleet.near