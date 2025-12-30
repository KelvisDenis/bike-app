import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './auth/provider/AuthContext'
import AppRoutes from './routes/MyRoutes'

function App() {

  return (
  <>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  </>
  )
}

export default App
