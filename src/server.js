import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();

app.set("views", process.cwd() + "/src/views"); //defalut : /views
app.set("view engine", "Pug");

const logger = morgan("dev");
// morgan return Middleware
app.use(logger);

app.use(express.urlencoded({ extended: true })); // understand form's value

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
