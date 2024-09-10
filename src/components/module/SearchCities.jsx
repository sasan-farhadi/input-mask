import styles from './SearchCities.module.css'
const SearchCities = () => {
    return (
        <div className="container">
            <div className={styles.searchbox}>
                <form className={styles.form}>
                    <input className={styles.input} placeholder="Type your text" required type="text" />
                </form>
            </div>

        </div>
    )
}
export default SearchCities
