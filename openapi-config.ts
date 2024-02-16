import type { ConfigFile } from "@rtk-query/codegen-openapi";
import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/.env` });

const config: ConfigFile = {
  schemaFile: `${process.env.BASE_URL_API}/docs/api-docs.json`,
  apiFile: "./src/store/ecommerce-api.ts",
  exportName: "ecommerceApi",
  apiImport: "ecommerceApi",
  outputFiles: {
    "./src/services/products.ts": {
      filterEndpoints: ["getAllProducts"],
    },
    "./src/services/categories.ts": {
      filterEndpoints: ["getAllCategories"],
    },
  },
  hooks: true,
  tag: true,
};

export default config;
