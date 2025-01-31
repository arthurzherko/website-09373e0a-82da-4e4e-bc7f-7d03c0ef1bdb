import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Reasons } from "./pages/reasons";
import { Please } from "./pages/please";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const Routes = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/please" element={<Please />} />
      </RouterRoutes>
    </main>
    <Footer />
  </div>
);

export { Routes };