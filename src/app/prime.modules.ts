import { NgModule} from '@angular/core';
import { ButtonModule}  from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {CarouselModule} from 'primeng/carousel';
import {SidebarModule} from 'primeng/sidebar';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import {TooltipModule} from 'primeng/tooltip';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';





@NgModule({
    imports: [
       ButtonModule,
       InputTextModule,
       MenubarModule,
       FieldsetModule,
       CarouselModule,
       SidebarModule,
       CardModule,
       TableModule,
       RatingModule,
       DialogModule,
       TooltipModule,
       InputSwitchModule,
       ToastModule
       

    ],
    exports: [
       ButtonModule,
       InputTextModule,
       MenubarModule,
       FieldsetModule,
       CarouselModule,
       SidebarModule,
       CardModule,
       TableModule,
       RatingModule,
       DialogModule,
       TooltipModule,
       InputSwitchModule,
       ToastModule
    ],
    providers: [MessageService]
})

export class PrimeModules {}