import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-3 mt-6">
      <button className="px-4 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
       <Link className="mr-12" to="/"> I can be a React component, multiple React components....</Link>
       <Link className="mr-12" to="/"> I can be a React component, multiple React components....</Link>
       <Link className="mr-12" to="/"> I can be a React component, multiple React components....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
