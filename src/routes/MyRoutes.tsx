import { Routes, Route } from "react-router-dom";
import { useAuth } from "../auth/provider/AuthContext";
import { ProtectedRoute } from "../auth/protected/ProtectedRoute";

import Navbar from "../shared/navbar/NavbarComponent";
import Footer from "../shared/footer/Footer";

// Public
import Home from "../home/pages/Home";
import Parts from "../parts/pages/Parts";
import Services from "../servicesBike/pages/Services";
import LoginPage from "../auth/pages/Login";

// Admin
import HomeADM from "../dashboard/pages/Home";
import PartsEdit from "../dashboard/pages/PartsEdit";
import ServicesADM from "../dashboard/pages/ServicesEdit";
import Logout from "../auth/pages/Logout";

export default function AppRoutes() {
    const { isAuthenticated } = useAuth();
    const { logout } = useAuth();

    return (
        <>
            {/* NAVBAR */}
            {isAuthenticated ? (
                <Navbar
                    items={[
                        { name: "Home", uri: "/admin" },
                        { name: "Peças", uri: "/admin/pecas" },
                        { name: "Serviços", uri: "/admin/servicos" },
                        { name: "Sair", uri: "/admin/sair" },
                    ]}
                />
            ) : (
                <Navbar
                    items={[
                        { name: "Home", uri: "/" },
                        { name: "Peças", uri: "/pecas" },
                        { name: "Serviços", uri: "/servicos" },

                    ]}
                />
            )}

            <Routes>
                {/* PUBLIC */}
                <Route path="/" element={<Home />} />
                <Route path="/pecas" element={<Parts />} />
                <Route path="/servicos" element={<Services />} />
                <Route path="/login" element={<LoginPage />} />

                {/* ADMIN */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <HomeADM />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/pecas"
                    element={
                        <ProtectedRoute>
                            <PartsEdit />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/servicos"
                    element={
                        <ProtectedRoute>
                            <ServicesADM />
                        </ProtectedRoute>
                    }
                />

                 <Route
                    path="/admin/sair"
                    element={
                        <ProtectedRoute>
                            <Logout/>
                        </ProtectedRoute>
                    }
                />
            </Routes>

            {/* FOOTER */}
            {!isAuthenticated && <Footer
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
            />}
        </>
    );
}
