import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

interface userLogin {
  taiKhoan: string;
  matKhau: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // Giá trĩ trong {} là mặc định
  private stateUser = new BehaviorSubject({taiKhoan:"",matKhau:""}) 

  // Đối tượng dùng để lấy data từ biến Behavior
  dataUser = this.stateUser.asObservable();

  setUserLogin(newUserLogin){
    this.stateUser.next(newUserLogin);
  }

  // Khi ứng dụng chạy nó sẽ tự cấp phát
  constructor(private http: HttpClient) {} // injection DI
  login(userLogin: userLogin): Observable<any> {
    let result: Observable<any> = this.http.post(
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      userLogin
    );
    return result;
  }
}
