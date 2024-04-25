const db = require("./db");

module.exports = {
  getGradeScale: async (req, res) => {
    try {
      const result = await db.query(
        `SELECT
        *
      FROM grade_scale 
      ORDER BY
        id
      `
      );
      return result.rows;
    } catch (err) {
      Error(err);
    }
  },
};
