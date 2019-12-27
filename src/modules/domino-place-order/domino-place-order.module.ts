import { Module } from '@nestjs/common';
import { DominoPlaceOrderController } from './domino-place-order.controller';
import { PlaceOrderModule } from '../place-order/place-order.module';
import { DominoPlaceOrderService } from './domino-place-order.service';

@Module({
  imports: [PlaceOrderModule],
  controllers: [DominoPlaceOrderController],
  providers: [DominoPlaceOrderService],
})
export class DominoPlaceOrderModule {}
