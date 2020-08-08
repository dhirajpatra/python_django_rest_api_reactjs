import createHashHistory from 'history-plus/lib/createHashHistory'
import createRouterHistory from './createRouterHistory'
export default createRouterHistory(createHashHistory)

