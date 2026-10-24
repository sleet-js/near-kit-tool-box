// =================================================
// bin/rhea_ammv2/rhea_swap.ts
//
// Call: submits a swap to the AMM.
//
// Each swap action is described by a set of flags. Actions are chained
// in the order they appear on the command line; repeat the same flags
// to add another action.
//
//   --pool-id <id>            (required for every action)
//   --token-in <id>           (required for the first action)
//   --token-out <id>          (required for every action)
//   --amount-in <raw>         (optional; the contract forwards the
//                              incoming token amount when omitted)
//   --min-amount-out <raw>    (defaults to "0")
//
// Examples:
//
//   # single hop
//   bun run bin/rhea_ammv2/rhea_swap.ts \
//     --pool-id 2459 \
//     --token-in wrap.testnet \
//     --token-out shit-237.factory.v10.meme-cooking.testnet \
//     --amount-in 1000000000000000000000000 \
//     --min-amount-out 0
//
//   # two hops (out of action 1 feeds the next action)
//   bun run bin/rhea_ammv2/rhea_swap.ts \
//     --pool-id 2459 --token-in wrap.testnet \
//     --token-out shit-237.factory.v10.meme-cooking.testnet --min-amount-out 0 \
//     --pool-id 2459 --token-in shit-237.factory.v10.meme-cooking.testnet \
//     --token-out wrap.testnet --min-amount-out 0 \
//     --referral-id ref.huggies.testnet
// =================================================
import type { rhea_ammv2_swap_action_type } from "../../packages/fun/src/index.js";
import { parseArgs } from "../_shared/args.js";
import {
  logResult,
  near_kit_env,
  NEAR_KIT_NETWORK,
  rhea_ammv2_contractid,
  requireSigner,
  resolveContractId,
} from "../_shared/env.js";
import { rhea_ammv2_swap_fun_json } from "../../packages/fun/src/index.js";
// =================================================
const usage =
  "bun run bin/rhea_ammv2/rhea_swap.ts --pool-id <id> --token-in <id> --token-out <id> [--amount-in <raw>] [--min-amount-out <raw>] [--referral-id <id>]";
const args = parseArgs();
requireSigner(usage);

// =================================================
// Rebuild the action list from the raw flag order.
//
// The flat `args` map cannot hold repeated flags (a second `--token-in`
// overwrites the first), so the action flags are re-read straight from
// argv and collected into per-flag queues. Those queues are then
// consumed in order, so each `--pool-id` opens a new action and the
// following `--token-in` / `--token-out` / `--amount-in` /
// `--min-amount-out` flags fill in that action.

// =================================================
// Per-flag queue of values, in the order they appeared on the command line.
const queues = new Map<string, string[]>();
let pendingFlag: string | undefined;
let pendingValue: string | undefined;

for (const argvItem of process.argv.slice(2)) {
  if (argvItem.startsWith("--")) {
    const body = argvItem.slice(2);
    const eq = body.indexOf("=");
    const name = eq === -1 ? body : body.slice(0, eq);
    const inlineValue = eq === -1 ? undefined : body.slice(eq + 1);
    pendingFlag = name;
    pendingValue = inlineValue;
    if (inlineValue !== undefined) {
      const queue = queues.get(name) ?? [];
      queue.push(inlineValue);
      queues.set(name, queue);
      pendingFlag = undefined;
      pendingValue = undefined;
    }
    continue;
  }
  // A bare value belongs to the flag that came right before it.
  if (pendingFlag !== undefined && pendingValue === undefined) {
    const queue = queues.get(pendingFlag) ?? [];
    queue.push(argvItem);
    queues.set(pendingFlag, queue);
    pendingFlag = undefined;
    pendingValue = undefined;
  }
}

// =================================================
// Reads every queued value for a flag, in order.
const takeAll = (flag: string): string[] => {
  const queue = queues.get(flag) ?? [];
  const values = [...queue];
  queue.length = 0;
  return values;
};

const actions: rhea_ammv2_swap_action_type[] = [];

// =================================================
// Actions are driven by the `--pool-id` queue; every other action flag
// is consumed one value per action, in command-line order.
const poolIds = takeAll("pool-id");
const tokenIns = takeAll("token-in");
const tokenOuts = takeAll("token-out");
const amountIns = takeAll("amount-in");
const minAmountOuts = takeAll("min-amount-out");

if (poolIds.length === 0) {
  console.error("error: --pool-id is required");
  console.error(`usage: ${usage}`);
  process.exit(1);
}

for (let i = 0; i < poolIds.length; i++) {
  const poolId = Number(poolIds[i]);
  if (!Number.isFinite(poolId)) {
    console.error(`error: --pool-id must be a number (got "${poolIds[i]}")`);
    console.error(`usage: ${usage}`);
    process.exit(1);
  }
  const tokenIn = tokenIns[i];
  const tokenOut = tokenOuts[i];
  if (tokenIn === undefined || tokenOut === undefined) {
    console.error(
      "error: every swap action needs --pool-id, --token-in and --token-out",
    );
    console.error(`usage: ${usage}`);
    process.exit(1);
  }
  const action: rhea_ammv2_swap_action_type = {
    pool_id: poolId,
    token_in: tokenIn,
    token_out: tokenOut,
    min_amount_out: minAmountOuts[i] ?? "0",
  };
  if (amountIns[i] !== undefined) action.amount_in = amountIns[i];
  actions.push(action);
}

if (actions.length === 0) {
  console.error("error: at least one swap action is required");
  console.error(`usage: ${usage}`);
  process.exit(1);
}

const referralId =
  typeof args["referral-id"] === "string" ? args["referral-id"] : "";
const contractId = resolveContractId(
  typeof args["contract-id"] === "string" ? args["contract-id"] : undefined,
  rhea_ammv2_contractid(NEAR_KIT_NETWORK),
);
// =================================================
logResult(
  `swap ${actions.length} action(s) @ ${contractId}`,
  await rhea_ammv2_swap_fun_json(near_kit_env, contractId, actions, referralId),
);
// =================================================
// copyright 2026 by sleet.near
