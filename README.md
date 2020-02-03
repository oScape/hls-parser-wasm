# HLS PARSER WASM

Is a parser for HLS manifest in WebAssembly with a base in Rust.

## Initialize

* Clone the repository `git clone git@github.com:oScape/hls-parser-wasm.git`
* Go in `cd hls-parser-wasm/`
* Compile the project in rust `cargo build`
* Compile the project in WASM `wasm-pack build --out-dir dist/wasm --target web`

## Project tree
```
hls-parser-wasm/
  |-- .gitignore
  |-- Cargo.lock
  |-- Cargo.toml
  |-- README.md
  |-- dist/ -> web files
      |-- index.html
      |-- index.js
      |-- wasm/ -> wasm output
          |-- ...
          |-- hls_parser_wasm_bg.wasm
          |-- hls_parser_wasm.js
      |-- src/
          |-- lib.rs
      |-- target/ -> rust-lang output
          |-- ...
```
