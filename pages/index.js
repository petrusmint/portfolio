import Head from 'next/head'
import Proptypes from 'prop-types'
import { server } from '../config'

import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Contacts from '../components/Contacts'

export default function Home({
  projects, achievements, contacts, socials,
}) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Hi, welcome to my portfolio. Don't hesitate to contact me for a job. Thank you and have a nice day" />
        <meta name="keywords" content="Portfolio" />
        <meta name="author" content="Peter Paul Villarino" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/jpg" href="/favicon.png" />
        <title>Peter Paul Villarino</title>
      </Head>
      <Banner socials={socials} />
      <About />
      <Skills />
      <Projects projects={projects} />
      {/* <Achievements achievements={achievements} />
      <Contacts contacts={contacts} /> */}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`)
  const projects = await res.json()

  const res2 = await fetch(`${server}/api/achievements`)
  const achievements = await res2.json()

  const res3 = await fetch(`${server}/api/contacts`)
  const contacts = await res3.json()

  const res4 = await fetch(`${server}/api/socials`)
  const socials = await res4.json()

  return {
    props: {
      projects,
      achievements,
      contacts,
      socials,
    },
  }
}

Home.propTypes = {
  projects: Proptypes.array,
  achievements: Proptypes.array,
  contacts: Proptypes.array,
  socials: Proptypes.array,
}
