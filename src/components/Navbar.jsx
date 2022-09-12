import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='header'>
        <nav>
            <ul className='nav-items'>
              <Link to='/'>
                <li>Home</li>
              </Link>

              <Link to='/categoria/comic'>
                <li>Comic</li>
              </Link>

              <Link to='/categoria/arte'>
                <li>Arte</li>
              </Link>

              

            </ul>
        </nav>
    </header>
  )
}

