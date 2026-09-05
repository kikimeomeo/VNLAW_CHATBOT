export interface LegalSubItem {
  id: string;
  title: string;
  reference: string;
  summary: string;
  promptQuestion: string;
}

export interface LegalCategory {
  id: string;
  name: string;
  tag: string;
  icon: string;
  docTitle: string;
  source: string;
  items: LegalSubItem[];
}

export const legalCategories: LegalCategory[] = [
  {
    id: 'giao-thong',
    name: 'Giao thông & Xử phạt đường bộ',
    tag: 'Giao thông',
    icon: 'Car',
    docTitle: 'Luật Trật tự, ATGT đường bộ & NĐ 100/2019/NĐ-CP (sửa đổi NĐ 123/2021/NĐ-CP)',
    source: 'Cơ sở dữ liệu Quốc gia (vbpl.vn)',
    items: [
      {
        id: 'gt-1',
        title: 'Mức phạt vi phạm nồng độ cồn',
        reference: 'Điều 5, Điều 6 Nghị định 100/2019/NĐ-CP',
        summary: 'Xe máy: 2-3 triệu (tước GPLX 10-12th); 4-5 triệu (tước 16-18th); 6-8 triệu (tước 22-24th). Ô tô: 6-8 triệu; 16-18 triệu; tối đa 30-40 triệu (tước GPLX 22-24th).',
        promptQuestion: 'Chi tiết các khung hình phạt vi phạm nồng độ cồn đối với xe máy và ô tô theo Nghị định 100 và Nghị định 123?'
      },
      {
        id: 'gt-2',
        title: 'Vượt đèn đỏ & Không chấp hành hiệu lệnh đèn',
        reference: 'Điểm e Khoản 4 Điều 6; Điểm a Khoản 5 Điều 5 NĐ 100 (sửa đổi NĐ 123)',
        summary: 'Xe máy: Phạt tiền từ 800.000đ - 1.000.000đ, tước GPLX 1-3 tháng. Ô tô: Phạt tiền từ 4.000.000đ - 6.000.000đ, tước GPLX 1-3 tháng.',
        promptQuestion: 'Mức phạt tiền và thời gian tước bằng lái xe đối với lỗi vượt đèn đỏ của xe máy và xe ô tô?'
      },
      {
        id: 'gt-3',
        title: 'Cơ chế trừ điểm Giấy phép lái xe (GPLX)',
        reference: 'Luật Trật tự, an toàn giao thông đường bộ',
        summary: 'Mỗi GPLX có 12 điểm/năm. Vi phạm các lỗi nghiêm trọng sẽ bị trừ từ 2 đến 12 điểm. Nếu bị trừ hết điểm, người lái xe phải tham gia kiểm tra lại kiến thức sau ít nhất 6 tháng.',
        promptQuestion: 'Quy định về hệ thống 12 điểm của Giấy phép lái xe và điều kiện phục hồi điểm GPLX?'
      },
      {
        id: 'gt-4',
        title: 'Lỗi không mang hoặc không có bảo hiểm xe máy',
        reference: 'Điểm a Khoản 2 Điều 21 NĐ 100 (sửa đổi NĐ 123)',
        summary: 'Không mang theo hoặc không có Giấy chứng nhận bảo hiểm bắt buộc TNDS còn hiệu lực: Phạt tiền từ 100.000đ - 200.000đ đối với xe mô tô, xe gắn máy.',
        promptQuestion: 'Mức phạt lỗi không có hoặc quên mang bảo hiểm bắt buộc trách nhiệm dân sự xe máy?'
      }
    ]
  },
  {
    id: 'hinh-su',
    name: 'Hình sự & Trách nhiệm pháp lý',
    tag: 'Hình sự',
    icon: 'Scale',
    docTitle: 'Văn bản hợp nhất 01/VBHN-VPQH Bộ luật Hình sự & BL Tố tụng hình sự',
    source: 'vbpl.vn',
    items: [
      {
        id: 'hs-1',
        title: 'Tội lừa đảo chiếm đoạt tài sản (online / đời thực)',
        reference: 'Điều 174 Bộ luật Hình sự 2015 (sửa đổi 2017)',
        summary: 'Giá trị từ 2 triệu đến dưới 50 triệu (hoặc dưới 2 triệu nhưng tái phạm/ảnh hưởng ANTT): Phạt cải tạo không giam giữ đến 3 năm hoặc phạt tù 6 tháng - 3 năm. Khung cao nhất tù 12-20 năm hoặc tù chung thân.',
        promptQuestion: 'Cấu thành tội phạm và các khung hình phạt của Tội lừa đảo chiếm đoạt tài sản theo Điều 174 Bộ luật Hình sự?'
      },
      {
        id: 'hs-2',
        title: 'Tội cho vay lãi nặng trong giao dịch dân sự',
        reference: 'Điều 201 Bộ luật Hình sự 2015 (sửa đổi 2017)',
        summary: 'Lãi suất gấp 5 lần mức cao nhất quy định trong BLDS (tức trên 100%/năm) và thu lợi bất chính từ 30 triệu đến dưới 100 triệu: Phạt tiền từ 50 - 200 triệu hoặc phạt cải tạo không giam giữ đến 3 năm.',
        promptQuestion: 'Thế nào là cho vay nặng lãi bị xử lý hình sự và mức lãi suất bao nhiêu thì phạm tội?'
      },
      {
        id: 'hs-3',
        title: 'Tội cố ý gây thương tích & Tỷ lệ thương tật',
        reference: 'Điều 134 Bộ luật Hình sự 2015 (sửa đổi 2017)',
        summary: 'Gây thương tích tỷ lệ từ 11% đến 30% (hoặc dưới 11% nhưng dùng vũ khí nguy hiểm, có tính chất côn đồ): Phạt cải tạo không giam giữ đến 3 năm hoặc phạt tù từ 6 tháng - 3 năm.',
        promptQuestion: 'Gây thương tích dưới 11% có bị đi tù không và những trường hợp nào bị khởi tố hình sự?'
      },
      {
        id: 'hs-4',
        title: 'Thời hạn tạm giữ, tạm giam theo luật',
        reference: 'Điều 118, 173 Bộ luật Tố tụng hình sự 2015',
        summary: 'Tạm giữ: Tối đa 3 ngày (có thể gia hạn 2 lần, mỗi lần không quá 3 ngày). Tạm giam điều tra: Tội ít nghiêm trọng tối đa 2 tháng; rất nghiêm trọng tối đa 4 tháng.',
        promptQuestion: 'Quy định về thời hạn tạm giữ người và thời gian tạm giam tối đa để điều tra vụ án hình sự?'
      }
    ]
  },
  {
    id: 'lao-dong',
    name: 'Lao động, Tiền lương & BHXH',
    tag: 'Lao động',
    icon: 'Briefcase',
    docTitle: 'Bộ luật Lao động 2019 & Luật Bảo hiểm xã hội',
    source: 'vbpl.vn',
    items: [
      {
        id: 'ld-1',
        title: 'Thời gian thử việc và mức lương thử việc',
        reference: 'Điều 25, Điều 26 Bộ luật Lao động 2019',
        summary: 'Thời gian thử việc: Tối đa 180 ngày (vị trí quản lý), 60 ngày (trình độ cao đẳng trở lên), 30 ngày (trung cấp/công nhân). Lương thử việc ít nhất bằng 85% mức lương chính thức.',
        promptQuestion: 'Quy định về thời gian thử việc tối đa và mức lương thử việc tối thiểu người lao động được nhận?'
      },
      {
        id: 'ld-2',
        title: 'Thời hạn báo trước khi đơn phương chấm dứt HĐLĐ',
        reference: 'Điều 35 Bộ luật Lao động 2019',
        summary: 'HĐLĐ không xác định thời hạn: Báo trước ít nhất 45 ngày; HĐLĐ xác định thời hạn từ 12-36 tháng: Báo trước ít nhất 30 ngày; dưới 12 tháng: Báo trước ít nhất 03 ngày làm việc.',
        promptQuestion: 'Người lao động nghỉ việc cần báo trước bao nhiêu ngày để không bị coi là đơn phương chấm dứt hợp đồng trái luật?'
      },
      {
        id: 'ld-3',
        title: 'Chế độ trợ cấp thôi việc & mất việc làm',
        reference: 'Điều 46, Điều 47 Bộ luật Lao động 2019',
        summary: 'Làm việc thường xuyên từ đủ 12 tháng trở lên: Mỗi năm làm việc được trợ cấp 1/2 tháng tiền lương (đối với thời gian người sử dụng lao động chưa đóng Bảo hiểm thất nghiệp).',
        promptQuestion: 'Công thức tính tiền trợ cấp thôi việc và điều kiện để được hưởng trợ cấp thôi việc?'
      },
      {
        id: 'ld-4',
        title: 'Điều kiện hưởng bảo hiểm thất nghiệp (BHTN)',
        reference: 'Điều 49 Luật Việc làm',
        summary: 'Đã đóng BHTN từ đủ 12 tháng trở lên trong 24 tháng trước khi chấm dứt HĐLĐ; Nộp hồ sơ trong vòng 03 tháng kể từ ngày nghỉ việc; Mức hưởng bằng 60% bình quân tiền lương 6 tháng liền kề.',
        promptQuestion: 'Thủ tục, thời hạn nộp hồ sơ và mức hưởng trợ cấp thất nghiệp mới nhất?'
      }
    ]
  },
  {
    id: 'dat-dai',
    name: 'Đất đai, Nhà ở & Xây dựng',
    tag: 'Đất đai',
    icon: 'Home',
    docTitle: 'Luật Đất đai 2024, Luật Nhà ở 2023 & Luật Xây dựng',
    source: 'vbpl.vn',
    items: [
      {
        id: 'dd-1',
        title: 'Thủ tục và thuế phí khi sang tên Sổ đỏ',
        reference: 'Luật Đất đai 2024 & Nghị định hướng dẫn',
        summary: 'Thuế TNCN: 2% giá trị chuyển nhượng (bên bán nộp). Lệ phí trước bạ: 0.5% (bên mua nộp). Phí thẩm định hồ sơ theo biểu mức từng địa phương.',
        promptQuestion: 'Chi tiết hồ sơ, thủ tục sang tên Giấy chứng nhận quyền sử dụng đất và các khoản thuế, phí phải nộp?'
      },
      {
        id: 'dd-2',
        title: 'Cấp Sổ đỏ cho đất không có giấy tờ',
        reference: 'Điều 138 Luật Đất đai 2024',
        summary: 'Hộ gia đình, cá nhân sử dụng đất trước ngày 01/7/2014 không có tranh chấp, phù hợp với quy hoạch sử dụng đất cấp huyện sẽ được xem xét cấp Giấy chứng nhận.',
        promptQuestion: 'Điều kiện để cấp Sổ đỏ cho đất không có giấy tờ theo quy định của Luật Đất đai 2024?'
      },
      {
        id: 'dd-3',
        title: 'Bỏ khung giá đất & Bảng giá đất theo thị trường',
        reference: 'Điều 159 Luật Đất đai 2024',
        summary: 'Chính thức bãi bỏ khung giá đất định kỳ 5 năm của Chính phủ. UBND cấp tỉnh xây dựng bảng giá đất áp dụng hàng năm theo nguyên tắc thị trường.',
        promptQuestion: 'Quy định bỏ khung giá đất tác động như thế nào đến giá bồi thường và tiền sử dụng đất khi làm sổ đỏ?'
      },
      {
        id: 'dd-4',
        title: 'Các trường hợp xây nhà được miễn giấy phép xây dựng',
        reference: 'Điều 89 Luật Xây dựng (sửa đổi 2020)',
        summary: 'Nhà ở riêng lẻ quy mô dưới 07 tầng thuộc dự án đầu tư xây dựng khu đô thị có quy hoạch chi tiết 1/500; Nhà ở riêng lẻ ở nông thôn dưới 7 tầng không thuộc khu di tích/bảo tồn.',
        promptQuestion: 'Xây dựng nhà ở những khu vực nào thì không cần phải xin giấy phép xây dựng?'
      }
    ]
  },
  {
    id: 'doanh-nghiep',
    name: 'Doanh nghiệp & Đầu tư',
    tag: 'Doanh nghiệp',
    icon: 'Building2',
    docTitle: 'Luật Doanh nghiệp 2020 & Luật Đầu tư 2020',
    source: 'vbpl.vn',
    items: [
      {
        id: 'dn-1',
        title: 'Thời hạn góp vốn điều lệ công ty TNHH / Cổ phần',
        reference: 'Điều 47, Điều 75, Điều 113 Luật Doanh nghiệp 2020',
        summary: 'Phải góp đủ số vốn cam kết trong vòng 90 ngày kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp. Không góp đủ phải làm thủ tục giảm vốn trong 30 ngày tiếp theo.',
        promptQuestion: 'Thời hạn góp đủ vốn điều lệ là bao nhiêu ngày và chế tài xử lý nếu không góp đủ vốn đúng hạn?'
      },
      {
        id: 'dn-2',
        title: 'So sánh Công ty TNHH 1 TV và Hộ kinh doanh cá thể',
        reference: 'Luật Doanh nghiệp 2020 & Nghị định 01/2021/NĐ-CP',
        summary: 'Công ty TNHH có tư cách pháp nhân, chịu trách nhiệm hữu hạn trong phạm vi vốn góp. Hộ kinh doanh chịu trách nhiệm vô hạn bằng toàn bộ tài sản dân sự.',
        promptQuestion: 'Nên thành lập Hộ kinh doanh cá thể hay Công ty TNHH 1 thành viên khi khởi nghiệp kinh doanh nhỏ?'
      },
      {
        id: 'dn-3',
        title: 'Trình tự thủ tục giải thể doanh nghiệp',
        reference: 'Điều 207, Điều 208 Luật Doanh nghiệp 2020',
        summary: 'Thông qua nghị quyết giải thể → Thông báo trên Cổng thông tin quốc gia → Hoàn tất quyết toán thuế → Trả con dấu → Đóng mã số doanh nghiệp.',
        promptQuestion: 'Các bước thực hiện thủ tục giải thể doanh nghiệp và thứ tự ưu tiên thanh toán các nghĩa vụ nợ?'
      }
    ]
  },
  {
    id: 'thue',
    name: 'Thuế, Phí & Nghĩa vụ tài chính',
    tag: 'Thuế',
    icon: 'BadgePercent',
    docTitle: 'Luật Quản lý thuế 2019, Luật Thuế TNCN & Thông tư 40/2021/TT-BTC',
    source: 'vbpl.vn',
    items: [
      {
        id: 'th-1',
        title: 'Mức giảm trừ gia cảnh thuế TNCN hiện hành',
        reference: 'Nghị quyết số 954/2020/UBTVQH14',
        summary: 'Mức giảm trừ bản thân người nộp thuế: 11 triệu đồng/tháng (132 triệu/năm). Mức giảm trừ mỗi người phụ thuộc: 4,4 triệu đồng/tháng/người.',
        promptQuestion: 'Cách tính thuế thu nhập cá nhân theo biểu lũy tiến từng phần và cách đăng ký người phụ thuộc?'
      },
      {
        id: 'th-2',
        title: 'Nghĩa vụ thuế bán hàng online, Shopee, TikTok Shop',
        reference: 'Thông tư 40/2021/TT-BTC & Luật Quản lý thuế',
        summary: 'Doanh thu trong năm dương lịch trên 100 triệu đồng: Bắt buộc nộp 1% thuế GTGT và 0.5% thuế TNCN trên tổng doanh thu phát sinh.',
        promptQuestion: 'Kinh doanh online trên các sàn thương mại điện tử phải nộp những loại thuế nào và cách kê khai?'
      },
      {
        id: 'th-3',
        title: 'Lệ phí môn bài doanh nghiệp và hộ cá nhân',
        reference: 'Nghị định 139/2016/NĐ-CP & NĐ 22/2020/NĐ-CP',
        summary: 'Miễn lệ phí môn bài năm đầu thành lập. Vốn điều lệ trên 10 tỷ: 3 triệu/năm; từ 10 tỷ trở xuống: 2 triệu/năm. Chi nhánh/địa điểm kinh doanh: 1 triệu/năm.',
        promptQuestion: 'Mức đóng lệ phí môn bài hàng năm đối với công ty mới thành lập và thời hạn nộp tờ khai?'
      }
    ]
  },
  {
    id: 'dan-su',
    name: 'Dân sự, Hôn nhân & Thừa kế',
    tag: 'Dân sự',
    icon: 'Users',
    docTitle: 'Bộ luật Dân sự 2015 & Luật Hôn nhân và Gia đình 2014',
    source: 'vbpl.vn',
    items: [
      {
        id: 'ds-1',
        title: 'Các hàng thừa kế theo pháp luật khi không có di chúc',
        reference: 'Điều 651 Bộ luật Dân sự 2015',
        summary: 'Hàng thừa kế 1: Vợ, chồng, cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi, con đẻ, con nuôi. Hàng 1 hưởng phần bằng nhau; chỉ khi không còn ai ở hàng 1 mới chuyển sang hàng 2.',
        promptQuestion: 'Quy định chi tiết về 3 hàng thừa kế theo luật và cách phân chia di sản thừa kế nhà đất?'
      },
      {
        id: 'ds-2',
        title: 'Người thừa kế không phụ thuộc vào nội dung di chúc',
        reference: 'Điều 644 Bộ luật Dân sự 2015',
        summary: 'Con chưa thành niên, cha, mẹ, vợ, chồng; hoặc con thành niên không có khả năng lao động vẫn được hưởng phần di sản bằng 2/3 suất của một người thừa kế theo luật dù di chúc không cho.',
        promptQuestion: 'Những đối tượng nào vẫn được hưởng thừa kế kể cả khi người mất không để lại tài sản trong di chúc?'
      },
      {
        id: 'ds-3',
        title: 'Phân định tài sản chung và tài sản riêng vợ chồng',
        reference: 'Điều 33, Điều 43 Luật Hôn nhân và Gia đình 2014',
        summary: 'Tài sản riêng: Được thừa kế riêng, tặng cho riêng trong thời kỳ hôn nhân. Tài sản chung: Thu nhập tạo ra trong thời kỳ hôn nhân, tài sản mua bằng tiền chung.',
        promptQuestion: 'Làm thế nào để chứng minh tài sản riêng khi kết hôn và nguyên tắc chia tài sản khi ly hôn?'
      },
      {
        id: 'ds-4',
        title: 'Lãi suất vay tiền tối đa theo luật dân sự',
        reference: 'Điều 468 Bộ luật Dân sự 2015',
        summary: 'Lãi suất do các bên thỏa thuận nhưng không được vượt quá 20%/năm của khoản tiền vay. Phần lãi suất vượt quá mức này không có hiệu lực pháp luật.',
        promptQuestion: 'Quy định về mức trần lãi suất cho vay tối đa giữa cá nhân với nhau theo Bộ luật Dân sự?'
      }
    ]
  },
  {
    id: 'an-ninh-mang',
    name: 'An ninh mạng & Dữ liệu cá nhân',
    tag: 'An ninh mạng',
    icon: 'ShieldCheck',
    docTitle: 'Luật An ninh mạng 2018 & Nghị định 13/2023/NĐ-CP',
    source: 'vbpl.vn',
    items: [
      {
        id: 'anm-1',
        title: 'Hành vi xúc phạm danh dự, vu khống trên Facebook/TikTok',
        reference: 'Điểm a Khoản 1 Điều 101 Nghị định 15/2020/NĐ-CP (sửa đổi NĐ 14/2022)',
        summary: 'Cung cấp, chia sẻ thông tin giả mạo, sai sự thật, xuyên tạc, vu khống, xúc phạm uy tín, danh dự: Phạt tiền từ 10.000.000đ - 20.000.000đ đối với tổ chức (5-10 triệu đối với cá nhân).',
        promptQuestion: 'Mức xử phạt đối với hành vi đăng bài bôi nhọ danh dự người khác trên mạng xã hội?'
      },
      {
        id: 'anm-2',
        title: 'Xử phạt hành vi mua bán, làm lộ thông tin dữ liệu cá nhân',
        reference: 'Nghị định 13/2023/NĐ-CP & Điều 288 Bộ luật Hình sự',
        summary: 'Nghiêm cấm mua bán, phát tán số điện thoại, CCCD, địa chỉ khi chưa có sự đồng ý. Xử phạt hành chính từ 80-100 triệu đồng; nghiêm trọng bị truy cứu hình sự tới 7 năm tù.',
        promptQuestion: 'Mức phạt đối với hành vi làm lộ dữ liệu cá nhân hoặc mua bán danh sách khách hàng trái phép?'
      },
      {
        id: 'anm-3',
        title: 'Tự ý đăng ảnh con cái hoặc người khác lên mạng',
        reference: 'Điều 32 Bộ luật Dân sự 2015 & Điều 54 Luật Trẻ em 2016',
        summary: 'Cá nhân có quyền đối với hình ảnh của mình. Đăng ảnh người khác không xin phép có thể bị phạt từ 10-20 triệu đồng (NĐ 15/2020); đăng ảnh trẻ em từ đủ 7 tuổi bắt buộc phải có sự đồng ý của trẻ.',
        promptQuestion: 'Hành vi tự ý sử dụng hình ảnh của người khác trên mạng xã hội khi chưa xin phép bị xử lý như thế nào?'
      }
    ]
  }
];
