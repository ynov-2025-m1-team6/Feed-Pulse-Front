import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: ["../public"],

  // ✅ Ajout de la config Webpack pour gérer les alias
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@": path.resolve(__dirname, "../src"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/assets": path.resolve(__dirname, "../src/assets"),
        "@/interfaces": path.resolve(__dirname, "../src/interfaces"),
        "@/actions": path.resolve(__dirname, "../src/actions"),
      };
    }

    return config;
  },
};

export default config;
