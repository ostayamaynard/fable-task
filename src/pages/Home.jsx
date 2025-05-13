import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import logo from "../assets/logo.png";
import footerLogo from "../assets/footer-logo.png";
import hamburgerIcon from "../assets/hamburger.png";

const Footer = () => (
  <footer className="bg-[#ff6565] text-white py-[60px] text-[24px] font-normal leading-[120%] w-full">
    <div className="w-[1440px] mx-auto grid grid-cols-4 gap-[40px] px-[50.72px] text-white [&>*]:text-white">
      <div>
        <img
          src={footerLogo}
          alt="Fable footer logo"
          className="w-[57.56px] h-[80px] object-contain"
          draggable={false}
        />
      </div>
      <div className="text-left text-white">
        Ash Govind
        <br />
        ash@thefable.tv
        <br />
        0424 545 146
      </div>
      <div className="text-left text-white">
        Instagram
        <br />
        LinkedIn
        <br />
        Vimeo
      </div>
      <div className="text-left text-white max-w-[445px]">
        We acknowledge the Wurundjeri people of the Kulin nation as the traditional custodians of this land.
        <br />
        We pay our respect to their Elders, past and present.
        <br />
        <br />
        Fable. Pty Ltd
        <br />
        © 2025 Fable. All rights reserved.
      </div>
    </div>
  </footer>
);

const Header = () => (
  <header
    className="bg-[#ff6565] w-full flex items-center justify-between px-[50px] box-border"
    style={{ height: "121px" }}
  >
    <img
      src={logo}
      alt="Fable Logo"
      className="w-[138.07px] h-[49px] object-contain"
      draggable={false}
    />
    <img
      src={hamburgerIcon}
      alt="Menu"
      className="w-[31.79px] h-[24px] object-contain"
      draggable={false}
    />
  </header>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full bg-white">
        <div className="grid grid-cols-3 gap-0 w-full">
          {projects.map((project) => (
          <Link to={`/case-study/${project.slug}`} key={project.id}>
          <div
            key={project.id}
            className="group relative w-full h-[600px] overflow-hidden project-tile"
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              draggable={false}
            />

            {/* ✅ Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 ease-in-out z-10"></div>

            {/* Logo Overlay */}
            <img
              src={project.logo}
              alt={`${project.title} Logo`}
              className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[360px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              draggable={false}
            />
          </div>
          </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
