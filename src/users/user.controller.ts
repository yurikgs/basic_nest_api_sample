/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { userDTO } from "./user.dto";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {
    
    constructor(private userService: UserService){}
    @Get()
    usersTest() {
        return "users routes working!"
    }

    @Get("/:id")
    getUser(@Param("id") id){
        return this.userService.findUser(+id)
    }

    @Post()
    postUser(@Body() body: userDTO){
        return this.userService.createUser(body)
    }

    @Put("/:id")
    putUser(@Param("id") id, @Body() body: userDTO){
        
        return this.userService.updateUser(body, +id)
    }
    
    @Delete("/:id")
    deleteUser(@Param("id") id) {
        return this.userService.removeUser(+id)
    }

}