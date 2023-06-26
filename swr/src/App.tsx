import { Routes, Route } from 'react-router-dom'
import BasicPage from 'src/pages/Basic'
import Layout from 'src/components/Layout'
import PaginationPage from 'src/pages/Pagination'
import LoadMorePage from 'src/pages/LoadMore'
import { Routes as ApplicanRoutes } from 'src/routes'
import InfiniteScroll from 'src/pages/InfiniteScroll'


const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<BasicPage />} />
          <Route path={ApplicanRoutes.pagination} element={<PaginationPage />} />
          <Route path={ApplicanRoutes.loadMore} element={<LoadMorePage />} />
          <Route path={ApplicanRoutes.infiniteScroll} element={<InfiniteScroll />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App