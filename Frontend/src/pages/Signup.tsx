// import Auth from "../components/Auth"
// import Quote from "../components/Quotes"

import axios from "axios";
import { SignupInput } from "bawa20010";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        name: "",
        password: ""
  });

  async function sendRequest() {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
        const jwt = response.data;
        localStorage.setItem("token", jwt);
        navigate("/blog");
    } catch(e) {
        alert("Error while signing up")
        // alert the user here that the request failed
    }
  }
  return (
    
    <div className="bg-[url('./assets/background4.jpg')] h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat">
    <div className="w-[320px] sm:w-[420px] bg-transparent border-2 border-white/20 backdrop-blur-md shadow-lg text-white font-semibold rounded-lg p-10">
      <form action="">
        <h1 className="text-3xl text-center font-bold mb-8">Create an account</h1>
        <div className="relative w-full h-12 mb-8">
          <input className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full text-lg text-white px-5" type="text" placeholder="Username" required onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            name : e.target.value
          })
        }}  />
        </div>
        <div className="relative w-full h-12 mb-8">
          <input className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full text-lg text-white px-5" type="email" placeholder="E-mail" required onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            username: e.target.value
          })
        }}  />
        </div>
        <div className="relative w-full h-12 mb-8">
          <input className="w-full h-full bg-transparent outline-none border-2 border-white/20 rounded-full text-lg text-white px-5" type="password" placeholder="Password" required onChange={(e)=>{
          setPostInputs({
            ...postInputs,
            password : e.target.value
          })
        }}  />
        </div>
        <button onClick={sendRequest} className="w-full h-12 bg-white text-gray-800 rounded-full shadow-md font-semibold hover:bg-gray-200 transition duration-300">
          <Link to={"#"} className=" w-full h-full flex items-center justify-center">Signup</Link>
        </button>
      </form>
      <div className="text-center mt-8">
        <p className="text-sm">already have an account? <Link to={"/signin"} className=" items-center justify-center">Login</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Signup
