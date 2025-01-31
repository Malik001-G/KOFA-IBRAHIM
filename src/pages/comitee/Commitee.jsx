import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Partners from "../../components/partners/Partners";
import Banner from "../../components/banner/Banner";
import commitee from "../../assets/images/commitee.svg";
import "./comitee.css";
import Bukola from "../../assets/images/Bukola.svg";
import Ismaila from "../../assets/images/Ismaila.svg";
import loc from "../../assets/images/locmember.svg";
import divider from "../../assets/images/divider.svg";

const Commitee = () => {
  const LocMembers = [
    {
      id: 1,
      image: loc,
      name: "Samuel Adepegba",
      position: "President",
    },
    {
      id: 2,
      image: loc,
      name: "Samuel Adepegba",
      position: "Vice President",
    },
    {
      id: 3,
      image: loc,
      name: "Samuel Adepegba",
      position: "Secretary",
    },
    {
      id: 4,
      image: loc,
      name: "Samuel Adepegba",
      position: "Treasurer",
    },
    {
      id: 5,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 6,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 7,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 8,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 9,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 10,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 11,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 12,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 13,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 14,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 15,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 16,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 17,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 18,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
  ];
  const Mocmembers = [
    {
      id: 1,
      image: loc,
      name: "Samuel Adepegba",
      position: "President",
    },
    {
      id: 2,
      image: loc,
      name: "Samuel Adepegba",
      position: "Vice President",
    },
    {
      id: 3,
      image: loc,
      name: "Samuel Adepegba",
      position: "Secretary",
    },
    {
      id: 4,
      image: loc,
      name: "Samuel Adepegba",
      position: "Treasurer",
    },
    {
      id: 5,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 6,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 7,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 8,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 9,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 10,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 11,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 12,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 13,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 14,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 15,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 16,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 17,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
    {
      id: 18,
      image: loc,
      name: "Samuel Adepegba",
      position: "Board members",
    },
  ];

  return (
    <>
      <Navbar />
      <Banner bannerbg={commitee} title={"The COMMITTEE"} />
      <section className="bg-[#F6F6F6] px-20 py-10 md:px-14 md:py-24 first-section">
        <div>
          <p className="text-sm md:text-base lg:text-xl mb-4 text-black font-normal">
            The Gateway Games 2024 Board of Directors runs the national Sports
            festival this year Games Organizing Committee, which brings together
            all the project’s founding members – namely, the CNOSF, Paris City
            Council, the French State, the Greater regional authorities, CPSF
            (the State Paralympic and Sports Committee), the Greater Paris
            Metropolitan Area, the Seine Saint Denis departmental council and
            representatives from the towns and cities involved in the Games.
          </p>
        </div>
        <div>
          <p className="text-sm md:text-base lg:text-xl text-black font-normal">
            The Board of Directors comprises a majority of representatives from
            the sporting movement (16 members). The Board of Directors also
            comprises members of the public sector, reflecting the diversity of
            everyone brought together by this project to work towards a shared
            ambition:
          </p>
        </div>
      </section>

      {/* The Chairman Local Organizing Committee */}
      <section className="bg-white lg:px-10 py-20 md:px-14 md:py-24 second-section">
        <h2 className="text-3xl mb-5">
          The Chairman Local Organizing Committee
        </h2>
        <div className="space-y-4 lg:space-y-0 lg:grid grid-cols-2 ">
          <div>
            <img src={Bukola} alt="" className="w-full md:w-5/6" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <p>
                Welcome to our festival games! As the LOC chairman , I'm
                thrilled to invite you to a world of excitement and camaraderie.
                Get ready for adrenaline-pumping action, fierce competition, and
                unforgettable moments. Whether you're a participant or a
                spectator, join us for a celebration of athleticism and unity.
                Let's make memories and inspire greatness together. Welcome to
                the thrill of our festival games!
              </p>
              <h2 className="text-3xl mt-1">Hon. Bukola Olopade</h2>
              <h2 className="text-xl">Chairman, Local Organizing Committee</h2>
            </div>
          </div>
        </div>
      </section>

      {/* LOC Members */}
      <section className="px-10 py-20 md:px-14 md:py-24 bg-[#F6F6F6] loc-section">
        <h2 className="text-3xl mb-14">LOC Members</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:px-12">
          {LocMembers.map((Loc) => (
            <div key={Loc.id} className="bg-white p-4 rounded-xl ">
              <div>
                <div className="flex justify-center mb-3">
                  <img src={Loc.image} alt="" />
                </div>
                <p>{Loc.name}</p>
              </div>
              <div className="py-3">
                <img src={divider} alt="" />
              </div>
              <p className="position">{Loc.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Chairman Main Organizing Committee */}
      <section className="bg-white px-10 py-20 md:px-14 md:py-24 third-section">
        <h2 className="text-3xl mb-5">
          The Chairman Main Organizing Committee
        </h2>
        <div className="space-y-4 lg:space-y-0 lg:grid grid-cols-2">
          <div className="lg:pl-10">
            <img src={Ismaila} alt="" className="w-full md:w-5/6" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <p>
                Welcome to our festival games! As the MOC chairman , I'm
                thrilled to invite you to a world of excitement and camaraderie.
                Get ready for adrenaline-pumping action, fierce competition, and
                unforgettable moments. Whether you're a participant or a
                spectator, join us for a celebration of athleticism and unity.
                Let's make memories and inspire greatness together. Welcome to
                the thrill of our festival games!
              </p>
              <h2 className="text-3xl mt-1">Alhaji. Ismaila Abubakar </h2>
              <h2 className="text-xl">Chairman, Main Organizing Committee</h2>
            </div>
          </div>
        </div>
      </section>

      {/* MOC Members */}
      <section className="px-10 py-20 md:px-14 md:py-24 bg-[#F6F6F6] loc-section">
        <h2 className="text-3xl mb-14">MOC Members</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:px-12">
          {Mocmembers.map((Moc) => (
            <div key={Moc.id} className="bg-white p-4 rounded-xl ">
              <div>
                <div className="flex justify-center mb-3">
                  <img src={Moc.image} alt="" />
                </div>
                <p>{Moc.name}</p>
              </div>
              <div className="py-3">
                <img src={divider} alt="" />
              </div>
              <p className="position">{Moc.position}</p>
            </div>
          ))}
        </div>
      </section>
      <Partners />
      <Footer />
    </>
  );
};

export default Commitee;
