import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    console.log(user_id)


    const AlwaredExist = this.usersRepository.findById(user_id);
  
    if(!AlwaredExist || !AlwaredExist.admin){
      throw new Error("User not is Admin")
    }
    const all = this.usersRepository.list();
    
    return all;
     
    
  }
}

export { ListAllUsersUseCase };
