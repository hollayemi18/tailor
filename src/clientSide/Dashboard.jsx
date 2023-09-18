import Bottom from "./Bottom";
import Navbar from "./component/layouts/Navbar";
import Cards from "./component/Cards";
import Footer from "../pages/Footer";
function Dashboard() {
    return (
        <div>
            <Navbar />

            <Cards />
            <Footer />
            <Bottom />
        </div>
    );
}
export default Dashboard;
