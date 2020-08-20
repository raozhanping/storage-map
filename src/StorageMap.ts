/**
 * Abstract class StorageMap
 * @class StorageMap
 * @abstract
 * @method Symbol.iterator()
 */
export default abstract class StorageMap<T> implements Iterable<T> {
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
  get [Symbol.toStringTag]() {
    return 'StorageMap'
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
