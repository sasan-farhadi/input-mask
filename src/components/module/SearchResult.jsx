import cities from '../../cities.json'
import styles from './SearchResult.module.css'

const SearchResult = () => {
    return (
        <div className="container">
            <div className={styles.cities}> 
                {
                    cities.map(x => {
                        return (
                            <ul>
                                <li>{x}</li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SearchResult