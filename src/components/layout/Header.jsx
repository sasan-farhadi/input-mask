import styles from './Header.module.css'
const Header = () => {
    return (
        <div className="container">
            <div className={styles.content}>
                <h3>Mini Project</h3>
                <img src="./searchicon.png" alt="" />
                <p>Sasan Farhadi | BootCamp</p>
            </div>
        </div>
    )
}
export default Header