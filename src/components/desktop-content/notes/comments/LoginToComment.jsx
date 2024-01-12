import React from "react";
// Image
import googleLogo from "../../../../assets/logo/google.png";
// Colors
import { colors } from "../../../../colors";
// Text
import text from "../../../../text/notes.json";
// Language Provider
import { useLanguage } from "../../../../providers/LanguageProvider";

// Google
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../../../../firebase";

async function signWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();

    // additional things that can be done https://firebase.google.com/docs/auth/web/google-signin

    const res = await signInWithPopup(auth, provider);
    const user = res.user;

    return { ok: true, data: user, success: "Google Signin Success" };
  } catch (err) {
    console.log(err);
    return { ok: false, error: err };
  }
}

const LoginToComment = () => {
  const { language } = useLanguage();
  const bgImage = {
    backgroundImage: `url('${googleLogo}')`,
    backgroundSize: "cover",
  };

  const handleLogin = async () => {
    await signWithGoogle();
  };

  const bgContainer = { backgroundColor: colors.notesCommentsBg };
  return (
    <div className="w-full pt-4 flex  flex-col">
      <div
        style={bgContainer}
        onClick={handleLogin}
        className="h-10 w-max flex cursor-pointer items-center justify-start gap-4 pl-2 pr-4 rounded-full"
      >
        <div style={bgImage} className="h-6 w-6"></div>
        <p className="font-bold">{text.loginToComment[language]}</p>
      </div>
    </div>
  );
};

export default LoginToComment;
