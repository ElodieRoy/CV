import React, { useEffect, useState } from "react"

import HeroHeader from "components/HeroHeader"
import NavBar from "components/NavBar"

const App = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const calcOpacity = window.scrollY / (window.outerHeight * 0.8 - 100)
      return calcOpacity > 1 ? setOpacity(1) : setOpacity(calcOpacity)
    })
  }, [])

  return (
    <>
      <NavBar opacity={opacity} />
      <HeroHeader opacity={opacity} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam,
        doloremque deserunt nisi iste cum, sunt atque voluptas optio, quod est
        qui velit facilis delectus eligendi odio molestias itaque suscipit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel maxime
        sit, quidem, tenetur ex harum corrupti iure excepturi mollitia, dolore
        repellat nisi nobis aliquid! Corrupti facere dolorum nulla nam culpa?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore
        aut adipisci, ipsum, libero suscipit deserunt rem facere eveniet minima
        mollitia blanditiis dolores, voluptas eaque molestiae soluta eligendi
        impedit quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deserunt, fuga voluptates. Illo ut perferendis veniam quo, alias
        quaerat, corrupti saepe impedit at quas ex, eum sapiente. Quia sint
        accusantium veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corrupti ullam, doloremque deserunt nisi iste cum, sunt atque
        voluptas optio, quod est qui velit facilis delectus eligendi odio
        molestias itaque suscipit? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Vel maxime sit, quidem, tenetur ex harum corrupti iure
        excepturi mollitia, dolore repellat nisi nobis aliquid! Corrupti facere
        dolorum nulla nam culpa? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Qui inventore aut adipisci, ipsum, libero suscipit
        deserunt rem facere eveniet minima mollitia blanditiis dolores, voluptas
        eaque molestiae soluta eligendi impedit quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deserunt, fuga voluptates. Illo ut
        perferendis veniam quo, alias quaerat, corrupti saepe impedit at quas
        ex, eum sapiente. Quia sint accusantium veniam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Corrupti ullam, doloremque deserunt
        nisi iste cum, sunt atque voluptas optio, quod est qui velit facilis
        delectus eligendi odio molestias itaque suscipit? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Vel maxime sit, quidem, tenetur ex
        harum corrupti iure excepturi mollitia, dolore repellat nisi nobis
        aliquid! Corrupti facere dolorum nulla nam culpa? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Qui inventore aut adipisci, ipsum,
        libero suscipit deserunt rem facere eveniet minima mollitia blanditiis
        dolores, voluptas eaque molestiae soluta eligendi impedit quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fuga
        voluptates. Illo ut perferendis veniam quo, alias quaerat, corrupti
        saepe impedit at quas ex, eum sapiente. Quia sint accusantium veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam,
        doloremque deserunt nisi iste cum, sunt atque voluptas optio, quod est
        qui velit facilis delectus eligendi odio molestias itaque suscipit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel maxime
        sit, quidem, tenetur ex harum corrupti iure excepturi mollitia, dolore
        repellat nisi nobis aliquid! Corrupti facere dolorum nulla nam culpa?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore
        aut adipisci, ipsum, libero suscipit deserunt rem facere eveniet minima
        mollitia blanditiis dolores, voluptas eaque molestiae soluta eligendi
        impedit quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deserunt, fuga voluptates. Illo ut perferendis veniam quo, alias
        quaerat, corrupti saepe impedit at quas ex, eum sapiente. Quia sint
        accusantium veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corrupti ullam, doloremque deserunt nisi iste cum, sunt atque
        voluptas optio, quod est qui velit facilis delectus eligendi odio
        molestias itaque suscipit? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Vel maxime sit, quidem, tenetur ex harum corrupti iure
        excepturi mollitia, dolore repellat nisi nobis aliquid! Corrupti facere
        dolorum nulla nam culpa? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Qui inventore aut adipisci, ipsum, libero suscipit
        deserunt rem facere eveniet minima mollitia blanditiis dolores, voluptas
        eaque molestiae soluta eligendi impedit quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deserunt, fuga voluptates. Illo ut
        perferendis veniam quo, alias quaerat, corrupti saepe impedit at quas
        ex, eum sapiente. Quia sint accusantium veniam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Corrupti ullam, doloremque deserunt
        nisi iste cum, sunt atque voluptas optio, quod est qui velit facilis
        delectus eligendi odio molestias itaque suscipit? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Vel maxime sit, quidem, tenetur ex
        harum corrupti iure excepturi mollitia, dolore repellat nisi nobis
        aliquid! Corrupti facere dolorum nulla nam culpa? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Qui inventore aut adipisci, ipsum,
        libero suscipit deserunt rem facere eveniet minima mollitia blanditiis
        dolores, voluptas eaque molestiae soluta eligendi impedit quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fuga
        voluptates. Illo ut perferendis veniam quo, alias quaerat, corrupti
        saepe impedit at quas ex, eum sapiente. Quia sint accusantium veniam.
        impedit at quas ex, eum sapiente. Quia sint accusantium veniam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam,
        doloremque deserunt nisi iste cum, sunt atque voluptas optio, quod est
        qui velit facilis delectus eligendi odio molestias itaque suscipit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel maxime
        sit, quidem, tenetur ex harum corrupti iure excepturi mollitia, dolore
        repellat nisi nobis aliquid! Corrupti facere dolorum nulla nam culpa?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore
        aut adipisci, ipsum, libero suscipit deserunt rem facere eveniet minima
        mollitia blanditiis dolores, voluptas eaque molestiae soluta eligendi
        impedit quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deserunt, fuga voluptates. Illo ut perferendis veniam quo, alias
        quaerat, corrupti saepe impedit at quas ex, eum sapiente. Quia sint
        accusantium veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corrupti ullam, doloremque deserunt nisi iste cum, sunt atque
        voluptas optio, quod est qui velit facilis delectus eligendi odio
        molestias itaque suscipit? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Vel maxime sit, quidem, tenetur ex harum corrupti iure
        excepturi mollitia, dolore repellat nisi nobis aliquid! Corrupti facere
        dolorum nulla nam culpa? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Qui inventore aut adipisci, ipsum, libero suscipit
        deserunt rem facere eveniet minima mollitia blanditiis dolores, voluptas
        eaque molestiae soluta eligendi impedit quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deserunt, fuga voluptates. Illo ut
        perferendis veniam quo, alias quaerat, corrupti saepe impedit at quas
        ex, eum sapiente. Quia sint accusantium veniam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Corrupti ullam, doloremque deserunt
        nisi iste cum, sunt atque voluptas optio, quod est qui velit facilis
        delectus eligendi odio molestias itaque suscipit? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Vel maxime sit, quidem, tenetur ex
        harum corrupti iure excepturi mollitia, dolore repellat nisi nobis
        aliquid! Corrupti facere dolorum nulla nam culpa? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Qui inventore aut adipisci, ipsum,
        libero suscipit deserunt rem facere eveniet minima mollitia blanditiis
        dolores, voluptas eaque molestiae soluta eligendi impedit quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fuga
        voluptates. Illo ut perferendis veniam quo, alias quaerat, corrupti
        saepe impedit at quas ex, eum sapiente. Quia sint accusantium veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ullam,
        doloremque deserunt nisi iste cum, sunt atque voluptas optio, quod est
        qui velit facilis delectus eligendi odio molestias itaque suscipit?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel maxime
        sit, quidem, tenetur ex harum corrupti iure excepturi mollitia, dolore
        repellat nisi nobis aliquid! Corrupti facere dolorum nulla nam culpa?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui inventore
        aut adipisci, ipsum, libero suscipit deserunt rem facere eveniet minima
        mollitia blanditiis dolores, voluptas eaque molestiae soluta eligendi
        impedit quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deserunt, fuga voluptates. Illo ut perferendis veniam quo, alias
        quaerat, corrupti saepe impedit at quas ex, eum sapiente. Quia sint
        accusantium veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corrupti ullam, doloremque deserunt nisi iste cum, sunt atque
        voluptas optio, quod est qui velit facilis delectus eligendi odio
        molestias itaque suscipit? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Vel maxime sit, quidem, tenetur ex harum corrupti iure
        excepturi mollitia, dolore repellat nisi nobis aliquid! Corrupti facere
        dolorum nulla nam culpa? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Qui inventore aut adipisci, ipsum, libero suscipit
        deserunt rem facere eveniet minima mollitia blanditiis dolores, voluptas
        eaque molestiae soluta eligendi impedit quam. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deserunt, fuga voluptates. Illo ut
        perferendis veniam quo, alias quaerat, corrupti saepe impedit at quas
        ex, eum sapiente. Quia sint accusantium veniam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Corrupti ullam, doloremque deserunt
        nisi iste cum, sunt atque voluptas optio, quod est qui velit facilis
        delectus eligendi odio molestias itaque suscipit? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Vel maxime sit, quidem, tenetur ex
        harum corrupti iure excepturi mollitia, dolore repellat nisi nobis
        aliquid! Corrupti facere dolorum nulla nam culpa? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Qui inventore aut adipisci, ipsum,
        libero suscipit deserunt rem facere eveniet minima mollitia blanditiis
        dolores, voluptas eaque molestiae soluta eligendi impedit quam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fuga
        voluptates. Illo ut perferendis veniam quo, alias quaerat, corrupti
        saepe impedit at quas ex, eum sapiente. Quia sint accusantium veniam.
        impedit at quas ex, eum sapiente. Quia sint accusantium veniam.
      </p>
    </>
  )
}

export default App
