import Navbar from "@/components/shared/Navbar";
import { ToastContainer } from "react-toastify";

export default function PublicLayout({ children }) {
  return (
    <>
        <Navbar></Navbar>
        {children}
        <ToastContainer></ToastContainer>
    </>
  );
}
