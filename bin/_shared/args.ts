// =================================================
// bin/_shared/args.ts
//
// Tiny zero-dependency CLI flag parser shared by every bin.
//
// Usage:  bun run bin/<folder>/<name>.ts --flag value --flag2 value2
//
// Rules:
//   - `--flag value` and `--flag=value` are both accepted.
//   - Boolean flags take no value (`--flag`) and resolve to `true`.
//   - `--no-flag` resolves a boolean flag to `false`.
//   - Unknown flags are ignored so callers can pass extras safely.
// =================================================
import type { AmountInput } from "../../packages/fun/src/index.js";

export type Args = Record<string, string | boolean>;

// =================================================
// Parses `process.argv.slice(2)` into a flat flag map.
export function parseArgs(argv: string[] = process.argv.slice(2)): Args {
  const args: Args = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === undefined) continue;
    if (!token.startsWith("--")) continue;

    const body = token.slice(2);
    const eq = body.indexOf("=");
    if (eq !== -1) {
      args[body.slice(0, eq)] = body.slice(eq + 1);
      continue;
    }

    // `--no-flag` -> flag = false
    if (body.startsWith("no-")) {
      args[body.slice(3)] = false;
      continue;
    }

    const next = argv[i + 1];
    if (next !== undefined && !next.startsWith("--")) {
      args[body] = next;
      i++;
    } else {
      args[body] = true;
    }
  }
  return args;
}

// =================================================
// Reads a required string flag. Exits with a usage hint when missing.
export function requireString(args: Args, flag: string, usage: string): string {
  const value = args[flag];
  if (typeof value !== "string" || value.length === 0) {
    fail(`missing required flag --${flag}`, usage);
  }
  return value;
}

// =================================================
// Reads an optional string flag, falling back to `fallback`.
export function optionalString(
  args: Args,
  flag: string,
  fallback: string,
): string {
  const value = args[flag];
  if (typeof value !== "string" || value.length === 0) return fallback;
  return value;
}

// =================================================
// Reads a required integer flag. Exits when missing or not an integer.
export function requireNumber(args: Args, flag: string, usage: string): number {
  const value = args[flag];
  if (typeof value !== "string") {
    fail(`missing required flag --${flag}`, usage);
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    fail(`flag --${flag} must be a number (got "${value}")`, usage);
  }
  return parsed;
}

// =================================================
// Reads an optional integer flag, falling back to `fallback`.
export function optionalNumber(
  args: Args,
  flag: string,
  fallback: number,
): number {
  const value = args[flag];
  if (typeof value !== "string") return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    fail(`flag --${flag} must be a number (got "${value}")`, "");
  }
  return parsed;
}

// =================================================
// Reads a comma separated list flag into a string array.
export function requireList(args: Args, flag: string, usage: string): string[] {
  const value = requireString(args, flag, usage);
  const list = value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  if (list.length === 0) {
    fail(`flag --${flag} must contain at least one value`, usage);
  }
  return list;
}

// =================================================
// Reads an amount flag and narrows it to the `AmountInput` shape the
// fun helpers expect: `"<number> NEAR"`, `"<bigint> yocto"`, or a
// bigint. Anything else is rejected with a clear message.
export function requireAmount(
  args: Args,
  flag: string,
  usage: string,
): AmountInput {
  const value = requireString(args, flag, usage).trim();
  const nearMatch = /^(\d+(?:\.\d+)?)\s+NEAR$/.exec(value);
  if (nearMatch) return `${nearMatch[1]} NEAR` as AmountInput;
  const yoctoMatch = /^(\d+)\s+yocto$/.exec(value);
  if (yoctoMatch) return `${yoctoMatch[1]} yocto` as AmountInput;
  if (/^\d+$/.test(value)) return BigInt(value);
  fail(
    `flag --${flag} must be an amount like "2 NEAR", "1000 yocto", or a raw yocto integer (got "${value}")`,
    usage,
  );
}

// =================================================
// Prints an error plus the usage line, then exits with code 1.
export function fail(message: string, usage: string): never {
  console.error(`error: ${message}`);
  if (usage) console.error(`usage: ${usage}`);
  process.exit(1);
}

// =================================================
// Prints a friendly "not configured" message and exits with code 1.
// Used by bins that need a signer (account id + private key).
export function failMissingSigner(usage: string): never {
  console.error("error: a signer is required for this call.");
  console.error(
    "  set NEAR_KIT_ACCOUNT_ID and NEAR_KIT_PRIVATE_KEY in your .env file",
  );
  console.error("  (see .env.example), or export them in the shell.");
  if (usage) console.error(`usage: ${usage}`);
  process.exit(1);
}
// =================================================
// copyright 2026 by sleet.near
