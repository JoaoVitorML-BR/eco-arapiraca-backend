import { IEcoPoint } from "../DTO/IEcoPoint";
import { ecoPointRepository } from "../Repository";

class EcoPointUseCase {
    constructor(private readonly ecoPointRepository: ecoPointRepository) { }

    async createEcoPoint(ecoData: Partial<IEcoPoint>): Promise<any> {
        console.log('Creating eco point with data:', ecoData);
        if (!ecoData.title || !ecoData.cnpj || !ecoData.opening_hours || !ecoData.interval || !ecoData.accepted_materials || !ecoData.address || !ecoData.coordinates) {
            throw new Error('Invalid eco point data');
        }

        const existingEcoPoint = await this.ecoPointRepository.findEcoPoint(ecoData.cnpj, ecoData.coordinates);
        console.log('Checking for existing eco point with CNPJ:', ecoData.cnpj);
        if (existingEcoPoint) {
            throw new Error('Eco point already exists');
        }

        const newEcoPoint = await this.ecoPointRepository.create(ecoData);
        console.log('Created new eco point:', newEcoPoint);
        return newEcoPoint;
    }
}

export { EcoPointUseCase };