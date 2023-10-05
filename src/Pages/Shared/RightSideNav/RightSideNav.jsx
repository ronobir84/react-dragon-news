import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import pZoneImage1 from "../../../assets/qZone1.png"
import pZoneImage2 from "../../../assets/qZone2.png"
import pZoneImage3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
  return (
    <div>

      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle className="text-lg"></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-lg"></FaGithub>
          Github
        </button>
      </div>
      <div>


        <div className="p-4  mb-4">
          <h2 className="text-2xl">Find Us On</h2>
          
            <a className="p-2 flex text-lg items-center border rounded-t-lg" href="">
            <FaFacebook className="text-lg mr-3"></FaFacebook>
            <span>Facebook</span>
            </a>
            <a className="p-2 flex text-lg items-center border-x" href="">
            <FaTwitter className="text-lg mr-3"></FaTwitter>
            <span>Twitter</span>
            </a>
            <a className="p-2 flex text-lg items-center border rounded-b-lg" href="">
            <FaInstagram className="text-lg mr-3"></FaInstagram>
            <span>Instagram</span>
            </a>
          
          
        </div>


        <div className="bg-[#F3F3F3]">
            <h2 className="text-2xl pl-3">Q-Zone</h2>
            <div>
            <img src={pZoneImage1} alt="" />
            </div>
            <div>
                
                <img src={pZoneImage2} alt="" />
            </div>
            <div>
                
                <img src={pZoneImage3} alt="" />
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
