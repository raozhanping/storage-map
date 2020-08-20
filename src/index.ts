import { LocalStorage, SessionStorage } from './WebStorage'

/**
 * Storage factory
 * @param type {string} type of storage
 */
export default function createStorage(type: string) {
  if (type === 'localStorage') {
    return new LocalStorage()
  } else if (type === 'sessionStorage') {
    return new SessionStorage()
  }
}
