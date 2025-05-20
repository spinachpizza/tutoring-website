import { useNavigate } from "react-router-dom";
import './App.css'

function Button({ onClick, children, disabled }) {
  return (
    <button className="top-buttons"
      onClick={onClick}
      disabled={disabled}
      style={{
        color:'white',
      }}
    >
      {children}
    </button>
  )
}


export default function navbar() {
    const navigate = useNavigate();

    return (
        <div className="top-bar">
            <div className="standard">
                <img src="public/logo.png" alt="Logo" style={{width:'100px', height:'50px', marginLeft:'150px'}}/>
                <h1 className="title-name" style={{ fontSize:'24px', fontWeight:'500', color:'white'}}>HofE Tutors</h1>
            </div>
            <div className="top-button-container">
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button onClick={() => alert('Clicked!')}>FAQ</Button>
                <Button onClick={() => navigate('/resources')}>Resources</Button>
                <Button onClick={() => alert('Clicked!')}>About Us</Button>
                <Button onClick={() => alert('Clicked!')}>Join Us</Button>
                <Button onClick={() => alert('Clicked!')}>...</Button>
            </div>
        </div>
    )
}