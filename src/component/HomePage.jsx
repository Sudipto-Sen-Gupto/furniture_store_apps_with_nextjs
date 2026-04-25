import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Items from './Items';
import Review from './Review';



const HomePage = () => {

    return (
        <div>
             
             <HeroSection></HeroSection>
              <Items></Items>
              <Review></Review>
                     </div>
    );
};

export default HomePage;