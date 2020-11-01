import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  // minhaPromise(nome: string): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     if (nome === 'Thiago') {
  //       setTimeout(() => {
  //         resolve(`Seja bem vindo ${nome}`);
  //       }, 5000);
  //     } else {
  //       reject('Ops');
  //     }
  //   });
  // }

  minhaObservable(nome: string): Observable<string>{
    return new Observable(subscriber => {
      if (nome === 'Thiago') {
        subscriber.next(`Olá ${nome}`);
        subscriber.next(`Olá de novo ${nome}`);
        subscriber.complete();
      } else {
        subscriber.error('Ops! Deu erro!');
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
    // this.minhaPromise('Thiago').then(result => console.log(result));

    this.minhaObservable('Thiago')
      .subscribe(
        result => console.log(result),
        erro => console.log(erro),
        () => console.log('FIM')
      );
  }

}
