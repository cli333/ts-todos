"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const app = express_1.default();
app.use(express_1.json());
app.use((err, req, res, next) => {
    if (err) {
        throw new Error(err.message);
    }
    else {
        next();
    }
});
app.use("/todos", todoRoutes_1.default);
app.listen(5000, () => console.log(`Listening on port 5000`));
