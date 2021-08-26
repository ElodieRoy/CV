import React, { useEffect, useState } from "react"
import { useMediaQuery } from "@material-ui/core"

import HeroHeader from "components/HeroHeader"
import MainSection from "components/MainSection"
import Footer from "components/Footer"

const App = () => {
  const [opacity, setOpacity] = useState(0)
  const isMediumDisplay = useMediaQuery((theme) => theme.breakpoints.up("sm"))
  const [section, setSection] = useState("none")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const calcOpacity = window.scrollY / (window.innerHeight - 64)
      const sectionTop = window.scrollY - window.innerHeight

      // Determine section
      if (sectionTop > 2913) {
        setSection("contact")
      } else if (sectionTop > 2381) {
        setSection("education")
      } else if (sectionTop > 1065) {
        setSection("experiences")
      } else if (sectionTop > -64) {
        setSection("skills")
      } else {
        setSection("none")
      }

      return calcOpacity > 1 ? setOpacity(1) : setOpacity(calcOpacity)
    })
  }, [])

  return (
    <>
      <HeroHeader
        opacity={opacity}
        isMediumDisplay={isMediumDisplay}
        section={section}
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
