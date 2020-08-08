import useQueries from 'history-plus/lib/useQueries'
import useBasename from 'history-plus/lib/useBasename'
import baseCreateMemoryHistory from 'history-plus/lib/createMemoryHistory'

export default function createMemoryHistory(options) {
  // signatures and type checking differ between `useQueries` and
  // `createMemoryHistory`, have to create `memoryHistory` first because
  // `useQueries` doesn't understand the signature
  const memoryHistory = baseCreateMemoryHistory(options)
  const createHistory = () => memoryHistory
  const history = useQueries(useBasename(createHistory))(options)
  return history
}
