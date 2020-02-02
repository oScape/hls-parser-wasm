extern crate wasm_bindgen;
extern crate m3u8_rs;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse_hls(m3u8: String) -> String {

  let parsed = m3u8_rs::parse_playlist_res(&m3u8.as_bytes());
  format!("{:?}", parsed)
}