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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const calcOpacity = window.scrollY / (window.innerHeight - 64)

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
