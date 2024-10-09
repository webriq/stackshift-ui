# Stackshift Ui.git <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 40px"/>

[![test](https://github.com/github.com-webriq:webriq/stackshift-ui.git/actions/workflows/test.yml/badge.svg)](https://github.com/github.com-webriq:webriq/stackshift-ui.git/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/github.com-webriq:webriq/stackshift-ui.git/maintainability) [![codecov](https://codecov.io/gh/github.com-webriq:webriq/stackshift-ui.git/graph/badge.svg)](https://codecov.io/gh/github.com-webriq:webriq/stackshift-ui.git) [![Version](https://img.shields.io/npm/v/stackshift-ui.git.svg?colorB=green)](https://www.npmjs.com/package/stackshift-ui.git) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/stackshift-ui.git.svg)](https://www.npmjs.com/package/stackshift-ui.git) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/stackshift-ui.git) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

Stackshift Ui.git is a comprehensive library designed to unlock the full potential of React 18 server components. It provides customizable loading animation components and a fullscreen loader container, seamlessly integrating with React and Next.js.

✅ Fully Treeshakable (import from `stackshift-ui.git/client/loader-container`)

✅ Fully TypeScript Supported

✅ Leverages the power of React 18 Server components

✅ Compatible with all React 18 build systems/tools/frameworks

✅ Documented with [Typedoc](https://github.com-webriq:webriq.github.io/stackshift-ui.git) ([Docs](https://github.com-webriq:webriq.github.io/stackshift-ui.git))

✅ Examples for Next.js, Vite, and Remix

> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please consider starring [this repository](https://github.com/github.com-webriq:webriq/stackshift-ui.git) and sharing it with your friends.

## Getting Started

### Installation

```bash
pnpm add stackshift-ui.git
```

**_or_**

```bash
npm install stackshift-ui.git
```

**_or_**

```bash
yarn add stackshift-ui.git
```

## Want Lite Version? [![npm bundle size](https://img.shields.io/bundlephobia/minzip/stackshift-ui.git-lite)](https://www.npmjs.com/package/stackshift-ui.git-lite) [![Version](https://img.shields.io/npm/v/stackshift-ui.git-lite.svg?colorB=green)](https://www.npmjs.com/package/stackshift-ui.git-lite) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/stackshift-ui.git-lite.svg)](https://www.npmjs.com/package/stackshift-ui.git-lite)

```bash
pnpm add stackshift-ui.git-lite
```

**or**

```bash
npm install stackshift-ui.git-lite
```

**or**

```bash
yarn add stackshift-ui.git-lite
```

> You need `r18gs` as a peer-dependency

### Import Styles

You can import styles globally or within specific components.

```css
/* globals.css */
@import "stackshift-ui.git/dist";
```

```tsx
// layout.tsx
import "stackshift-ui.git/dist/index.css";
```

For selective imports:

```css
/* globals.css */
@import "stackshift-ui.git/dist/client"; /** required if you are using LoaderContainer */
@import "stackshift-ui.git/dist/server/bars/bars1";
```

### Usage

Using loaders is straightforward.

```tsx
import { Bars1 } from "stackshift-ui.git/dist/server/bars/bars1";

export default function MyComponent() {
  return someCondition ? <Bars1 /> : <>Something else...</>;
}
```

For detailed API and options, refer to [the API documentation](https://github.com-webriq:webriq.github.io/stackshift-ui.git).

**Using LoaderContainer**

`LoaderContainer` is a fullscreen component. You can add this component directly in your layout and then use `useLoader` hook to toggle its visibility.

```tsx
// layout.tsx
<LoaderContainer />
	 ...
```

```tsx
// some other page or component
import { useLoader } from "stackshift-ui.git/dist/hooks";

export default MyComponent() {
	const { setLoading } = useLoader();
	useCallback(()=>{
		setLoading(true);
		...do some work
		setLoading(false);
	}, [])
	...
}
```

## License

This library is licensed under the MPL-2.0 open-source license.



> <img src="https://raw.githubusercontent.com/mayank1513/mayank1513/main/popper.png" style="height: 20px"/> Please consider enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsoring](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
