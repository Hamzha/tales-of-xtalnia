import Header from "./components/header";
import Banner from './components/banner';
import TalesOfXtalnia from './components/talesOfXtalnia';
import PVE from './components/PVE';
import PVP from './components/PVP';
import RSC from './components/RSC';
import Xtal from "./components/Xtal";
import MystrySystem from "./components/Mystry_system";
import Footer from "./components/footer";
function Home() {
    return (
        <div style={{ background: '#acd6fe' }} >
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Layer11_sketch.png'})`, width: '100%', height: '600px', backgroundSize: '100% auto' }}>
                <Header />
                <Banner />
            </div>
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Cloud.png'})`, width: '100%', height: '500px', backgroundSize: '100% auto', marginTop: '-130px' }}>
            </div>
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Cloud.png'})`, width: '100%', backgroundSize: '100% auto', }}>
                <TalesOfXtalnia />
                <PVE />
                <PVP style={{
                    marginTop: '10px'
                }} />
                <RSC style={{
                    marginTop: '10px'
                }} />
                <Xtal style={{
                    marginTop: '10px'
                }} />
                <MystrySystem style={{
                    marginTop: '10px'
                }} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
