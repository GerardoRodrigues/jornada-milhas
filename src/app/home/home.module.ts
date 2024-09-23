import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        SharedModule
    ],
    exports:[
        HomeComponent
    ]
})

export class HomeModule {}