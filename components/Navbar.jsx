import Link from 'next/link'
import React, { useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector('nav')
    const head = document.querySelector('.banner')
    const options = { rootMargin: '-600px 0px 0px 0px' }
    const headObserver = new IntersectionObserver(((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.classList.add('active')
        } else {
          nav.classList.remove('active')
        }
      })
    }), options)
    headObserver.observe(head)

    const elems = document.querySelectorAll('li')
    const toggle = document.querySelector('.nav-toggle')
    elems.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        setTimeout(toggle.click(), 200)
      })
    })
  }, [])

  return (
    <nav>
      <div className="container nav-cont">
        <div className="menu">
          <div className="logo">
            <Link href="/"><h1><a href="/#">Peter</a></h1></Link>
          </div>
          <div className="menu-links">
            <label htmlFor="nav-toggle" className="nav-toggle-label"><span /></label>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <ul>
              <li><Link href="#about"><a href="/#">About</a></Link></li>
              <li><Link href="#project"><a href="/#">Project</a></Link></li>
              <li><Link href="#hire"><a href="/#">Hire Me</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
