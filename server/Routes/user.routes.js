import express from "express";
import { checkUser } from "../Controllers/user.controller.js";

const router = express.Router();

router.route("/").post(checkUser);

export default router;