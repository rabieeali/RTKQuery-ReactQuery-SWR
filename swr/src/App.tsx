
import { Routes, Route } from 'react-router-dom'
import BasicPage from 'src/pages/Basic'
import Layout from 'src/components/Layout'
import PaginationPage from './pages/Pagination'
import LoadMorePage from './pages/LoadMore'
import { Routes as ApplicanRoutes } from 'src/routes'


const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<BasicPage />} />
          <Route path={ApplicanRoutes.pagination} element={<PaginationPage />} />
          <Route path={ApplicanRoutes.loadMore} element={<LoadMorePage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App