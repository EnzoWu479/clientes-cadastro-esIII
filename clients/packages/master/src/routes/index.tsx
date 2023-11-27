import { LayoutDefault } from '@/layouts/LayoutDefault/LayoutDefault';
import { Clients } from '@/pages/Clients/Clients';
import { ClientsAddress } from '@/pages/ClientsAddress/ClientsAddress';
import { ClientsCreditCard } from '@/pages/ClientsCreditCard/ClientsCreditCard';
import { ClientsEdit } from '@/pages/ClientsEdit/ClientsEdit';
import { ClientsRegister } from '@/pages/ClientsRegister/ClientsRegister';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route index element={<Navigate to={'/clientes'} replace />} />
          <Route path="/clientes">
            <Route index element={<Clients />} />
            <Route path="cadastrar" element={<ClientsRegister />} />
            <Route path=":id" element={<ClientsEdit />} />
            <Route
              path=":id/cartao-de-credito"
              element={<ClientsCreditCard />}
            />
            <Route path=":id/enderecos" element={<ClientsAddress />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
