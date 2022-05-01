import '../../../App.css';
import character1 from '../../../assets/Character1.png'
import character4 from '../../../assets/Character4.png'
import bigButton from '../../../assets/Menu_Button_big.png'
import frame from '../../../assets/Frame.png'
import Xtal from '../../../assets/Xtal_box.png'

function Footer() {
    return (
        <div class='d-flex flex-row ' style={{ marginLeft: '10%', marginRight: '10%' }}>

            <div class='col-6' >
                <p style={{
                    float: 'left', color: 'gray',
                    fontWeight: 'bold'
                }}>Copyright @ 2022</p>
            </div>

            <div class='col-6' >
                <p style={{
                    float: 'right', color: 'gray',
                    fontWeight: 'bold'
                }}>All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;