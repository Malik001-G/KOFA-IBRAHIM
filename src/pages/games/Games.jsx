import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Partners from "../../components/partners/Partners";
import "./games.css";
import React from "react";
import game from "../../assets/images/game.svg";
import figure_one from "../../assets/images/Figures-one.png";
import figure_two from "../../assets/images/Figure-two.png";

const Games = () => {
  return (
    <>
      <Navbar />
      <Banner bannerbg={game} title={"The GAMES"} />

      {/* Games intro */}
      <div className="games-intro">
        <p>
          The Gateway Games 2025 will be the biggest event ever organized in
          Gateway State. The Sport Festival will take place from Jan 12th 2025
          to 25th January 2025. The spectacle taking place during those weeks
          will go down in history and Gateway State will be the Centre of the
          nation – the State of sport and so much more. The Games are a popular,
          multicultural festival, a celebration to share with the rest of the
          states. They represent a new adventure that will embark Gateway State
          on an experience unlike anything it has seen before.
        </p>
      </div>
      {/* games figures */}
      <section className="section-figures">
        {/* game-figures-one */}
        <div className="game-figures-top">
          <div className="game-figures-top-left">
            <h2>Gateway Games 2024 in a few figures:</h2>
            <div className="game-figures-img">
              <img src={figure_one} alt="" />
            </div>
          </div>
          <div className="games-figures-top-right">
            <h3 className="dot-text">
              Millions of television viewers worldwide
            </h3>
            <h3 className="dot-text">1000 hours of TV broadcast</h3>
            <h3 className="dot-text">10,500 athletes</h3>
            <h3 className="dot-text">500 accredited journalists</h3>
            <h3 className="dot-text">10,000 volunteers</h3>
          </div>
        </div>
        <div className="game-figures-bottom">
          <div className="game-figures-bottom-left">
            <h2>Gateway Games 2024 in a few figures:</h2>
            <div className="game-figures-img">
              <img src={figure_two} alt="" />
            </div>
          </div>
          <div className="games-figures-bottom-right">
            <h3 className="dot-text">12th January 2025 to 25th January 2025</h3>
            <h3 className="dot-text">30 Sports</h3>
            <h3 className="dot-text">10,500 athletes</h3>
            <h3 className="dot-text">300 sessions</h3>
            <h3 className="dot-text">11 Local Organizing Committees</h3>
          </div>
        </div>
      </section>
      {/* games legacy */}
      <section className="games-legacy">
        <div className="legacy">
          <h2>Leaving a legacy</h2>
          <p>
            Hosting the biggest event in the entire nation is going to change
            our country. It’s inevitable. Gateway Games 2024 want sport values
            to become a key part of people’s lives and to prove that we can
            achieve excellence while also championing sustainability.
          </p>
        </div>
      </section>
      {/* unlocking potential */}
      <section className="games-unlocking-potential">
        <div className="unlocking-potential">
          <div className="unlocking-potential-header">
            <h2>
              Unlocking Economic Potential: The Impact of Hosting a Sports
              Festival in Ogun State.
            </h2>
          </div>
          {/* unlocking-potential-content */}
          <div className="unlocking-potential-content">
            <p>
              Tourism Revenue: <span>
                Hosting a sports festival can attract visitors from within and
                outside the state, leading to increased tourism revenue.
                Visitors spend money on accommodations, dining, transportation,
                and souvenirs, benefiting local businesses and stimulating
                economic activity.
              </span>
            </p>
            <p>
              Infrastructure Development: <span>
                To host a sports festival successfully, there is often a need
                for infrastructure development, including sports facilities,
                accommodation options, transportation networks, and amenities.
                Investments in infrastructure can have long-term economic
                benefits by improving the quality of life for residents and
                attracting future events and investments.
              </span>
            </p>
            <p>
              Job Creation: <span>
                Hosting a sports festival creates job opportunities in various
                sectors, including event management, hospitality,
                transportation, security, and retail. The influx of visitors and
                the need for event-related services can lead to temporary
                employment opportunities for local residents, reducing
                unemployment and boosting household income.
              </span>
            </p>
            <p>
              Promotion of Local Businesses: <span>
                The increased visibility and foot traffic generated by a sports
                festival can provide a platform for local businesses to promote
                their products and services. Restaurants, hotels, shops, and
                entertainment venues can capitalize on the influx of visitors by
                offering special promotions and attracting new customers.
              </span>
            </p>
            <p>
              Sponsorship and Advertising Revenue: <span>
                Sports festivals often attract sponsorship and advertising
                revenue from corporate sponsors, media partners, and government
                agencies. These funds can be used to offset event costs, invest
                in community development projects, or support sports programs
                and initiatives, contributing to the local economy.
              </span>
            </p>
            <p>
              Legacy Effects: <span>
                Hosting a sports festival can leave a lasting legacy by
                inspiring participation in sports and promoting a healthy and
                active lifestyle among residents. This legacy can lead to
                long-term economic benefits by reducing healthcare costs,
                increasing productivity, and fostering social cohesion and
                community pride.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Partners />
      <Footer />
    </>
  );
};

export default Games;
