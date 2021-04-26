import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // two_way_binding
  // userLogin:any = {taiKhoan:"",matKhuan:"",email:""}
  constructor(private userService: UserService, private router: Router) {
    // Router là đối tượng dùng để chuyển hướng trang sau khi xử lý
  }

  ngOnInit(): void {}
  dangNhap(frmValue: any){
    console.log("frmValue",frmValue);

    this.userService.login(frmValue).subscribe((result) =>{
      console.log('result', result);
      // Lưu thông tin khi đăng nhập thành công
      localStorage.setItem('userLogin', JSON.stringify(result));
      localStorage.setItem('accessToken', result.accessToken);

      // Chuyển hướng về trnag chủ
      alert('Đăng nhập thành công');
      this.router.navigate(['/home']);

      // Cập nhật service userLoginBehavior

      this.userService.setUserLogin(result);
    },err =>{
      alert(err.error);
      console.log("err",err);
    })
  };
}
