class ecoPointRepository {
    constructor(private readonly db: any) {}

    async create(ecoData: any) {
        console.log('Creating eco point with data:', ecoData);
        const eco = new this.db(ecoData);
        return eco.save();
    }

    async findEcoPoint(cnpj: string, coordinates: any) {
        console.log('Finding eco point with CNPJ:', cnpj, 'and coordinates:', coordinates);
        return this.db.findOne({ cnpj, coordinates });
    }
}

export { ecoPointRepository };