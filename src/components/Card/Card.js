import React from 'react';

const Card = ({ data }) => {
    const { description, icon, name, url } = data || {}
    return (
        <div className='bg-gradient-to-r from-[#1aa37a] to-[#9dffb3] rounded-lg'>
            <div className='relative rounded-lg px-2 pt-2 h-[250px] bg-white bg-opacity-50 backdrop-blur-3xl shadow-md shadow-white/50 drop-shadow-lg'>
                <div className='flex justify-center'>
                    <span className='flex justify-center items-center bg-green-100 w-20 h-20 rounded-full shadow-sm shadow-green-500'>{icon}</span>
                </div>

                <div className='flex justify-center py-2'>
                    <h2 className='text-base md:text-xl font-bold text-black drop-shadow-2xl shadow-green-500' >{name}</h2>
                </div>
                <div>
                    <p className='text-center'>{description}
                    </p>
                </div>
                <div className='absolute bottom-0 w-full right-0 rounded-b-lg mt-2 flex justify-center'>
                    <a className='bg-gradient-to-t from-[#1aa37a] to-[#9dffb3] hover:bg-gradient-to-tr duration-700 rounded-b-lg w-full text-lg font-semibold text-center inline-block py-2' href={url} target="_blank" rel="noopener noreferrer">Create</a>
                </div>
            </div>
        </div>

    );
};

export default Card;