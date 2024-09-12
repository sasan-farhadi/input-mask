import styles from './SearchCities.module.css'
const SearchCities = ({ text, setText }) => {
    return (
        <div className="container">
            <div className={styles.searchbox}>
                <div className={styles.form}>
                    <input className={styles.input}
                        name="search"
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)} />
                </div>
            </div>

        </div>
    )
}
export default SearchCities
