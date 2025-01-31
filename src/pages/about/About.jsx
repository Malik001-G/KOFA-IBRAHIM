import React from 'react'
import './about.css'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Partners from '../../components/partners/Partners';
import Banner from '../../components/banner/Banner';
import dap from '../../assets/images/ab-dapo.svg'
import ab1 from '../../assets/images/about1.svg'
import ab2 from '../../assets/images/about2.svg'
import ab3 from "../../assets/images/about3.svg";

import grd1 from "../../assets/images/grd1.svg";
import grd2 from "../../assets/images/grd2.svg";
import grd3 from "../../assets/images/grd3.svg";
import grd4 from "../../assets/images/grd4.svg";
import grd from "../../assets/images/grd.svg";
import gr1 from "../../assets/images/gr1.svg";
import gr2 from "../../assets/images/gr2.svg";
import gr3 from "../../assets/images/gr3.svg";
import gr4 from "../../assets/images/gr4.svg";
import gr5 from "../../assets/images/gr5.svg";
import gr6 from "../../assets/images/gr6.svg";
import grr1 from "../../assets/images/grr1.svg";
import grr2 from "../../assets/images/grr2.svg";
import grr3 from "../../assets/images/grr3.svg";
import grr4 from "../../assets/images/grr4.svg";
import grr5 from "../../assets/images/grr5.svg";
import grr6 from "../../assets/images/grr6.svg";

const About = () => {
  const aboutCard = [
    {
      id: 1,
      img: ab1,
      name: "Hon. Justice Dr. M.A. Dipeolu, FICMC, FHNR",
      title: "Ogun State Chief Jugde.",
    },
    {
      id: 2,
      img: ab2,
      name: "RT. Hon. Oludaisi Olusegun Elemide",
      title: "Hon. Speaker Ogun State House  of Assembly.",
    },
    {
      id: 3,
      img: ab3,
      name: "Noimot Salako-Oyedele",
      title: "Deputy Governor Ogun State.",
    },
  ];
  return (
    <>
      <Navbar />
      <Banner title={"HOST STATE"} />

      <div className="brief">
        <h1>Brief History of Ogun State</h1>
        <p>
          Ogun State, nestled in the southwestern region of Nigeria, boasts a
          vibrant history that spans centuries. Initially inhabited by various
          ethnic groups, including the Yoruba people, the region witnessed the
          rise and fall of powerful kingdoms and empires, such as the Oyo
          Empire. These early civilizations laid the foundation for the
          cultural, political, and economic development of the area. During the
          colonial era, Ogun State, like much of Nigeria, fell under British
          rule. The British presence brought significant changes to the region,
          including the introduction of Christianity, modern education systems,
          and administrative structures. This period of colonial influence
          marked a pivotal chapter in Ogun State's history, shaping its
          trajectory and laying the groundwork for future development. On
          February 3, 1976, Ogun State was officially established as part of a
          state creation exercise aimed at decentralizing power and promoting
          local governance. Abeokuta, renowned for its historic significance and
          unique topography dominated by massive granite outcrops, was
          designated as the state capital. Since its creation, Ogun State has
          emerged as a hub of economic activity, with thriving industries such
          as manufacturing, agriculture, and commerce driving growth and
          development. Today, Ogun State continues to uphold its rich cultural
          heritage while embracing modernity and innovation. The state's diverse
          attractions, including historic sites, festivals, and natural wonders
          like Olumo Rock, attract tourists and visitors from across Nigeria and
          beyond. With ongoing efforts to harness its economic potential and
          improve the quality of life for its residents, Ogun State remains a
          dynamic and vibrant region at the heart of southwestern Nigeria.
        </p>
      </div>
      <div className="governor">
        <h1>The Governor of Ogun State</h1>
        <div className="speech-pic">
          <img src={dap} alt="" />
          <div>
            <p>
              Governor Dapo Abiodun, the 9th executive governor of Ogun State,
              embodies visionary leadership and unwavering commitment to
              progress. With a heart for service, he champions initiatives that
              drive economic growth, empower communities, and uplift the
              vulnerable. His dedication to excellence and inclusive governance
              inspires hope, fostering a brighter, more prosperous future for
              all residents of Ogun State.
            </p>
            <h3>His Excellency, Dapo Abiodun</h3>
            <h4>Executive Governor Ogun State.</h4>
          </div>
        </div>
      </div>

      <div className="about-cards">
        {aboutCard.map((about) => (
          <div key={about.id}>
            <img src={about.img} alt="" />
            <h3>{about.name}</h3>
            <h4>{about.title}</h4>
          </div>
        ))}
      </div>

      <div className="mission">
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            Our mission is to promote inclusive growth, foster economic
            diversification, and improve the well-being of all residents through
            effective governance, strategic investments, and collaboration with
            stakeholders.
          </p>
        </div>
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            To become a model state in Nigeria, recognized for its vibrant
            economy, social inclusiveness, and sustainable development, while
            preserving its rich cultural heritage and natural resources.
          </p>
        </div>
      </div>

      <div className="gallery">
        <h1>Photo Speaks- Various Places In Ogun State</h1>
        <div className="gallery-grid">
          <div className="image-column">
            <img src={gr1} alt="" />
            <img src={gr2} alt="" />
            <img src={gr3} alt="" />
            <img src={gr4} alt="" />
            <img src={gr5} alt="" />
            <img src={gr6} alt="" />
          </div>
          <div className="image-column">
            <img src={grr1} alt="" />
            <img src={grr2} alt="" />
            <img src={grr3} alt="" />
            <img src={grr4} alt="" />
            <img src={grr5} alt="" />
            <img src={grr6} alt="" />
          </div>
          <div className="image-column">
            <img src={grd1} alt="" />
            <img src={grd2} alt="" />
            <img src={grd3} alt="" />
            <img src={grd} alt="" />
            <img src={grd4} alt="" />
            <img src={gr6} alt="" />
          </div>
        </div>
      </div>

      <Partners />
      <Footer />
    </>
  );
}

export default About