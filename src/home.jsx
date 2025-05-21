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
                    <RoundedButton color="#9dc0cf">Find Out More</RoundedButton>
                </div>
                <div className="standard">
                    <img src="img.png" alt="Pic" id="pic"/>
                </div>
            </div>

            <div className="review-box">
                <p style={{fontSize:'24px', fontWeight:'400'}}> Great 4.2 out of 5 </p>
                <img src="tp.png" alt="TP" style={{width:'220px', height:'60px', marginLeft:'20px'}}/>
            </div>

            <div className="intro-box" style={{gap:'80px', height:'1000px'}}>
              <div className="link-list" style={{marginTop:'100px'}}>
                
                <h1 className="sub-title" style={{marginBottom:'10px'}}> Book a Place on a Workshop </h1>
                <p> High quality small group term time tuition - homework help,
                    <br /> consolidation of topics, revision of previously taught topics and
                      <br /> exam practise by expert Maths tutors. </p>
                <h1 className="sub-title" style={{fontSize:'25px', marginTop:'30px', marginBottom:'10px'}}> Weekly Maths Workshops </h1>
                <p> Location - Westlake Room, Balsall Common Village Hall, CV7 7FF </p>
                <p> Mondays 4:30pm - 5:30pm for Years 7-9 </p>
                <p> Tuesdays 4:45pm - 5:45pm for Years 10-11 </p>
                <p> £20 per session per child </p>

                <h1 className="sub-title" style={{fontSize:'25px', marginTop:'30px', marginBottom:'10px'}}> Booking Forms </h1>
                <p style={{textDecoration:'underline'}}> Click here to download a booking form for Maths Workshop </p>
                <p style={{textDecoration:'underline'}}> Click here to download a booking  form for Python Workshop </p>

                <h1 className="sub-title" style={{fontSize:'25px', marginTop:'30px', marginBottom:'10px'}}> One-to-one Tutoring </h1>
                <p> We have a range of options for one-to-one face-to-face or Online
                  <br/> personal tutoring. See Below for options and pricing. </p>
              
              </div>
              <div style={{marginTop:'250px'}}>
                <img src="form.png" alt="TP" style={{width:'440px', height:'480px', borderRadius:'8px', borderWidth:'4px', borderStyle:'solid', borderColor:'#84A7bA'}}/>
              </div>
            </div>


            <div className="review-box">
            </div>

            <div className="intro-box">


            </div>
        </div>
    )
}