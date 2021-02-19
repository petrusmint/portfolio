import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Achievement from '../components/Achievements'

export default function Home({ projects, achievements }) {

  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Achievement achievements={achievements} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects')
  const projects = await res.json()

  const res2 = await fetch('http://localhost:3000/api/achievements')
  const achievements = await res2.json()

  return {
    props: {
      projects,
      achievements
    }
  }
}