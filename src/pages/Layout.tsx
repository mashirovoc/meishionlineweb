import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col bg-background text-foreground min-h-dvh font-sans">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
