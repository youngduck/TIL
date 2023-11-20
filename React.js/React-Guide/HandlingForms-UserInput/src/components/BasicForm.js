import useMyInput from "../hooks/useMyInput";

const BasicForm = (props) => {
  const {
    enteredValue: firstNameValue,
    valueIsValid: firstValueIsValid,
    hasError: firstHasError,
    valueChangeHandler: firstValueChangeHandler,
    valueBlurHandler: firstValubeBlurHandler,
    reset: firstReset,
  } = useMyInput((value) => value.trim() !== "");

  const {
    enteredValue: lastNameValue,
    valueIsValid: lastValueIsValid,
    hasError: lastHasError,
    valueChangeHandler: lastValueChangeHandler,
    valueBlurHandler: lastValubeBlurHandler,
    reset: lastReset,
  } = useMyInput((value) => value.trim() !== "");

  const {
    enteredValue: emailNameValue,
    valueIsValid: emailValueIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    valueBlurHandler: emailValubeBlurHandler,
    reset: emailReset,
  } = useMyInput((value) => value.includes("@"));

  let formIsValid = false;
  if (firstValueIsValid && lastValueIsValid && emailValueIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefaut();

    firstReset();
    lastReset();
    emailReset();
  };

  const firstInputClasses = firstHasError
    ? "form-control invalid"
    : "form-control";

  const lastInputClasses = lastHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstValueChangeHandler}
            onBlur={firstValubeBlurHandler}
            value={firstNameValue}
          />
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Lastt Name</label>
          <input
            type="text"
            id="name"
            onChange={lastValueChangeHandler}
            onBlur={lastValubeBlurHandler}
            value={lastNameValue}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailValueChangeHandler}
          onBlur={emailValubeBlurHandler}
          value={emailNameValue}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
