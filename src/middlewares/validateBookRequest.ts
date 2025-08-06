import { NextFunction, Request, Response } from "express";
import { ZodError, ZodType } from "zod";

const validateRequest = (schema: ZodType<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // retrieving only the error message instead of technical properties along
        const messages = error.issues.map((issue) => issue.message);
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          error: messages,
        });
      }
      return res.status(500).json({
        success: false,
        message: "Something went wrong during validation",
        error,
      });
    }
  };
};

export default validateRequest;
