import StorageMap from './StorageMap'
import StorageMock from './StorageMock'

/**
 * @class WindowStorage
 * @param store {window.localStorage | window.sessionStorage} 存储卷
 */
export default class WebStorage extends StorageMap<[string, any]> {
  protected store: Storage
  constructor(store: Storage) {
    super()
    this.store = store
  }
  get size() {
    return this.store.length
  }
  *entries(): Iterator<[string, any]> {
    let index = 0
    while (index < this.store.length) {
      const key = this.store.key(index++)
      if (key != undefined) {
        const value = this.get(key)
        yield [key, value]
      }
    }
  }
  set(key: string, value?: any) {
    value = this.serialize(value)
    if (value) {
      this.store.setItem(key, value)
    } else {
      this.delete(key)
    }
  }
  get(key: string) {
    const result = this.store.getItem(key)
    return result ? this.deserialize(result) : result
  }
  has(key: string): boolean {
    return Array.from(this.keys()).includes(key)
  }
  delete(key: string) {
    return this.store.removeItem(key)
  }
  clear() {
    this.store.clear()
  }
  forEach(callback: Function) {
    for (const item of this) {
      callback(item[1], item[0], this)
    }
  }
  *keys(): IterableIterator<string> {
    for (const item of this) {
      yield item[0]
    }
  }
  *values(): IterableIterator<any> {
    for (const item of this) {
      yield item[1]
    }
  }
}

export class LocalStorage extends WebStorage {
  constructor() {
    const storage = (window && window.localStorage) || new StorageMock()
    super(storage)
  }
  get [Symbol.toStringTag]() {
    return 'LocalStorage'
  }
}
export class SessionStorage extends WebStorage {
  constructor() {
    const storage = (window && window.sessionStorage) || new StorageMock()
    super(storage)
  }
  get [Symbol.toStringTag]() {
    return 'SessionStorage'
  }
}
