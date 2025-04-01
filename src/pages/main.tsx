import { SlMagnifier } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import Container from "../components/common/Container";
import Card from "../components/main/card";
import { LuBriefcaseBusiness, LuBuilding2, LuUsers } from "react-icons/lu";
import InputBlock from "../components/ui/inputBlock";
import Input from "../components/ui/input";
import { useState } from "react";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate("/find-job", { state: { location, keyword } });
  };

  return (
    <div className="w-full bg-gray-200 pt-28">
      <Container>
        <div className="w-full h-full flex justify-between">
          <div className="w-full max-w-[680px]">
            <h2 className="font-medium text-[56px] max-w-[602px] text-[#18191C] leading-[64px] pb-6">
              Find a job that suits your interest & skills.
            </h2>
            <p className="text-lg text-[#5E6670] max-w-[536px] leading-7">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </p>
            <InputBlock className="mt-6 mb-8 py-3">
              <div className="flex">
                <Input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  icon={<SlMagnifier color="#0066FF" size={20} />}
                  placeholder="Job title, Keyword..."
                  className="w-full"
                />
                <span className="w-[2px] h-8 bg-[#E4E5E8] block"></span>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  icon={<CiLocationOn color="#0066FF" size={28} />}
                  className="w-full"
                />
                <Button className="-ml-6" primary={true} onClick={handleSearch}>
                  Find
                </Button>
              </div>
            </InputBlock>
            <p className="text-sm text-[#474C54]">
              <span className="text-gray-500">Suggestions: </span>
              <button
                className="hover:underline"
                onClick={() => setKeyword("Designer")}
              >
                Designer
              </button>
              ,{" "}
              <button
                className="hover:underline"
                onClick={() => setKeyword("Programming")}
              >
                Programming
              </button>
              ,{" "}
              <button
                className="hover:underline"
                onClick={() => setKeyword("Digital Marketing")}
              >
                Digital Marketing
              </button>
              ,{" "}
              <button
                className="hover:underline"
                onClick={() => setKeyword("Video")}
              >
                Video
              </button>
              ,{" "}
              <button
                className="hover:underline"
                onClick={() => setKeyword("Animation")}
              >
                Animation
              </button>
            </p>
          </div>
          <div className="bg-[url('/imgs/Illustration.png')] h-auto w-full max-w-[492px] max-h-96 bg-cover bg-center"></div>
        </div>
        <div className="py-28 flex gap-6">
          <Card
            icon={<LuBriefcaseBusiness size={40} color="#0A65CC" />}
            iconBg="#E7F0FA"
            label="Live job"
            total={175324}
          />
          <Card
            icon={<LuBuilding2 size={40} color="#FFF" />}
            iconBg="#0A65CC"
            label="Companies"
            total={97354}
          />
          <Card
            icon={<LuUsers size={40} color="#0A65CC" />}
            iconBg="#E7F0FA"
            label="Candidates"
            total={3847154}
          />
          <Card
            icon={<LuBriefcaseBusiness size={40} color="#0A65CC" />}
            iconBg="#E7F0FA"
            label="New Jobs"
            total={7532}
          />
        </div>
      </Container>
    </div>
  );
}

export default Main;
