import "./index.scss";

/**
 *
 * @param {{handleChange, handleSubmit: () => void, values: {email: string, password: string}}}
 * @returns
 */
function StartMembership({ handleChange, handleSubmit, values, step }) {
  return (
    <div className="formContainer">
      <p className="text2">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            className={"field"}
            type={step}
            name={step}
            value={values[step]}
            placeholder={step === "email" ? "E-mail addres" : "Password"}
            onChange={handleChange}
          />
          <button className="submit" type="submit">
            {step === "email" ? "Get Started" : "Start"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StartMembership;
