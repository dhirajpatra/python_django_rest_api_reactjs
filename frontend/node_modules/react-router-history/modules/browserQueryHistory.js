import createBrowserHistory from 'history-plus/lib/createQueryHistory'
import createRouterHistory from './createRouterHistory'
export default createRouterHistory(createBrowserHistory)

