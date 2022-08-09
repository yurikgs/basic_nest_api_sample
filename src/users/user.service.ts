/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { userDTO } from "./user.dto";

@Injectable()
export class UserService {


    findUser(id: number): string {
        return `Esse é o usuário de número ${id}`
    }

    createUser(user: userDTO) {
        
        return {
            message: "Usuário criado com sucesso!",
            newUser: user
        }
    }

    updateUser(user: userDTO, id: number) {

        return {
            message: `User number ${id} updated!`,
            updatedUser: user
        }
    }

    removeUser(id: number) {

        return `User number ${id} removed!`
    }
}