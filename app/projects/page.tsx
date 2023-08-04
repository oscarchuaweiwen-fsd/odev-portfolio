import Footer from "@/components/common/footer";
import Cursor from "@/components/common/custom/custom_cursor";
import Navbar from "@/components/common/header/navbar";
import Project from "@/components/projects";
import SideMenu from "@/components/common/SideMenu";

export default function Page() {
    return (
        <div>
            <Navbar />
            <Project />
            <SideMenu />
            <Footer />
        </div>
    );
}
