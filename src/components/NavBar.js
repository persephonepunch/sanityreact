import React from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"

export default function NavBar(){
    return (
        <header>
            <div className="uk-position-top">
                            <nav className="uk-navbar-container uk-navbar-transparent uk-navbar uk-light" uk-navbar="">
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li><NavLink to="/" exact>Home</NavLink></li>
                                       
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/project">Projects</NavLink></li>
                                    </ul>
                                </div>
                                <div className="uk-navbar-right">
                                    <ul className="uk-navbar-nav">
                                      <SocialIcon url="https://www.linkedin.com/in/yoonsunlee/" className="uk-margin-right" bgColor="#222222" style={{ height: 25, width: 25 }} />
                                      <SocialIcon url="https://twitter.com/everdenepublic/"  className="uk-margin-right" bgColor="#222222" style={{ height: 25, width: 25 }} />
                                      <SocialIcon url="https://github.com/persephonepunch"  className="uk-margin-right" bgColor="#222222" style={{ height: 25, width: 25 }} />
                                    
                                    </ul>
                                </div>
                              
                            </nav>
            </div>
        </header>
        )
}