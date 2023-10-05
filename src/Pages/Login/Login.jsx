
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthConText } from "../../Providers/AuthProvider";

const Login = () => {
    const {sigIn} = useContext(AuthConText)
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const  form =  new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(password, email)
        sigIn(email , password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
return (
    <div>
    <Navbar></Navbar>
    <div className="bg-base-200 h-[400px] ">
    <h2 className="text-3xl my-6 text-center pt-6">Login your account</h2>
    
    
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
            
        <div className="form-control">
            <label className="label">
            <span className="label-text">Email address</span>
            </label>
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
            required
            />
        </div>
        <div className="form-control">
            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="input input-bordered"
            required
            />
            <label className="label">
            <a href="#" className="label-text-alt link link-hover">
                Forgot password?
            </a>
            </label>
        </div>
        <div className="form-control mt-6">
            <button className="bg-[#403F3F] w-full py-2 text-white rounded-sm ">Login</button>
        </div>
        </form>
        <p className="text-center text-[#706F6F] mt-6">Dont’t Have An Account ?<Link to="/register" className="pl-3 text-red-500 hover:underline font-bold">Register</Link></p>
      
    </div>
    </div>
);
};

export default Login;
