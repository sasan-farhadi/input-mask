import { useEffect, useState } from 'react'
import cities from '../../cities.json'
import SearchCities from "../module/SearchCities"
import styles from './SearchResult.module.css'

const SearchResult = () => {
    const [citiesList, setCitiesList] = useState([])
    const [suggestion, setSuggestion] = useState("")
    const [text, setText] = useState("")

    useEffect(() => {
        setCitiesList([])
        setSuggestion("")
        const searchHandler = () => {
            if (text) {
                const newCities = cities.filter(x => x.startsWith(text))
                setCitiesList(newCities)
                setSuggestion(newCities)
            } else {
                setCitiesList(cities)
            }
        }
        searchHandler()
    }, [text])

    return (
        <div className="container">
            <SearchCities text={text} setText={setText} suggestion={suggestion} setSuggestion={setSuggestion} />
            {
                text && <div className={styles.cities}>
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
            }

        </div>
    )
}
export default SearchResult