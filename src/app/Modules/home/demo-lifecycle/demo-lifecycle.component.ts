import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle',
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.css'],
})

// Khi nào cần thì mình implement thằng đó thôi
export class DemoLifecycleComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() title: string = 'default';

  timeOut: any = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange', changes);
  }

  // Thực thi sau khi giao diện được khởi tạo
  ngOnInit(): void {
    setInterval(() => {
      console.log(1);
    }, 1000);

    //  Giống ComponentDidmount
    console.log('onInit');
  }

  ngAfterViewInit(): void {
    // Sau khi giao diện và các thuộc tính đã render xong => sau khi binding xong luôn
    console.log('AfterViewInit');
  }
  ngOnDestroy(): void {
    clearInterval(this.timeOut);
    // Thực thi trước khi component mất khỏi giao diện
    // Giống Component will Unmount
    // Hàm tối ưu trong Angular
    console.log('destroy');
  }
}
