import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outExtension({ format }) {
    switch (format) {
      case 'cjs': {
        return { js: '.cjs', dts: '.d.cts' };
      }
      case 'esm': {
        return { js: '.js', dts: '.d.mts' };
      }
      default: {
        return { js: '.js', dts: '.d.ts' };
      }
    }
  },
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
});
