import { NextFunction, Request, Response } from "express";

import { users } from "../db/users.db";

// interface IUser {
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
// }

class UserController {
  public async findAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      throw new Error("Error while getting users");
      // res.json(users);
    } catch (err) {
      res.json({
        message: err.message,
        status: 400,
      });
    }
  }

  public create(req: Request, res: Response) {
    const johnDoe = req.body;
    users.push(johnDoe);

    res.status(201).json({ message: "users created!" });
  }

  public async updateById(req: Request, res: Response) {
    const { id } = req.params;
    users[+id] = req.body;

    res.status(200).json({
      message: "users updated successfully!",
      data: users[+id],
    });
  }

  public async deleteById(req: Request, res: Response) {
    const { id } = req.params;
    users.splice(+id, 1);

    res.status(200).json({
      message: "users updated successfully!",
      data: users[+id],
    });
  }
}

export const userController = new UserController();
