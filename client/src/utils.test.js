import { getLetterGrade } from "./utils";

const gradeScale = [
  { level: "Level 5", min_mark: 80, max_mark: 100, grade: "A" },
  { level: "Level 5", min_mark: 70, max_mark: 79, grade: "B" },
  { level: "Level 5", min_mark: 60, max_mark: 69, grade: "C" },
  { level: "Level 5", min_mark: 50, max_mark: 59, grade: "D" },
  { level: "Level 5", min_mark: 0, max_mark: 49, grade: "F" },
];

describe("getLetterGrade", () => {
  test("Returns the correct grade for valid input", () => {
    const mark = 85;
    const level = "Level 5";
    const expectedGrade = "A";
    const result = getLetterGrade(gradeScale, mark, level);
    expect(result).toBe(expectedGrade);
  });

  test("Throws an error for mark out of range", () => {
    const mark = 110;
    const level = "Level 5";
    expect(() => getLetterGrade(gradeScale, mark, level)).toThrow(
      "Mark is out of range."
    );
  });

  test("Throws an error for negative mark", () => {
    const mark = -10;
    const level = "Level 5";
    expect(() => getLetterGrade(gradeScale, mark, level)).toThrow(
      "Mark is out of range."
    );
  });
});
