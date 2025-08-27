import { Request, Response } from 'express';
import User from '../../models/User';

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, isActive } = req.body;
    const user = new User({
        name,
        lastName,
        isActive,
        email
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
        message: "Error creating user", error
    });
  }
};

export default {createUser};
