import { Request, Response } from 'express';
import { EcoPointController } from '.';
import { EcoPointUseCase } from '../UseCase';
import { ecoPointRepository } from '../Repository';
import { Eco as EcoModels } from '../Models/index';

const ecoRepo = new ecoPointRepository(EcoModels);
const ecoUseCase = new EcoPointUseCase(ecoRepo);

class EcoPointHttpController {
    async create(req: Request, res: Response): Promise<any> {
        try {
            const ecoDTO = req.body;
            const ecoEntity = EcoPointController.fromDTO(ecoDTO);
            const createEco = await ecoUseCase.createEcoPoint(ecoEntity);
            res.status(201).json(createEco);
        } catch (error) {
            console.error('Error posting data:', error);
            res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
        }
    }
}

export { EcoPointHttpController };