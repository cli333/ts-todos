import express, { json, Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todoRoutes";
const app = express();

app.use(json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    throw new Error(err.message);
  } else {
    next();
  }
});

app.use("/todos", todoRoutes);

app.listen(5000, () => console.log(`Listening on port 5000`));
