import { Module } from '@nestjs/common';
import { TmtPlaceOrderController } from './tmt-place-order.controller';
import { PlaceOrderModule } from '../place-order/place-order.module';
import { TmtPlaceOrderService } from './tmt-place-order.service';

@Module({
  imports: [PlaceOrderModule],
  controllers: [TmtPlaceOrderController],
  providers: [TmtPlaceOrderService],
})
export class TmtPlaceOrderModule {}
