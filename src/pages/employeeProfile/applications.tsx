import { Link, useLocation, useParams } from "react-router-dom";
import ApplicationsColumn from "../../components/employeeProfile/applications/applicationsColumn";
import { useQuery } from "@tanstack/react-query";
import { getJobApplicationByJobId } from "../../api/jobApplication";
import Spinner from "../../components/common/spinner";

const Applications = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state;

  const { data, isLoading } = useQuery({
    queryKey: ["jobApplication", id],
    queryFn: async () => {
      if (id) {
        return await getJobApplicationByJobId(Number(id));
      }
    },
  });

  if (!id) {
    return <div>Job ID is not provided!</div>;
  }

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="pl-12 pt-12">
      <div className="flex gap-1 body-small-400">
        <Link className="hover:text-blue-400 duration-300" to={"/"}>
          Home
        </Link>{" "}
        /
        <Link className="hover:text-blue-400 duration-300" to={"/find-job"}>
          Job
        </Link>{" "}
        /
        <Link
          className="hover:text-blue-400 duration-300"
          to={`/find-job/job-details/${id}`}
        >
          {title}
        </Link>{" "}
        /<p className="text-blue-500">Applications</p>
      </div>
      <h5 className="font-medium text-xl text-gray-900 mt-2 mb-6">
        Job Applications
      </h5>
      <div className="flex gap-6">
        <ApplicationsColumn data={data}/>
      </div>
    </div>
  );
};

export default Applications;
