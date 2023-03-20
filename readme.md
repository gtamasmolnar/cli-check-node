# cli-check-node

- ✅ Checks if a Node app is running on the right Node version
- ❌ Fails with a message to update Node version to specified version

## Install

```sh
npm install @gtamo/cli-check-node
```

## Usage

```js
import checkNode from '@gtamo/cli-check-node';
checkNode('13'); // Fails the script if current node version is less than 13.
```

## API

### checkNode(requiredNodeVersion, options?)

#### ❯ requiredNodeVersion

Type: `string`<br>

#### ❯ options

Type: `object`<br>
Default: `{fail: true}` (optional)

You can specify the options below.

#### ❯ fail

Type: `boolean`<br>
Default: `true` (optional)

```js
checkNode('13', {fail: false});
// Notifies if current node version is less than 13. Does NOT fail.
```

## Changelog

[❯ Read the changelog here →](changelog.md)

## License & Conduct

- MIT © [Tamas Molnar](LICENSE)
- [Code of Conduct](code-of-conduct.md)
