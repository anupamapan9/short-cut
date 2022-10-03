import React from 'react';

const Footer = () => {
    const date = new Date()
    return (
        <div className='bg-gradient-to-r from-[#1aa37a] to-[#9dffb3] rounded-lg'>
            <div className='rounded-lg px-2 pt-2 py-5 bg-white bg-opacity-50 backdrop-blur-3xl shadow-md shadow-white/50 drop-shadow-lg'>
                <p className='text-center font-semibold'>
                    Developed by Anupam right Reserved <a className='text-purple-600' href="http://apancreation.com" target="_blank" rel="noopener noreferrer">Apan Creation</a> &copy; {date.getFullYear()}
                </p>

            </div>
        </div>
    );
};

export default Footer;