import createStorage from '../lib/index.esm.js'

const storage = createStorage('localStorage')

storage.set('local', 'value from Storage-Map')

window.__storage = storage
console.dirxml(
  `%c Storage size from 'Storage-Map': `,
  'color: red',
  storage.size
)
