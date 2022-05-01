import '../../../App.css';
import character1 from '../../../assets/Character1.png'
import character4 from '../../../assets/Character4.png'
import bigButton from '../../../assets/Menu_Button_big-12.png'
import mediumButton from '../../../assets/Menu_Button_middle_copy.png'

function Header() {
    return (
        <div class='banner-container d-flex flex-row' >
            <div class="col-7" style={{ alignSelf: 'center' }}>
                <p class='banner-heading'>Welcome To</p>
                <p class='banner-sub-heading'>TALES OF XTALNIA</p>
                <p class='banner-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <div class="d-flex flex-row">
                    <div style={{
                        backgroundImage: "url(" + bigButton + ")", backgroundSize: 'cover', width: '236px',
                        height: '57px'
                    }}>
                        <p class='banner-button'>Getting Started</p>
                    </div>
                    <div style={{
                        backgroundImage: "url(" + mediumButton + ")", backgroundSize: 'cover', width: '188px',
                        height: '58px', marginLeft:'10px'
                    }}>
                        <p class='banner-button'>White Paper</p>
                    </div>
                </div>
            </div>
            <div class="col-5 d-flex flex-row" >
                <img style={{ height: 'fit-content', width: '55%', marginLeft: '13%' }} src={character4}></img>
                <img style={{ heigh: 'auto', width: '55%', marginLeft: '-12%' }} src={character1}></img>

            </div>
        </div>
    );
}

export default Header;