import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className='container'>
            <div className={styles.footer}>
                <p>Developed by <a href="https://github.com/sasan-farhadi" target='_blank'>Sasan Farhadi</a></p>
            </div>
        </div>
    )
}
export default Footer