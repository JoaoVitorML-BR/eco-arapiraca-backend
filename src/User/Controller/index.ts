class UserController{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string
    ) {}
    
    static fromDTO(dto: { id: string; name: string; email: string; password: string }): UserController {
        return new UserController(dto.id, dto.name, dto.email, dto.password);
    }
    
    toDTO(): { id: string; name: string; email: string; password: string } {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password
        };
    }
}

export { UserController };