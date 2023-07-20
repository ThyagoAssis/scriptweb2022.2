import { Component, Input } from "@angular/core";

//Decorator - Determina a função da classe
@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent{

    //Atributos
    //@Input() - Usando o inbound-porperty - Ele permite que um componente passe dados um para outro
    @Input()  imagen = "";

}