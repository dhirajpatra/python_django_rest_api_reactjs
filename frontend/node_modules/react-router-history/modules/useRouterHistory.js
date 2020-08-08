import useQueries from 'history-plus/lib/useQueries'
import useBasename from 'history-plus/lib/useBasename'

export default function useRouterHistory(createHistory) {
  return function (options) {
    const history = useQueries(useBasename(createHistory))(options)
    return history
  }
}
