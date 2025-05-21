import { useNavigate } from "react-router-dom";
import './App.css'

function Button({ onClick, children, disabled }) {
  return (
    <button className="top-buttons"
      onClick={onClick}
      disabled={disabled}
      style={{
        color:'white',
          cursor: 'pointer',
          border: 'none',
          background: 'none',
          fontSize: '20px',
          margin: '20px',
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
                <img src="logo.png" alt="Logo" style={{width:'100px', height:'50px', marginLeft:'150px'}}/>
                <button onClick={() => navigate('/')} style={{ fontSize:'28px', fontWeight:'700', color:'white', background:'none', border:'none', cursor:'pointer'}}> HofE Tutors </button>
            </div>
            <div className="top-button-container">
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button onClick={() => navigate('./faq')}>FAQ</Button>
                <Button onClick={() => navigate('/resources')}>Resources</Button>
                <Button onClick={() => alert('Clicked!')}>About Us</Button>
                <Button onClick={() => alert('Clicked!')}>Join Us</Button>
                <Button onClick={() => navigate('/contact')}>Contact Us</Button>
                <Button onClick={() => alert('Clicked!')}>...</Button>
            </div>
        </div>
    )
}