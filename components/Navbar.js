import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="container nav-cont">
                <div className="menu">
                    <div className="logo">
                        <Link href="/"><h1><a>Peter</a></h1></Link>
                    </div>
                    <div className="menu-links">
                        <Link href="#about"><a>About</a></Link>
                        <Link href="#project"><a>Project</a></Link>
                        <Link href="#hire"><a>Hire Me</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
