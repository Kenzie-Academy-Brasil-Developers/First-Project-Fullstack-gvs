import express, { Request, Response, Router } from "express";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import { clientCreateSchema } from "../schemas/client.schema";
import { clientController } from "../controllers";
import { clientOwnerMiddleware } from "../middlewares/clientIsOwner.middleware";
import { authMiddleware } from "../middlewares/auth.middleware";

export const clientsRouter: Router = express.Router();

clientsRouter.post(
  "",
  dataIsValidMiddleware(clientCreateSchema),
  (req: Request, res: Response) => clientController.create(req, res)
);

clientsRouter.get('/:id', (req : Request, res: Response) => clientController.list(req,res) )
clientsRouter.patch(
    '/:id', authMiddleware, clientOwnerMiddleware, 
    (req : Request, res: Response)   => clientController.update(req, res)
)
clientsRouter.delete('/:id',  authMiddleware ,clientOwnerMiddleware, (req, res) => clientController.delete(req, res))