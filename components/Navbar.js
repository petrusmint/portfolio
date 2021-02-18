import Link from 'next/link'
import { useEffect } from 'react'

const Navbar = () => {
    useEffect(() => {
        const nav = document.querySelector('nav')
        const head = document.querySelector('.banner')
        // const options = { root: null, threshold: 0.80 }
        const options = { rootMargin: "-600px 0px 0px 0px" }
        const headObserver = new IntersectionObserver(function (entries, headObserver) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    nav.classList.add('active')
                } else {
                    nav.classList.remove('active')
                }
            })
        }, options)
        headObserver.observe(head)
    }, [])

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
