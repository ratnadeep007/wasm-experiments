# Webassembly with Javascript and C

This project is small demostration how to use C programming language with Javascript in Webassembly in both Node.js environment and Browser using a npm library name as [WebAssembly](https://github.com/dcodeIO/webassembly).

### Using this project

- Clone it
- Do `npm install`
- After that you can different command according to your need. 

#### Commands

1. `npm run wasm:compile` to only compile C program to wasm format
2. `npm run node-wasm:start` will compile and particular javascript file loaded with wasm
3. `npm browser:compile` will compile same C program to browser folder (both wasm files are same)
4. `npm run dev:serve` will serve the calculator program before that run above command  