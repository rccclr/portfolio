import React from 'react'
import { Link } from 'gatsby'

import AnimateLoad from './AnimateLoad'

import Scrollspy from 'react-scrollspy'

class Header extends React.Component {
  scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    let isHome=true, url;

    if (typeof window !== `undefined`) {
      isHome = window.location.pathname === '/';
      
      url = new URL(window.location.href);
    }
 
    const tabItemClasses = 'ml3 f6 pa0 fw6 pointer bg-transparent outline-0 bn tab tab--unselected';
    let sections = [
      'About',
      'Work',
      'Case studies',
      'Speaking',
      'Reading',
      'Elsewhere'
    ];
    const sectionsSlugs = sections.map( section => section.toLowerCase() );
    
    return (
      <div className='flex pt4 pb3'>
        <div className="w-100 flex justify-between items-center">
          <h1 className="f5">
            <Link to="/" className="link dim near-black fw7 ttu">
              Raimundo Carlos Laguía Dalbem
            </Link>

            {/* {
              isHome ?
                <Link to="/" className="link dim near-black fw6">
                  Raimundo Carlos Laguía Dalbem
                </Link>
                :
                <Link to="/" className="link dim near-black fw6 blue">
                  ← Back
                </Link>
            } */}
          </h1>
       
          <div className={`${isHome && 'f7 dn db-ns'}`}>
            { 
              isHome ? 
                <Scrollspy
                  items={sectionsSlugs}
                  componentTag="div"
                  currentClassName="tab--selected"
                  offset={-200}
                >
                  {
                    sections.map( section => (
                      <button
                        className={tabItemClasses} 
                        onClick={() => this.scrollToSection(section.toLowerCase())}
                        key={section}
                      >
                        {section}
                      </button>
                    ))
                  }
                </Scrollspy>
                :
                <Link to="/" className="link dim fw6 orange">
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                    fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'
                    strokeLinejoin='round' className='feather feather-corner-left-up'>
                    <polyline points='14 9 9 4 4 9' />
                    <path d='M20 20h-7a4 4 0 0 1-4-4V4' />
                  </svg> Back
                </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

// export default Header
export default AnimateLoad(Header, { animation: 'slideDownWithDelay', duration: '1.5s'})
