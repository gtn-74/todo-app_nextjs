import { setupServer } from "msw/node";
import { handlers } from "./handlers";

console.log('serve側')
export const server = setupServer(...handlers);
// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// app.use(cors({ origin: "http//localhost:3000", credentials: true }));

// app.use(express.static("public"));

// const sundaeOptionsRaw = fs.readFilsSync("./sundae-options.json", "utf-8");
// const sundaeOptions = JSON.parse(sundaeOptionsRaw)

// app.get("")