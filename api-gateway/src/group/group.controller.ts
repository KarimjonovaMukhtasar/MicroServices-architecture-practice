import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";

@Controller()
export class GroupController{
    constructor(@Inject("GROUP_SERVER")  private groupClient: ClientProxy){}
    @Get('groups')
    getGroups() {
        return this.groupClient.send('group-get', "hello from group server")
    }

    @Post('groups')
    createGroup(@Body() payload: {name: string, startDate: string, endDate: string}) {
        return this.groupClient.send('group-create', payload)
    }
}
