import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stringVariable = 'lorem ipsum';
  public stringVariableTwo = 'LOREM IPSUM';
  public birthday = Date.now();
  public jsonObject = {
    key: 'value'
  };
  public kebabCaseVariable = 'lorem-ipsum-dolor-sit-amen';
  // lorem-ipsum-dolor-sit-amen => lorem_ipsum_dolor_sit_amen
  public users: string[] = ['Mateusz Stanczak', 'Adam Kowalski', 'Adam Mickiewicz'];
  public isAuth = true;
  toggleIsAuth() {
    this.isAuth = !this.isAuth;
  }
}
