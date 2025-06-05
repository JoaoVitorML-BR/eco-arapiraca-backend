class useCase {
    constructor(private readonly userRepository: any) {}
    
    async execute(userId: string): Promise<any> {
        const user = await this.userRepository.findById(userId);
        if (!user) {
        throw new Error('User not found');
        }
        return user;
    }

    // create user
    async createUser(userData: any): Promise<any> {
        console.log('Creating user with data:', userData);
        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Invalid user data');
        }  

        // checking if user already exists
        const existingUser = await this.userRepository.findByEmail(userData.email);
        console.log('Checking for existing user with email:', userData.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const newUser = await this.userRepository.create(userData);
        console.log('Created new user:', newUser);
        return newUser;
    }

    async updateUser(userId: string, updateData: any): Promise<any> {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const updatedUser = await this.userRepository.update(userId, updateData);
        return updatedUser;
    }
}

export { useCase };