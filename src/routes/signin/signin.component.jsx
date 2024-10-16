import React from "react";
import {
  createUserProfileDocument,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/signup-form/signup-form.component";

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocument(user);
    console.log("🚀 ~ logGooglePopup ~ userDocRef:", userDocRef);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGooglePopupUser}>Sign in with google popup</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
