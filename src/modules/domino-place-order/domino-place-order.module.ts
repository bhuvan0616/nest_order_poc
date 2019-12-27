import { Module } from '@nestjs/common';
import { DominoPlaceOrderController } from './domino-place-order.controller';
import { PlaceOrderModule } from '../place-order/place-order.module';
import { PlaceOrderService } from '../place-order/place-order.service';

@Module({
  imports: [PlaceOrderModule],
  controllers: [DominoPlaceOrderController],
  providers: [PlaceOrderService],
})
export class DominoPlaceOrderModule {}
