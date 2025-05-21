import { useState} from 'react';
import './faq.css'

export default function faq() {

    const[activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How do I know tutoring will work for my child?",
            answer: "If your child is struggling with learning Maths at school then tutoring is an excellent opportunity to correct any misconceptions, to help build their confidence in a small group or one-to-one setting, whether online or face-to-face. Our tutoring experience helps us understand what they are struggling with, give easy to understand explanations, examples and questions to help them learn and thrive."
        },
        {
            question: "Should I choose online or face to face?",
            answer: "Many children prefer tutoring in their own home where they feel safest. This can be online or face to face. Online tutoring offers the benefit of being able to see animations and make use of the available technology. Online tutoring uses Microsoft Teams or Google Meet along with Microsoft One Note to display the work. One Note allows the student and the tutor to work collaboratively onscreen. Online tutoring works well when the child is able to articulate what they are doing to answer the maths problems and what they are struggling with. Face to face works best with children who are less confident with computers and with articulating their methods and thought processes. This is most commonly delivered in your home. We also offer small group tutoring currently at Balsall Common Village Hall and starting in March 2025 also at The Kenilworth Centre. This is an affordable option where students get face-to-face help in small groups. Experienced Maths tutors work with groups of up to 5 students to help them with their work. These sessions take place In Balsall Common on Mondays from 4.30pm and on Tuesdays from 4.45pm and in Kenilworth on Tuesdays from 6.30pm.."
        },
        {
            question: "How long will my child need tutoring?",
            answer: "We provide tutoring for as long as you need, often for the duration of the examination they are studying for. This can be provided weekly or fortnightly. Sessions are usually one hour in duration. Sessions can continue throughout school holidays if required."
        },
        {
            question: "How does online tutoring work?",
            answer: "We use the software package Microsoft Teams or Google Meet for online tutoring. You will be emailed a link to the meeting, you do not need to have specific software installed nor have an account to access it. The cameras enable us to be able to interact but mainly we share our computer screen with your child and use Microsoft One Note to write explanations, give examples and provide questions for your child to do. When your child does questions themselves to check their understanding they need to be able to talk through what they are writing as they write it and/or be able to write on the shared screen to answer the Maths questions."
        },
        {
            question: "How does face to face tutoring work?",
            answer: "We usually come to your home. We will initially assess your child, through conversation and providing a few questions for them to do in order to ascertain a starting point. For each session we will bring materials to work through with your child. If something has been covered in school that week that they are struggling with then we can help with that, we can help with any homework as well as identifying gaps in knowledge and working to address these gaps. Near to exam sessions we will bring past papers and revision materials to work through with your child. If you are wanting tutoring with a Teacher Tutor they may also offer the tutoring in their own home."
        },
        {
            question: "How does small group teaching work like the after school Maths Workshop and Maths Summer School?",
            answer: "We currently run small group teaching classes in The Westlake Room of Balsall Common Village Hall and from March 2025 at The Small Community Room of The Kenilworth Centre. " +
                    "We have groups of 4 or 5 students per table with a tutor helping the group to work on Maths tasks, understand concepts and attempt practice questions. Students can get help with homework, with topics taught in class that they haven't developed a deep understanding of and with revision for upcoming exams and assessments. " +
                    "Monday workshops are for Years 7-9 and students usually come with homework which we will help them with, recent tests they want help with and we also provide worksheets on topics they are studying at school, have previously studied and not mastered or anything else that we can then offer them further help with. " +
                    "Tuesday workshops are for Years 10 &11 and students usually come with topics they are currently working on, with homework, with revision and we provide past exam papers. We cater for Edexcel and AQA GCSE Maths at Higher and Foundation levels."
        },
        {
            question: "Are you a qualified teacher?",
            answer: "All our Teacher Tutors hold degrees in a Maths related subject, have a teaching qualification as well as many years of Maths teaching and tutoring experience. " +
                "Our Graduate Tutors have gained 9 in GCSE Maths, grade A/A* in A level Maths and have a degree in a Maths related subject and all have tutoring experience. " +
                "Our Undergraduate Tutors have gained grade 9 in GCSE Maths, grade A/A* at A level Maths and are studying for a Maths related degree and all have tutoring experience. " +
                "All our Student Tutors have gained a grade 9 in GCSE Maths and are studying A level Maths at school and have experience of working with pupils. " +
                "\n" +
                "For example - Sonia, one of our Teacher Tutors (and owner of Heart Of England Tutors), has a BSc(hons) Mathematical Sciences with Physics from Liverpool University and a PGCE 11-18 in Mathematics and Computing from the University of Birmingham. She currently works full time as a Maths (and Computing) teacher at Bablake School and has over 25 years' experience of teaching and tutoring GCSE and A Level students. Sonia also marks GCSE and A level Maths papers for Edexcel. " +
                "This gives her a huge amount of experience and expertise in helping students to gain the grade they want in their GCSE and A levels to get to their next stage. " +
                "Will, one of our Graduate Tutors, has a degree in Computer Science from Liverpool University, having gained an A in his A level Maths and a grade 9 in his GCSE Maths. He has experience in working with Key Stage 3 students helping them with Maths they haven't understood in class and with GCSE students helping them with revision techniques and how to get a good grade. Will mainly tutors online but can do face-to-face tutoring out of term time. He offers tutoring in GCSE Maths and Computer Science. " +
                "Details of qualifications and DBS certificates for any of our tutors can be requested."
        },
        {
            question: "I am interested in getting a tutor, how do I get started?",
            answer: "Please complete the Contact Form or contact us via email/phone or social media. We will arrange a date and time for the first session. It is preferable to have the same time and day slot each week. We are available weekends and after 4pm most weekdays."
        },
        {
            question: "How does payment happen?",
            answer: "Payment for the first tutoring session is made in advance directly to Heart of England Tutors. Payment for subsequent sessions is then made in consultation directly with the tutor you are assigned. For online sessions payment must be made in advance via bank transfer. For face-to-face tutoring, payment can be made in advance via bank transfer or cash can be given at the end of the tutoring session. " +
                    "For Workshops, for new students we will take a deposit of £20 (which covers the first session) then payment must be made in advance for the remainder of the half term sessions before their subsequent session. For shorter school terms workshops may be charged for the whole term rather than half termly."
        },
        {
            question: "What happens if I need to cancel a session?",
            answer: "If you need to cancel a tutoring session then please give as much notice as possible. 24 hours' notice of cancellation is required in order to not incur the tutoring fee. Exceptions will be made in case of emergency. No refunds are available for missed workshop sessions unless prior notice is given as above."
        }
    ];

    const togglefaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (

        <div className="faq-section">
            <h1 className="sub-title" style={{marginTop:'70px'}}> Frequently Asked Questions </h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                    <button
                        className="faq-question"
                        onClick={() => togglefaq(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`faq-answer-${index}`}
                    >
                        {faq.question}
                        <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                    </button>
                    {activeIndex === index && (
                        <div
                            id={`faq-answer-${index}`}
                            className="faq-answer"
                        >
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}