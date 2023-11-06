import { LayoutDefault } from '@/layouts/LayoutDefault/LayoutDefault';
import { Clients } from '@/pages/Clients/Clients';
import { ClientsRegister } from '@/pages/ClientsRegister/ClientsRegister';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route index element={<Clients />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/clientes/cadastrar" element={<ClientsRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
