import Navbar from "@/components/common/header/navbar";
import Contact from "@/components/contact";
import { Container } from "@mui/material";
import SideMenu from "@/components/common/SideMenu";
import Footer from "@/components/common/footer";

export default function Page() {
    return (
        <div>
            <Navbar />
            <Contact />
            <SideMenu />
            <Footer />
        </div>
    );
}
