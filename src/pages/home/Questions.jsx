import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question:
        "How can I contact customer support for ticketing inquiries for the 2024 National Sports Festival (Gateway Games) in Ogun State?",
      answer:
        "For official details and ticketing updates, check announcements from the Ogun State Sports Commission and the event's official communications channels, as they will provide clear contact information and guidance closer to the event's start in January 2025",
    },
    {
      question:
        "What is the official mascot of the National Sports Festival 2024 in Ogun State, Nigeria?",
      answer:
        "The official mascot for the 2024 National Sports Festival, also known as the Gateway Games in Ogun State, Nigeria, has not yet been publicly announced. Typically, festival organizers select a mascot that symbolizes local heritage and embodies the spirit of athleticism and unity. For updates on the mascot and event details, watch for announcements from the Ogun State Sports Commission or the festival's official communication channels.",
    },
    {
      question:
        "What sports are featured in the National Sports Festival 2024 in Ogun State?",
      answer:
        " The National Sports Festival 2024 in Ogun State will feature a variety of sports, including track and field, swimming, weightlifting, football, basketball, and wrestling, among others. The event is scheduled to take place across multiple venues in Ogun, particularly Abeokuta and Ikenne. Preparation for the festival has been extensive, with the Local Organizing Committee working closely with the state government to ensure top-notch facilities and coordination for the athletes and spectators. The festival is set to be an impressive showcase of sportsmanship, cultural celebration, and community involvement, as Ogun State prepares to host the games for the second time in its history.",
    },
    {
      question:
        "How many athletes are expected to compete in the National Sports Festival 2024 in Ogun State?",
      answer:
        "The National Sports Festival 2024 in Ogun State is anticipated to host thousands of athletes from across Nigeria, representing all 36 states and the Federal Capital Territory. The exact number of participants will be confirmed closer to the event, as each state finalizes its team selections. This multi-sport event will bring together competitors from a wide array of disciplines, celebrating athletic talent and state pride.",
    },
    {
      question:
        "How many states are expected to participate in the National Sports Festival 2024 in Ogun State?",
      answer:
        "All 36 states of Nigeria, along with the Federal Capital Territory, are expected to participate in the National Sports Festival 2024, bringing together athletes from across the country. This festival serves as Nigeria's premier multi-sport event, promoting unity and competition among the nation’s diverse regions.",
    },
    {
      question:
        "Why should I consider volunteering for the National Sports Festival 2024 in Ogun State?",
      answer:
        "Volunteering for the National Sports Festival 2024 offers several rewarding benefits. Firstly, it provides an opportunity to gain hands-on experience in event management and sports administration, which can be valuable for personal and professional growth. Volunteers play a crucial role in ensuring the smooth operation of the event, from assisting athletes and officials to managing logistics and crowd control. Additionally, volunteering allows individuals to connect with like-minded people, build a network within the sports community, and develop new skills such as teamwork, communication, and problem-solving. It's also a chance to contribute to the promotion of sports and healthy living within the community, making a positive impact on society. Moreover, many volunteers receive certificates of participation, which can enhance their resumes. Overall, volunteering can be a fulfilling way to engage with the community and support the celebration of Nigerian sports. For more details on how to get involved, keep an eye on announcements from the Ogun State Sports Commission.",
    },
    {
      question:
        "I live abroad, how to plan my stay for the Gateway Games 2024?",
      answer:
        "To plan your stay for the Gateway Games 2024, which will take place from January 12 to January 26, 2025, in Ogun State, here are some steps to consider: 1. Travel: Book your flight early and check visa requirements. 2. Accommodation: Reserve a hotel in Abeokuta or nearby to be close to event venues. 3. Transportation: Familiarize yourself with local transport options, including taxis and ride-hailing services. 4. Event Schedule: Stay updated on the schedule for events you want to attend and any ticketing details. 5. Local Insights: Research local customs and safety tips to ensure a smooth experience. For more information about the event and travel planning, keep an eye on announcements from the Ogun State Sports Commission and local news sources.",
    },
    {
      question: "Do I need to have experience in volunteering?",
      answer:
        "No, you don't necessarily need prior experience to volunteer for events like the Gateway Games 2024. Many volunteer positions welcome individuals who are eager to learn and contribute, regardless of their background. Organizations often provide training and support for new volunteers, making it an excellent opportunity to gain experience in event management, sports administration, and teamwork.",
    },
    {
      question: "What are the next steps once I have submitted my application?",
      answer:
        "After submitting your volunteer application for the Gateway Games 2024, you can expect a confirmation email, followed by a review of your application, potential interviews, training sessions, and scheduling details. Stay updated with any communications from the organizers. For more information, check the Ogun State Sports Commission's announcements",
    },
    {
      question: "How many different roles can I volunteer in?",
      answer:
        "Volunteers are usually assigned to one main role. You’ll be able to tell us which ones you prefer on your application. Depending on your extra availability, we may be able to assign you extra assignments.",
    },
    {
      question: "Is accommodation provided for volunteers?",
      answer:
        "Unfortunately we don’t provide any accommodation for our volunteers, so we recommend that you have somewhere to stay near the venue. However, the local Volunteer Management Teams will do their best to offer advice on the options available to you.",
    },
    {
      question: "Will meals be provided?",
      answer:
        "Yes, all volunteers will get free food and soft drinks while volunteering.",
    },
  ];

  return (
    <>
      <div className="quest-wrap">
        {questions.map((quest, index) => (
          <div
            className="accordion-container"
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="question">
              <p>{quest.question}</p>
              <button
                className={`toggle-button ${
                  openIndex === index ? "open-btn" : "close-btn"
                }`}
              >
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
            </div>

            <div className={`answer ${openIndex === index ? "open" : ""}`}>
              <p>{quest.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
