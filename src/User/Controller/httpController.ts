import { Request, Response } from 'express';
import { useCase } from '../UseCase';
import { userRepository } from '../Repository';
import { UserController } from './index';
import { User as UserModel } from '../Models/index';

const userRepo = new userRepository(UserModel);
const userUseCase = new useCase(userRepo);

export class UserHttpController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const userDTO = req.body;
      const userEntity = UserController.fromDTO(userDTO);
      const createdUser = await userUseCase.createUser(userEntity);
      res.status(201).json(createdUser);
    } catch (error: any) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      console.log(`Updating user with ID: ${userId}`);
      const updateData = req.body;
      console.log('Update data:', updateData);
      const updatedUser = await userUseCase.updateUser(userId, updateData);
      res.status(200).json(updatedUser);
    } catch (error: any) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }
}