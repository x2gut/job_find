import React, { useState } from "react";
import FindJobHeader from "../components/find-job/header";
import FindJobContentHeader from "../components/find-job/contentHeader";
import FindJobContent from "../components/find-job/content";
import { useLocation } from "react-router-dom";
import { JobFilters } from "../types/types";

const FindJobPage: React.FC = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [limit, setLimit] = useState(12);
  const location = useLocation();

  const filtersState = location.state || {};

  const [filters, setFilters] = useState<JobFilters>(filtersState);

  return (
    <>
      <FindJobHeader setFilters={setFilters} />
      <FindJobContentHeader
        setLimit={setLimit}
        filters={filters}
        viewMode={viewMode}
        setViewMode={setViewMode}
        setFilters={setFilters}
      />
      <FindJobContent limit={limit} viewMode={viewMode} filters={filters} />
    </>
  );
};

export default FindJobPage;
