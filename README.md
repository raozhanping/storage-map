# storage-map
  Use map structure to operate LocalStorage, SessionStorage, IndexDB and WebSQL.

## Usage

```js
const createStorage = require('@ricann/storage-map')
// Create localStorage
const storage = createStorage('localStorage')
// Create sessionStorage
const storage = createStorage('sessionStorage')

// Using storage is like using Map.
// Set a key-value to storage, and it and localStorage or sessionStorage are in sync.
storage.set('key', 'value')
```

## Interface

```ts
abstract class StorageMap<T> implements Iterable<T> {
  abstract size: number
  abstract clear(): void
  abstract delete(key: string): void
  abstract entries(): Iterator<T>
  abstract forEach(callback: Function): void
  abstract get(key: string): any
  abstract has(key: string): boolean
  abstract keys(): Iterator<string>
  abstract set(key: string, value: any): void
  abstract values(): Iterator<any>
}
```

### startup

```shell
# install dependencies
yarn install

# build for production
yarn build

# test unit
yarn run test
# test unit with covarage
yarn run test -- --covarage

# submit git log with conventional style
yarn commit
```
