import * as moduleAlias from "module-alias";

// Use `"baseUrl": "."` in `tsconfig.json` file
moduleAlias.addAliases({ src: `${__dirname}` });
