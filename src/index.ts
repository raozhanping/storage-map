/**
 * Abstract class Storage
 * @class Storage
 * @abstract
 * @property size
 * @property Symbol.toSringTag
 * @property Symbol.species
 * @method clear()
 * @method delete()
 * @method entries()
 * @method forEach()
 * @method get()
 * @method has()
 * @method keys()
 * @method set()
 * @method values()
 * @method Symbol.iterator()
 */
abstract class StorageMap {
  abstract clear(): void
  abstract delete(key: string): void
  abstract entries(): Array<[string, any]>
  abstract forEach(callback: Function): void
  abstract get(key: string): any
  abstract has(key: string): boolean
  abstract keys(): Array<string>
  abstract set(key: string, value: any): void
  abstract values(): Array<any>
  serialize(target: any) {
    return JSON.stringify(target)
  }
  deserialize(target: string) {
    return JSON.parse(target)
  }
}

/**
 * @class WindowStorage
 * @param storage {window.localStorage | window.sessionStorage} 存储卷
 */
class WindowStorage extends StorageMap {
  protected store: Storage
  constructor(store: Storage) {
    super()
    if (!store) {
      throw new TypeError(`WindowStorage: Arguments 'store' is required.`)
    }
    this.store = store
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
    this.entries().forEach(entry => callback(entry[0], entry[1], this.store))
  }
  entries() {
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
  keys() {
    return this.entries().map(entry => entry[0])
  }
  values() {
    return this.entries().map(entry => entry[1])
  }
}

class LocalStorage extends WindowStorage {
  constructor() {
    super(window.localStorage)
  }
}
class SessionStorage extends WindowStorage {
  constructor() {
    super(window.sessionStorage)
  }
}

export default function createStorage(type: string) {
  if (type === 'localStorage') {
    return new LocalStorage()
  } else if (type === 'sessionStorage') {
    return new SessionStorage()
  }
}
