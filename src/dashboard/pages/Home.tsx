import { useState } from "react";
import DashboardCardChart from "../components/Card";
import ConfigCard from "../components/ConfigCard";
import "../styles/pages/HomeADM.css";

function HomeADM() {
    const [openStatusModal, setOpenStatusModal] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    const [scheduleModal, setScheduleModal] = useState(false);
    const [aboutModal, setAboutModal] = useState(false);


    return (
        <div className="home-adm-layout">
            <main className="home-adm-content">
                <header className="home-adm-header">
                    <h2>Dashboard</h2>
                    <p>Visão geral do sistema</p>
                </header>

                <section className="home-adm-cards">
                    <DashboardCardChart
                        title="Peças (Moto)"
                        description="Status atual do estoque"
                        data={[
                            { label: "Vendidas", value: 120, color: "#22c55e" },
                            { label: "Em estoque", value: 80, color: "#3b82f6" },
                            { label: "Lucro", value: 80, color: "#964338ff" },
                        ]}
                    />

                    <DashboardCardChart
                        title="Peças (Bike)"
                        description="Status atual do estoque"
                        data={[
                            { label: "Vendidas", value: 95, color: "#22c55e" },
                            { label: "Em estoque", value: 60, color: "#3b82f6" },
                            { label: "Lucro", value: 80, color: "#964338ff" },

                        ]}
                    />

                    <DashboardCardChart
                        title="Rendimento"
                        description="Status de sua renda mensal"
                        data={[
                            { label: "Renda", value: 120, color: "#22c55e" },
                            { label: "Gastos", value: 120, color: "#b11e1eff" },
                        ]}
                    />

                     <DashboardCardChart
                        title="Acessos"
                        description="Status de visitas ao site"
                        data={[
                            { label: "Acessos", value: 120, color: "#22c55e" },
                        ]}
                    />
                </section>

                <header className="home-adm-header">
                    <h2>Opções</h2>
                    <p>Serviços do sistema</p>
                </header>

                <section className="settings-grid">
                    <ConfigCard
                        title="Status da Loja"
                        description="Defina se a loja está aberta ou fechada para atendimento."
                        buttonLabel="Alterar status"
                        onAction={() => setOpenStatusModal(true)}
                    />

                    <ConfigCard
                        title="Contato"
                        description="Atualize telefone, WhatsApp e email exibidos no site."
                        buttonLabel="Editar contato"
                        onAction={() => setContactModal(true)}
                    />

                    <ConfigCard
                        title="Horário de Funcionamento"
                        description="Configure os horários exibidos no rodapé do site."
                        buttonLabel="Editar horário"
                        onAction={() => setScheduleModal(true)}
                    />

                    <ConfigCard
                        title="Sobre a Empresa"
                        description="Altere o texto institucional exibido no rodapé."
                        buttonLabel="Editar texto"
                        onAction={() => setAboutModal(true)}
                    />

                    <ConfigCard
                        title="Renda"
                        description="Informe os dados para saber seu rendimento."
                        buttonLabel="Editar texto"
                        onAction={() => setAboutModal(true)}
                    />
                </section>
            </main>
        </div>
    );
}

export default HomeADM;
