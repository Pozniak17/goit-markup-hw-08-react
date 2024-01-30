import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { SharedLayout } from './SharedLayout';
import { Studio } from 'pages/Studio';
import { Portfolio } from 'pages/Portfolio';
import { Contacts } from 'pages/Contacts';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Studio />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
