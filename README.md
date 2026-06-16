# @oomol-lab/connector-types

Optional type augmentation for [`@oomol-lab/connector`](https://www.npmjs.com/package/@oomol-lab/connector).

Import a per-provider subpath to get precise input/output types and JSDoc for that provider's actions. `@oomol-lab/connector` works fine without it — actions are just loosely typed.

## Install

```sh
npm install @oomol-lab/connector-types
```

`@oomol-lab/connector` is a peer dependency.

## Usage

Import only the providers you use:

```ts
import "@oomol-lab/connector-types/gmail";
import "@oomol-lab/connector-types/slack";

import { Connector } from "@oomol-lab/connector";

const oomol = new Connector({ apiKey: process.env.OOMOL_API_KEY! });

// Typed input + output
const { threads } = await oomol.gmail.search_threads({ query: "from:boss" });
```

Providers you don't import stay loosely typed but remain fully callable.

## Requirements

Subpath types resolve via package `exports`, so set `moduleResolution` to `bundler`, `node16`, or `nodenext` in your `tsconfig.json`. Classic `node` (node10) also works via a `typesVersions` fallback.

## License

MIT
