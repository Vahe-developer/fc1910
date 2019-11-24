import React from 'react'
import './navBar.css'
import logo from './NavBarImages/logo1910.png'
import logo1 from './NavBarImages/congstar.jpg'
import logo2 from './NavBarImages/underarmour.png'
import {Link} from 'react-router-dom'
import Iframe from '../iframe/Iframe'


const NavBar: React.FC = () => {
    const navItems: { name: string, link: string }[] = [
        {name: 'LIVE', link: 'link'},
        {name: 'TEAMS', link: 'link'},
        {name: 'VERIN', link: 'link'},
        {name: 'FANS', link: 'link'},
        {name: 'KIEZHELDEN', link: 'link'},
        {name: 'BUSINES', link: 'link'},
        {name: 'SHOP', link: 'link'},
        {name: 'TICKETS', link: 'link'},
        {name: 'SOUCH', link: 'link'},
        {name: 'DE', link: 'link'}]
    const liItems = navItems.map((liName) => (
        <a href={liName.link} key={Math.random() * 10}>
            <li key={Math.random() * 10} className={'menu__container__li'}>{liName.name}</li>
        </a>
    ))


    const congstarLogo: { imgName: string, link: string }[] = [
        {imgName: logo1, link: 'link'},
        {imgName: logo2, link: 'link'}]
    const logoItems = congstarLogo.map((logoItem) => (
        <li key={logoItem.imgName}>
            <a href={logoItem.link}>
                <img key={'logoItem'} className={'congStar__logo'} src={logoItem.imgName} alt="Logo2"/>
            </a>
        </li>
    ))

    return (

        <header className={'header'}>
            <div className={'header__content'}>
                <Link to={'/gg'}>
                    <img className={'header__logo'} src={logo} alt="Logo"/>
                </Link>
                <ul className={'header__sponsors'}>
                    {logoItems}
                </ul>
                <div className={'header__navigation'}>
                    <ul className={'menu__container'}>
                        {liItems}
                        <span className={'profile__seperator'}>|</span>
                        <span className={'profile__seperator__text'}>
                            <Iframe>
                                <Link className={'profile__seperator__text'} to={'/gg'}>MAINSTPAULI</Link>
                            </Iframe>
                        </span>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar
