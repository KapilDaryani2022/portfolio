'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NextLogo from '../../../public/images/logo-2.png'
import Link from 'next/link';

const Header: React.FC = () => {
    const [toggle, setToggle] = useState(false);
    const [transiton, setTransition] = useState(false);
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        if (toggle) {
            document.body.classList.add('nav-open');

            const transitionTimer = setTimeout(() => {
                setTransition(true);
            }, 1000);

            const contentTimer = setTimeout(() => {
                setShowContent(true);
            }, 800);

            return () => {
                clearTimeout(transitionTimer);
                clearTimeout(contentTimer);
            };
        } else {
            document.body.classList.remove('nav-open');
            setTransition(false);
            setShowContent(false);
        }
    }, [toggle]);

    // Cleanup when component unmounts
    useEffect(() => {
        return () => {
            document.body.classList.remove('nav-open');
        };
    }, []);

    const closeMenu = () => {
        setToggle(false);
    };
  return (
    <>
        <header>
            <div className="container">
                <div className="header--content">
                    <div className="header--content--left">
                        <Link href={'/'} className="logo">
                            <Image src={NextLogo} alt="logo" />
                           {/* KAPIL */}
                        </Link>
                    </div>
                    <div className="header--content--right">
                        <a
                            href="/Kapil-Daryani-Resume.pdf"
                            download
                            className="resume"
                        >
                            Resume
                        </a>
                        <div className={toggle ? "toggle active" : "toggle"} onClick={()=>{setToggle(!toggle)}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <span className={`${toggle ? 'active' : ''} animated ${transiton ? 'transiton' : ''}`}></span>
        <span className={`${toggle ? 'active' : ''} animated animated-2 ${transiton ? 'transiton' : ''}`}></span>
        {
            showContent &&
            <div className='header-content'>
                <div className="container">
                    <div className="header--links">
                        <div>
                            <Link onClick={closeMenu} className='fade-up' href={'#about'}>About</Link>
                        </div>
                        <div>
                            <Link onClick={closeMenu} className='fade-up third' href={'#projects'}>Projects</Link>
                        </div>
                        <div>
                            <Link onClick={closeMenu} className='fade-up fourth' href={'#experience'}>Experience</Link>
                        </div>
                        <div>
                            <Link onClick={closeMenu} className='fade-up second' href={'#skills'}>Skills</Link>
                        </div>
                        <div>
                            <Link onClick={closeMenu} className='fade-up fifth' href={'#contactUs'}>Contact</Link>
                        </div>
                    </div>
                    <div className="header-right--content fade-up fourth">
                        <a href="tel:9375244649">+91 9375244649</a>
                        <a href="mailto:kapildaryani5802@gmail.com">kapildaryani5802@gmail.com</a>
                        <div className="header-social-list">
                            <a href="https://www.linkedin.com/in/kapildaryani/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://github.com/KapilDaryani2022" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://wa.me/919375244649" target="_blank" rel="noreferrer" className='wp'>
                                <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 30.667 30.667">
                                    <g>
                                        <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
                                            c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
                                            c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
                                            c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
                                            c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
                                            c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
                                            c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
                                            c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
                                            c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
                                            c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
                                            C23.307,19.268,23.307,18.533,23.214,18.38z"/>
                                    </g>
                                </svg>
                            </a>
                            {/* <a href="https://twitter.com/kapil_singh_" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>CodePen</title><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                            </a> */}
                            <a href="https://www.instagram.com/kapil_daryani05/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  );
};

export default Header;
