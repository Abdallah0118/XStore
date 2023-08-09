import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "./css/regestration.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUp = () => {
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: email,
        password: pwd,
      };
      const response = await fetch("http://127.0.0.1:8000/account/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      if (success) {
        window.location.replace("/signin");
      }
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      id="registForm"
    >
      <Card color="transparent" className="p-5 shadow-lg">
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to sign in. or back{" "}
          <Link
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            to="/"
          >
            Home
          </Link>
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="fieldHolder">
              {" "}
              {/* mail field  */}
              <Input
                className={!validEmail ? "bg-red-100" : ""}
                name="email"
                size="lg"
                label="Email"
                type="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                <InfoOutlinedIcon fontSize="small" />
                Enter a valid email address
              </p>
              {/* mail field  */}
            </div>
            <div className="fieldHolder">
              {/* password field  */}
              <Input
                // className={!validPwd ? "bg-red-100" : ""}
                type="password"
                name="password"
                size="lg"
                label="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              {/* password field  */}
            </div>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <Link
                  to="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            disabled={!validEmail || pwd.length <= 8 ? true : false}
            className="mt-6 font-medium w-full"
            style={{
              textTransform: "none",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
          >
            Sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
export default SignUp;
