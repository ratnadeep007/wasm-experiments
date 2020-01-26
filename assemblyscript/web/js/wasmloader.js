const loadWebAssembly = async ( wasmModuleUrl, importObject ) => {
  let response = undefined;

  if ( !importObject ) {
    importObject = {
      env: {
        abort: () => console.log( "Abort!" )
      }
    };
  }

  // Check if the browser supports streaming instantiation
  if ( WebAssembly.instantiateStreaming ) {
    // Fetch the module, and instantiate it as it is downloading
    response = await WebAssembly.instantiateStreaming(
      fetch( wasmModuleUrl ),
      importObject
    );
  } else {
    // Fallback to using fetch to download the entire module
    // And then instantiate the module
    const fetchAndInstantiateTask = async () => {
      const wasmArrayBuffer = await fetch( wasmModuleUrl ).then( response =>
        response.arrayBuffer()
      );
      return WebAssembly.instantiate( wasmArrayBuffer, importObject );
    };
    response = await fetchAndInstantiateTask();
  }

  console.log( response );

  return response.instance;
};