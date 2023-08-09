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

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PWD_REGEX = /^[0-9]$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const body = {
        email: email,
        name: user,
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
      setUser("");
      setPwd("");
      setMatchPwd("");
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
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register. or back{" "}
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
              {/* name field  */}
              <Input
                name="name"
                className={!validName ? "bg-red-100" : ""}
                size="lg"
                label="Name"
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <InfoOutlinedIcon fontSize="small" />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              {/* name field  */}
            </div>
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
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <InfoOutlinedIcon fontSize="small" />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              {/* password field  */}
            </div>{" "}
            <div className="fieldHolder">
              {/* confirm password field  */}
              <Input
                // className={!validPwd ? "bg-red-100" : ""}
                type="password"
                size="lg"
                label="Confirm your password"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <InfoOutlinedIcon fontSize="small" />
                Must match the first password input field.
              </p>
              {/* confirm password field  */}
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
            disabled={!validName || !validPwd || !validEmail ? true : false}
            className="mt-6 font-medium w-full"
            style={{
              textTransform: "none",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
          >
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account ?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};
export default SignUp;
