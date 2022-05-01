import '../../../App.css';
import flag from '../../../assets/Menu_Flag_logo.png'
import home from '../../../assets/Menu_Button_small.png'
import marketPlace from '../../../assets/Menu_Button_big.png'
import blueButton from '../../../assets/Menu_Button_blue.png'

function Header() {
    return (
        <div class='header-container d-flex flex-row'>
            <div class="col-6">
                <img src={flag} class="menu-flag " alt="logo" />
            </div>
            <div class="right-header d-flex flex-row col-6">
                <div style={{
                    backgroundImage: "url(" + home + ")", backgroundSize: 'cover', height: '53px',
                    width: '96px',
                }}>
                    <p class='header-button-text'>Home</p>
                </div>
                <div style={{
                    backgroundImage: "url(" + marketPlace + ")", backgroundSize: 'cover', height: '53px',
                    width: '162px',
                    marginLeft: '10px'
                }}><p class='header-button-text'>Marketpace</p></div>
                <div style={{
                    backgroundImage: "url(" + home + ")", backgroundSize: 'cover', height: '53px',
                    width: '96px',
                    marginLeft: '10px'
                }}>
                    <p class='header-button-text'>About</p>

                </div>
                <div style={{
                    backgroundImage: "url(" + blueButton + ")", backgroundSize: 'cover', height: '53px',
                    width: '128px',
                    marginLeft: '10px'

                }}>
                    <p class='header-button-text' style={{ color: 'white' }}>Download</p>

                </div>
            </div>
        </div>
    );
}

export default Header;