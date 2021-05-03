import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModel';
import { CourseService } from 'src/app/_core/services/course.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  // Luôn tạo ra giá trị mặc định
  id: string = '';
  khoaHoc: CourseViewModel = new CourseViewModel();
  // Đối tượng Route dùng để lấy tham số trên URL xuống
  constructor(
    private atvRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  dangKyKhoaHoc(khoaHoc){
    let userLogin = JSON.parse(localStorage.getItem('userLogin'))
    let objectAPI = {
      "maKhoaHoc": khoaHoc.maKhoaHoc,
      "taiKhoan": userLogin.taiKhoan
    }

    this.courseService.dangKyKhoaHoc(objectAPI).subscribe(result => {
      console.log("result",result);
    },err =>{
      console.log(err)
    })
  }

  ngOnInit(): void {
    // this.atvRoute.params.subscribe((params) => {
    //   console.log(params);
    //   this.id = params.id;
    //   // Lấy giá trị tham số sau đó dùng tham số gọi API
    //   this.courseService.layChiTietKhoaHoc(this.id).subscribe((result) => {
    //     console.log("result: ",result);
    //     this.khoaHoc = result;
    //   },err => console.log(err));
    // });
    this.layChiTietKhoaHoc();
  }

  layChiTietKhoaHoc = async () => {
    try {
      // Lấy tham số từ URL
      const params: any = await this.atvRoute.params.pipe();
      console.log('params: ', params.value.id);
      //  Gọi Server
      const result: any = await this.courseService
        .layChiTietKhoaHoc(params.value.id)
        .pipe()
        .toPromise();
      console.log(result);
      this.khoaHoc = result;
    } catch (error) {
      console.log('error', error);
    }
  };
}
