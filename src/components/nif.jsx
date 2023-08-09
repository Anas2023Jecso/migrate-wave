import { useState , useRef , useEffect} from 'react';
import './nif.css'
import Chevron from './chevron.svg'
import { useNavigate } from "react-router-dom";


function Titles2() {
  return (
    <div className="titles2">
      <div className="head2">About</div>
      <div className="heading6">Let Knows About Us</div>
    </div>
  );
}


function Nav() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">
      <img width="70px" src="https://res.cloudinary.com/dk3wwfwyv/image/upload/v1691593026/fvnebfzdzbrlxfvy2pdk.png"  alt="" />
      </div>
      <div className="links">
        <div className="Home" onClick={() => navigate('/')}>
          <a  >
            Home
          </a>
        </div>
        <div className="Services">
          <a href="#ser">Services</a>
        </div>
        <div className="About">
          <a href="#About">About</a>
        </div>
        <div className="Nif"  onClick={() => navigate('/nif')}>
          <a  className="active">Nif</a>
        </div>
        <div className="Niss" onClick={() => navigate('/niss')}>
          <a href={navigate('niss')}>Niss</a>
        </div>
        <div className="Niss">
          <a href="">Bank Account</a>
        </div>
        <div className="Contact">
          <a href="">Fiscal Representative</a>
        </div>
      </div>
    </div>
  );
}

function MainTitles() {
  return (
    <div className="sub-body1" id="home">
      <div className="div">
        <div className="mainHeading">
          N I F
        </div>
        <div className="subHeading">We Have Fastest Services Ever</div>
        <div className="btn2">
          <button>Learn More</button>
        </div>
      </div>
      <div className="imgLogo">
        <img
          src="https://res.cloudinary.com/dk3wwfwyv/image/upload/v1691601767/kg0psbwzlp3fxbzwh2x7.png"
          alt=""
        />
      </div>
    </div>
  );
}


function Titles({ name }) {
  return (
    <div className="titles">
      <div className="head2">{name}</div>
      <div className="sub-txt2">The Fastest Company Ever</div>
    </div>
  );
}



function Card({ img, head, subText, price, herf }) {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="card-head">{head}</div>
      <div className="card-txt">{subText}</div>
      <div className="card-price">{price}</div>
      <div className="card-btn">
      </div>
    </div>
  );
}


function Section1() {
  return (
    <div className="section-one">
      <Nav />
      <MainTitles />
    </div>
  );
}


function Section2() {
  return (
    <div className="section2" id="ser">
      <Titles name="Services" />
      <div className="cards">
        <Card
          herf="#"
          img="https://nifandniss.com/wp-content/uploads/2022/11/Canada.png"
          subText="Once we have your documents, the process takes a few days to a couple of weeks. The average time frame is usually 3 business days."
          head="It's Fast"
        />
        <Card
          herf="#"
          img="https://nifandniss.com/wp-content/uploads/2022/11/NISS.png"
          subText="Our team will serve as your intermediary with the Tax Department, handling all difficulties that might arise, and ensuring that any requests for NIFs go smoothly."
          head="It's Easy"
        />
        <Card
          herf="#"
          img="https://nifandniss.com/wp-content/uploads/2022/11/Bank.png"
          subText="You can track the progress of your application via our website chat option. We will notify you about any updates or additional information requests via email."
          head="It's Solid"
        />
      </div>
    </div>
  );
}


function Section4() {
  return (
    <div className="section4" id="About">
      <div className="left">
        <Titles2 />
        <p className="card-txt">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          assumenda voluptate rerum laborum voluptatum temporibus aut, dolor
          quas! Distinctio magnam repellendus obcaecati odio quaerat vel ipsa
          molestiae eos itaque est? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam esse molestiae architecto nostrum minima.
          Omnis, ab numquam. Explicabo, quibusdam repudiandae quos quisquam,
          enim voluptas animi eius voluptate sunt natus nostrum? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Eligendi sunt et
          corrupti provident recusandae esse distinctio ex libero placeat, nobis
          laboriosam ducimus minima aliquam saepe expedita veniam id adipisci
          illo!
        </p>
        <p className="card-txt">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          assumenda voluptate rerum laborum voluptatum temporibus aut, dolor
          quas! Distinctio magnam repellendus obcaecati odio quaerat vel ipsa
          molestiae eos itaque est? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam esse molestiae architecto nostrum minima.
          Omnis, ab numquam. Explicabo, quibusdam repudiandae quos quisquam,
          enim voluptas animi eius voluptate sunt natus nostrum? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Eligendi sunt et
          corrupti provident recusandae esse distinctio ex libero placeat, nobis
          laboriosam ducimus minima aliquam saepe expedita veniam id adipisci
          illo!
        </p>
      </div>
      <div className="right"></div>
    </div>
  );
}

