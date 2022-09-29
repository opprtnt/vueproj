const express = require("express");
const tableRouter = require("./routes/table.routes");

const PORT = process.env.PORT || 8081;

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", tableRouter);

app.listen(PORT, () => console.log(`server ${PORT}`));
