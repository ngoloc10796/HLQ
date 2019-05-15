/**
 * Định nghĩa ngôn ngữ
 * Định nghĩa bằng 2 cách: 
 * Cách 1: [từ khóa, tiếng việt, tiếng anh]
 * Cách 2: [tiếng việt, tiếng anh]
 */
App_Dictionary = [
  ['key', 'vi', 'en'],
  // ['vi', 'en'],

  //common_text
  ['c_home', 'Trang chủ', 'Home'],
  ['c_homeAdmin', 'Trang chủ quản trị', 'Home'],
  ['c_create', 'Thêm mới', 'Add New'],
  ['c_list', 'Danh sách', 'List'],
  ['c_update', 'Cập nhật', 'Update'],
  ['c_delete', 'Xóa', 'Delete'],
  ['c_detail', 'Chi tiết', 'Detail'],
  ['c_view', 'Xem', 'view'],
  ['c_close', 'Đóng', 'Close'],
  ['c_search', 'Tìm kiếm', 'Search'],
  ['c_filter', 'Lọc dữ liệu', 'Filter'],
  ['c_back', 'Quay lại', 'Back'],
  ['c_success', 'thành công', ''],
  ['c_error', 'không thành công', ''],
  ['c_record', 'bản ghi', ''],
  ['c_fromDate', 'Từ ngày', ''],
  ['c_toDate', 'Đến ngày', ''],
  ['c_order', 'Xắp xếp', ''],
  ['c_drag', 'Kéo thả', ''],
  ['c_select', 'Chọn', ''],

  //common_alert 
  ['c_addSuccess', 'Thêm mới thành công', 'Add new success'],
  ['c_addError', 'Thêm mới không thành công', ''],
  ['c_updateSuccess', 'Cập nhật thành công', ''],
  ['c_updateError', 'Cập nhật không thành công', ''],
  ['c_deleteSuccess', 'Xóa thành công', ''],
  ['c_deleteError', 'Xóa không thành công', ''],
  ['c_deleteConfirm', 'Bạn có chắc chắn xóa bản ghi này không?', ''],
  ['c_notAllowAccess', 'Không có quyền truy cập trang này', ''],
  ['c_emptyRecord', 'Bạn chưa chọn bản ghi nào', ''],
  ['c_loginAgain', 'Bạn cần đăng nhập trước', ''],

  //validation
  ['valid', 'Được phép', ''],
  ['valid_required', 'Vui lòng nhập giá trị', ''],
  ['valid_email', 'Email không đúng định dạng', ''],
  ['valid_phone', 'Số điện thoại không đúng định dạng', ''],
  ['valid_link', 'Liên kết không đúng định dạng', ''],
  ['valid_imageLink', 'Liên kết ảnh không đúng định dạng', ''],
  ['valid_sign', 'Không được nhập ký tự có dấu', ''],
  ['valid_space', 'Không được nhập ký tự trắng', ''],
  ['valid_script', 'Không được nhập ký tự đặc biệt', ''],
  ['valid_az09', 'Chỉ được nhập từ a đến z, từ 0 đến 9', ''],
  ['valid_textFirst', 'Ký tự đầu tiên phải là chữ', ''],
  ['valid_dateTime', 'Ngày giờ không đúng định dạng', ''],
  ['valid_date', 'Ngày không đúng định dạng', ''],
  ['valid_year', 'Năm không đúng định dạng', ''],
  ['valid_month', 'Tháng không đúng định dạng', ''],
  ['valid_int', 'Phải là số nguyên', ''],
  ['valid_float', 'Phải là số nguyên hoặc số thập phân', ''],
  ['valid_tuNgay', 'Từ ngày phải nhỏ hơn hoặc bằng đến ngày', ''],
  ['valid_denNgay', 'Đến ngày phải lớn hơn hoặc bằng từ ngày', ''],
  ['valid_upload', 'Vui lòng chọn file', ''],
  ['valid_file', 'file', ''],
  ['valid_character', 'ký tự', ''],
  ['valid_max', 'Không được lớn hơn', ''],
  ['valid_min', 'Không được nhỏ hơn', ''],
  ['valid_length', 'Giá trị nhập phải là', ''],
  ['valid_requiredUpload', 'Vui lòng chọn', ''],

  //login
  ['login', 'Đăng nhập', 'Login'],
  ['login_loginFalse', 'Tài khoản hoặc mật khẩu không đúng', ''],
  ['login_account', 'Tên đăng nhập', ''],
  ['login_password', 'Mật khẩu', ''],
  ['login_remember', 'Ghi nhớ đăng nhập', ''],

  //logout
  ['logout', 'Đăng xuất', ''],
  ['logout_all', 'Có đăng xuất khỏi các thiết bị khác?', ''],
  ['logout_logoutFalse', 'Đăng xuất không thành công', ''],

  //datatable default
  ['datatable_sum', 'Tổng số', ''],
  ['datatable_record', 'bản ghi', ''],
  ['datatable_emptyValue', 'Không có dữ liệu hiển thị', ''],
  ['datatable_loading', 'Đang tải dữ liệu', ''],
  ['datatable_first', 'Đầu', ''],
  ['datatable_last', 'Cuối', ''],
  ['datatable_next', 'Trang trước', ''],
  ['datatable_prev', 'Trang sau', ''],
  ['datatable_action', 'Thao tác', ''],
  ['datatable_exportExcel', 'Xuất excel', ''],
  ['datatable_stt', 'STT', ''],
  ['datatable_alertOrder', 'Trạng thái sắp xếp phải ở chế độ tăng dần', ''],

  //select2
  ['select2_emptyValue', 'Không có kết quả', ''],


  /* ['feedback', 'phản hồi', ''],
  ['Feedback', 'Phản hồi', ''],
  ['feedback_name', 'Tên', ''],
  ['feedback_email', 'Email', ''],
  ['feedback_phone', 'Số điện thoại', ''],
  ['feedback_idRead', 'Đã xem', ''],
  ['feedback_status', 'Trạng thái', ''],
  ['feedback_message', 'Nội dung', ''],
  ['feedback_new', 'Mới', ''],
  ['feedback_processing', 'Đang xử lý', ''],
  ['feedback_deleted', 'Đã xóa', ''],
  ['feedback_closed', 'Đã đóng', ''],
  ['feedback_createdTime', 'Ngày tạo', ''], */

  ['', '', ''],

  ['location', 'Địa danh hành chính', ''],
  ['Province', 'Tỉnh', ''],
  ['District', 'Huyện', ''],
  ['Commune', 'Xã', ''],
  ['province', 'tỉnh', ''],
  ['district', 'huyện', ''],
  ['commune', 'xã', ''],

  ['Nation', 'Dân tộc', ''],
  ['nation', 'dân tộc', ''],


  ['School', 'Trường học', ''],
  ['school', 'trường học', ''],

  ['Branch', 'Hệ, ngành học', ''],
  ['branch', 'hệ, ngành học', ''],

  ['Channel', 'Kênh, nguồn đầu vào', ''],
  ['channel', 'kênh, nguồn đầu vào', ''],

  ['Prioritize', 'Đối tượng ưu tiên', ''],
  ['prioritize', 'đối tượng  ưu tiên', ''],

  ['Aspiration', 'Nguyện vọng', ''],
  ['aspiration', 'nguyện vọng', ''],

  ['Contributor', 'Nhóm, cộng tác viên', ''],
  ['contributor', 'nhóm, cộng tác viên', ''],

  ['Program', 'Chương trình tuyển sinh', ''],
  ['program', 'chương trình tuyển sinh', ''],

  //client
  ['client_hvt', 'Họ và tên', ''],
  ['client_sdt', 'Số điện thoại', ''],
  ['client_ns', 'Ngày sinh', ''],
  ['client_e', 'email', ''],
  ['client_ttp', 'Tỉnh/Thành phố', ''],
  ['client_qh', 'Quận/Huyện', ''],
  ['client_xt', 'Xã/Thôn', ''],
  ['client_scmnd', 'Số CMND', ''],
  ['client_hktt', 'Hộ khẩu thường trú', ''],
  ['client_tthcs', 'Trường THCS/THPT', ''],
  ['client_bdtn', 'Bạn đã tốt nghiệp', ''],
  ['client_ntn', 'Năm tốt nghiệp', ''],
  ['client_dtkhb', 'Điểm tổng kết học bạ', ''],
  ['client_bmxt', 'Bạn muốn xét tuyển', ''],
  ['client_nv1', 'Nguyện vọng 1', ''],
  ['client_nv2', 'Nguyện vọng 2', ''],
  ['client_gc', 'Chúng tôi thông báo kết quả tuyển sinh cho bạn theo nguyện vọng nào? Địa chỉ nhận thư (Ghi rõ Thôn/Xóm - Xã/Phường - Quận/Huyện - Tỉnh/TP)', ''],
  ['client_dt', 'Điện thoại', ''],
  ['client_lfb', 'Link Facebook', ''],

];