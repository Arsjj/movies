import { useState } from "react";

import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";
import Block4 from "./components/Block4";
import Block5 from "./components/Block5";
import ContactUs from "./components/ContactUs";
import Questions from "./components/Questions";
import StartMembership from "./components/StartMembership";

import "./index.scss";

function Mainpage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [step, setStep] = useState("email");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === "password") {
    } else {
      setStep("password");
    }
  };

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="body">
      <section>
        <div className="cover">
          <div className="minCover">
            <Block1 />
            <StartMembership
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              values={values}
              step={step}
            />
          </div>
        </div>
      </section>
      <hr />
      <Block2 />
      <hr />
      <Block3 />
      <hr />
      <Block4 />
      <hr />
      <Block5 />
      <hr />
      <Questions />
      <StartMembership
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
        step={step}
      />
      <hr />
      <ContactUs />
    </div>
  );
}

export default Mainpage;
