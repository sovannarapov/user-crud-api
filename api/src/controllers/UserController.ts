import { UserService } from '../services/UserService'
import { JsonController, Get } from 'routing-controllers'
import { Response } from './responses/Response'

@JsonController('/users')
export class UserController {
  constructor(private service: UserService) {
    this.service = new UserService();
  }

  @Get()
  public async getUsers(): Promise<any> {
    const data = await this.service.getUsers();
    console.info('data >>>', data)

    return new Response(data, 'Request successful!');
  }

//   @Get('/:id')
//   public async getUser(@Param('id') id: string): Promise<Response<User>> {
//     const data = await this.service.getUser(id);

//     return new Response(data, 'Request successful!');
//   }

//   @Post()
//   public async createUser(@Body() user: User): Promise<Response<User>> {
//     const data = await this.service.createUser(user);

//     return new Response(data, 'Request successful!');
//   }

//   @Put('/:id')
//   public async updateUser(@Body() user: User): Promise<Response<User>> {
//     const data = await this.service.updateUser(user);

//     return new Response(data, 'Request successful!');
//   }
}
