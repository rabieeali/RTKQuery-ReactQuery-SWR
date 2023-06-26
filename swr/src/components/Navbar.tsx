import { Link } from 'react-router-dom'
import { Routes } from 'src/routes'

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-center gap-5 align-items-center w-100'>
            <Link className='text-decoration-none' to={Routes.basic}>Basic Fetch</Link>
            <Link className='text-decoration-none' to={Routes.pagination}>Paginate With Prefetct</Link>
            <Link className='text-decoration-none' to={Routes.loadMore}>Load More</Link>
            <Link className='text-decoration-none' to={Routes.infiniteScroll}>Infinite Scroll</Link>
        </nav>
    )
}

export default Navbar