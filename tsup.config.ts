import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm", "cjs"],
  dts: {
    entry: "index.ts",
  },
  clean: true,
  external: ["react", "react-dom"],
});
