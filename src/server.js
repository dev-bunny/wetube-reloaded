import express from "express";
import morgan, { format } from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you can continue");
  next();
};
const handleHome = (req, res) => {
  //   return res.end(); // just end!
  return res.send("<h1>I still love you.</h1>");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

// morgan return Middleware
app.use(logger);

// app.use(logger); // always excute middleware, order is important! middleware -> handle
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
