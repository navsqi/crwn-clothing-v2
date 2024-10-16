import React, { useState } from "react";
import {
  createUserProfileDocument,
  signIn,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./signin-form-styless.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleResetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signIn(email, password);
      handleResetForm();
      console.log("🚀 ~ handleSubmit ~ user:", user);
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("invalid email or password");
      } else {
        console.log("🚀 ~ handleSubmit ~ error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserProfileDocument(user);
    } catch (error) {
      console.log("🚀 ~ signInWithGoogle ~ error:", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
