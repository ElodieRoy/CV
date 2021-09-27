import { useEffect, useState } from "react"
import HeroHeader from "components/HeroHeader"
import MainSection from "components/MainSection"
import Footer from "components/Footer"

const App = () => {
  const [opacity, setOpacity] = useState(0)
  const [isTopVisible, setIsTopVisible] = useState(true)

  useEffect(() => {
    const windowHeight = window.innerHeight

    window.addEventListener("scroll", () => {
      // Set if top of the page is visible to generate Particles (which is 100vh) or not because Particules consumes a lot
      // Set the Navbar opacity depending on scroll position
      if (window.scrollY > windowHeight) {
        setIsTopVisible(false)
        setOpacity(1)
      } else {
        setIsTopVisible(true)
        setOpacity(window.scrollY / (windowHeight - 64))
      }

      return null
    })
  }, [])

  return (
    <>
      <HeroHeader opacity={opacity} isTopVisible={isTopVisible} />
      <MainSection isBackToTopDisplay={!isTopVisible} />
      <Footer />
    </>
  )
}

export default App
