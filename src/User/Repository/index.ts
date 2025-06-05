class userRepository {
    constructor(private readonly db: any) {}

    async findById(userId: string): Promise<any> {
        return this.db.findOne({ id: userId });
    }

    async findByEmail(email: string): Promise<any> {
        return this.db.findOne({ email });
    }

    async create(userData: any): Promise<any> {
        const user = new this.db(userData);
        return user.save();
    }

    async update(userId: string, updateData: any): Promise<any> {
        return this.db.findOneAndUpdate({ id: userId }, updateData, { new: true, runValidators: true });
    }
}

export { userRepository };