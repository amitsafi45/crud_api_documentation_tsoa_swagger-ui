"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const router = express_1.default.Router();
router.post('/add', userController_1.default.add);
router.get('/show', userController_1.default.show);
router.patch('/update/:id', userController_1.default.update);
router.delete('/delete/:id', userController_1.default.delete);
router.get('/find/:id', userController_1.default.find);
exports.default = router;
