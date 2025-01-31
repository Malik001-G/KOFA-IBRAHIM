import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import video from "../../assets/images/video.svg";
import play from "../../assets/images/play.svg";
import video2 from "../../assets/images/video2.svg";
// import "./latevid.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LatestVideos = ({ slidesNum }) => {
  const [news, setNews] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const fetchNews = async (currentPage) => {
      try {
        const response = await axios.get(
          `${BASE_URL}/news?categories=blog,interview,video&page=${currentPage}&size=6`
        );
        const data = response.data;
        setNews(data.data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      <div className="latest-vid">
        <h2>
          <span></span>latest News
        </h2>
        <Swiper
          slidesPerView={slidesNum}
          spaceBetween={24}
          navigation
          modules={[Navigation]}
          className="newSwiper"
        >
          {news.map((item, index) => (
            <SwiperSlide className="news-swipe1" key={index}>
              <Link to={item.category == "video" ? `/videos/${item.id}` : `/news/${item.id}`}>
                <img className="news-swipe1-img" src={video} alt="" />
                {item.category == "video" ? (
                  <img src={play} alt="" className="playyyy" />
                ) : (
                  ""
                )}
                <div className="news-swipe-text">
                  {/* <h1>{item.title}</h1> */}
                  <p dangerouslySetInnerHTML={{ __html: item.body }}></p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide className="news-swipe2">
            <div className="small-box-slide">
              <img src={video2} alt="" />
              <div className="small-slide-text">
                <h3>5 reasons why you should wrap your hands when boxing</h3>
                <p>
                  So, you finally went to your first boxing class and learned
                  the basics of the sport. You also learned that it’s
                  recommended to wrap your hands before putting on the gloves.
                  But there are times when you just don’t feel like wrapping
                  them and you wonder why you even need them. Well, this blog is
                  going to explain the benefits of wrapping your hands.
                </p>
              </div>
            </div>
            <div className="small-box-slide">
              <img src={video2} alt="" />
              <div className="small-slide-text">
                <h3>5 reasons why you should wrap your hands when boxing</h3>
                <p>
                  So, you finally went to your first boxing class and learned
                  the basics of the sport. You also learned that it’s
                  recommended to wrap your hands before putting on the gloves.
                  But there are times when you just don’t feel like wrapping
                  them and you wonder why you even need them. Well, this blog is
                  going to explain the benefits of wrapping your hands.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="news-swipe2">
            <div className="small-box-slide">
              <img src={video2} alt="" />
              <div className="small-slide-text">
                <h3>5 reasons why you should wrap your hands when boxing</h3>
                <p>
                  So, you finally went to your first boxing class and learned
                  the basics of the sport. You also learned that it’s
                  recommended to wrap your hands before putting on the gloves.
                  But there are times when you just don’t feel like wrapping
                  them and you wonder why you even need them. Well, this blog is
                  going to explain the benefits of wrapping your hands.
                </p>
              </div>
            </div>
            <div className="small-box-slide">
              <img src={video2} alt="" />
              <div className="small-slide-text">
                <h3>5 reasons why you should wrap your hands when boxing</h3>
                <p>
                  So, you finally went to your first boxing class and learned
                  the basics of the sport. You also learned that it’s
                  recommended to wrap your hands before putting on the gloves.
                  But there are times when you just don’t feel like wrapping
                  them and you wonder why you even need them. Well, this blog is
                  going to explain the benefits of wrapping your hands.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="news-swipe2">
            <div className="small-box-slide">
              <img src={video2} alt="" />
              <div className="small-slide-text">
                <h3>5 reasons why you should wrap your hands when boxing</h3>
                <p>
                  So, you finally went to your first boxing class and learned
                  the basics of the sport. You also learned that it’s
                  recommended to wrap your hands before putting on the gloves.
                  But there are times when you just don’t feel like wrapping
                  them and you wonder why you even need them. Well, this blog is
                  going to explain the benefits of wrapping your hands.
                </p>
              </div>
            </div>
            <div className="small-box-slide">
              <img src={video2} alt="" />
              <div className="small-slide-text">
                <h3>5 reasons why you should wrap your hands when boxing</h3>
                <p>
                  So, you finally went to your first boxing class and learned
                  the basics of the sport. You also learned that it’s
                  recommended to wrap your hands before putting on the gloves.
                  But there are times when you just don’t feel like wrapping
                  them and you wonder why you even need them. Well, this blog is
                  going to explain the benefits of wrapping your hands.
                </p>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default LatestVideos;
