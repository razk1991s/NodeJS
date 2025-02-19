const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");

const usersRouter = require("./routers/usersRouter");
const departmentRouter = require("./routers/departmentsRouter");
const employeeRouter = require("./routers/employeesRouter");
const shiftRouter = require("./routers/shiftsRouter");

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());

app.use(express.json());

app.use("/users", usersRouter);
app.use("/departments", departmentRouter);
app.use("/employees", employeeRouter);
app.use("/shifts", shiftRouter);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
