import React from "react";
import "./takingpart.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Partners from "../../components/partners/Partners";
import Banner from "../../components/banner/Banner";

const TakingPart = () => {
  return (
    <>
      <Navbar />
      <Banner title={"taking PART"} />

      {/* section info */}

      <section className="info-section">
        {/* general public */}
        <div className="general-public">
          <h2>GENERAL PUBLIC</h2>
          <p>
            The Gateway 2024 Games are for all States. They are Games that
            unite, giving everyone the opportunity to take part and embark on
            the adventure together.
          </p>
          <p>
            Registration: Check the official Gateway Games website or local
            announcements for registration details. Complete any required forms
            online. Choose Your Sport: Review the list of sports and events
            available during the games. Select the ones you are interested in
            participating in. Prepare: If you are an athlete, train and prepare
            for your chosen events. For volunteers, attend any scheduled
            training sessions. Stay Informed: Keep up with updates from the Ogun
            State Sports Commission regarding schedules, ticketing, and other
            important information. Attend the Games: Show up on the event days
            to compete or volunteer, and enjoy the festivities!
          </p>
        </div>
        {/* states */}
        <div className="taking-part-states">
          <h2>STATES</h2>
          <p>
            To participate in the Gateway Games 2024 as a state representative,
            contact your local sports authority for registration details, select
            athletes through trials, and prepare them with training. Stay
            updated with announcements from the Ogun State Sports Commission,
            and ensure all participants are ready to compete on event days. For
            more information, refer to the Ogun State Sports Commission's
            official updates.
          </p>
        </div>
        {/* athletes */}
        <div className="taking-parts-athlete">
          <h2>ATHLETES</h2>
          <p>
            To participate in the Gateway Games 2024 as an athlete, register
            through your local sports authority, prepare by training for your
            selected events, and stay informed about schedules and requirements
            from the Ogun State Sports Commission. Ensure you're ready for the
            competition days and follow any guidelines provided. For further
            details, refer to the official announcements from the Ogun State
            Sports Commission.
          </p>
        </div>
        {/* PARTNERSHIP: CALL FOR INTEREST */}
        <div className="taking-parts-interest">
          <h2>PARTNERSHIP: CALL FOR INTEREST</h2>
          <p>
            We are inviting interested organizations and stakeholders to partner
            with us for the Gateway Games 2024, scheduled to take place in Ogun
            State. This is an excellent opportunity to collaborate and
            contribute to a significant sporting event that promotes unity and
            showcases athletic talent. Interested parties should submit a
            proposal outlining their potential contributions, sponsorship
            opportunities, and any relevant experience in event management or
            sports development. For more details on partnership requirements and
            benefits, please visit the official Gateway Games website or contact
            the Ogun State Sports Commission. Your support will play a vital
            role in making the Gateway Games a success!
          </p>
        </div>
        {/* VENDORS */}
        <div className="taking-parts-vendor">
          <h2>VENDORS</h2>
          <p>
            We invite vendors interested in participating in the Gateway Games
            2024 in Ogun State to express their interest in becoming official
            vendors for the event. This is a fantastic opportunity to showcase
            your products and services to a diverse audience during this
            significant sporting occasion. Vendors are encouraged to submit a
            proposal detailing the type of products or services they wish to
            offer, along with any relevant experience in event vending. For more
            information on vendor requirements, application procedures, and
            benefits of participation, please visit the official Gateway Games
            website or contact the Ogun State Sports Commission. We look forward
            to partnering with you to make the Gateway Games a memorable event!
          </p>
        </div>
        {/* MEDICALS */}
        <div className="taking-parts-medicals">
          <h2>MEDICALS</h2>
          <p>
            We are seeking qualified medical service providers to partner with
            us for the Gateway Games 2024 in Ogun State. Your expertise will be
            essential in ensuring the health and safety of all participants and
            attendees throughout the event. Interested medical professionals or
            organizations should submit a proposal detailing the services they
            can provide, such as first aid, emergency response, and medical
            staffing. For more information on requirements, application
            procedures, and the benefits of participating as a medical partner,
            please visit the official Gateway Games website or contact the Ogun
            State Sports Commission. Your contribution is vital to making the
            Gateway Games a safe and successful event!
          </p>
        </div>
        {/* JOURNALIST */}
        <div className="taking-parts-journalist">
          <h2>JOURNALIST</h2>
          <p>
            We are inviting journalists and media professionals to cover the
            Gateway Games 2024 in Ogun State. This is an excellent opportunity
            to report on a significant sporting event, showcasing athletic
            talent and promoting unity in the community. Interested journalists
            should submit a proposal detailing their media outlet, coverage
            plans, and any relevant experience in sports journalism. For more
            information on accreditation requirements, application procedures,
            and the benefits of covering the Gateway Games, please visit the
            official Gateway Games website or contact the Ogun State Sports
            Commission. Your coverage will play a crucial role in highlighting
            the event and its impact!
          </p>
        </div>
        {/* VOLUNTEERS */}
        <div className="taking-parts-volunteer">
          <h2>VOLUNTEER</h2>
          <p>
            We are seeking enthusiastic volunteers to support the Gateway Games
            2024 in Ogun State. This is a fantastic opportunity to be part of a
            major sporting event, meet new people, and gain valuable experience
            in event management. Interested individuals should submit an
            application detailing their availability, skills, and any relevant
            experience. Roles may include assisting with event setup, helping
            with logistics, providing support to athletes, and engaging with
            attendees. For more information on volunteer requirements,
            application procedures, and the benefits of participating, please
            visit the official Gateway Games website or contact the Ogun State
            Sports Commission. Your involvement will be crucial in making the
            Gateway Games a successful and memorable event!
          </p>
        </div>
      </section>

      <Partners />
      <Footer />
    </>
  );
};

export default TakingPart;
