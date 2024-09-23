import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { BuscaComponent } from "./busca.component";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        BuscaComponent,
        FiltrosComplementaresComponent,
        CompanhiasComponent,
        LabelComponent,
        ParadasComponent,
        PrecosComponent,
        PassagemComponent
    ],
    imports:[
        CommonModule,
        MaterialModule,
        SharedModule
    ],
    exports:[
        BuscaComponent,
        FiltrosComplementaresComponent,
        CompanhiasComponent,
        LabelComponent,
        ParadasComponent,
        PrecosComponent,
        PassagemComponent
    ]
})

export class BuscaModule {}