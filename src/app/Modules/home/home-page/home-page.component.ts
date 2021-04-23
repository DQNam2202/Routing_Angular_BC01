import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from 'src/app/_core/models/CourseViewModel';
import { CourseService } from 'src/app/_core/services/course.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  course: CourseViewModel[] = [];
  // Muốn lấy từ service về
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // //giống như componentDimouth
    // let observableCourses = this.courseService.layDanhSachKhoaHoc();
    // observableCourses.subscribe(
    //   (result) => {
    //     this.course = result;
    //   },
    //   (errors) => {
    //     console.log(errors.err);
    //   }
    // );
    this.layDanhSachKhoaHocApi();
  }

  layDanhSachKhoaHocApi = async () => {
    try {

      let result:any = await this.courseService.layDanhSachKhoaHoc().pipe().toPromise();
      this.course = result;
    } catch (errors) {
      console.log(errors)
    }
  };
}
