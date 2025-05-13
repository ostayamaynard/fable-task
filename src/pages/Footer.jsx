import footerLogo from "../assets/logo2.png";

const Footer = () => (
  <footer className="border border-[#012a4a] bg-[white] text-[#003366] py-[60px] text-[24px] font-normal leading-[120%] w-full">
    <div className="w-[1440px] mx-auto grid grid-cols-4 gap-[40px] px-[50.72px] text-white [&>*]:text-[#003366]">
      <div>
        <img
          src={footerLogo}
          alt="Fable footer logo"
          className="w-[57.56px] h-[80px] object-contain"
          draggable={false}
        />
      </div>
      <div className="text-left text-[#003366]">
        Ash Govind
        <br />
        ash@thefable.tv
        <br />
        0424 545 146
      </div>
      <div className="text-left text-[#003366]">
        Instagram
        <br />
        LinkedIn
        <br />
        Vimeo
      </div>
      <div className="text-left text-[#003366] max-w-[445px]">
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

export default Footer;