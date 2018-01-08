import universal from 'react-universal-component'
import Loading from 'app/components/Loading/Loading'

export default universal(() => import('./Examples'), {
  loading: Loading
})
