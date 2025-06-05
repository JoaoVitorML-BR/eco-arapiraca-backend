class userRepository {
    constructor(private readonly db: any) {}

    async findById(userId: string): Promise<any> {
        return this.db.findById(userId);
    }

    async findByEmail(email: string): Promise<any> {
        return this.db.findOne({ email });
    }

    async create(userData: any): Promise<any> {
        const user = new this.db(userData);
        return user.save();
    }
}

export { userRepository };