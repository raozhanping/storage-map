import StorageMap from './StorageMap'

/**
 * @class WindowStorage
 * @param store {window.localStorage | window.sessionStorage} 存储卷
 */
export default class WindowStorage extends StorageMap {
  protected store: Storage
  constructor(store: Storage) {
    super()
    if (!store) {
      throw new TypeError(`WindowStorage: Arguments 'store' is required.`)
    }
    this.store = store
  }
  get size() {
    return this.store.length
  }
  *entries() {
    let index = 0
    const entries = <Array<[string, any]>>[]
    while (index < this.store.length) {
      const key = this.store.key(index++)
      if (key != undefined) {
        const value = this.get(key)
        entries.push([key, value])
      }
    }
    return entries
  }
  set(key: string, value: any) {
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
    return this.keys().includes(key)
  }
  delete(key: string) {
    return this.store.removeItem(key)
  }
  clear() {
    this.store.clear()
  }
  forEach(callback: Function) {
    for (const item of this) {
      callback(item[1], item[0], this.store)
    }
  }
  keys() {
    const keys = <Array<string>>[]
    this.forEach((value: any, key: string) => keys.push(key))
    return keys
  }
  values() {
    const values = <Array<string>>[]
    this.forEach((value: any) => values.push(value))
    return values
  }
}

export class LocalStorage extends WindowStorage {
  constructor() {
    super(window.localStorage)
  }
}
export class SessionStorage extends WindowStorage {
  constructor() {
    super(window.sessionStorage)
  }
}
