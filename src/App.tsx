import './App.css'
import { useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useReadySection } from './hooks/useReadySection'
import { Header } from './components/shared/Header'
import { Footer } from './components/shared/Footer'
import { Home } from './routes/home/Home'
import { TermsOfUse } from './routes/termsOfUse/TermsOfUse'
import { PrivacyPolicies } from './routes/privacyPolicies/PrivacyPolicies'

export default function App() {
  // const [app, setApp] = useState<HTMLDivElement>(null)
  const app = useRef<HTMLDivElement>(null)

  useReadySection(app, "ready")

  return (
    <div ref={app} className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
        <Route path='/privacy-policies' element={<PrivacyPolicies />} />
      </Routes>
      <Footer />
    </div>
  )
}