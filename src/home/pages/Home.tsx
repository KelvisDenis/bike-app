import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Bem-vindo ao app Bike</h1>
        <p>
          Suas Peças com os melhores preços.
        </p>

        <div className="hero-actions">
          <Link to="/pecas" className="btn primary">
            Ver Peças
          </Link>
          <Link to="/servicos" className="btn secondary">
            Ver serviços
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;
