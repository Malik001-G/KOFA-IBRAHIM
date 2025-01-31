import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import tinubu from "../../assets/images/tinubu.svg";
import diko from "../../assets/images/diko.svg";
import dapo from "../../assets/images/dapo.svg";
import isiaka from "../../assets/images/isiaka.svg";

const SwiperSpeech = () => {
  const slides = [
    {
      id: 1,
      title: "The President’s Goodwill Message",
      paragraph:
        "Ladies and gentlemen, <br/> Welcome to the Gateway States Sport Festival Games, a celebration of athleticism and national unity in Nigeria. To the athletes, your dedication inspires us all. To the organizers, your hard work ensures the success of this event. Let us come together in the spirit of sportsmanship, camaraderie, and national pride. May these games be a testament to the strength and resilience of our nation. Enjoy the competition, cherish the friendships, and make memories that will last a lifetime. Thank you, and let the games begin!",
      name: "His Excellency, President Bola Ahmed Tinubu(GCFR)",
      post: "President, Federal Republic of Nigeria.",
      img: tinubu,
    },
    {
      id: 2,
      title: "The Minister’s Goodwill Message",
      paragraph:
        "Ladies and gentlemen, <br /> Welcome to the Gateway States Sport Festival Games, a celebration of athleticism and national unity in Nigeria. To the athletes, your dedication inspires us all. To the organizers, your hard work ensures the success of this event. Let us come together in the spirit of sportsmanship, camaraderie, and national pride. May these games be a testament to the strength and resilience of our nation. Enjoy the competition, cherish the friendships, and make memories that will last a lifetime. Thank you, and let the games begin!",
      name: "Malam Shehu Dikko",
      post: "Chairman National Sports Commission, Federal Republic of Nigeria. ",
      img: diko,
    },
    {
      id: 3,
      title: "The Governor’s Goodwill Message",
      paragraph:
        "Welcome to the Gateway State's Sport Festival 2024! As Governor of the Gateway State, I extend a hearty welcome to all 36 states joining us for this extraordinary event. Together, let's embrace the thrill of competition, the unity of diversity, and the spirit of sportsmanship. Whether you're a participant or a supporter, let's make history and showcase the best of our nation's talent. Join us as we celebrate athleticism, friendship, and the power of sport to unite us all. Welcome to the Gateway State's Sport Festival 2024, where champions are born and dreams take flight!",
      name: "His Excellency, Dapo Abiodun",
      post: "Executive Governor Ogun State.",
      img: dapo,
    },
    {
      id: 4,
      title: "The Commissioner’s Goodwill Message",
      paragraph:
        "Welcome to our festival games! As Commissioner of Sports, I'm thrilled to invite you to a world of excitement and camaraderie. Get ready for adrenaline-pumping action, fierce competition, and unforgettable moments. Whether you're a participant or a spectator, join us for a celebration of athleticism and unity. Let's make memories and inspire greatness together. Welcome to the thrill of our festival games!",
      name: "Hon. Wasiu Isiaka",
      post: "Commissioner for Sport, Ogun State.",
      img: isiaka,
    },
  ];

  return (
    <div>
      <Swiper
        loop={true}
        loopedSlides={slides.length} // Number of slides to loop through
        slidesPerView={1} // Ensure one slide is shown at a time
        spaceBetween={0} // No space between slides
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        speed={3000}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-content">
              <h1>{slide.title}</h1>
              <div className="slide">
                <img src={slide.img} alt={slide.title} />
                <div className="slide-texts">
                  <h2
                    dangerouslySetInnerHTML={{ __html: slide.paragraph }}
                  ></h2>
                  <h3>{slide.name}</h3>
                  <h4>{slide.post}</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSpeech;
