import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <img
          className="text-white"
          width={100}
          height={100}
          src="https://imgur.com/lgjB3FI.png"
          alt=""
        />

        <p className="font-bold">
          Nexus Commercial <br />
          Providing reliable real estate since 1992
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaLinkedin className="text-4xl"></FaLinkedin>
          <FaSquareTwitter className="text-4xl"></FaSquareTwitter>
          <FaFacebook className="text-4xl"></FaFacebook>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
