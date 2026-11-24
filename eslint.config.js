import { vueTsConfigs, withVueTs } from "@vue/eslint-config-typescript";
import vue from "eslint-plugin-vue";

export default withVueTs(
  { ignores: ["dist/"] },
  vue.configs["flat/essential"],
  vueTsConfigs.recommended,
  {
    files: ["src/views/*.vue"],
    rules: { "vue/multi-word-component-names": "off" },
  },
);
