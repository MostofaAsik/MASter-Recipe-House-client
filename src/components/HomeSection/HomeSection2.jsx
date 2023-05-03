import React from 'react';

const HomeSection2 = () => {
    return (
        <div className="w-64 h-64 bg-gray-300 relative text-center">
            <img
                src="https://media.istockphoto.com/id/1034391536/photo/portrait-of-cheerful-excited-joyful-satisfied-handsome-attractive-fashionable-macho-guy.jpg?s=1024x1024&w=is&k=20&c=eXh2DiIOZcgBVyDCgkCIyEIMLj49g1hupRExZTV_jns="
                alt="placeholder image"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold uppercase tracking-wider transition-transform duration-500 transform hover:translate-x-6 hover:translate-y-6">
                Hover Text
            </div>
        </div>
    );
};

export default HomeSection2;