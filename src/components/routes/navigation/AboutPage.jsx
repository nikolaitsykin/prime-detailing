import React from "react";
import image from "../../../assets/images/man-washing-his-car-garage_1157-26072.avif";
import BookButtons from "../../UI/BookButtons";
import { businessName, fullBusinessName } from "../../../utils/data";
import Banner from "../../Banner";

const AboutPage = () => {
  return (
    <div id="about" className="w-full z-20 bg-white font-poppins">
      <Banner image={image} header="About" />
      <section>
        <article className="text-black flex flex-col justify-center">
          <h2 className="">Professional Service, Personal Care</h2>
          <p className="py-2">
            At {fullBusinessName}, we're committed to making your car look its
            best—right from the convenience of your driveway. Our business is
            built on the belief that top-quality car care should be easy,
            professional, and stress-free. We bring our detailing expertise
            straight to you, ensuring your vehicle shines without you needing to
            go anywhere.
          </p>
          <h2 className=" p-5">Our Story</h2>
          <p>
            Hi! I'm Nik, the owner of {fullBusinessName}. What started as a passion
            for taking care of my own car quickly grew into helping family and
            friends. Now, I'm excited to share that same care and attention with
            you. {businessName} was created with a simple goal: to make car
            detailing easier for people with busy lives. Whether you’re juggling
            family responsibilities, constantly on the move, or simply love
            keeping your car in top shape, we understand how hard it can be to
            find time for vehicle care. That’s why we offer mobile detailing
            services that work around your schedule. As passionate car
            enthusiasts, we’re here to help you maintain your car’s appearance,
            whenever and wherever it’s most convenient for you.{" "}
            <strong>
              No matter who you are or what you drive, we've got you covered.
            </strong>
          </p>
          <h2 className=" p-5">What Drives Us</h2>
          <p>
            Our mission is clear: to make your car shine, inside and out, with
            exceptional attention to detail. We use premium, eco-friendly
            products that are tough on dirt but gentle on the environment.
            Whether it's a quick cleanup or an in-depth detailing service, we
            ensure your car receives the same level of care we give our own.
          </p>
          <h2 className=" p-5 ">Why Choose {businessName}?</h2>
          <ul className="pl-5">
            <li className="list-disc">
              <strong>We Come to You:</strong> Your time is valuable. We show up
              wherever it's most convenient for you—home, work, or anywhere
              else.
            </li>
            <li className="list-disc">
              <strong>Quality Above All:</strong> Our trained professionals
              deliver high-quality results every time, without cutting corners.
            </li>
            <li className="list-disc">
              <strong>Environmental-safe:</strong>We believe in protecting your
              car and the environment. That's why we exclusively use safe,
              eco-friendly Car Care products that offer outstanding results
              without harmful chemicals.
            </li>
            <li className="list-disc">
              <strong>Customer First:</strong> We treat every vehicle as if it
              were our own and every customer like family, making sure you love
              the way your car looks.
            </li>
          </ul>
          <h2 className=" p-5 ">The {businessName} Difference</h2>
          <p>
            Life can be hectic, and maintaining your car shouldn't be a hassle.
            Whether you need a simple refresh or a full detailing package, we
            bring flawless results right to your door. Spend less time worrying
            about your car's appearance and more time enjoying it.
          </p>
          <h2 className=" p-5 ">Ready to Experience a New Level of Care?</h2>
          <p className=" text-base md:text-lg">
            Book with {businessName} today, and let us bring the shine to
            you—all while doing our part for the environment!
          </p>
          <div className="py-10">
            <BookButtons color="secondary" />
          </div>
        </article>
      </section>
    </div>
  );
};

export default AboutPage;
