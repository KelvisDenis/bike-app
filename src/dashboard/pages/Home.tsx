import SidBar from "../components/Sidbar"
import "../styles/pages/HomeADM.css"


function HomeADM() {
    return (
        <div className="home-adm-layout">
            <SidBar />
           <main className="home-adm-content">
                <h1>Gerenciar Peças</h1>
                </main>
        </div>

    )
}


export default HomeADM