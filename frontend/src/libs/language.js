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


  ['Province', 'Tỉnh/Thành phố', ''],
  ['province', 'tỉnh/thành phố', ''],
  ['province_name', 'Tỉnh/thành phố', ''],
  ['province_numericalOrder', 'Thứ tự', ''],
  ['province_description', 'Mô tả', ''],

  ['District', 'Quận/Huyện', ''],
  ['district', 'quận/huyện', ''],
  ['district_name', 'Quận/Huyện', ''],
  ['district_numericalOrder', 'Thứ tự', ''],
  ['district_description', 'Mô tả', ''],

  ['Commune', 'Xã/Thôn', ''],
  ['commune', 'xã/thôn', ''],
  ['commune_name', 'Xã/Thôn', ''],
  ['commune_numericalOrder', 'Thứ tự', ''],
  ['commune_description', 'Mô tả', ''],

  ['Nation', 'Dân tộc', ''],
  ['nation', 'dân tộc', ''],
  ['nation_name', 'Dân tộc', ''],
  ['nation_numericalOrder', 'Thứ tự', ''],
  ['nation_description', 'Mô tả', ''],

  ['School', 'Trường học', ''],
  ['school', 'trường học', ''],
  ['school_name', 'Tên trường', ''],
  ['school_born', 'Ngày thành lập', ''],
  ['school_type', 'Loại', ''],
  ['school_address', 'Địa chỉ', ''],
  ['school_description', 'Mô tả', ''],

  ['Specialize', 'Hệ, ngành học', ''],
  ['specialize', 'hệ, ngành học', ''],
  ['specialize_name', 'Hệ, ngành học', ''],
  ['specialize_duration', 'Thời hạn', ''],
  ['specialize_groupObject', 'Nhóm', ''],
  ['specialize_specialize', 'Chuyên ngành', ''],
  ['specialize_trainningType', 'Loại đào tạo', ''],

  ['Source', 'Kênh, nguồn đầu vào', ''],
  ['source', 'kênh, nguồn đầu vào', ''],
  ['source_name', 'Kênh, nguồn đầu vào', ''],
  ['source_numericalOrder', 'Thứ tự', ''],
  ['source_description', 'Mô tả', ''],

  ['Prioritize', 'Đối tượng ưu tiên', ''],
  ['prioritize', 'đối tượng  ưu tiên', ''],
  ['prioritize_name', 'Đối tượng ưu tiên', ''],
  ['prioritize_numericalOrder', 'Thứ tự', ''],
  ['prioritize_description', 'Mô tả', ''],

  ['Aspiration', 'Nguyện vọng', ''],
  ['aspiration', 'nguyện vọng', ''],
  ['aspiration_name', 'Nguyện vọng', ''],
  ['aspiration_numericalOrder', 'Thứ tự', ''],
  ['aspiration_description', 'Mô tả', ''],

  ['Collaborator', 'Nhóm, cộng tác viên', ''],
  ['collaborator', 'nhóm, cộng tác viên', ''],
  ['collaborator_name', 'Nhóm, cộng tác viên', ''],
  ['collaborator_numericalOrder', 'Thứ tự', ''],
  ['collaborator_description', 'Mô tả', ''],

  ['Event', 'Chương trình tuyển sinh', ''],
  ['event', 'chương trình tuyển sinh', ''],
  ['event_name', 'Chương trình tuyển sinh', ''],
  ['event_active', 'Hoạt động', ''],
  ['event_orders', 'Thứ tự', ''],
  ['event_description', 'Mô tả', ''],
  ['event_startAt', 'Bắt đầu', ''],
  ['event_finishAt', 'Kết thúc', ''],

  ['Register', 'Đăng ký tuyển sinh', ''],
  ['register', 'đăng ký tuyển sinh', ''],

  //client
  ['register_name', 'Họ và tên', ''],
  ['register_phone', 'Số điện thoại', ''],
  ['register_birthday', 'Ngày sinh', ''],
  ['register_email', 'email', ''],
  ['register_provinceId', 'Tỉnh/Thành phố', ''],
  ['register_districtId', 'Quận/Huyện', ''],
  ['register_communeId', 'Xã/Thôn', ''],
  ['register_peopleId', 'Số CMND', ''],
  ['register_permanentResidence', 'Hộ khẩu thường trú', ''],
  ['register_schools', 'Trường THCS/THPT', ''],
  ['register_youGraduated', 'Bạn đã tốt nghiệp', ''],
  ['register_graduationYear', 'Năm tốt nghiệp', ''],
  ['register_score', 'Điểm tổng kết học bạ', ''],
  ['register_wantToApply', 'Bạn muốn xét tuyển', ''],
  ['register_aspirations1', 'Nguyện vọng 1', ''],
  ['register_aspirations2', 'Nguyện vọng 2', ''],
  ['register_mailingAddress', 'Chúng tôi thông báo kết quả tuyển sinh cho bạn theo nguyện vọng nào? Địa chỉ nhận thư (Ghi rõ Thôn/Xóm - Xã/Phường - Quận/Huyện - Tỉnh/TP)', ''],
  ['register_phoneAnswered', 'Điện thoại', ''],
  ['register_linkFacebook', 'Link Facebook', ''],

];