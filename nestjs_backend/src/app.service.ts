import { Injectable } from '@nestjs/common';
import { init_module_order, module_order } from './interface';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  // newOrder(order: module_order) 
  // {
  //   // check order and create mongo db entry
  // }

  // updateOrder(order: module_order): module_order
  // {
  //   // update existing order
  //   return order
  // }

  // deleteOrder(id: number): module_order
  // {
  //   // delete order by ID
  //   let order_to_delete = this.getOrder_by_id(id);

  //   return order_to_delete

  // }
  // getOrder_by_id(id: number): module_order
  // {
  //   // get single Order by ID
  //   return init_module_order()
  // }
  // getOrders(): number[]
  // {
  //   // returns a list of order IDs
  //   let orderID = []

  //   return orderID as number[]

  // }
  
}
