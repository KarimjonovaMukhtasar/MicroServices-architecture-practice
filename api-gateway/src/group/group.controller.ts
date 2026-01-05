import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";

@Controller()
export class GroupController{
    constructor(@Inject("GROUP_SERVER")  private groupClient: ClientProxy){}
    @Get('groups')
    getGroups() {
        return this.groupClient.send('group-get', "hello world!")
    }

}
