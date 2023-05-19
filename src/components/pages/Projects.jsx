import { useLocation } from 'react-router-dom'
import { useState, useEffect  } from 'react'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'
import ProjectCard from '../projects/ProjectCard'


import styles from './Projects.module.css'

function Projects() {
  const [project, setProjectMessage] = useState('')
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch('http://localhost:5000/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
          }),
      100,
    )
  }, [])

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
      })
  }

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
        {message && <Message type="success" msg={message} />}
        <Container className={styles.project_card} customClass="column">
        {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project?.category?.name}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
            {!removeLoading && <Loading />}
            {removeLoading && projects.length === 0 && (
              <p>Não há projetos cadastrados</p>
            )}
        </Container>
    </div>
  )
}

export default Projects