import { Component, OnDestroy, OnInit} from '@angular/core';
import { CourseService } from 'src/app/_core/services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  khoaHocChiTiet: any = {};

  subModel: Subscription;

  constructor(private khoaHocService: CourseService) {}

  ngOnInit(): void {
    this.khoaHocService.dataKhoaHocChiTiet.subscribe(
      (result) => {
        this.khoaHocChiTiet = result;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnDestroy(): void {
    if (this.subModel) {
      this.subModel.unsubscribe();
    }
  }
}
