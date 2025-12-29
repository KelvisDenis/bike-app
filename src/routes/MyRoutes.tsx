import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../shared/navbar/NavbarComponent";
import Home from "../home/pages/Home";
import Footer from "../shared/footer/Footer";
import Parts from "../parts/pages/Parts";
import Services from "../servicesBike/pages/Services";
import LoginPage from "../auth/pages/Login";
import { AuthProvider, useAuth } from "../auth/provider/AuthContext";

function AppRoutes() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {!isAuthenticated && (
                <Navbar
                    items={[
                        { name: "Home", uri: "/" },
                        { name: "Peças", uri: "/pecas" },
                        { name: "Serviços", uri: "/servicos" },
                        { name: "Unidades", uri: "/unidades" },
                        { name: "Fale Conosco", uri: "/reclamaqui" },
                    ]}
                />
            )}


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pecas" element={<Parts />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>

            {!isAuthenticated && (
                <Footer
                    operatingHours={[
                        { label: "Segunda a Sexta", time: "08:00 – 18:00" },
                        { label: "Sábado", time: "08:00 – 12:00" },
                        { label: "Domingo", time: "Fechado" },
                    ]}
                    contacts={[
                        { label: "Email", value: "contato@minhaapp.com" },
                        { label: "Telefone", value: "(99) 99999-9999" },
                        { label: "WhatsApp", value: "(99) 99999-9999" },
                    ]}
                    about="Plataforma para gerenciamento de oficina de moto e bike."
                />
            )}
        </>
    );
}

export default function MyRoutes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}
