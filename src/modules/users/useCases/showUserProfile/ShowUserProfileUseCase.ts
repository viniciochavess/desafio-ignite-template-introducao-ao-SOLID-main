import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {

        const AlwaredExist = this.usersRepository.findById(user_id);

        if(!AlwaredExist){
         
          throw new Error("User not exist")
        }
        
       return AlwaredExist;
  }
}

export { ShowUserProfileUseCase };
