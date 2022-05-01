import '../../../App.css';
import character1 from '../../../assets/Character1.png'
import character4 from '../../../assets/Character4.png'
import bigButton from '../../../assets/Menu_Button_big.png'
import frame from '../../../assets/Frame.png'
import rsc from '../../../assets/RSC.png'

function MystrySystem() {
    return (
        <div class='d-flex flex-row ' style={{ marginLeft: '10%', marginRight: '10%' }}>
            <img class='col-6' src={ rsc}/>
            <div class='col-6' style={{ placeSelf: 'center' }}>
                <h2>Mystry System</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
    );
}

export default MystrySystem;