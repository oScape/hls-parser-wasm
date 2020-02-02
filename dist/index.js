// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init, { parse_hls } from "./wasm/hls_parser_wasm.js";

const runWasm = async () => {
  // Instantiate our wasm module
  await init("./wasm/hls_parser_wasm_bg.wasm");

  // Call the parse_hls function export from wasm, save the result
  const hls_struct = parse_hls(
    '#EXTM3U' +
      '#EXT-X-TARGETDURATION:10' +
      '#EXT-X-VERSION:3' +
      '#EXTINF:9.009,' +
      'http://media.example.com/first.ts' +
      '#EXTINF:9.009,' +
      'http://media.example.com/second.ts' +
      '#EXTINF:3.003,' +
      'http://media.example.com/third.ts' +
      '#EXT-X-ENDLIST',
  );

  // Set the result onto the console
  console.log(hls_struct);
};

runWasm();