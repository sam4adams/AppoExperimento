import { HashRouter, Routes, Route } from 'react-router-dom'
import CountryList from './pages/CountryList'
import DenominationList from './pages/DenominationList'
import SeriesList from './pages/SeriesList'
import PriceList from './pages/PriceList'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:countryId" element={<DenominationList />} />
        <Route path="/country/:countryId/denomination/:denominationId" element={<SeriesList />} />
        <Route path="/country/:countryId/denomination/:denominationId/series/:seriesId" element={<PriceList />} />
      </Routes>
    </HashRouter>
  )
}
