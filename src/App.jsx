import React, { useEffect, useState } from "react"
import { useMediaQuery } from "@material-ui/core"

import HeroHeader from "components/HeroHeader"
import MainSection from "components/MainSection"
import Footer from "components/Footer"

import isInViewport from "functions/isInViewport"

const App = () => {
  const [opacity, setOpacity] = useState(0)
  const isMediumDisplay = useMediaQuery((theme) => theme.breakpoints.up("sm"))
  const [section, setSection] = useState("none")
  const [isParticlesVisible, setIsParticlesVisible] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // Set if Particles is visible to generate it or not
      const particles = document
        .getElementById("particles")
        .getBoundingClientRect()
      setIsParticlesVisible(particles.bottom > 0)

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

      // Set the Navbar opacity
      const calcOpacity = window.scrollY / (window.innerHeight - 64)
      return calcOpacity > 1 ? setOpacity(1) : setOpacity(calcOpacity)
    })
  }, [])

  return (
    <>
      <HeroHeader
        opacity={opacity}
        isMediumDisplay={isMediumDisplay}
        section={section}
        isParticlesVisible={isParticlesVisible}
      />
      <MainSection
        isBackToTopDisplay={opacity === 1}
        isMediumDisplay={isMediumDisplay}
      />
      <Footer />
    </>
  )
}

export default App
