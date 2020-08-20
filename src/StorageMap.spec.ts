import WebStorage from './WebStorage'
import StorageMock from './StorageMock'
const storage = new WebStorage(new StorageMock())

describe('StorageMap', () => {
  it(`Should stringTag be [object StorageMap]`, () => {
    expect(Object.prototype.toString.call(storage)).toBe('[object StorageMap]')
  })
  it(`Should serialize target`, () => {
    expect(storage.serialize({ 1: 1 })).toBe('{"1":1}')
  })
  it(`Should deserialize target`, () => {
    expect(storage.deserialize('{"1":"1"}')).toEqual({ '1': '1' })
  })
})
