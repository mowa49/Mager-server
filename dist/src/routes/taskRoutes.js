"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.default)();
router.get("/", taskController_1.getTasks);
router.post("/", taskController_1.createTask);
router.patch("/:taskId/status", taskController_1.updateTaskStatus);
exports.default = router;
