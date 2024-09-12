import styles from './Header.module.css'
const Header = () => {
    return (
        <div className="container">
            <div className={styles.header}>
                <h3>American Cities</h3>
                <img src="./searchicon.png" alt="" />
                <p>BootCamp | FrontEnd</p>
            </div>
        </div>
    )
}
export default Header