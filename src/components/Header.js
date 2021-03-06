import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Link from "./link";
import './styles.css';

import Sidebar from "./sidebar";

const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              helpUrl
              logo
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = require('./images/logo.svg');
      const twitter = require('./images/twitter.svg');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            helpUrl,
            logo,
            headerLinks,
          }
        }
      } = data;
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navbar-default navBarDefault'}>
            <div className={'navbar-header'}>
              <button type="button" className={'navbar-toggle collapsed navBarToggle'} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className={'sr-only'}>切换</span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
              </button>
              <Link to="/" className={'navbar-brand navBarBrand'}>
                {logo !== '' ?
                  (<img className={'img-responsive'} src={logo} alt={'logo'} />)
                  :
                  (<img className={'img-responsive'} src={logoImg} alt={'logo'} />)
                }
                {headerTitle}
              </Link>
            </div>
            <div id="navbar" className={'navbar-collapse collapse navBarCollapse'}>
              <div className={'visible-xs'}>
                <Sidebar location={location} />
                <hr/>
              </div>
                <ul className={'nav navbar-nav navBarUL'}>
                  {helpUrl !== '' ? 
                    (<li><a href={helpUrl}>需要帮助?</a></li>) : null
                  }
                  <li><a href="/">官网</a></li>
                  <li><a href="https://app.qushow365.com">工作台</a></li>
                </ul>
              <ul className={'nav navbar-nav navBarUL navbar-right'}>
                {headerLinks.map((link, key) => {
                  if(link.link !== '' && link.text !== '') {
                    return(
                      <li key={key}>
                        <a href={link.link} target="_blank">{link.text}</a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
