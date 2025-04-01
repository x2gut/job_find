import { BsArrowRight } from "react-icons/bs";
import Container from "../components/common/Container";
import Button from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className="border-t">
      <Container className="pt-[154px] pb-[188px] flex gap-[104px]">
        <div className="max-w-[416px] flex flex-col gap-6 justify-center">
          <h2 className="text-[40px] font-medium text-gray-900">
            Opps! Page not found
          </h2>
          <p className="text-lg text-gray-700">
            Something went wrong. It's look like the link is broken or the page
            is removed.
          </p>
          <div className="max-w-64 flex gap-4">
            <Button
              onClick={() => navigate("/")}
              primary={true}
              className="flex items-center gap-3"
            >
              Home
              <BsArrowRight width={24} />
            </Button>
            <Button onClick={() => navigate(-1)} primary={false}>
              Go Back
            </Button>
          </div>
        </div>
        <img src="/imgs/notFoundImg.png" alt="Not Found Img" />
      </Container>
    </div>
  );
};

export default NotFound404;
