import React from 'react'
import Logo from '../images/catter.png'
import HomeLogo from '../images/home-solid.svg'
import ExploreLogo from '../images/slack-hash-brands.svg'
import NotificationLogo from '../images/bell-regular.svg'
import MessagesLogo from '../images/envelope-regular.svg'
import BookmarksLogo from '../images/bookmark-regular.svg'
import ListsLogo from '../images/stream-solid.svg'
import UserLogo from '../images/angle-double-right-solid.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="mt-3">
      <Link to="/" ><img src={Logo} width="50px" height="50px" alt="" /></Link>
      <Link to="/" ><h5><img src={HomeLogo} className="mr-2" width="20px" height="20px" alt="" />Inicio</h5></Link>
      <Link to="/explore" ><h5><img src={ExploreLogo} className="mr-2" width="20px" height="20px" alt="" />Explorar</h5></Link>
      <Link to="/notifications" ><h5><img src={NotificationLogo} className="mr-2" width="20px" height="20px" alt="" />Notificaciones</h5></Link>
      <Link to="/messages" ><h5><img src={MessagesLogo} className="mr-2" width="20px" height="20px" alt="" />Mensajes</h5></Link>
      <Link to="/bookmarks" ><h5><img src={BookmarksLogo} className="mr-2" width="20px" height="20px" alt="" />Guardados</h5></Link>
      <Link to="/lists" ><h5><img src={ListsLogo} className="mr-2" width="20px" height="20px" alt="" />Listas</h5></Link>
      <Link to="/user" ><h5><img src={UserLogo} className="mr-2" width="20px" height="20px" alt="" />Perfil</h5></Link>
      <button type="button" className="btn btn-primary round mx-1 w-100">Cattear</button>
    </nav>
  );
}