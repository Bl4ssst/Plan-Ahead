import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css'
import logo from './../img/LogoNovo.png'

export default function Navbar() {
    return (
    <div className={styles.navbar}>
      <Container customClass="center">
        <div className={styles.nav_logo}>
          <Link to="/">
            <img src={logo} alt="Costs" />     
          </Link>
          <Link to="/">
            <h1>PlanAhead</h1>
          </Link>
        </div>
      </Container>
    </div>
    )

} 