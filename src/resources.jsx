import './App.css'



function Link({ link, text}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{fontSize:'20px', color:'#333'}}
        >
            {text}
        </a>
    )
}


export default function resources() {

    return (
        <div className="resource-box">
            <h1 className="sub-title"> Useful Maths Resources </h1>

            <div style={{display:'flex', flexDirection:'row', gap:'30px'}}>
                <div className="link-list" style={{gap:'40px'}}>
                    <Link link="https://www.mathsgenie.co.uk/" text="MathsGenie" />
                    <Link link="https://corbettmaths.com/" text="CorbettMaths" />
                    <Link link="https://www.1stclassmaths.com/" text="1stClassMaths" />
                </div>

                <div className="link-list">
                    <p> An excellent website with videos, worksheets and solutions for every topic listed in 
                        <br /> GCSE grade order. There are also past papers on here for GCSE. </p>
                    <p> Another brilliant webiste with videos, practise questions, textbooks questions and  
                        <br /> answers for a wide range of GCSE topics in alphabetical order. </p>
                    <p> This website has GCSE worksheet resources but also has past exam papers and 
                        <br /> predicted papers for the current exam series. </p>
                </div>  
            </div>



            <div style={{height:'100px'}}/>

            <h1 className="sub-title"> A-Level Resources </h1>
            <div style={{display:'flex', flexDirection:'row', gap:'30px'}}>
                <div className="link-list" style={{gap:'40px'}}>
                    <Link link="https://www.physicsandmathstutor.com/" text="Physics and Maths Tutor" />
                    <Link link="https://www.mathsgenie.co.uk/" text="MathsGenie" />
                    <Link link="https://www.youtube.com/@BicenMaths" text="Mr Bicen Maths" />
                </div>

                <div className="link-list">
                    <p> An excellent website with videos, worksheets and solutions for every topic listed in 
                        <br /> GCSE grade order. There are also past papers on here for GCSE. </p>
                    <p> Another brilliant webiste with videos, practise questions, textbooks questions and  
                        <br /> answers for a wide range of GCSE topics in alphabetical order. </p>
                    <p> This website has GCSE worksheet resources but also has past exam papers and 
                        <br /> predicted papers for the current exam series. </p>
                </div>  
            </div>

        </div>
    )
}