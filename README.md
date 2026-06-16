# @oomol-lab/connector-types

Auto-generated, **optional** type augmentation for [`@oomol-lab/connector`](https://www.npmjs.com/package/@oomol-lab/connector).
Install it and add one per-provider side-effect import to light up precise input/output types + JSDoc
for that provider's actions. `@oomol-lab/connector` runs fully without it (actions are just loosely typed).

> Generated automatically from the OOMOL Connector action catalog. **Do not edit by hand.**

## Install

```sh
npm install @oomol-lab/connector-types
```

`@oomol-lab/connector` is a peer dependency.

## Usage — import the provider subpath you use

There is intentionally **no** `import "@oomol-lab/connector-types"` full entry. Import only the providers you use,
so type-checking stays fast and editor completion isn't flooded with hundreds of providers.

```ts
import "@oomol-lab/connector-types/gmail"; // lights up gmail
import "@oomol-lab/connector-types/slack"; // lights up slack (only what you import)

import { Connector } from "@oomol-lab/connector";

const oomol = new Connector({ apiKey: process.env.OOMOL_API_KEY! });

// Precise input + output, with JSDoc constraints (min/max/default/…):
const { threads } = await oomol.gmail.search_threads({ query: "from:boss" });
// Equivalent dynamic path:
await oomol.execute("slack.post_message", { channel: "C123", text: "hi" });
```

Providers you don't import stay loosely typed but remain fully callable.

## Requirements

Subpath types resolve via package `exports`, so your `tsconfig.json` `moduleResolution` must be
`bundler`, `node16`, or `nodenext`. Classic `node` (node10) is also supported via a `typesVersions` fallback.

## Runtime safety

Each provider ships an empty `.js` stub, so a side-effect import written in a `.ts` file resolves at
runtime (no `ERR_PACKAGE_PATH_NOT_EXPORTED`). The package is pure types + empty stubs (`sideEffects: false`,
fully tree-shakable).

## Compatibility with @oomol-lab/connector

This package augments `@oomol-lab/connector`'s `ActionRegistry` via `declare module`; the target package
name must match exactly. `peerDependencies` declares the supported range, and `meta.json` records
`connectorContractTarget` / `connectorPkgVersion` for drift diagnosis.

| @oomol-lab/connector-types | @oomol-lab/connector |
| --- | --- |
| 0.x | >=0.1.0 |
