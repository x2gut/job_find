import { Link, useLocation } from "react-router-dom";
import Container from "../common/Container";

const JobDetailsHeader = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-50 py-6">
      <Container>
        <div className="flex justify-between">
          <h3 className="body-large-500">Job Details</h3>
          <div className="body-small-400">
            <div className="flex gap-2">
              <Link className="hover:underline" to={"/"}>Home</Link>
              <span>/</span>
              <Link className="hover:underline" to={"/find-job"}>Find Job</Link>
              <span>/</span>
              <Link className="text-gray-900 hover:underline" to={location.pathname}>Job Details</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobDetailsHeader;
