const Footer = () => {
    const getDate = () => {
        const Today = new Date()
        return Today.getFullYear()
    }

    return (
        <footer>
            <div className="container flex">
                <div className="text-cont">
                    <h2>Peter</h2>
                    <p>Life is good when you focus on brighter things</p>
                    <div className="links">
                        <a className="facebook" href="https://facebook.com" target="_blank"></a>
                        <a className="instagram" href="https://instagram.com" target="_blank"></a>
                        <a className="linkedin" href="https://linkedin.com" target="_blank"></a>
                        <a className="github" href="https://github.com" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container flex">
                    <p>
                        © {getDate()} Copyright. Developed by Peter Paul Villarino
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
