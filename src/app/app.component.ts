import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Histórico de Transações', url: '/status', icon: 'folder-open' },
    { title: 'Contas Bancárias', url: '/contas', icon: 'cash' },
    { title: 'Comprar', url: '/comprar', icon: 'card' },
    { title: 'Vender', url: '/vender', icon: 'pricetag' },
    { title: 'Sair', url: '/login', icon: 'log-out' },
  ];
  constructor() {}
}
