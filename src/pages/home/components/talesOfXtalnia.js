import '../../../App.css';
import character1 from '../../../assets/Character1.png'
import character4 from '../../../assets/Character4.png'
import bigButton from '../../../assets/Menu_Button_big.png'
import frame from '../../../assets/Frame.png'
import meteor from '../../../assets/Meteor_Ice.png'

function TalesOfXtalnia() {
    return (
        <div class='tales' style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'center' }}>
            <p class='tales-sub-heading'>TALES OF XTALNIA</p>
            <p>Lporem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p style={{ marginTop: '4%' }}> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <img src={frame} />
            <img src={meteor} />
            <p style={{ marginTop: '4%' }}>Lporem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    );
}

export default TalesOfXtalnia;