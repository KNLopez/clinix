import React from "react";
import { signInWithGoogle } from "../../../core/firebase/utils";

const SiginInPresenter: React.FC = () => (
  <button onClick={signInWithGoogle}>Login with Google</button>
);
export default SiginInPresenter;
