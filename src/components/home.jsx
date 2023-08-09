import "./home.css";
import { useNavigate } from "react-router-dom";
import Chevron from './chevron.svg'
import {  useRef , useEffect } from "react";
import { useState } from "react";

function Nav() {
   const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
      <img width="70px" src="https://res.cloudinary.com/dk3wwfwyv/image/upload/v1691593026/fvnebfzdzbrlxfvy2pdk.png"  alt="" />
      </div>
      <div className="links">
        <div className="Home" onClick={() => navigate('/')}>
          <a  className="active">
            Home
          </a>
        </div>
        <div className="Services">
          <a href="#ser">Services</a>
        </div>
        <div className="About">
          <a href="#About">About</a>
        </div>
        <div className="Nif" onClick={() => navigate('/nif')}>
          <a>Nif</a>
        </div>
        <div className="Niss" onClick={() => navigate('/niss')}>
          <a >Niss</a>
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
          Migrate Wave
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
function Titles() {
  return (
    <div className="titles">
      <div className="head2">Servises</div>
      <div className="sub-txt2">The Fastest Company Ever</div>
    </div>
  );
}
function Titles2() {
  return (
    <div className="titles2">
      <div className="head2">About</div>
      <div className="heading6">Let Knows About Us</div>
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
        <button>
          <a href={herf}>Load More</a>
        </button>
      </div>
    </div>
  );
}
function Numbers({ name, number }) {
  return (
    <div className="number-box">
    <div className="numbers">{number}</div>
    <div className="head3 head4"> {name}</div>
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
        <Titles />
        <div className="cards">
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/Canada.png"
            subText="NIF in 3 days"
            price="€ 30"
            head="NIF"
          />
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/NISS.png"
            subText="NISS in 3 days"
            price="€ 30"
            head="NISS"
          />
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/Bank.png"
            subText="1 Bank Account"
            price="€ 30"
            head="Bank Account"
          />
          <Card
            herf="#"
            img="https://nifandniss.com/wp-content/uploads/2022/11/Company.png"
            subText="1 Bank Account"
            price="€ 30"
            head="Fiscal Representative"
          />
        </div>
      </div>
    );
} 
function Section3() {
  return (
    <div className="section3">
      <div className="head2 head3">We’re Good with Numbers</div>
      <div className="boxex">
        <Numbers name="Clients Every Year" number="130+" />
        <Numbers name="Secure" number="100%" />
        <Numbers name="Year of Experience" number="10 +" />
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
      <div className="accordion trty">
  
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
function Section5 ()  {
  return (
    <div className="section5">
    <div className="heading6 trt">What Are Our Client Says</div>
    <div className="slider">
    <input type="radio" name="slider" title="slide1" checked="checked" className="slider__nav" />
    <input type="radio" name="slider" title="slide2" className="slider__nav" />
    <input type="radio" name="slider" title="slide3" className="slider__nav" />
    <input type="radio" name="slider" title="slide4" className="slider__nav" />
    <div className="slider__inner">
      <div className="slider__contents"><img className="slider__image fa fa-codepen" width="100px"  src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
        <h2 className="slider__caption">codepen</h2>
        <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
      <div className="slider__contents"><img className="slider__image fa fa-codepen" width="100px" src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
        <h2 className="slider__caption">newspaper-o</h2>
        <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
      <div className="slider__contents"><img className="slider__image fa fa-codepen" width="100px"  src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
        <h2 className="slider__caption">television</h2>
        <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
      <div className="slider__contents"><img className="slider__image fa fa-codepen" width="100px"  src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
        <h2 className="slider__caption">diamond</h2>
        <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
      </div>
    </div>
  </div>
    </div>
  );
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

function Home() {
  return (
    <div className="home">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Section6 />
      <Footers />
    </div>
  );
}

export default Home;
