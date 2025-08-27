import { Request, Response } from 'express';
import User from '../../models/User';
import Post from '../../models/Post';

const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body;

    const user = await User.findById(userId);
    if (!user){
        return res.status(404).json({
            message: "User not found"
        });
    }

    const post = new Post({ title, content, author: user._id });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

export default {createPost};