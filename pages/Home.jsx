import React from 'react'
import BlogSection from './BlogSection';
import Treading from './Treading';
import Sread from './Sread';
import HeroSection from './HeroSection';
import Blognav from './Blognav';
import NewsAndTrendy from './NewsAndTrendy';

const Home = () => {
  return (
   <>
   <HeroSection/>
   <NewsAndTrendy/>
   <Treading/>
<Sread/>
<Blognav/>  
   </>
  )
}

export default Home