function Section3() {
  return (
    <div className="section2" id="ser">
      <Titles name="Requirment" />
      <div className="cards">
        <Card
          herf="#"
          img="https://nifandniss.com/wp-content/uploads/2022/11/Canada.png"
          subText=""
          head="House Paper"
        />
        <Card
          herf="#"
          img="https://nifandniss.com/wp-content/uploads/2022/11/NISS.png"
          subText=""
          head="CNIC"
        />
        <Card
          herf="#"
          img="https://nifandniss.com/wp-content/uploads/2022/11/Bank.png"
          subText=""
          head="Phone Number"
        />
      </div>
    </div>
  );
}

const data = [
  {
    question: 'What is an NIF?',
    answer: '',
  },
  {
    question: 'How Long Does It Takes To Acquire A NIF?',
    answer: 'Generally it takes from a couple of hours to a couple of days to issue a NIF, however it should be noted that the time depends first of all on the AT office and there have been cases when clients have waited up to a month to get their NIF. Hence you should always prepare for the longest scenario (3-4 weeks). Please, take a note that the timeframe counts from the day of signing the Power of Attorney.',
  },
  {
    question: 'Does A NIF Ever Expire?',
    answer: 'No, NIF does not have an expiration date and is issued “for life”. In case you lose your NIF, you will not be simply assigned a new number, you will have to start a new process from scratch and get a brand new document.',
  },
  {
    question: 'Which Authority Issues NIF?',
    answer: 'The document is issued by “Autoridade Tributária e Aduaneira” (Tax and Customs Authority) and contains all tax and financial information of its holder. For non residents it is required to have a local tax representative.',
  },
]
function Accordion() {

const [toggle, setToggle] = useState(false)
const [heightEl, setHeightEl] = useState();

const refHeight = useRef()

useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`)
}, [])

const toggleState = () => {
    setToggle(!toggle)
}

console.log(toggle);
return (
    <div className="accordion">

        <button 
        onClick={toggleState}
        className="accordion-visible">
            <span>Lorem ipsum dolor sit amet.</span>
            <img 
            className={toggle && "active"}
            src={Chevron} />
        </button>
        
        <div 
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{height: toggle ? `${heightEl}` : "0px"}}
        ref={refHeight}
        >
            <p aria-hidden={toggle ? "true" : "false"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
            </p>
        </div>
        
    </div>
)
}


function Section6 () {
  return(
    <div className="section6" id="contact">
      <div className="left3">
        <div className="head78">
          Contact
        </div>
        <div className="heading678">
        Let’s Work Together
        </div>
        <div className="sub-txt">
          <div>500 Terry Francine St. San</div>
          <div>Francisco, CA 94158</div>
          <div>info@mysite.com</div>
          <div>Tel: 123-456-7890</div>
        </div>
      </div>
      <div className="right3">
        <div className="input67">
          <div className="input-box">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input-box op">
            <input type="text" placeholder="last Name" />
          </div>
        </div>
        <div className="input-box">
          <input type="email"  placeholder="Email"/>
        </div>
        <div className="input-box yu">
          <input type="text" placeholder="Type your message here" />
        </div>
        <div className="btn">
        <button>Send</button>
        </div>
      </div>
    </div>
  );
}

function Footers() {
 return (
  <div className="footer">
    copyright &copy; 2023 by Anas Asif
  </div>
 );
}

function Nif() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Titles name="FAQs" />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Section6/>
      <Footers />
    
    </div>
  );
}

export default Nif