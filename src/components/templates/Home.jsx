import SearchCities from "../module/SearchCities"
import Layout from "../layout/Layout"
import SearchResult from "../module/SearchResult"

const Home = () => {
    return (
        <>
            <Layout>
                <SearchCities />
                <SearchResult/>
            </Layout>
        </>
    )
}
export default Home