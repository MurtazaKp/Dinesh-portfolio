import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BookingModal } from "./BookingModal";
import { GetStartedModal } from "./GetStartedModal";
import { Breadcrumb } from "./Breadcrumb";
import { useGetStartedModal } from "../stores/getStartedStore";

export function Layout() {
  const { isOpen, close, serviceName } = useGetStartedModal();

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Breadcrumb />
      <Outlet />
      <Footer />
      <BookingModal />
      <GetStartedModal isOpen={isOpen} onClose={close} serviceName={serviceName} />
    </div>
  );
}