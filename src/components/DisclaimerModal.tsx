import React from 'react';
import { X, ShieldAlert, Scale, BookOpen, AlertTriangle } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl relative text-slate-800">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Tuyên Bố Miễn Trừ Trách Nhiệm Pháp Lý
            </h3>
            <p className="text-xs text-slate-500">
              Nguyên tắc vận hành & cơ sở pháp lý của Cổng Trợ Lý AI
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
          <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-3 text-amber-900">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Khuyến cáo quan trọng:</strong> Hệ thống sử dụng công nghệ mô hình trí tuệ nhân tạo (AI) để tổng hợp và diễn giải văn bản luật. Các phản hồi của Trợ lý chỉ mang tính chất tham khảo cứu xét, không tạo lập quan hệ đại diện hoặc tư vấn pháp lý chính thức.
              </span>
            </div>
          </div>

          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2 flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5 text-blue-600" />
            1. Cơ sở dữ liệu nguồn
          </h4>
          <p>
            Dữ liệu tra cứu được trích xuất và đối chiếu từ Cổng Thông Tin Điện Tử Chính Phủ, Cơ sở dữ liệu Quốc gia về Văn bản Pháp luật (vbpl.vn) và Thư Viện Pháp Luật bao gồm:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Nghị định 100/2019/NĐ-CP & Nghị định 123/2021/NĐ-CP (Xử phạt giao thông)</li>
            <li>Bộ luật Lao động 2019 (Luật số 45/2019/QH14) & Luật Việc làm</li>
            <li>Luật Đất đai 2024 (Luật số 31/2024/QH15)</li>
            <li>Luật Doanh nghiệp 2020 & các văn bản quy định thuế, lệ phí môn bài</li>
          </ul>

          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2 flex items-center gap-1.5">
            <Scale className="h-3.5 w-3.5 text-blue-600" />
            2. Tư vấn trực tiếp từ Luật sư
          </h4>
          <p>
            Đối với các vụ việc tố tụng cụ thể, tranh chấp thừa kế, hợp đồng thương mại hoặc thủ tục phức tạp, công dân và doanh nghiệp được khuyến nghị liên hệ trực tiếp với các Văn phòng Luật sư hoặc Trung tâm Trợ giúp pháp lý Nhà nước để được hỗ trợ chuyên sâu.
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            Tôi đã hiểu & đồng ý
          </button>
        </div>
      </div>
    </div>
  );
};
