/**
 * Abstract class StorageMap
 * @class StorageMap
 * @abstract
 * @method Symbol.iterator()
 */
export default abstract class StorageMap {
  abstract size: number
  abstract clear(): void
  abstract delete(key: string): void
  abstract entries(): Iterator<[string, any]>
  abstract forEach(callback: Function): void
  abstract get(key: string): any
  abstract has(key: string): boolean
  abstract keys(): Array<string>
  abstract set(key: string, value: any): void
  abstract values(): Array<any>
  get [Symbol.toStringTag]() {
    return '[object StorageMap]'
  }
  get [Symbol.species]() {
    return Map
  }
  [Symbol.iterator]() {
    return this.entries()
  }
  serialize(target: any) {
    return JSON.stringify(target)
  }
  deserialize(target: string) {
    return JSON.parse(target)
  }
}
