import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CountriesList from './routes/countryList/countryList.tsx'
import { ProfileProvider } from './context/useContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import CountryDetail from './routes/countryDetail/countryDetail.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ProfileProvider>
      <StrictMode>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<CountriesList/>}></Route>
            <Route path=':countryName' element={<CountryDetail/>}> </Route>
          </Route>
        </Routes>
      </StrictMode>
    </ProfileProvider>
  </BrowserRouter>

)
