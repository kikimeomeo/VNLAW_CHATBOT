import type { PromptSuggestion } from '../types/legal';

export const PROMPT_SUGGESTIONS: PromptSuggestion[] = [
  {
    id: 'p1',
    domain: 'labor',
    title: 'Trợ cấp thất nghiệp BHXH',
    prompt: 'Cách tính tiền trợ cấp thất nghiệp theo Luật BHXH mới nhất?',
    icon: 'Calculator',
    tag: 'Lao động'
  },
  {
    id: 'p2',
    domain: 'land',
    title: 'Hồ sơ chuyển nhượng Sổ đỏ',
    prompt: 'Hồ sơ chuyển nhượng quyền sử dụng đất gồm những giấy tờ gì?',
    icon: 'FileText',
    tag: 'Đất đai'
  },
  {
    id: 'p3',
    domain: 'traffic',
    title: 'Mức phạt xe máy đi ngược chiều',
    prompt: 'Mức phạt lỗi đi ngược chiều đối với xe máy là bao nhiêu?',
    icon: 'AlertTriangle',
    tag: 'Giao thông'
  },
  {
    id: 'p4',
    domain: 'business',
    title: 'Thuế môn bài & Thủ tục thành lập',
    prompt: 'Các bậc thuế môn bài đối với doanh nghiệp hiện nay là bao nhiêu và doanh nghiệp mới thành lập có được miễn không?',
    icon: 'Briefcase',
    tag: 'Doanh nghiệp'
  }
];

export interface LegalAnswerTemplate {
  keywords: string[];
  title: string;
  domainTag: string;
  citations: Array<{ document: string; article: string; title: string }>;
  markdownResponse: string;
  followUps: string[];
}

