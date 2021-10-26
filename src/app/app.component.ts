import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgeevDmitryMinsk';


  // ngOnInit(): void {
  //   console.log(this.title);
  // }

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor(private dialog: MatDialog, private overlay: OverlayContainer) { }

  public person_account() {
    alert(`переход в режим работы с аккаунтом`);
  }

  public me() {
    alert(`+375 29 616 40 88`);
  }

  public shopping_cart() {
    alert(`Ваша корзина покупок`);
  }


  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }
}
