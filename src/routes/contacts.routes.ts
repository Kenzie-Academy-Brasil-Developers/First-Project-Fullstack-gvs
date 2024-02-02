import express, { Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { dataIsValidMiddleware } from "../middlewares/dataIsValid.middleware";
import {
  contactCreateSchema,
  contactUpdateSchema,
} from "../schemas/contact.schema";
import { contactController } from "../controllers";
import { contactOwnerMiddleware } from "../middlewares/contactOwner.middleware";

export const contactsRouter: Router = express.Router();
contactsRouter.use(authMiddleware);
contactsRouter.post(
  "",
  dataIsValidMiddleware(contactCreateSchema),
  (req, res) => contactController.create(req, res)
);
contactsRouter.get("/:id", (req, res) => contactController.list(req, res));
contactsRouter.patch(
  "/:id",
  contactOwnerMiddleware,
  dataIsValidMiddleware(contactUpdateSchema),
  (req, res) => contactController.update(req, res)
);
contactsRouter.delete("/:id", contactOwnerMiddleware, (req, res) =>
  contactController.remove(req, res)
);
