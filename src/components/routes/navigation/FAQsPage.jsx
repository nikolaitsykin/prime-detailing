import React from "react";
import { autoDetailingQuestions, generalQuestions } from "../../../utils/faq";
import image from "../../../assets/images/AdobeStock_399584907.avif";
import FaqItem from "../../FaqItem";
import { Link } from "react-router-dom";
import { BOOKING_URL, CALL_NUMBER, CONTACT_PATH } from "../../../utils/constants";
import Banner from "../../Banner";

const FAQs = () => {
  return (
    <div id="faqs" className="w-full z-20 bg-white font-poppins">
      <Banner image={image} header="FAQs" />
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article>
          <h2 className=" ">Everything You Need to Know</h2>
          <h3 className="text-center py-0 mb-4">General Questions</h3>
          <h5>How Can I Book A Detail?</h5>
          <p>
            You can call us at {" "}
            <a href={CALL_NUMBER} className="underline text-blue">
              (919) 906-0099
            </a>
            , request a quote through our contact page or just simply book
            online. Click the{" "}
            <Link to={CONTACT_PATH} className="underline text-blue">
              Request a quote
            </Link>{" "}
            to visit our contact page to request a quote. Click the{" "}
            <Link
              to={BOOKING_URL}
              target="_blank"
              className="underline text-blue"
            >
              Book now
            </Link>{" "}
            button to visit our appointments page to book online.
          </p>{" "}
          <FaqItem questions={generalQuestions} />
          <h3 className="text-center py-0">Detailing Questions</h3>
          <FaqItem questions={autoDetailingQuestions} />
        </article>
      </section>
    </div>
  );
};

export default FAQs;
