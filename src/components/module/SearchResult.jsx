import { useEffect, useState } from 'react'
import cities from '../../cities.json'
import styles from './SearchResult.module.css'

const SearchResult = ({ text }) => {
    const [citiesList, setCitiesList] = useState(cities)

    useEffect(() => {
        const searchHandler = () => {
            if (text) {
                const newCities = citiesList.filter(x => x.includes(text))
                setCitiesList(newCities)
            } else {
                setCitiesList(cities)
            }
        }
        searchHandler()
    }, [text])

    return (
        <div className="container">
            <div className={styles.cities}>
                {
                    citiesList.map((x, index) => {
                        return (
                            <ul key={index}>
                                <a href={`https://www.google.com/search?q=${x}`} target='_blank'><li>{x}</li></a>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SearchResult