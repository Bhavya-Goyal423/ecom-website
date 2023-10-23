import "./homepage.css";
import { Link } from "react-router-dom";

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
      </section>
    </>
  );
}
