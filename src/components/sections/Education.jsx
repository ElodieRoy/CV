import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    paddingTop: 80
  }
})

const Education = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <section className={classes.root} id="education">
      <Typography variant="h3">{t("education")}</Typography>
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
        delectus eligendi odio molestias itaque suscipit?
      </p>
    </section>
  )
}

export default Education
