import WebStorage, { LocalStorage, SessionStorage } from './WebStorage'

function testStorageUnit(
  suite = 'SessionStorage',
  Ctor = SessionStorage,
  key = 'sessionKey',
  value = 'sessionValue'
) {
  let storage: LocalStorage | SessionStorage
  describe(suite, () => {
    beforeEach(() => {
      storage = new Ctor()
      storage.set(key, value)
    })
    it(`Should has props.`, () => {
      expect(storage).toHaveProperty('size')
      expect(storage).toHaveProperty('clear')
      expect(storage).toHaveProperty('delete')
      expect(storage).toHaveProperty('entries')
      expect(storage).toHaveProperty('forEach')
      expect(storage).toHaveProperty('get')
      expect(storage).toHaveProperty('has')
      expect(storage).toHaveProperty('keys')
      expect(storage).toHaveProperty('set')
      expect(storage).toHaveProperty('values')
    })
    it(`Should size equal 1.`, () => {
      expect(storage.size).toBe(1)
    })
    it(`Should clear storage.`, () => {
      storage.clear()
      expect(storage.size).toBe(0)
    })
    it(`Should delete a key in storage.`, () => {
      storage.delete(key)
      expect(storage.get(key)).toBe(null)
    })
    it(`Should 'entries' return Iterator.`, () => {
      const entriesIterator = storage.entries()
      expect(entriesIterator).toHaveProperty('next')
      expect(entriesIterator.next()).toMatchObject({
        value: [key, value],
        done: false,
      })
    })
    it(`Should 'forEach' traverse storage.`, () => {
      storage.forEach((value: any, key: string, host: SessionStorage) => {
        expect(value).toBe(value)
        expect(key).toBe(key)
        expect(host).toBe(storage)
      })
    })
    it(`Should return value by storage.get('key').`, () => {
      expect(storage.get(key)).toBe(value)
      expect(storage.get('undefined')).toBe(null)
    })
    it(`Should return boolean by sotrage.has('key').`, () => {
      expect(storage.has(key)).toBe(true)
      expect(storage.has('undefined')).toBe(false)
    })
    it(`Should return Iterator by storage.keys().`, () => {
      expect(storage.keys()).toHaveProperty('next')
    })
    it(`Should set a key to storage with value.`, () => {
      expect(storage.size).toBe(1)
    })
    it(`Should delete target, if value is null`, () => {
      storage.set(key)
      expect(storage.size).toBe(0)
    })
    it(`Should return Iterator by storage.values().`, () => {
      expect(storage.values()).toHaveProperty('next')
    })
  })
}

testStorageUnit('LocalStorage', LocalStorage, 'localKey', 'localValue')
testStorageUnit('SessionStorage', SessionStorage, 'sessionKey', 'sessionValue')
