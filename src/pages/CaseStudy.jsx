import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import laptop from "../assets/laptop.png";
import phone from "../assets/phone.png";
import lastPicture from "../assets/last-picture.png";
import roomScene from "../assets/picture-below-the-video.png";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-10 text-xl">404 - Case Study Not Found</div>;

  return (
    <div className="bg-[#fefaf3] text-[#012a4a] w-full overflow-x-hidden">
      <Header />

      {/* ✅ Full-width Hero Image */}
      <div className="relative w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover"
        />
      </div>

      {/* ✅ Title and Metadata */}
      <div className="max-w-[1800px] mx-auto px-6 py-20 border-t border-[#012a4a]">
        <h1 className="text-[48px] md:text-[60px] font-serif font-medium text-[#012a4a] leading-[120%] tracking-[-0.5px] mb-8">
            The Lad Collective
            <br />
            — We Make The Bed Easy
        </h1>
        </div>

        <div className="w-[1440px] mx-auto grid grid-cols-4 gap-[40px] px-[50.72px] text-white [&>*]:text-[#003366]">
            <div>
            </div>
            <div className="text-left text-[#003366]">
                "Come Fourth... To the Place That Pays Up to 4th Place"
                <br />
                <br />
                 The campaign brief included the development of TV assets that were
                distributed through Kayo, Foxtel, and YouTube, as well as out-of-home
                (OOH) assets displayed throughout Melbourne, Sydney, and Brisbane.
                <br />
                <br />
            </div>
            <div className="text-left text-[#003366]">
            </div>
            <div className="text-left text-[#003366] max-w-[445px]">
                <b>Year</b>
                <br />
                2025
                <br />
                <br />
                <b>Scope</b>
                <br />
                Online,Social
                <br />
                <br />
            </div>
            </div>


      {/* ✅ Divider Above Video */}
      <hr className="border-t border-[#012a4a] max-w-[1800px] mx-auto mt-4" />

      {/* ✅ Embedded Vimeo Video */}
    <div className="case-study-video">
    <div className="aspect-video">
            <iframe
            src="https://player.vimeo.com/video/1061456827?h=6f5ed5d6d8"
            width="100%"
            height="100%"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
            ></iframe>
        </div>
        </div>

      {/* ✅ Room Scene Full Width */}
      <div className="w-full">
        <img
          src={roomScene}
          alt="Room scene"
          className="w-full object-cover"
        />
        <br />
        <br />
      </div>

      {/* ✅ Grid: Laptop + Phone */}
      <div className="device-showcase">
        <img src={laptop} alt="Laptop view" className="w-full object-cover" />
        <img src={phone} alt="Phone view" className="w-full object-cover" />
      </div>

      {/* ✅ Final Full-width Image */}
      <div className="w-full">
        <img
          src={lastPicture}
          alt="Final showcase"
          className="w-full object-cover"
        />
      </div>

      {/* ✅ Navigation Buttons */}
      <div className="max-w-[1400px] h-[150px] mx-auto px-6 mt-10 flex justify-between items-center py-10">
        <button className="nav-button">
          ← Previous
        </button>
        <button className="nav-button">
          Next →
        </button>
      </div>

      {/* ✅ Footer */}
      <Footer variant="light" />
    </div>
  );
};

export default CaseStudy;
