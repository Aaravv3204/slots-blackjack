import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import CheatSheet from './components/CheatSheet'
import PopularSlots from './components/PopularSlots'
import CreatorsSection from './components/CreatorsSection'
import GuidesSection from './components/GuidesSection'
import HelpSection from './components/HelpSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="page-bg"/>
      <Navbar/>
      <main>
        <Hero/>
        <Trust/>
        <CheatSheet/>
        <PopularSlots/>
        <CreatorsSection/>
        <GuidesSection/>
        <HelpSection/>
      </main>
      <Footer/>
    </>
  )
}
