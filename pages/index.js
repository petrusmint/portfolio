import Proptypes from 'prop-types'
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
      <Banner socials={socials} />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Achievements achievements={achievements} />
      <Contacts contacts={contacts} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects')
  const projects = await res.json()

  const res2 = await fetch('http://localhost:3000/api/achievements')
  const achievements = await res2.json()

  const res3 = await fetch('http://localhost:3000/api/contacts')
  const contacts = await res3.json()

  const res4 = await fetch('http://localhost:3000/api/socials')
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