export const LEGAL_KNOWLEDGE_BASE: LegalAnswerTemplate[] = [
  {
    keywords: ['thất nghiệp', 'bhtn', 'trợ cấp thất nghiệp', 'bhxh'],
    title: 'Cách tính tiền trợ cấp thất nghiệp theo Luật Việc làm & BHXH',
    domainTag: 'Lao động & BHXH',
    citations: [
      {
        document: 'Luật Việc làm 2013',
        article: 'Điều 50',
        title: 'Mức, thời gian, thời điểm hưởng trợ cấp thất nghiệp'
      },
      {
        document: 'Nghị định 28/2015/NĐ-CP',
        article: 'Điều 8',
        title: 'Quy định chi tiết thi hành Luật Việc làm'
      }
    ],
    markdownResponse: `Chào bạn, căn cứ theo quy định của **Luật Việc làm số 38/2013/QH13** và các văn bản hướng dẫn hiện hành, mức trợ cấp thất nghiệp được tính như sau:

> *"Mức hưởng trợ cấp thất nghiệp hằng tháng bằng 60% mức bình quân tiền lương tháng đóng bảo hiểm thất nghiệp của 06 tháng liền kề trước khi thất nghiệp."*
> — Trích **Khoản 1 Điều 50 Luật Việc làm 2013**

### 1. Công Thức Tính Hưởng Hàng Tháng
$$\\text{Mức hưởng/tháng} = \\text{Bình quân tiền lương đóng BHTN 06 tháng liền kề} \\times 60\\%$$

**Ví dụ thực tế:**
- Nếu mức bình quân tiền lương đóng BHTN của bạn trong 6 tháng gần nhất là **10.000.000 VNĐ/tháng**.
- Mức trợ cấp thất nghiệp nhận mỗi tháng là: $10.000.000 \\times 60\\% =$ **6.000.000 VNĐ/tháng**.

### 2. Khung Giới Hạn Tối Đa
- Đối với người lao động thuộc đối tượng thực hiện chế độ tiền lương do Nhà nước quy định: Tối đa không quá **5 lần mức lương cơ sở**.
- Đối với người lao động đóng theo chế độ do NSDLĐ quyết định: Tối đa không quá **5 lần mức lương tối thiểu vùng** tại thời điểm chấm dứt HĐLĐ.

### 3. Thời Gian Được Hưởng
- Đóng đủ từ **12 tháng đến đủ 36 tháng**: Hưởng **03 tháng** trợ cấp thất nghiệp.
- Cứ đóng đủ thêm **12 tháng**: Được hưởng thêm **01 tháng** trợ cấp (thời gian hưởng tối đa không quá **12 tháng**).

### 4. Điều Kiện Hưởng Cần Lưu Ý
1. Đã chấm dứt HĐLĐ hoặc HĐLV hợp pháp (trừ trường hợp đơn phương chấm dứt trái pháp luật hoặc hưởng lương hưu).
2. Đã đóng BHTN từ đủ 12 tháng trở lên trong vòng 24 tháng trước khi chấm dứt HĐLĐ.
3. Đã nộp hồ sơ hưởng trợ cấp tại Trung tâm Dịch vụ Việc làm trong thời hạn **03 tháng** kể từ ngày chấm dứt HĐLĐ.
4. Chưa tìm được việc làm sau 15 ngày làm việc kể từ ngày nộp hồ sơ.`,
    followUps: [
      'Hồ sơ hưởng trợ cấp thất nghiệp gồm những gì?',
      'Sau bao lâu kể từ ngày nộp hồ sơ thì nhận được tiền?',
      'Có được bảo lưu thời gian đóng BHTN chưa hưởng không?'
    ]
  },
  {
    keywords: ['sang tên', 'sổ đỏ', 'chuyển nhượng', 'hồ sơ chuyển nhượng', 'đất đai', 'sổ hồng'],
    title: 'Hồ sơ chuyển nhượng quyền sử dụng đất & Thủ tục sang tên Sổ đỏ',
    domainTag: 'Đất đai & BĐS',
    citations: [
      {
        document: 'Luật Đất đai 2024',
        article: 'Điều 133 & Điều 137',
        title: 'Đăng ký biến động đất đai, tài sản gắn liền với đất'
      },
      {
        document: 'Nghị định 101/2024/NĐ-CP',
        article: 'Điều 29',
        title: 'Trình tự, thủ tục đăng ký biến động đất đai'
      },
      {
        document: 'Luật Công chứng 2014',
        article: 'Điều 40',
        title: 'Công chứng hợp đồng chuyển nhượng quyền sử dụng đất'
      }
    ],
    markdownResponse: `Chào bạn, theo quy định của **Luật Đất đai 2024** và các Nghị định hướng dẫn thi hành, hồ sơ chuyển nhượng quyền sử dụng đất (sang tên Sổ đỏ/Sổ hồng) được thực hiện qua 2 giai đoạn chính:

### Giai Đoạn 1: Hồ Sơ Công Chứng Hợp Đồng Mua Bán (Tại Văn Phòng Công Chứng)
Hai bên cần mang bản gốc và bản sao các giấy tờ sau:
- **Bên chuyển nhượng (Bên bán):**
  - Giấy chứng nhận quyền sử dụng đất (Sổ đỏ / Sổ hồng bản gốc).
  - Căn cước công dân gắn chip hoặc tài khoản VNeID mức 2 của cả vợ và chồng.
  - Giấy đăng ký kết hôn (nếu độc thân thì cần Giấy xác nhận tình trạng hôn nhân).
- **Bên nhận chuyển nhượng (Bên mua):**
  - Căn cước công dân gắn chip của bên mua.
  - Giấy chứng nhận tình trạng hôn nhân / đăng ký kết hôn.

### Giai Đoạn 2: Hồ Sơ Đăng Ký Biến Động (Nộp tại Chi nhánh VP Đăng ký đất đai / Bộ phận Một cửa)
Hồ sơ sang tên bao gồm:
1. **Đơn đăng ký biến động đất đai, tài sản gắn liền với đất** (theo Mẫu quy định tại Nghị định 101/2024/NĐ-CP).
2. **Hợp đồng chuyển nhượng quyền sử dụng đất** (bản chính đã công chứng).
3. **Bản gốc Giấy chứng nhận quyền sử dụng đất** đã cấp.
4. **Tờ khai thuế thu nhập cá nhân** (theo mẫu).
5. **Tờ khai lệ phí trước bạ** (theo mẫu).
6. Bản sao CMND/CCCD của các bên tham gia giao dịch.

> *"Hợp đồng chuyển nhượng, tặng cho, thế chấp, góp vốn bằng quyền sử dụng đất, quyền sử dụng đất và tài sản gắn liền với đất phải được công chứng hoặc chứng thực, trừ trường hợp kinh doanh bất động sản."*
> — Trích **Khoản 3 Điều 27 Luật Đất đai 2024**

### Nghĩa Vụ Tài Chính Phải Nộp
- **Thuế Thu nhập cá nhân:** **2%** trên giá trị chuyển nhượng (theo luật Bên bán nộp, hoặc theo thỏa thuận).
- **Lệ phí trước bạ:** **0.5%** giá trị nhà đất tính theo Bảng giá đất của UBND cấp tỉnh (Bên mua nộp).
- **Phí thẩm định hồ sơ & Phí cấp đổi GCN:** Dao động từ 500.000đ - 2.000.000đ tùy từng địa phương.

⏱️ **Thời hạn giải quyết:** Không quá **10 - 15 ngày làm việc** kể từ ngày nhận đủ hồ sơ hợp lệ.`,
    followUps: [
      'Trường hợp nào được miễn thuế TNCN khi sang tên sổ đỏ?',
      'Đất đang thế chấp ngân hàng có công chứng mua bán được không?',
      'Thời hạn nộp thuế sau khi công chứng hợp đồng là bao lâu?'
    ]
  },
  {
    keywords: ['ngược chiều', 'xe máy', 'đi ngược chiều', 'giao thông', 'nghị định 100', 'nghị định 123'],
    title: 'Mức phạt lỗi đi ngược chiều đối với xe máy theo Nghị định 100/2019/NĐ-CP',
    domainTag: 'Giao thông đường bộ',
    citations: [
      {
        document: 'Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)',
        article: 'Khoản 5 Điều 6',
        title: 'Xử phạt người điều khiển xe mô tô, xe gắn máy vi phạm quy tắc giao thông'
      },
      {
        document: 'Nghị định 100/2019/NĐ-CP',
        article: 'Điểm b, c Khoản 10 Điều 6',
        title: 'Hình thức xử phạt bổ sung'
      }
    ],
    markdownResponse: `Chào bạn, hành vi đi ngược chiều đối với xe máy là lỗi vi phạm nghiêm trọng có nguy cơ trực tiếp gây tai nạn giao thông. Căn cứ **Nghị định 100/2019/NĐ-CP** (đã được sửa đổi, bổ sung bởi **Nghị định 123/2021/NĐ-CP**):

### 1. Mức Phạt Tiền
- Người điều khiển xe mô tô, xe gắn máy (kể cả xe máy điện) đi ngược chiều của đường một chiều hoặc đi ngược chiều trên đường có biển *"Cấm đi ngược chiều"* bị phạt tiền:
  **Từ 1.000.000 đồng đến 2.000.000 đồng** *(mức trung bình là 1.500.000 đồng)*.

> *"Phạt tiền từ 1.000.000 đồng đến 2.000.000 đồng đối với người điều khiển xe thực hiện hành vi đi ngược chiều của đường một chiều, đi ngược chiều trên đường có biển 'Cấm đi ngược chiều', trừ hành vi vi phạm quy định tại điểm b khoản 7 Điều này..."*
> — Trích **Khoản 5 Điều 6 Nghị định 100/2019/NĐ-CP (sửa đổi bởi NĐ 123/2021/NĐ-CP)**

### 2. Hình Thức Xử Phạt Bổ Sung (Tước Giấy Phép Lái Xe)
- **Trường hợp vi phạm thông thường:** Bị **tước quyền sử dụng Giấy phép lái xe từ 01 tháng đến 03 tháng** (Điểm b Khoản 10 Điều 6).
- **Trường hợp đi ngược chiều gây tai nạn giao thông:**
  - Phạt tiền từ **4.000.000 đồng đến 5.000.000 đồng**.
  - Bị **tước quyền sử dụng Giấy phép lái xe từ 02 tháng đến 04 tháng** (Điểm c Khoản 10 Điều 6).

### 3. Có Bị Tạm Giữ Phương Tiện (Giữ Xe) Không?
- Theo quy định tại Điều 82 Nghị định 100/2019/NĐ-CP, lỗi đi ngược chiều thông thường **không thuộc trường hợp bắt buộc phải tạm giữ phương tiện ngay**.
- Tuy nhiên, nếu tại thời điểm kiểm tra, người điều khiển **không xuất trình được Giấy đăng ký xe (Cà vẹt)** hoặc **Giấy phép lái xe**, CSGT có quyền tạm giữ phương tiện tối đa 07 ngày để xác minh nguồn gốc.`,
    followUps: [
      'Lỗi đi ngược chiều ô tô bị phạt bao nhiêu tiền?',
      'Thời hạn nộp phạt vi phạm giao thông là bao nhiêu ngày?',
      'Nộp phạt vi phạm giao thông trực tuyến qua Cổng dịch vụ công quốc gia như thế nào?'
    ]
  },
  {
    keywords: ['thuế môn bài', 'lệ phí môn bài', 'thành lập', 'doanh nghiệp', 'vốn điều lệ'],
    title: 'Các bậc thuế môn bài doanh nghiệp và chính sách miễn thuế năm đầu',
    domainTag: 'Doanh nghiệp & Thuế',
    citations: [
      {
        document: 'Nghị định 139/2016/NĐ-CP',
        article: 'Điều 4',
        title: 'Mức thu lệ phí môn bài đối với tổ chức hoạt động sản xuất kinh doanh'
      },
      {
        document: 'Nghị định 22/2020/NĐ-CP',
        article: 'Khoản 1 Điều 1',
        title: 'Sửa đổi, bổ sung quy định miễn lệ phí môn bài'
      }
    ],
    markdownResponse: `Chào bạn, căn cứ **Nghị định 139/2016/NĐ-CP** và **Nghị định 22/2020/NĐ-CP** sửa đổi bổ sung, mức lệ phí môn bài hàng năm đối với tổ chức, doanh nghiệp được xác định căn cứ vào **vốn điều lệ** ghi trên Giấy chứng nhận đăng ký doanh nghiệp:

### 1. Bảng Biểu Mức Lệ Phí Môn Bài Hàng Năm

| Bậc môn bài | Vốn điều lệ / Vốn đầu tư | Mức nộp cả năm (VNĐ) |
| :--- | :--- | :--- |
| **Bậc 1** | Trên 10 tỷ đồng | **3.000.000 VNĐ** / năm |
| **Bậc 2** | Từ 10 tỷ đồng trở xuống | **2.000.000 VNĐ** / năm |
| **Bậc 3** | Chi nhánh, VP đại diện, địa điểm KD | **1.000.000 VNĐ** / năm |

> *"Miễn lệ phí môn bài trong năm đầu thành lập hoặc ra hoạt động sản xuất, kinh doanh (từ ngày 01 tháng 01 đến ngày 31 tháng 12) đối với: Tổ chức thành lập mới (được cấp mã số thuế mới, mã số doanh nghiệp mới)."*
> — Trích **Điểm c Khoản 2 Điều 1 Nghị định 22/2020/NĐ-CP**

### 2. Ưu Đãi Miễn Lệ Phí Môn Bài Năm Đầu Thành Lập
- **Doanh nghiệp thành lập mới:** Được **MIỄN 100% lệ phí môn bài** trong năm đầu tiên thành lập (từ ngày cấp phép đến hết ngày 31/12 của năm đó).
- **Chi nhánh, VPĐD, địa điểm kinh doanh:** Nếu thành lập trong thời gian doanh nghiệp được miễn lệ phí môn bài thì các đơn vị phụ thuộc này **cũng được miễn** lệ phí môn bài trong thời gian đó.
- Doanh nghiệp nhỏ và vừa chuyển đổi từ hộ kinh doanh được miễn lệ phí môn bài trong thời hạn **03 năm** kể từ ngày được cấp GCN ĐKKD lần đầu.

### 3. Thời Hạn Nộp Tờ Khai & Tiền Lệ Phí
- **Hạn nộp tờ khai môn bài (cho DN mới):** Chậm nhất là ngày **30 tháng 01 năm sau** năm thành lập.
- **Hạn nộp tiền lệ phí môn bài các năm tiếp theo:** Chậm nhất là ngày **30 tháng 01 hàng năm**.`,
    followUps: [
      'Hồ sơ khai thuế ban đầu của doanh nghiệp mới gồm những gì?',
      'Cách nộp thuế điện tử qua hệ thống thuedientu.gdt.gov.vn?',
      'Doanh nghiệp tạm ngừng kinh doanh có phải nộp thuế môn bài không?'
    ]
  },
  {
    keywords: ['nồng độ cồn', 'rượu bia', 'cồn ô tô', 'cồn xe máy'],
    title: 'Biểu mức phạt nồng độ cồn mới nhất theo Nghị định 100 và Nghị định 123',
    domainTag: 'Giao thông đường bộ',
    citations: [
      {
        document: 'Nghị định 100/2019/NĐ-CP (sửa đổi bổ sung bởi NĐ 123/2021/NĐ-CP)',
        article: 'Điều 5, 6, 8',
        title: 'Quy định mức xử phạt nồng độ cồn các phương tiện'
      }
    ],
    markdownResponse: `Chào bạn, theo pháp luật Việt Nam hiện hành, **nguyên tắc "Đã uống rượu bia thì không lái xe"** được thực thi triệt để. Mọi nồng độ cồn đo được trong máu hoặc khí thở (> 0) đều bị xử phạt theo 3 khung mức:

### Bảng So Sánh Mức Phạt Nồng Độ Cồn (Ô tô vs Xe máy)

| Khung nồng độ | Phương tiện | Phạt tiền | Tước Giấy phép lái xe |
| :--- | :--- | :--- | :--- |
| **Mức 1**<br>(Chưa vượt 50mg/100ml máu hoặc 0.25mg/1L khí thở) | **Ô tô**<br>**Xe máy** | 6.000.000đ – 8.000.000đ<br>2.000.000đ – 3.000.000đ | Tước GPLX **10 – 12 tháng**<br>Tước GPLX **10 – 12 tháng** |
| **Mức 2**<br>(Vượt 50 – 80mg/100ml máu hoặc 0.25 – 0.4mg/1L khí thở) | **Ô tô**<br>**Xe máy** | 16.000.000đ – 18.000.000đ<br>4.000.000đ – 5.000.000đ | Tước GPLX **16 – 18 tháng**<br>Tước GPLX **16 – 18 tháng** |
| **Mức 3 (Kịch khung)**<br>(Vượt quá 80mg/100ml máu hoặc vượt quá 0.4mg/1L khí thở) | **Ô tô**<br>**Xe máy** | 30.000.000đ – 40.000.000đ<br>6.000.000đ – 8.000.000đ | Tước GPLX **22 – 24 tháng**<br>Tước GPLX **22 – 24 tháng** |

> *"Người điều khiển phương tiện không chấp hành yêu cầu kiểm tra về nồng độ cồn của người thi hành công vụ sẽ bị xử phạt ở mức cao nhất (Mức 3 - Kịch khung) đối với phương tiện đó."*

### Tạm Giữ Phương Tiện
Cảnh sát giao thông có quyền **tạm giữ phương tiện đến 07 ngày** trước khi ra quyết định xử phạt để bảo đảm thi hành quyết định đối với tất cả các mức vi phạm nồng độ cồn.`,
    followUps: [
      'Đi xe đạp có bị phạt nồng độ cồn không?',
      'Thời hạn tước bằng lái xe được tính từ thời điểm nào?',
      'Bị tước bằng lái xe mà vẫn lái xe thì bị phạt thế nào?'
    ]
  }
];

export function findLegalAnswer(query: string): LegalAnswerTemplate | null {
  const normalized = query.toLowerCase();
  for (const item of LEGAL_KNOWLEDGE_BASE) {
    if (item.keywords.some(k => normalized.includes(k))) {
      return item;
    }
  }
  return null;
}
