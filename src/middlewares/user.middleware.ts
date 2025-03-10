import { NextFunction, Request, Response } from "express";

import { users } from "../db/users.db";

class UserMiddleware {
  public async findByIdOrThrow(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const user = users[+id];

      if (!user) {
        throw new Error("User not found");
      }

      next();
    } catch (err) {
      res.json({
        message: err.message,
        status: 400,
      });
    }
  }
}

export const userMiddleware = new UserMiddleware();
