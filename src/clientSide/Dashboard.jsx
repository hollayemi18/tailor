import Bottom from "./Bottom";
import Navbar from "./component/layouts/Navbar";
import Cards from "./component/Cards";
//import Footer from '../pages/Footer'
import Explore from "./utils/Explore";
function Dashboard() {
    return (
        <div>
            <Navbar />
            <Explore />
            <Cards />
            <Bottom />
        </div>
    );
}
export default Dashboard;
