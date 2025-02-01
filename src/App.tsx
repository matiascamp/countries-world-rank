import './App.css'
import { contextProfile } from './context/useContext';
import { useCountries } from './hooks/useCountries';
import { useEffect } from 'react';
import { Outlet } from 'react-router';


function App() {
  const { data } = useCountries()
  const { setFilters, setCountriesData } = contextProfile()

  useEffect(() => {
    if (data) {
      setCountriesData(data)
      setFilters((prev) => ({ ...prev, countriesCount: data.length || 0 }))
    }
  }, [data])

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
