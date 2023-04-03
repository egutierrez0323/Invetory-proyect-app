/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import './styles.scss'
import { AiOutlineSearch, AiOutlineArrowLeft } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import { RouteType } from '@/routes'
import { Link } from 'react-router-dom'

interface Props {
  routes: RouteType[]
}

export const SidebarApp : React.FC<Props> = (props) => {
  const [open, setOpen] = useState(true)
  const { routes } = props

  return (
    <nav className={open === true ? 'sidebar' : 'sidebar close'}>
      <header>
        <div className='image-text'>
          <span className='image'>
            <FaReact style={{ color: 'black', fontSize: '30px' }} />
          </span>

          <div className='text logo-text'>
            <span className='name'>Codinglab</span>
            <span className='profession'>Web developer</span>
          </div>
        </div>

        <i />
        <AiOutlineArrowLeft className='toggle' onClick={() => { setOpen(!open); return true }} />
      </header>

      <div className='menu-bar'>
        <div className='menu'>

          <li className='search-box'>
            <AiOutlineSearch className='icon ' />
            <input type='text' placeholder='Search...' />
          </li>

          <ul className='menu-links'>

            {routes.map((route: RouteType) => {
              return !route.exact
                ? (<li className='nav-link' key={route.path}>
                  <Link className='bx bx-home-alt icon' to={route.path || ''} key={route.path}>{route.sidebarProps?.displayText}</Link>
                   </li>)
                : null
            })}

          </ul>
        </div>

        <div className='bottom-content'>
          <li className=''>
            <a href='#'>
              <i className='bx bx-log-out icon' />
              <span className='text nav-text'>Logout</span>
            </a>
          </li>

          <li className='mode'>
            <div className='sun-moon'>
              <i className='bx bx-moon icon moon' />
              <i className='bx bx-sun icon sun' />
            </div>
            <span className='mode-text text'>Dark mode</span>

            <div className='toggle-switch'>
              <span className='switch' />
            </div>
          </li>

        </div>
      </div>

    </nav>
  )
}
