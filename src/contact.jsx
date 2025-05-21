import './contact.css'

export default function contact() {

    return (
        <div className="form-container">

            <div className="info-container">
                <h1 className="sub-title"> Contact Form </h1>
                <p> email: sonia.dines@heart-england-tutors.co.uk </p>
                <p> Address: Coventry, West Midlands </p>
            </div>
            <div className="input-container">

                <form action="https://formspree.io/f/your-form-id" method="POST">

                    <div className="form-group">
                        <label htmlFor="pname" className="heading"> Parent Name* </label>
                        <input type="text" id="pname" name="pname" required className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cname" className="heading"> Child's Name* </label>
                        <input type="text" id="cname" name="cname" required className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="year" className="heading"> Current School Year* </label>
                        <input type="text" id="year" name="year" required className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="heading">Contact E-Mail*</label>
                        <input type="email" id="email" name="email" required className="form-input"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="heading"> What do you hope to get out of tutoring? </label>
                        <textarea id="message" name="message" rows="5" className="form-textarea"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="heading"> Where are you based? Please provide the <br/> beginning of your postcode e.g. CV5*</label>
                        <input type="text" name="location" required className="form-input"/>
                    </div>

                    <input type="hidden" name="_subject" value="New Tutoring Inquiry!" />
                    <input type="text" name="_gotcha" style={{display: 'none'}} /> {/* Honeypot for spam */}

                    <p> * Indicates required fields </p>

                    <button type="submit" className="submit-btn"> Send Message </button>

                </form>
            </div>
        </div>
    )
}