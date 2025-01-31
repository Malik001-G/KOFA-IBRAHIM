import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Partners from "../../components/partners/Partners";
import "./venue.css";
import React from "react";
import mko_stadia from "../../assets/images/mko.png";
import remo_stadia from "../../assets/images/remo.png";

// Array of venues
const venues = [
  {
    name: "MKO Abiola Stadium",
    description: `MKO Abiola Stadium is a multi-use stadium in Abeokuta, Nigeria.
                  It is currently used mostly for football matches and is the home
                  stadium of Gateway F.C. The stadium has a capacity of 10,000 people.
                  The stadium name refers to Moshood Kashimawo Olawale Abiola, an important
                  businessman, publisher, politician, and aristocrat of Abeokuta, Ogun State.`,
    fullName: "Mko Abiola International Stadium",
    location: "Abeokuta, Ogun State",
    capacity: "10,000",
    surface: "Grass",
    image: mko_stadia,
  },
  {
    name: "Remo Stars Stadium",
    description: `Remo Stars stadium has the capacity of 20,000 spectators. During the regular season of just concluded abridged of the NPLF, they played second behind bendal insurane of benin with 33 point .This stadium based in Ikenne, Ogun State, Nigeria. The club competes in the Nigeria Professional Football League, the top division of the Nigeria Football League system.
                  It is known for hosting local football matches and is home to the
                  Remo Stars Football Club.`,
    fullName: "Remo Stars Stadium",
    location: "Ikenne, Ogun State",
    capacity: "5,000",
    surface: "grass",
    image: remo_stadia,
  },
  {
    name: "Alake Sports Center",
    description: `Alake Sports Center has a capacity of 20,000 spectators and hosts local and national sports events.
                  It is located in Abeokuta, Ogun State, Nigeria, and is a popular venue for community gatherings and 
                  sports competitions.`,
    fullName: "Alake Sports Center",
    location: "Abeokuta, Ogun State",
    capacity: "5,000",
    surface: "grass",
    image: remo_stadia,
  },
];

const Venue = () => {
  return (
    <>
      <Navbar />
      <Banner title={"Competition Venues"} />

      <section className="venue-section">
        {venues.map((venue, index) => (
          <div className="venue-item" key={index}>
            <div className="venue-content">
              <div className="venue-text">
                <h2>{venue.name}</h2>
                <p>{venue.description}</p>
              </div>
              <div className="venue-details">
                <h3>
                  Full name: <span>{venue.fullName}</span>
                </h3>
                <h3>
                  Location: <span>{venue.location}</span>
                </h3>
                <h3>
                  Capacity: <span>{venue.capacity}</span>
                </h3>
                <h3>
                  Surface: <span>{venue.surface}</span>
                </h3>
              </div>
            </div>
            <div className="venue-img">
              <img src={venue.image} alt={`${venue.name} stadium`} />
            </div>
          </div>
        ))}
      </section>

      <Partners />
      <Footer />
    </>
  );
};

export default Venue;
