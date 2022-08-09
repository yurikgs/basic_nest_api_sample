/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
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
    getUser(@Param('id') id){
        return this.userService.findUser(+id)
    }

    @Post()
    postUser(@Body() body: userDTO){
        return this.userService.createUser(body)
    }

    @Put()
    putUser(@Body() body: userDTO){
        return this.userService.updateUser(body)
    }

}