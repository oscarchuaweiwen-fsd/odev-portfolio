import Footer from "@/components/common/footer";
import Cursor from "@/components/custom/custom_cursor";
import Navbar from "@/components/common/header/navbar";
import Project from "@/components/projects";

export default function Page() {
    return (
        <div>
            <Navbar />
            <Project />
            <Cursor />
            <Footer />
        </div>
    );
}
