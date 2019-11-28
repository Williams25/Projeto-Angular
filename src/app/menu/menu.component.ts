import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public titulo: string = "Revolution";
  public inicio: String = "Inicio"
  public servico: String = "Serviços"
  public sobre: String = "Sobre"
  public contato: String = "Contato"
  public vagas: String = "Vagas"
  constructor() { }

  ngOnInit() {
  }

}
