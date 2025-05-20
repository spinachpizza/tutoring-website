import './App.css'


function RoundedButton({ onClick, disabled, children, color}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontSize:'18px',
        padding:'15px',
        paddingRight: '30px',
        paddingLeft: '30px',
        margin:'5px',
        borderRadius: '10px',
        border: 'none',
        backgroundColor: color,
      }}
    >
      {children}
    </button>
  )
}

export default function home() {

    return (
        <div>
            <div className="intro-box">
                <div className="standard-down">
                    <h1 style={{fontSize:'46px', textAlign: 'center'}}> Heart Of England Tutors</h1>
                    <br></br>
                    <p style={{fontSize:'24px', textAlign: 'center', marginBottom:'20px'}}> Online and in person Maths tutoring <br /> one-to-one or in small groups</p>
                    <RoundedButton color="grey">Find Out More</RoundedButton>
                </div>
                <div className="standard">
                    <img src="img.png" alt="Pic" id="pic"/>
                </div>
            </div>

            <div className="review-box">
                <p style={{fontSize:'24px', fontWeight:'400'}}> Great 4.2 out of 5 </p>
                <img src="public/tp.png" alt="TP" style={{width:'220px', height:'60px', marginLeft:'20px'}}/>
            </div>

            <div className="intro-box">

            </div>
        </div>
    )
}