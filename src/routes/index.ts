import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a hello message
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the person to greet
 *       - in: query
 *         name: age
 *         schema:
 *           type: integer
 *         required: false
 *         description: The age of the person
 *     responses:
 *       200:
 *         description: A hello message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/hello', (req: Request, res: Response) => {
    const name = req.query.name as string;
    const age = req.query.age as string;
    const message = age
    ? `Hello ${name}, you are ${age} years old!`
    : `Hello ${name}!`;
  res.json({ message });
});

export default router;

