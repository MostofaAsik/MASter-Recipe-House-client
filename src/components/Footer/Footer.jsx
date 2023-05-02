import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>

                <p className='text-4xl text-orange-700 font-bold'>MASter Chef Recipe Ltd.<br /> <span className='text-black font-semibold'>Since 2022</span> </p>
            </div>
            <div>
                <span className="footer-title text-lime-700">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Best Food</a>
                <a className="link link-hover">Best Chef</a>

            </div>
            <div>
                <span className="footer-title text-lime-700">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>

            </div>

        </footer>
    );
};

export default Footer;