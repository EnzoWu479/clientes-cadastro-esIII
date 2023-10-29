import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};
