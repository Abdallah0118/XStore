import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card color="transparent" shadow={false}>
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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button
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

export default Signin;
