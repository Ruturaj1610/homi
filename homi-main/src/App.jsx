import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ChatPage from './pages/ChatPage'
import ConnectionPage from './pages/ConnectionPage'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ProfileSetupPage from './pages/ProfileSetupPage'
import SignupPage from './pages/SignupPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="profile-setup" element={<ProfileSetupPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="connections" element={<ConnectionPage />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
