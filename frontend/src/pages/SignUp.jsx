import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const inputId = useRef();
  const inputPw = useRef();

  const handleSignUp = (event) => {
    event.preventDefault();

    if (
      inputId.current.value === "" ||
      inputPw.current.value === ""
    ) {
      alert("모두 입력해주세요.");
      return;
    }

    axios
      .post("/api/join", {
        loginId: inputId.current.value,
        password: inputPw.current.value,
      })
      .then((res) => {
        alert("회원가입이 완료되었습니다.");
        console.log(res.data);
        navigate("/login");
      })
      .catch(() => {
        console.log("loginId -> " + inputId.current.value);
        console.log("password -> " + inputPw.current.value);

        alert("이미 존재하는 아이디입니다.");
      });
  };

  return (
    <>
      <h1 className="text-primary text-xl font-semibold text-center transition-all duration-200 md:text-3xl">
        <span className="text-base-content">Sign Up</span>
      </h1>
      <form className="space-y-4" onSubmit={handleSignUp}>
        <div>
          <label className="label">
            <span className="label-text text-base">ID</span>
          </label>
          <input
            type="id"
            placeholder="Enter ID"
            className="w-full input input-bordered"
            ref={inputId}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text text-base">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered"
            ref={inputPw}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            Already have an account?
            <Link
              to="/login"
              className="text-gray-600 hover:underline hover:text-blue-600"
            >
              Login
            </Link>
          </div>
          <button type="submit" className="btn btn-block">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
