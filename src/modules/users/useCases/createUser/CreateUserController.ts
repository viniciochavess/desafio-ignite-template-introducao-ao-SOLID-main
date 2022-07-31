import { Response, Request, request, response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
      const { name, email} = request.body;
      
      
      try{
        const acc = this.createUserUseCase.execute({name,email});
        console.log(acc)
        return response.status(201).json(acc);
        
        
      } catch ( err) {
        return response.status(400).json({error: err.message})
      }
        

  }

}

export { CreateUserController };
