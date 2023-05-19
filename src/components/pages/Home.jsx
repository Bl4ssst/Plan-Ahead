import styles from './Home.module.css'
import savings from './../img/porcoNovo.png'
import LinkButton from '../layout/LinkButton'
import { FaCheck } from 'react-icons/fa'


export default function Home() {
  return (
    <section className={styles.home_container}>
      <div className={styles.container_lado}>
      <div className={styles.lado1}>
        <h1>
          Bem-vindo ao <span>PlanAhead</span>
        </h1>
        <p><FaCheck/> Gerencie orçamentos</p>
        <p><FaCheck/> Crie, edite e adicione serviços</p>
        <p><FaCheck/> Gerencie vários projetos ao mesmo tempo</p>
      </div>
      
      <div className={styles.lado1}>
        <img src={savings} alt="Savings" />
      </div>      
      </div>
          <p>Crie seu projeto agora mesmo</p>
          <LinkButton to="/newproject" text="Criar projeto" />
    </section>
  )
}
