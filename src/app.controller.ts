import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import type { module_data, module_order } from './interface';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getOrders(): number[] {
  //   console.log("getOrders")
  //   return this.appService.getOrders();
  // }

  // @Post('create')
  // newOrder(@Body() order_data: module_order): module_order {
  //   try {
  //     this.appService.newOrder(order_data);
  //     return order_data;
  //   }
  //   catch(error) {
  //     throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
  //   }
    
  // }

  // @Post('update')
  // updateOrder(@Body() order_data: module_order): module_order {
  //   try{
  //     let value = this.appService.updateOrder(order_data);
  //     return value;
  //   }
  //   catch(error) {
  //     throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
  //   }
  // }

  // @Post('delete')
  // deleteOrder(@Body() id: number): module_order {
  //   try{
  //     let value = this.appService.deleteOrder(id);
  //     return value;
  //   }
  //   catch(error) {
  //     throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
  //   }
  // }

  // @Post('get_order_by_id')
  // getOrder_by_id(@Body() id: number): module_order {
  //   try{
  //     let value = this.appService.getOrder_by_id(id);
  //     return value;
  //   }
  //   catch(error) {
  //     throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
  //   }
  // }
}
