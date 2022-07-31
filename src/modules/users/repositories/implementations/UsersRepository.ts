import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
          const user = new User();
          Object.assign(user,{
            name,
            email,
            created_at: new Date(),
            updated_at: new Date()
            

          })

        this.users.push(user);
       
        return user;
  }

  findById(id: string): User | undefined {
    
          const AlwaredExist = this.users.find((acc)=>{return acc.id == id})
          return AlwaredExist;
  }

  findByEmail(email: string): User | undefined {
    
    const AlwaredExist = this.users.find((acc)=>{return acc.email == email})
    return AlwaredExist;
  }

  turnAdmin(receivedUser: User): User {

      const indexUser = this.users.findIndex(acc => acc.id === receivedUser.id)
     

      Object.assign(receivedUser,{
        admin: true,
        updated_at: new Date()
      })
   
      const user = {...this.users[indexUser],...receivedUser}
     
      return user;
    
       
        
    
  }

  list(): User[] {
   return this.users;
  }
}

export { UsersRepository };
