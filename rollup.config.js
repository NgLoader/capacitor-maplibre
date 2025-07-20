export default {
  input: 'dist/esm/index.js',
  output: [
    {
      file: 'dist/plugin.js',
      format: 'iife',
      name: 'capacitorMaplibre',
      globals: {
        '@capacitor/core': 'capacitorExports',
        '@capacitor-community/bluetooth-le': 'capacitorBluetoothLe',
        '@capacitor/geolocation': 'capacitorGeolocation',
        'maplibre-gl': 'maplibre-gl',
        'rxjs': 'rxjs'
      },
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/plugin.mjs',
      format: 'esm',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: [
    '@capacitor/core',
    '@capacitor-community/bluetooth-le',
    '@capacitor/geolocation',
    'maplibre-gl',
    'rxjs'
  ],
};
