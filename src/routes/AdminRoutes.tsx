import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../shared/navbar/NavbarComponent";
import Home from "../home/pages/Home";
import HomeADM from "../dashboard/pages/Home";
import PartsEdit from "../dashboard/pages/PartsEdit";
import { ProtectedRoute } from "../auth/protected/ProtectedRoute";
import LoginPage from "../auth/pages/Login";
import { AuthProvider, useAuth } from "../auth/provider/AuthContext";
import ServicesADM from "../dashboard/pages/ServicesEdit";

function AppAdminRoutes() {
    const { isAuthenticated } = useAuth();

    return (
        <>
            {isAuthenticated && (
                <Navbar
                items={[
                    { name: "Home", uri: "/admin" },
                    { name: "Peças", uri: "/admin/pecas" },
                    { name: "Serviços", uri: "/admin/servicos" },
                    { name: "Configurações", uri: "/admin/configuracoes" },
                ]}
            />
            )}

            <Routes>
                <Route path="/" element={<Home />} />
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
            </Routes>
        </>
    );
}

export default function AdminRoutes() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppAdminRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}
