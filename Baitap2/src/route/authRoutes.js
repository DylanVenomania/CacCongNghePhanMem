import express from 'express';
import { registerLimiter } from '../middlewares/rateLimit.js'; // Bắt buộc có .js
import { validateRegister } from '../middlewares/validation.js';

const router = express.Router();

// Route Đăng ký áp dụng Rate Limit (Lớp bảo mật 2)
router.post('/register', registerLimiter, (req, res) => {
    res.json({ message: "Request đã vượt qua lớp bảo mật Rate Limit!" });
});

export default router;