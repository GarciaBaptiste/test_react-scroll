import './App.css'
import {Link, Element} from 'react-scroll'

function App() {

  return (
    <>
      <nav>
        <Link to="projet-1">Projet 1</Link>
        <Link to="projet-2">Projet 2</Link>
        <Link to="projet-3">Projet 3</Link>
      </nav>
      <Element name="projet-1">
        <section style={{height: '100vh', background: 'grey'}}>
          <h2>Projet 1</h2>
          <article></article>
        </section>
      </Element>
      <Element name="projet-2">
        <section style={{height: '100vh', background: 'lightgrey'}}>
          <h2>Projet 2</h2>
          <article></article>
        </section>
      </Element>
    </>
  )
}

export default App
