import { useEffect, useState } from "react"
import HeroHeader from "components/HeroHeader"
import MainSection from "components/MainSection"
import Footer from "components/Footer"
import BackToTopButton from "components/tools/BackToTopButton"

const App = () => {
  const [opacity, setOpacity] = useState(0)
  const isTopVisible = opacity !== 1

  useEffect(() => {
    const windowHeight = window.innerHeight

    window.addEventListener("scroll", () => {
      // Set the Navbar opacity depending on scroll position
      if (window.scrollY > windowHeight) {
        setOpacity(1)
      } else {
        setOpacity(window.scrollY / (windowHeight - 64))
      }
    })
  }, [])

  return (
    <>
      <HeroHeader opacity={opacity} isTopVisible={isTopVisible} />
      <BackToTopButton isDisplay={!isTopVisible} />
      <MainSection />
      <Footer />
    </>
  )
}

export default App
