"use client"
import { useEffect, useState } from 'react';

import Banner from './main/Banner';
import About from './main/About';
import Contact from './main/Contact';
import Footer from '../components/Footer';

import { GithubUser } from './model';
import { motion } from 'framer-motion';

const USER_GITHUB_API = 'https://api.github.com/users/Derkysan';

export default function Home() {

  const [user, setUser] = useState<GithubUser>();
  const avatar_url = user ? user.avatar_url : '';

  useEffect(() => {
    fetch( USER_GITHUB_API )
      .then(res => res.json())
      .then(response => {
        setTimeout(() => {
          setUser(response)
        }, 1500);
      })
      .catch(error => error.message)
  }, []);

  return (
    <motion.div 
    style={{
      height: '100vh',
    }}
    initial={{
      overflow: 'hidden'
    }}
    animate={{
      overflow: 'auto'
    }}
    transition={{
      delay: 2
    }}
    >
      <Banner user={ user! } />
      <About avatar={ avatar_url } />
      <Contact />
      <Footer />
    </motion.div>
  )
}
