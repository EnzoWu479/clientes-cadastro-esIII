import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

function App() {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
}

export default App;
