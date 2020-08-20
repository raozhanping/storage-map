export default class Storage {
  private store: Map<string, any>
  constructor() {
    this.store = new Map()
  }
  get length() {
    return this.store.size
  }
  key(index: number) {
    return index < this.store.size ? Array.from(this.store.keys())[index] : null
  }
  setItem(key: string, value: any) {
    this.store.set(key, value)
  }
  getItem(key: string) {
    return this.store.get(key)
  }
  removeItem(key: string) {
    this.store.delete(key)
  }
  clear() {
    this.store.clear()
  }
}
