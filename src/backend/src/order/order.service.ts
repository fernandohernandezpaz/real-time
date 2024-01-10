import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schema/order.schema';
import { OrderGateway } from './order.gateway';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private orderModel: Model<Order>,
    private orderGateway: OrderGateway,
  )
  {}
  async create(orderData: Order): Promise<Order> {
    const newOrder = await this.orderModel.create(orderData);
    await newOrder.save();
    this.orderGateway.notify('order-added', newOrder);
    return newOrder;
  }

  findAll(): Promise<Order[]> {
    return this.orderModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
