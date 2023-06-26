import { Link } from 'react-router-dom';
import { Routes } from 'src/routes';

const Navbar = () => {
  const closeHandler = () => {
    const menu = document.querySelector('#navbarColor02');
    menu?.classList.remove('show');
  };

  return (
    <nav className='navbar navbar-expand-lg bg-dark py-1' data-bs-theme='dark'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler ms-auto'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarColor02'>
          <ul className='navbar-nav m-auto'>
            <li onClick={closeHandler} className='nav-item'>
              <Link className='nav-link' to={Routes.basic}>
                Basic Fetch
              </Link>
            </li>
            <li onClick={closeHandler} className='nav-item'>
              <Link className='nav-link' to={Routes.pagination}>
                Paginate With Prefetct
              </Link>{' '}
            </li>
            <li onClick={closeHandler} className='nav-item'>
              <Link className='nav-link' to={Routes.loadMore}>
                Load More
              </Link>
            </li>
            <li onClick={closeHandler} className='nav-item'>
              <Link className='nav-link' to={Routes.infiniteScroll}>
                Infinite Scroll
              </Link>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
