import { NgModule } from '@angular/core';
import { TimeCounterPipe } from './time-counter/time-counter';
@NgModule({
	declarations: [TimeCounterPipe],
	imports: [],
	exports: [TimeCounterPipe]
})
export class PipesModule {}
