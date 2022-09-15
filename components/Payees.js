import React from "react"
import { Form, Button, Input, Message } from "semantic-ui-react"
// import styles from "./payees.css"
import styles from "./styles/payees.module.scss"

const Payees = () => {
  {
    console.log(styles)
  }
  return (
    <>
      <div className={styles.scroll}>
        <div>
          Payee 1
          <Input />
          <Input className={styles.payeeMargin} />
        </div>
        <div>
          Payee 2
          <Input />
          <Input className={styles.payeeMargin} />
        </div>
        <div>
          Payee 3
          <Input />
          <Input className={styles.payeeMargin} />
        </div>
      </div>
    </>
  )
}

export default Payees
