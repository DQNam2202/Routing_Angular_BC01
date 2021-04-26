import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userLogin: any = {};

  constructor(private userService: UserService) {}

  async ngOnInit() {
    // Lấy giá trị từ service về component
    // Cách lấy bằng async await

    const result: any = await this.userService.dataUser.pipe();
    this.userLogin = result.source.value;
    console.log('userLogin', this.userLogin);
  }
  // Cách 2
  // this.userService.dataUser.subscribe(result => {
  //   console.log(result);
  // this.userLogin = result
  // },err => console.log(err));
}
