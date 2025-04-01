import { FaLink, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

interface ContactInfoProps {
  website: string;
  phone: string;
  email: string;
}

const ContactInfo = ({ website, phone, email }: ContactInfoProps) => {
  return (
    <div className="flex gap-5">
      <a className="flex gap-2 items-center text-gray-700 text-base" href={website}>
        <FaLink size={16} color="#0066FF" />
        {website}
      </a>
      <a className="flex gap-2 items-center text-gray-700 text-base" href={`tel:${phone}`}>
        <FaPhoneAlt size={16} color="#0066FF" />
        {phone}
      </a>
      <a className="flex gap-2 items-center text-gray-700 text-base" href={`mailto:${email}`}>
        <IoIosMail size={20} color="#0066FF" />
        {email}
      </a>
    </div>
  );
};

export default ContactInfo;