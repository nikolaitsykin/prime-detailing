import React from "react";
import PromoItem from "./PromoItem";
import { permanentPromos, temporaryPromoNow } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from "../assets/images/josep-martins-nAsdr5DC2Ss-unsplash.jpg";

const Promos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    centerPadding: "10px",
  };

  return (
    <div className="w-full ">
      <h2 className="text-2xl text-center text-black font-syne font-bold">
        Promo
      </h2>
      {/* <div className="bg-black w-full mx-auto h-48">
        <img
          src={backgroundImage}
          alt="background"
          className="object-cover w-full mx-auto h-48"
        />
      </div> */}
      <Slider {...settings} className="w-full h-48">
        {permanentPromos.map((item, index) => (
          <PromoItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
        <PromoItem
          key={temporaryPromoNow.index}
          title={temporaryPromoNow.title}
          description={temporaryPromoNow.description}
          image={backgroundImage}
        />
      </Slider>
    </div>
  );
};

export default Promos;