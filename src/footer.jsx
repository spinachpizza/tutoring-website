import './App.css'

export default function footer() {

    return (
        <div className="bottom-bar">
            <img src="public/logo.png" alt="Logo" style={{ width:'160px', height:'80px'}}/>
            <h1 className="title-name" style={{ fontSize:'24px', fontWeight:'500', color:'white', textAlign:'center', marginBottom:'30px'}}> Heart of England <br/> Tutors </h1>

            <p style={{ fontSize:'15px', color:'white', margin:'5px'}}> All rights reserved. Heart of England Tutors. </p>
            <p style={{ fontSize:'15px', color:'white', margin:'5px'}}> © 2025 </p>
        </div>
    )
}