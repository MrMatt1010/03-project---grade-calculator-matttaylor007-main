import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { getLetterGrade } from "../utils";
import "./GradeConverterForm.css";

const GradeConverterForm = ({ gradeScale }) => {
  const [level, setLevel] = useState("Level 5");
  const [mark, setMark] = useState(0);
  const [grade, setGrade] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(grade);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const letterGrade = getLetterGrade(gradeScale, mark, level);
      setGrade(letterGrade);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {grade && (
        <p>
          The grade for mark {mark} at {level} is {grade}.
        </p>
      )}
      <form className="mainForm" onSubmit={handleSubmit}>
        <label htmlFor="level">Level</label>
        <select
          className="mainFormSelect"
          id="level"
          value={level}
          onChange={(e) => {
            setGrade("");
            setLevel(e.target.value);
          }}>
          <option value="Level 5">Level 5</option>
          <option value="Level 6">Level 6</option>
        </select>
        <label htmlFor="mark">Mark</label>
        <input
          className="mainFormNumber"
          id="mark"
          type="number"
          value={mark}
          onChange={(e) => {
            setGrade("");
            setMark(Number(e.target.value));
          }}
        />
        <button className="mainFormButton">Get Grade</button>
      </form>
    </>
  );
};

export default GradeConverterForm;
