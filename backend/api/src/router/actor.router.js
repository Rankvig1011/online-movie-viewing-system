import express from "express";
import actorController from "../controller/actor.controller.js";
import middleware from "../middleware/index.js";

const router = express.Router();

router.get("/", actorController.find);
router.get("/:id", actorController.findById);
// router.use(middleware.authenticate);
// router.use(middleware.authorizeForAdmin);
router.post("/", actorController.create);
router.patch("/:id", actorController.update);
router.delete("/:id", actorController.delete);

export const actorRouter = router;
