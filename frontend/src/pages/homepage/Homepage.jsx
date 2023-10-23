import "./homepage.css";
import { Link } from "react-router-dom";

const testimonialData = [
  {
    name: "Anish Verma",
    quote:
      "Chair Heaven has transformed our home. We ordered a set of their elegant dining chairs, and we couldn't be happier. The quality and comfort exceeded our expectations.",
  },
  {
    name: "Ritika Aggarwal",
    quote:
      "Chair Heaven's selection is fantastic! I found a beautiful recliner for my home theater that has taken movie nights to a whole new level of comfort.",
  },
  {
    name: "Gaurav Jain",
    quote:
      "I appreciate Chair Heaven's commitment to sustainability. I purchased a wooden rocking chair with eco-friendly materials, and it's not only comfortable but also environmentally responsible. Kudos to Chair Heaven for offering eco-conscious options.",
  },
  {
    name: "Muskaan Sharma",
    quote:
      "I've shopped for chairs in various places, but Chair Heaven's collection and the level of detail in their product descriptions set them apart. It made choosing the perfect chair a breeze.",
  },
];

export default function Homepage() {
  return (
    <>
      <section className="section-hero">
        <div className="hero-wrapper">
          <div className="hero-details">
            <p className="hero-title">Elevate Your Seating Experience</p>
            <p className="hero-desc">
              Where Every Chair is a Gateway to Unprecedented Comfort and Every
              Room Becomes Your Sanctuary of Relaxation
            </p>
            <Link to={"/shop"} className="btn btn-medium btn-shop">
              Shop Now
            </Link>
          </div>
          <img
            className="hero-img"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2158&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="chair"
          />
        </div>
      </section>
      <section className="section-featured">
        <h3 className="heading-h3 featured-heading">Featured In</h3>
        <div className="featured-box">
          <img
            className="featured-img"
            src="/img/featured/HT.png"
            alt="Hindustan Times"
          />
          <img
            className="featured-img"
            src="/img/featured/ind-today.png"
            alt="India Today"
          />
          <img
            className="featured-img"
            src="/img/featured/forbes.png"
            alt="Forbes"
          />
          <img
            className="featured-img"
            src="/img/featured/the-week.jpg"
            alt="The Week"
          />
        </div>
      </section>
      <section className="section-why-us">
        <h3 className="heading-h3 why-us-heading">Why Choose Us?</h3>
        <div className="why-us-container">
          {/* --------------- OPTION 1 ---------------------  */}
          <div className="why-us option-1">
            <div className="why-us-title">Superior Comfort</div>
            <div className="why-us-desc">
              We prioritize your comfort above all else. Each chair in our
              catalog is thoughtfully selected for its ergonomic design, plush
              cushioning, and top-quality materials, making every sit a
              luxurious experience.
            </div>
          </div>
          <div className="option-1-img">
            <img
              className="option-img"
              src="https://images.unsplash.com/photo-1526404684912-a81cdc6e6e11?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="comfort"
            />
          </div>
          {/* --------------- OPTION 2 ---------------------  */}
          <div className="why-us option-1">
            <div className="why-us-title">Quality Assurance</div>
            <div className="why-us-desc">
              Our commitment to quality extends to the craftsmanship of every
              chair we offer. We partner with reputable manufacturers,
              guaranteeing chairs that are built to last and withstand the test
              of time.
            </div>
          </div>
          <div className="option-2-img">
            <img
              className="option-img"
              src="https://images.unsplash.com/photo-1462212210333-335063b676bc?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="quality"
            />
          </div>
          {/* --------------- OPTION 3 ---------------------  */}
          <div className="why-us option-1">
            <div className="why-us-title">Fast and Reliable Shipping</div>
            <div className="why-us-desc">
              With our efficient shipping partners, your chosen chair is just a
              click away from arriving at your doorstep. We aim to provide quick
              and reliable delivery services.
            </div>
          </div>
          <div className="option-3-img">
            <img
              className="option-img"
              src="https://images.unsplash.com/photo-1546969026-c5262032df56?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <h3 className="heading-h3 testimonial-heading">
          What are Customer&apos;s Say
        </h3>
        <div className="testimonial-box">
          {testimonialData.map((d, idx) => (
            <div className="testimonial" key={idx}>
              {d.quote} ~ <span className="customer-name">{d.name}</span>
            </div>
          ))}
        </div>
        <p className="cta-heading">
          Join the ranks of our satisfied customers and experience the quality,
          style, and exceptional service that Chair Heaven has to offer.
          We&apos;re committed to making your seating dreams come true.
        </p>
        <Link to={"/shop"} className="btn btn-medium btn-shop btn-cta">
          Shop Now
        </Link>
      </section>
    </>
  );
}
