import { useEffect, useState } from "react"
import HeroHeader from "components/HeroHeader"
import MainSection from "components/MainSection"
import Footer from "components/Footer"

import isInViewport from "functions/isInViewport"

const App = () => {
  const [opacity, setOpacity] = useState(0)
  const [section, setSection] = useState("none")
  const [isTopVisible, setIsTopVisible] = useState(true)

  useEffect(() => {
    const windowHeight = window.innerHeight
    let timer

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

      if (timer) {
        window.clearTimeout(timer)
      }

      timer = window.setTimeout(() => {
        // Set the visible section to underline it in the Navbar
        if (isInViewport("contact")) {
          setSection("contact")
        } else if (isInViewport("education")) {
          setSection("education")
        } else if (isInViewport("experiences")) {
          setSection("experiences")
        } else if (isInViewport("skills")) {
          setSection("skills")
        } else {
          setSection("none")
        }
      }, 200)

      return null
    })
  }, [])

  return (
    <>
      <HeroHeader
        opacity={opacity}
        section={section}
        isTopVisible={isTopVisible}
      />
      <MainSection isBackToTopDisplay={!isTopVisible} />
      <Footer />
    </>
  )
}

export default App
