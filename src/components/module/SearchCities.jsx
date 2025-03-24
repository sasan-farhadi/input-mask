import { useState } from 'react'
import styles from './SearchCities.module.css'
const SearchCities = ({ text, setText, suggestion }) => {

    const regexEn = /^[a-zA-Z@._0-9\s]*$/
    const regUpperCase = /^(?:[A-Z][a-zA-Z ]*)?$/

    const [alert, setAlert] = useState("")
    const [alertShow, setAlertShow] = useState("none")

    const inputHandler = e => {
        const text = e.target.value
        if (!regexEn.test(text)) {
            setAlert("Set the keyboard to English")
            setAlertShow("block")
            return
        } else if (!regUpperCase.test(text)) {
            setAlert("Start with capital letters!")
            setAlertShow("block")
            return
        } else {
            setAlertShow("none")
            setText(text)
        }
        setAlert("")
    }

    return (
        <div className="container">
            <div className={styles.alert} style={{ display: alertShow }}>{alert} </div>
            <div className={styles.searchbox}>

                {suggestion ? <h2>{suggestion[0]}</h2> : ""}

                <div className={styles.form}>
                    <input className={styles.input}
                        name="search"
                        type="text"
                        value={text}
                        placeholder='Search ...'
                        onChange={inputHandler} />
                </div>
            </div>
        </div>
    )
}
export default SearchCities
