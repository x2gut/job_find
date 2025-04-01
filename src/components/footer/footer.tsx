import { LuBriefcaseBusiness } from "react-icons/lu";
import Container from "../common/Container";
import FooterLink from "./footerLink";
import FooterColumn from "./footerColumn";

const Footer = () => {
  return (
    <div className="bg-[#18191C] border-b border-gray-500">
      <Container>
        <div className="pt-24 pb-20 flex justify-between">
          <div className="w-full max-w-[312px]">
            <div className="flex gap-2 items-center pb-6">
              <LuBriefcaseBusiness size={40} color="white" />
              <h3 className="font-semibold text-2xl text-white">My Job</h3>
            </div>
            <span className="text-[#5E6670] text-lg">Call now: </span>
            <a
              className="text-white text-lg font-medium"
              href="+1-319-555-0115"
            >
              (319) 555-0115
            </a>
            <p className="text-[#767F8C] text-sm pt-3">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of
              America
            </p>
          </div>
          <FooterColumn title="Quick Link">
            <FooterLink to="/about" label="About" />
            <FooterLink to="/contact" label="Contact" />
            <FooterLink to="/pricing" label="Pricing" />
            <FooterLink to="/blog" label="Blog" />
          </FooterColumn>
          <FooterColumn title="Candidate">
            <FooterLink to="/" label="Browse Jobs" />
            <FooterLink to="/" label="Browse Employers" />
            <FooterLink to="/" label="Candidate Dashboard" />
            <FooterLink to="/" label="Saved Jobs" />
          </FooterColumn>
          <FooterColumn title="Employers">
            <FooterLink to="/" label="Post a Job" />
            <FooterLink to="/" label="Browse Candidates" />
            <FooterLink to="/" label="Employers Dashboard" />
            <FooterLink to="/" label="Applications" />
          </FooterColumn>
          <FooterColumn title="Support">
            <FooterLink to="/" label="Faqs" />
            <FooterLink to="/" label="Privacy Policy" />
            <FooterLink to="/" label="Terms & Conditions" />
          </FooterColumn>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
