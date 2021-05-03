import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  // khi run chương trình sẽ có chỗ cấp phát
  constructor(private http: HttpClient) {}

  khoaHocChiTietState = new BehaviorSubject({
    tenKhoaHoc: 'default',
    hinhAnh: 'https://picsum.photos/200',
  });

  // Lấy data
  dataKhoaHocChiTiet = this.khoaHocChiTietState.asObservable();
  // Dependency injection (DI)
  layDanhSachKhoaHoc(): Observable<any> {
    let result: Observable<any> = this.http.get(
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`
    );
    return result;
  }
  layChiTietKhoaHoc(maKhoaHoc: string): Observable<any> {
    let result: Observable<any> = this.http.get(
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
    return result;
  }
  dangKyKhoaHoc(thongTinDangKy) {
    let result: Observable<any> = this.http.post(
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      thongTinDangKy
    );
    return result;
  }
}
