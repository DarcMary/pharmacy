import express from "express";
import {
  getAluno,
  createAluno,
  updateAluno,
  deleteAluno
} from "../controllers/alunoControllers.js";

const router = express.Router();

router.get("/", getAluno);
router.post("/", createAluno);
router.put("/:id", updateAluno);
router.delete("/:id", deleteAluno);

export default router;
