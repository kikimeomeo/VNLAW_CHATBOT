import type { QuickReferenceCategory } from '../types/legal';

export const QUICK_REFERENCE_CATEGORIES: QuickReferenceCategory[] = [
  {
    id: 'traffic',
    title: 'Giao thông đường bộ',
    iconName: 'Car',
    badge: '3 mục',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Nghị định 100/2019/NĐ-CP & Nghị định 123/2021/NĐ-CP',
    items: [
      {
        id: 'traffic-alcohol',
        domain: 'traffic',
        title: 'Biểu mức phạt nồng độ cồn',
        lawReference: 'Điều 5 & 6, Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021)',
        summary: 'Quy định xử phạt nghiêm khắc đối với mọi nồng độ cồn vượt quá 0 khi điều khiển phương tiện tham gia giao thông.',
        highlights: [
          'Mức 1 (chưa vượt 50mg/100ml máu hoặc 0.25mg/1L khí thở): Xe máy phạt 2 - 3 triệu, tước GPLX 10 - 12 tháng; Ô tô phạt 6 - 8 triệu, tước GPLX 10 - 12 tháng.',
          'Mức 2 (vượt 50mg đến 80mg/100ml hoặc 0.25 đến 0.4mg/1L): Xe máy phạt 4 - 5 triệu, tước GPLX 16 - 18 tháng; Ô tô phạt 16 - 18 triệu, tước GPLX 16 - 18 tháng.',
          'Mức 3 (vượt 80mg/100ml hoặc 0.4mg/1L khí thở): Xe máy phạt 6 - 8 triệu, tước GPLX 22 - 24 tháng; Ô tô phạt 30 - 40 triệu, tước GPLX 22 - 24 tháng.'
        ],
        promptText: 'Chi tiết mức phạt vi phạm nồng độ cồn đối với người lái xe ô tô và xe máy theo quy định mới nhất của Nghị định 100 và Nghị định 123?',
        tags: ['Nồng độ cồn', 'Tước bằng lái', 'Ô tô', 'Xe máy']
      },
      {
        id: 'traffic-speed',
        domain: 'traffic',
        title: 'Biểu mức phạt vi phạm tốc độ',
        lawReference: 'Điều 5 & 6 Nghị định 100/2019/NĐ-CP',
        summary: 'Các khung phạt tiền và tước quyền sử dụng giấy phép lái xe khi chạy quá tốc độ quy định từ 5 km/h trở lên.',
        highlights: [
          'Quá tốc độ từ 05 đến dưới 10 km/h: Ô tô phạt 800.000đ - 1.000.000đ; Xe máy phạt 300.000đ - 400.000đ.',
          'Quá tốc độ từ 10 đến 20 km/h: Ô tô phạt 4.000.000đ - 6.000.000đ (tước GPLX 1 - 3 tháng); Xe máy phạt 800.000đ - 1.000.000đ.',
          'Quá tốc độ từ 20 đến 35 km/h: Ô tô phạt 6.000.000đ - 8.000.000đ (tước GPLX 2 - 4 tháng); Xe máy trên 20 km/h phạt 4.000.000đ - 5.000.000đ.',
          'Quá tốc độ trên 35 km/h: Ô tô phạt 10.000.000đ - 12.000.000đ, tước GPLX từ 2 đến 4 tháng.'
        ],
        promptText: 'Mức phạt vi phạm tốc độ chạy xe ô tô và xe máy được phân chia theo những khung km/h nào và thời hạn tước bằng lái xe ra sao?',
        tags: ['Quá tốc độ', 'Tước GPLX', 'Nghị định 100']
      },
      {
        id: 'traffic-reverse-light',
        domain: 'traffic',
        title: 'Đi ngược chiều & Vượt đèn đỏ',
        lawReference: 'Nghị định 100/2019/NĐ-CP & Nghị định 123/2021/NĐ-CP',
        summary: 'Các mức xử phạt lỗi đi ngược chiều của đường một chiều hoặc không chấp hành tín hiệu đèn giao thông.',
        highlights: [
          'Xe máy đi ngược chiều: Phạt 1.000.000đ - 2.000.000đ, tước GPLX 1 - 3 tháng (gây tai nạn phạt 4 - 5 triệu, tước 2 - 4 tháng).',
          'Ô tô đi ngược chiều: Phạt 4.000.000đ - 6.000.000đ; trên cao tốc phạt 16.000.000đ - 18.000.000đ, tước GPLX 5 - 7 tháng.',
          'Vượt đèn đỏ / đèn vàng: Xe máy phạt 800.000đ - 1.000.000đ; Ô tô phạt 4.000.000đ - 6.000.000đ (tước GPLX 1 - 3 tháng).'
        ],
        promptText: 'Mức phạt lỗi đi ngược chiều đối với xe máy là bao nhiêu và có bị giữ xe hoặc tước bằng lái không?',
        tags: ['Ngược chiều', 'Vượt đèn đỏ', 'Nghị định 123']
      }
    ]
  },
  {
    id: 'labor',
    title: 'Lao động & Tiền lương',
    iconName: 'Briefcase',
    badge: '4 mục',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Bộ luật Lao động 2019 & Luật Bảo hiểm xã hội',
    items: [
      {
        id: 'labor-hours-leave',
        domain: 'labor',
        title: 'Thời giờ làm việc & Nghỉ phép năm',
        lawReference: 'Điều 105, 107, 113 Bộ luật Lao động 2019',
        summary: 'Quy định giờ làm tiêu chuẩn, giới hạn làm thêm giờ và số ngày nghỉ phép có hưởng nguyên lương hàng năm.',
        highlights: [
          'Giờ làm bình thường: Tối đa 08 giờ/ngày và 48 giờ/tuần (khuyến khích áp dụng 40 giờ/tuần).',
          'Làm thêm giờ (OT): Tối đa 40 giờ/tháng và 200 giờ/năm (trường hợp đặc thù 300 giờ/năm).',
          'Tiền làm thêm: Ngày thường tối thiểu 150%, ngày nghỉ tuần 200%, ngày lễ/tết 300%.',
          'Phép năm: 12 ngày (bình thường), 14 - 16 ngày (nặng nhọc/đặc thù). Cứ đủ 05 năm thâm niên được cộng thêm 01 ngày.'
        ],
        promptText: 'Quy định về thời gian làm việc tiêu chuẩn, tiền lương làm thêm giờ (OT) và số ngày nghỉ phép năm theo Bộ luật Lao động 2019?',
        tags: ['Giờ làm việc', 'Nghỉ phép năm', 'Làm thêm giờ']
      },
      {
        id: 'labor-contracts-probation',
        domain: 'labor',
        title: 'Hợp đồng lao động & Thử việc',
        lawReference: 'Điều 20, 25, 27 Bộ luật Lao động 2019',
        summary: 'Các loại hợp đồng lao động hợp pháp, thời gian thử việc tối đa và mức lương thử việc bắt buộc.',
        highlights: [
          'Chỉ còn 02 loại HĐLĐ: HĐLĐ không xác định thời hạn và HĐLĐ xác định thời hạn (tối đa 36 tháng).',
          'Thời gian thử việc: Tối đa 180 ngày (người quản lý doanh nghiệp), 60 ngày (trình độ cao đẳng trở lên), 30 ngày (trung cấp, công nhân kỹ thuật).',
          'Tiền lương thử việc: Do hai bên thỏa thuận nhưng ít nhất phải bằng 85% mức lương của công việc đó.'
        ],
        promptText: 'Quy định về thời gian thử việc tối đa và mức lương thử việc theo Bộ luật Lao động 2019 là bao nhiêu?',
        tags: ['HĐLĐ', 'Thử việc', 'Lương thử việc']
      },
      {
        id: 'labor-maternity-unemployment',
        domain: 'labor',
        title: 'Chế độ thai sản & Trợ cấp thất nghiệp',
        lawReference: 'Luật BHXH 2014 & Luật Việc làm 2013',
        summary: 'Điều kiện hưởng và mức chi trả trợ cấp thai sản và bảo hiểm thất nghiệp cho người lao động.',
        highlights: [
          'Nghỉ thai sản: Lao động nữ được nghỉ 06 tháng (sau sinh nghỉ ít nhất 04 tháng).',
          'Mức hưởng thai sản: 100% bình quân tiền lương 6 tháng đóng BHXH liền kề + Trợ cấp một lần bằng 2 lần mức lương cơ sở cho mỗi con.',
          'Mức hưởng BHTN: Bằng 60% bình quân tiền lương đóng BHTN của 06 tháng liền kề trước khi thất nghiệp (hưởng từ 3 đến tối đa 12 tháng).'
        ],
        promptText: 'Cách tính tiền trợ cấp thất nghiệp theo Luật BHXH mới nhất và điều kiện thời gian tham gia tối thiểu?',
        tags: ['Thai sản', 'BHTN', 'Bảo hiểm xã hội']
      },
      {
        id: 'labor-severance-pay',
        domain: 'labor',
        title: 'Trợ cấp thôi việc & Mất việc làm',
        lawReference: 'Điều 46, 47 Bộ luật Lao động 2019',
        summary: 'Trách nhiệm chi trả của người sử dụng lao động khi chấm dứt hợp đồng lao động đúng luật.',
        highlights: [
          'Điều kiện thôi việc: Làm việc thường xuyên từ đủ 12 tháng trở lên.',
          'Mức trợ cấp thôi việc: Mỗi năm làm việc được trợ cấp 1/2 tháng tiền lương.',
          'Thời gian tính: Tổng thời gian làm việc thực tế trừ đi thời gian đã tham gia BHTN.',
          'Tiền lương tính trợ cấp: Bình quân tiền lương theo HĐLĐ của 06 tháng liền kề trước khi thôi việc.'
        ],
        promptText: 'Hướng dẫn tính trợ cấp thôi việc theo Điều 46 Bộ luật Lao động 2019, thời gian nào được tính và thời gian nào bị loại trừ?',
        tags: ['Thôi việc', 'Mất việc', 'Chấm dứt HĐLĐ']
      }
    ]
  },
  {
    id: 'land',
    title: 'Đất đai & Bất động sản',
    iconName: 'Landmark',
    badge: '3 mục',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Luật Đất đai 2024 & Luật Xây dựng',
    items: [
      {
        id: 'land-transfer-procedure',
        domain: 'land',
        title: 'Quy trình sang tên Sổ đỏ',
        lawReference: 'Luật Đất đai 2024 & Nghị định 101/2024/NĐ-CP',
        summary: 'Trình tự 4 bước pháp lý bắt buộc khi mua bán, chuyển nhượng quyền sử dụng đất.',
        highlights: [
          'Bước 1: Công chứng hợp đồng mua bán/tặng cho tại Văn phòng công chứng nơi có đất.',
          'Bước 2: Kê khai nghĩa vụ tài chính: Thuế TNCN (2%) + Lệ phí trước bạ (0.5%).',
          'Bước 3: Nộp hồ sơ đăng ký biến động tại Bộ phận Một cửa hoặc Văn phòng ĐKĐĐ.',
          'Bước 4: Nhận kết quả Giấy chứng nhận (thời hạn không quá 10 - 15 ngày làm việc).'
        ],
        promptText: 'Hồ sơ chuyển nhượng quyền sử dụng đất gồm những giấy tờ gì và các bước thực hiện sang tên Sổ đỏ theo quy định mới nhất?',
        tags: ['Sang tên sổ đỏ', 'Chuyển nhượng', 'Thuế TNCN', 'Lệ phí trước bạ']
      },
      {
        id: 'land-building-permit',
        domain: 'land',
        title: 'Hồ sơ cấp phép xây dựng',
        lawReference: 'Điều 89, 95 Luật Xây dựng 2014 (sửa đổi 2020)',
        summary: 'Các giấy tờ bắt buộc chuẩn bị trước khi khởi công xây dựng nhà ở riêng lẻ đô thị.',
        highlights: [
          'Đơn đề nghị cấp giấy phép xây dựng theo mẫu.',
          'Bản sao giấy tờ chứng minh quyền sử dụng đất hợp pháp (Sổ đỏ/Sổ hồng).',
          '02 bộ bản vẽ thiết kế xây dựng kèm thẩm duyệt PCCC (nếu thuộc diện thẩm tra).',
          'Thời hạn giải quyết: Không quá 15 ngày làm việc kể từ ngày nhận đủ hồ sơ.'
        ],
        promptText: 'Thủ tục xin cấp phép xây dựng nhà ở riêng lẻ tại đô thị cần chuẩn bị những hồ sơ nào và lệ phí bao nhiêu?',
        tags: ['Cấp phép xây dựng', 'Nhà ở riêng lẻ', 'Luật Xây dựng']
      },
      {
        id: 'land-law-2024-changes',
        domain: 'land',
        title: 'Điểm mới Luật Đất đai 2024',
        lawReference: 'Luật Đất đai số 31/2024/QH15',
        summary: 'Những thay đổi cốt lõi về bỏ khung giá đất, cấp sổ đỏ đất không giấy tờ và quyền lợi Việt kiều.',
        highlights: [
          'Bỏ khung giá đất, ban hành bảng giá đất hàng năm theo thị trường từ 01/01/2026.',
          'Mở rộng cấp Sổ đỏ cho đất không có giấy tờ sử dụng ổn định trước 01/07/2014 không tranh chấp.',
          'Người Việt Nam định cư ở nước ngoài (Việt kiều) có quốc tịch có đầy đủ quyền sở hữu BĐS như công dân trong nước.'
        ],
        promptText: 'Những điểm mới cốt lõi của Luật Đất đai 2024 tác động thế nào đến việc cấp Sổ đỏ cho đất không giấy tờ và bảng giá đất?',
        tags: ['Luật Đất đai 2024', 'Bảng giá đất', 'Việt kiều']
      }
    ]
  },
  {
    id: 'business',
    title: 'Doanh nghiệp & Thuế',
    iconName: 'Building2',
    badge: '2 mục',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Luật Doanh nghiệp 2020 & Nghị định 139/2016/NĐ-CP',
    items: [
      {
        id: 'business-registration',
        domain: 'business',
        title: 'Quy trình thành lập doanh nghiệp',
        lawReference: 'Luật Doanh nghiệp 2020 & Nghị định 01/2021/NĐ-CP',
        summary: 'Thủ tục đăng ký kinh doanh và thành lập công ty TNHH hoặc Cổ phần mới.',
        highlights: [
          'Hồ sơ gồm: Giấy đề nghị ĐKDN; Điều lệ công ty; Danh sách thành viên/cổ đông; Bản sao CCCD người đại diện.',
          'Phương thức: Nộp 100% trực tuyến qua Cổng dangkykinhdoanh.gov.vn.',
          'Thời hạn giải quyết: 03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ.',
          'Thủ tục sau cấp phép: Khắc dấu pháp nhân, mở tài khoản ngân hàng, mua chữ ký số điện tử và đăng ký hóa đơn điện tử.'
        ],
        promptText: 'Quy trình chi tiết và hồ sơ cần chuẩn bị để thành lập công ty TNHH hoặc Cổ phần mới gồm những gì?',
        tags: ['Thành lập công ty', 'Đăng ký kinh doanh', 'Công ty TNHH']
      },
      {
        id: 'business-license-tax',
        domain: 'business',
        title: 'Lệ phí môn bài & Miễn thuế năm đầu',
        lawReference: 'Nghị định 139/2016/NĐ-CP & Nghị định 22/2020/NĐ-CP',
        summary: 'Các bậc lệ phí môn bài hàng năm và ưu đãi miễn thuế cho doanh nghiệp thành lập mới.',
        highlights: [
          'Vốn điều lệ trên 10 tỷ đồng: 3.000.000 đồng/năm.',
          'Vốn điều lệ từ 10 tỷ đồng trở xuống: 2.000.000 đồng/năm.',
          'Chi nhánh, VPĐD, địa điểm kinh doanh: 1.000.000 đồng/năm.',
          'Miễn lệ phí môn bài: Doanh nghiệp thành lập mới được MIỄN 100% trong năm đầu tiên thành lập (đến hết 31/12).',
          'Hạn nộp tiền lệ phí hàng năm: Chậm nhất ngày 30 tháng 01 hàng năm.'
        ],
        promptText: 'Các bậc thuế môn bài đối với doanh nghiệp hiện nay là bao nhiêu và doanh nghiệp mới thành lập có được miễn không?',
        tags: ['Thuế môn bài', 'Lệ phí môn bài', 'Miễn thuế năm đầu']
      }
    ]
  }
];
