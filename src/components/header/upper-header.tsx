import { FiPhoneCall } from "react-icons/fi";
import Container from "../common/Container";
import { Link } from "react-router-dom";

function UpperHeader() {
  return (
    <div className="w-full bg-gray-color p-4">
      <Container>
        <div className="flex justify-between">
          <nav>
            <ul className="flex gap-6 text-[#5E6670]">
              <li className="hover:underline hover:text-blue-600 decoration-blue-600 decoration-1 underline-offset-[16px] duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline hover:text-blue-600 decoration-blue-600 decoration-1 underline-offset-[16px] duration-200">
              <Link to="/find-job">Find Job</Link>
              </li>
              <li className="hover:underline hover:text-blue-600 decoration-blue-600 decoration-1 underline-offset-[16px] duration-200">
              <Link to="/employee/profile/overview">Employes</Link>
              </li>
              <li className="hover:underline hover:text-blue-600 decoration-blue-600 decoration-1 underline-offset-[16px] duration-200">
                <a href="">Candidates</a>
              </li>
              <li className="hover:underline hover:text-blue-600 decoration-blue-600 decoration-1 underline-offset-[16px] duration-200">
                <a href="">Pricing planes</a>
              </li>
              <li className="hover:underline hover:text-blue-600 decoration-blue-600 decoration-1 underline-offset-[16px] duration-200">
                <a href="">Customer Supports</a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-1 items-center">
            <FiPhoneCall />
            <a href="+1-202-555-0178">+1-202-555-0178</a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UpperHeader;
