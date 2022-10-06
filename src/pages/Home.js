import React from 'react'
import { useState } from 'react'
import Contact from '../components/Contact/Contact'
import Featured from '../components/Featured/Featured'
import Footer from '../components/Footer/Footer'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects'

const Home = () => {
  const [contact, setContact] = useState(false)
  return (
    <section>
      <HomeHeader />
      <Navbar setContact={setContact} />
      <Contact setContact={setContact} contact={contact} />
      <Featured />
      <Projects />
      <Footer />
    </section>
  )
}

export default Home
