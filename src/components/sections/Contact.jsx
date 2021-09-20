import { useState } from "react"
import { Button, makeStyles, TextField, Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import Alert from "components/tools/Alert"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "0 auto",
    maxWidth: 800,
    "& div": {
      backgroundColor: theme.palette.common.white,
      borderRadius: 5
    }
  }
}))

const mailFormat =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Contact = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [contactValues, setContactValues] = useState({
    name: { value: "", error: false, errorMessage: "" },
    email: { value: "", error: false, errorMessage: "" },
    message: { value: "", error: false, errorMessage: "" }
  })
  const [messageSent, setMessageSent] = useState("")

  const handleFormChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value

    setContactValues({
      ...contactValues,
      [inputName]: {
        value:
          inputName === "name" ? inputValue.replace(/[0-9]/, "") : inputValue,
        error: false,
        errorMessage: inputName === "message" ? 1000 - inputValue.length : ""
      }
    })
  }

  const handleFormSubmit = () => {
    const isFormError =
      contactValues.name.value === "" ||
      contactValues.email.value === "" ||
      !contactValues.email.value.match(mailFormat) ||
      contactValues.message.value === ""

    if (isFormError) {
      const nameError =
        contactValues.name.value.length < 3 ? t("errorMessage.shortName") : ""
      const emailError = !contactValues.email.value.match(mailFormat)
        ? t("errorMessage.invalidEmail")
        : ""

      setContactValues({
        name: {
          ...contactValues.name,
          error:
            contactValues.name.value === "" ||
            contactValues.name.value.length < 3,
          errorMessage:
            contactValues.name.value === ""
              ? t("errorMessage.empty")
              : nameError
        },
        email: {
          ...contactValues.email,
          error:
            contactValues.email.value === "" ||
            !contactValues.email.value.match(mailFormat),
          errorMessage:
            contactValues.email.value === ""
              ? t("errorMessage.empty")
              : emailError
        },
        message: {
          ...contactValues.message,
          error: contactValues.message.value === "",
          errorMessage:
            contactValues.message.value === "" ? t("errorMessage.empty") : ""
        }
      })
    } else {
      // send to back
      const name = contactValues.name.value
      const email = contactValues.email.value
      const message = contactValues.message.value

      axios({
        method: "post",
        url: `${process.env.REACT_APP_API_CONTACT}`,
        headers: { "content-type": "application/json" },
        data: { name, email, message }
      })
        .then(() => {
          setMessageSent("success")
          setContactValues({
            name: { value: "", error: false, errorMessage: "" },
            email: { value: "", error: false, errorMessage: "" },
            message: { value: "", error: false, errorMessage: "" }
          })
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setMessageSent(error.response.data)
          } else {
            setMessageSent(error.message)
          }
          return null
        })
    }
  }

  return (
    <section id="contact">
      <Typography variant="h3">Contact</Typography>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          size="small"
          label={t("contact.name")}
          value={contactValues.name.value}
          onChange={handleFormChange}
          error={contactValues.name.error}
          helperText={contactValues.name.errorMessage}
          color="secondary"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          size="small"
          label={t("contact.email")}
          value={contactValues.email.value}
          onChange={handleFormChange}
          error={contactValues.email.error}
          helperText={contactValues.email.errorMessage}
          color="secondary"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          name="message"
          size="small"
          label={t("contact.message")}
          value={contactValues.message.value}
          onChange={handleFormChange}
          error={contactValues.message.error}
          helperText={contactValues.message.errorMessage}
          color="secondary"
          multiline
          rows={8}
          inputProps={{ maxLength: 1000 }}
        />
        <Button
          variant="contained"
          fullWidth
          color="secondary"
          onClick={() => handleFormSubmit()}
        >
          {t("contact.submit")}
        </Button>
      </form>
      {messageSent !== "" && (
        <Alert
          isOpen
          setIsOpen={setMessageSent}
          message={t(`errorMessage.${messageSent}`, messageSent)}
          severity={messageSent === "success" ? "success" : "error"}
        />
      )}
    </section>
  )
}

export default Contact
