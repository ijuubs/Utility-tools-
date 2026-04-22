import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ToolTemplate from './pages/ToolTemplate';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tools/:slug" element={<ToolTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
