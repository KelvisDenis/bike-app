import MainPart from "../components/Main";
import { partsMock } from "../data/MockPart";
import "../styles/Parts.css";


function Parts() {
    return (
        <main className="parts">
            <MainPart
                header={
                    {
                        title: "Peças para Moto & Bike",
                        description: "Encontre peças de qualidade para manutenção, revisão e performance."
                    }}

                filterSection={{ options: [{ textButton: "Moto" }, { textButton: "Bike" }] }}
                section={{ data: partsMock }}
            />

        </main>
    );
}

export default Parts;
