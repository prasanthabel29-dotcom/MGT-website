import React from "react";
import "./AboutPage.css";

import dev from "../../assets/code.jpg";
import team from "../../assets/staff.jpg";
import security from "../../assets/security.jpg";
import analytics from "../../assets/Analysis.jpg";
import arvr from "../../assets/AR.jpg";
import consulting from "../../assets/consulting.jpg";
import logo from "../../assets/logo.png";
import building from "../../assets/building.jpg";

export default function AboutPage() {
  const services = [
    {
      title: "PRODUCT DEVELOPMENT (IT & NON-IT)",
      desc: "We design, develop and deliver customized IT and non-IT products aligned with business objectives.",
      icon: dev,
    },
    {
      title: "STAFF AUGMENTATION",
      desc: "We provide highly skilled professionals to support business needs.",
      icon: team,
    },
    {
      title: "CYBERSECURITY SERVICES",
      desc: "Protect infrastructure, applications and data from cyber threats.",
      icon: security,
    },
    {
      title: "DATA ANALYTICS",
      desc: "Transform raw data into actionable insights.",
      icon: analytics,
    },
    {
      title: "AR / VR & IoT SOLUTIONS",
      desc: "Enhance experiences with immersive technologies.",
      icon: arvr,
    },
    {
      title: "STRATEGIC CONSULTING",
      desc: "Drive growth with digital transformation strategies.",
      icon: consulting,
    },
  ];

  return (
    <div className="about-wrapper">
      <div className="about-container">

        {/* HERO */}
        <div className="top-hero">

          <div className="top-left">
            <img src={logo} alt="Majesty Global Technologies logo" />
            <h1>MAJESTY GLOBAL</h1>
            <h3>TECHNOLOGIES</h3>
            <p className="tagline">INNOVATE • TRANSFORM • SUCCEED</p>
          </div>

          <div className="top-right">
            <p>
              <b>Majesty Global Technologies</b> is an innovative professional
              services and business consulting company that combines deep industry
              expertise with disruptive digital technologies to help clients solve
              complex business challenges.
            </p>

            <div className="info-box">
              <div className="info-item">
                🏢 Headquartered in <b>Bangalore</b>, Registered office in <b>Puttaparthi</b>.
              </div>
              <div className="info-item">
                🌐 Supporting multiple industries worldwide.
              </div>
            </div>
          </div>

          <img src={building} alt="Majesty Global Technologies office" className="building-img" />

        </div>

        {/* INFO STRIP */}
        <div className="info-strip">
          🚀 Starting with IT projects, talent acquisition, and staff augmentation for
          <b> Entertainment, Hospitality, and Healthcare</b> sectors, expanding into
          <b> Fintech and Telecom</b>.
        </div>

        {/* TITLE */}
        <div className="section-title">
          OUR SERVICE OFFERINGS
        </div>

        {/* SERVICES */}
        <div className="services">
          {services.map((s, i) => (
            <div className="service-row" key={i}>
              <div className={`service-icon color-${i}`}>
                <img src={s.icon} alt={s.title} />
              </div>

              <div className="service-content">
                <h4 className="service-title">{s.title}</h4>
                <p className="service-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="bottom">

          <h3 className="bottom-title">
            WITH OUR OFFERINGS AND <span>CENTERS OF EXCELLENCE</span>
          </h3>

          <div className="bottom-icons">
            <div className="circle blue">🧠<p>AI</p></div>
            <div className="divider"></div>
            <div className="circle green">📊<p>DATA ANALYTICS</p></div>
            <div className="divider"></div>
            <div className="circle yellow">🤖<p>RPA</p></div>
            <div className="divider"></div>
            <div className="circle cyan">📡<p>IoT</p></div>
            <div className="divider"></div>
            <div className="circle purple">🥽<p>AR / VR</p></div>
          </div>

          <h4 className="core-text">
            ARE DRIVEN BY STRONG <span>CORE VALUES</span>
          </h4>

          <div className="core-values">

            <div className="core-item">
              <div className="circle small blue">🛡️</div>
              <div>
                <h5>INTEGRITY</h5>
                <p>We uphold the highest standards.</p>
              </div>
            </div>

            <div className="core-item">
              <div className="circle small green">🤝</div>
              <div>
                <h5>COLLABORATION</h5>
                <p>We believe in teamwork.</p>
              </div>
            </div>

            <div className="core-item">
              <div className="circle small orange">👥</div>
              <div>
                <h5>PEOPLE FOCUS</h5>
                <p>We value growth.</p>
              </div>
            </div>

          </div>

          <div className="footer-strip">
            ENSURING LONG-TERM VALUE AND TRUSTED PARTNERSHIPS
          </div>

        </div>

      </div>
    </div>
  );
}