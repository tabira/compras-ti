import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/Home.view';
import GridView from './views/Grid.view';
import FormView from './views/Form.view';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomeView />} />
        <Route path={'/grid'} element={<GridView />} />
        <Route path={'/form'} element={<FormView />} />
      </Routes>
    </BrowserRouter>
  );
}
