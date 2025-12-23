import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../shared/navbar/NavbarComponent";
import Home from "../home/pages/Home";
import Footer from "../shared/footer/Footer";
import Parts from "../parts/pages/Parts";
import Services from "../servicesBike/pages/Services";
import HomeADM from "../dashboard/pages/Home";
import PartsEdit from "../dashboard/pages/PartsEdit";
import { ProtectedRoute } from "../auth/protected/ProtectedRoute";
import LoginPage from "../auth/pages/Login";
import { AuthProvider } from "../auth/provider/AuthContext";



function MyRoutes() {
    return (
        <AuthProvider>

            <BrowserRouter>
                <Navbar
                    items={[
                        { name: "Home", uri: "/" },
                        { name: "Peças", uri: "/pecas" },
                        { name: "Serviços", uri: "/servicos" },
                        { name: "Unidades", uri: "/unidades" },
                        { name: "Fale Conosco", uri: "/reclamaqui" },
                    ]}
                />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pecas" element={<Parts />} />
                    <Route path="/servicos" element={<Services />} />
                    <Route path="/login" element={<LoginPage />} />


                    {/* admin */}
                    <Route path="/admin" element={
                        <ProtectedRoute>
                            <HomeADM />
                        </ProtectedRoute>
                    }
                    />

                    <Route path="/admin/pecas" element={
                        <ProtectedRoute>
                            <PartsEdit />
                        </ProtectedRoute>
                    }
                    />
                </Routes>



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
                    about="Plataforma para gerenciamento e upload de músicas com foco em simplicidade e segurança."
                />


            </BrowserRouter>
        </AuthProvider>
    );
}

export default MyRoutes;