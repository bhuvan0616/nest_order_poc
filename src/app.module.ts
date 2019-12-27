import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TmtPlaceOrderModule } from './modules/tmt-place-order/tmt-place-order.module';
import { DominoPlaceOrderModule } from './modules/domino-place-order/domino-place-order.module';

@Module({
  imports: [TmtPlaceOrderModule, DominoPlaceOrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
