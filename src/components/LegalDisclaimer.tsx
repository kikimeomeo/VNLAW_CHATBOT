import React, { useState } from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { DisclaimerModal } from './DisclaimerModal';

export const LegalDisclaimer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full border-t border-slate-200 bg-slate-50/90 px-4 py-2 text-center text-xs text-slate-500 z-20">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 text-slate-600 text-[11px] sm:text-xs">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-500" />
            <span>
              Lưu ý: Thông tin do AI cung cấp chỉ mang tính chất tham khảo cứu xét. Không thay thế văn bản quy phạm pháp luật chính thức hoặc tư vấn trực tiếp từ Luật sư.
            </span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors ml-1 font-medium"
          >
            <Info className="h-3 w-3" />
            <span>Xem điều khoản</span>
          </button>
        </div>
      </footer>

      <DisclaimerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
