export class CourseViewModel{
    maKhoaHoc: string = '';
    tenKhoaHoc: string = '';
    moTa: string = '';
    luotXem:number = 0;
    maNhom:string = '';
    ngayTao: string = '';
    hinhAnh:string = '';
    soLuongHocVien:number = 0;
    nguoiTao:NguoiTao = new NguoiTao();
    danhMucKhoaHoc:DanhMucKhoaHoc = new DanhMucKhoaHoc();
}

class NguoiTao{
    taiKhoan:string;
    hoTen: string;
    maLoaiNguoiDung:string;
    tenLoaiNguoiDung:string;
}
class DanhMucKhoaHoc{
    maDanhMucKhoaHoc:string;
    tenDanhMucKhoaHoc:string;
}