import createStorage from './index'
import { createSocket } from 'dgram'

describe('createStorage', () => {
  it('Create LocalStorage', () => {
    const storage = createStorage('localStorage')
    expect(Object.prototype.toString.call(storage)).toEqual(
      '[object LocalStorage]'
    )
  })
  it('Create SessionStorage', () => {
    const storage = createStorage('sessionStorage')
    expect(Object.prototype.toString.call(storage)).toEqual(
      '[object SessionStorage]'
    )
  })
})
