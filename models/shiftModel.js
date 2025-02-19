const mongoose = require("mongoose");

const shiftSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      set: (value) => {
        const newDate = new Date(value);

        // Set the time to midnight (00:00:00) and handle the time zone
        newDate.setUTCHours(0, 0, 0, 0); // Use UTC hours to ensure the time is set to midnight UTC

        return newDate;
      },
    },
    startingHour: String,
    endingHour: Number,
  },
  { versionKey: false }
);

const shift = mongoose.model("shift", shiftSchema, "shifts");

module.exports = shift;
