import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { UserService, User } from '../../services/user.service';

const title = 'Car Sell Report';
const header = ["Year", "Month", "Make", "Model", "Quantity", "Pct"]
const data = [
  [2007, 1, "Volkswagen ", "Volkswagen Passat", 1267, 10],
  [2007, 1, "Toyota ", "Toyota Rav4", 819, 6.5],
  [2007, 1, "Toyota ", "Toyota Avensis", 787, 6.2],
  [2007, 1, "Volkswagen ", "Volkswagen Golf", 720, 5.7],
  [2007, 1, "Toyota ", "Toyota Corolla", 691, 5.4],
];

@Component({
  selector: 'ng6-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService,
    private excelService: ExcelService) { }

  ngOnInit() {
    this.userService.findUser().subscribe(users => {
      this.users = users;
    });
  }

  export() {
    const values = this.users.map(u => Object.values(u));
    this.excelService.export(title, header, values);
  }

}
