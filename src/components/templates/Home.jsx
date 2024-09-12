import SearchCities from "../module/SearchCities"
import Layout from "../layout/Layout"
import SearchResult from "../module/SearchResult"
import { useState } from "react"

const Home = () => {
    const [text, setText] = useState("")

    return (
        <>
            <Layout>
                <SearchCities text={text} setText={setText} />
                <SearchResult text={text} />
            </Layout>
        </>
    )
}
export default Home