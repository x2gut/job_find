import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "../common/Container";
import { SiYoutube } from "react-icons/si";

const FooterBottom = () => {
  return (
    <div className="bg-[#18191C]">
      <Container>
        <div className="flex justify-between py-6">
          <p className="text-sm text-[#767F8C]">
            @ 2024 MyJob - Job Portal. All rights Reserved
          </p>
          <div className="flex gap-5">
            {/* Оборачиваем иконки в <a> с анимацией при наведении */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#767F8C] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#767F8C] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <SiYoutube size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#767F8C] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#767F8C] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
