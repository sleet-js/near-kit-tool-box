// =================================================
// RHEA_AMMV2_GET_DEPOSITS_TYPE
//
// Shape returned by the rhea_ammv2 `get_deposits` view call. The
// contract returns a `{ token_id: balance }` map where `token_id` is
// a NEP-141 contract id (e.g. `wrap.near`,
// `usdt.tether-token.near`, `shit-1170.meme-cooking.near`) and
// `balance` is the user's deposited balance of that NEP-141 token
// held by the rhea_ammv2 contract on the user's behalf, as a decimal
// string in the token's smallest unit.
// =================================================

export interface RHEA_AMMV2_GET_DEPOSITS_TYPE {
  [token_id: string]: string;
}
// =================================================
// copyright 2026 by sleet.near
