import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

interface ChatContainerProps {
  copiedPromptNotification?: string | null;
  onDismissNotification?: () => void;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  copiedPromptNotification,
  onDismissNotification
}) => {
  const [copiedManual, setCopiedManual] = useState(false);

  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedManual(true);
    setTimeout(() => setCopiedManual(false), 2000);
  };

  return (
    <div className="flex flex-col h-full w-full justify-center">
      {/* Toast Notification when user selects a prompt from sidebar */}
      {copiedPromptNotification && (
        <div className="mb-2 flex items-center justify-between gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-2 text-xs text-blue-900 shadow-sm animate-fade-in">
          <div className="flex items-center gap-2 truncate">
            <Sparkles className="h-4 w-4 shrink-0 text-blue-600" />
            <span className="truncate">
              <strong>Đã sao chép câu hỏi:</strong> "{copiedPromptNotification}"
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCopyPrompt(copiedPromptNotification)}
              className="flex items-center gap-1 rounded bg-blue-100 hover:bg-blue-200 px-2 py-0.5 text-[11px] font-semibold text-blue-800 transition-colors border border-blue-200"
            >
              {copiedManual ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
              <span>{copiedManual ? 'Đã chép' : 'Chép lại'}</span>
            </button>
            {onDismissNotification && (
              <button
                onClick={onDismissNotification}
                className="text-blue-500 hover:text-blue-900 text-xs px-1 font-bold"
                aria-label="Đóng thông báo"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}

      {/* Official Dify Chatbot Iframe Container */}
      <div className="w-full h-full min-h-[620px] max-h-[750px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <iframe
          src="https://udify.app/chatbot/bXxZTkVnjdKw6kou"
          className="w-full h-full flex-1 border-0 min-h-[620px]"
          allow="microphone; clipboard-write"
          title="Trợ Lý Pháp Luật AI - Dify Chatbot"
        />
      </div>
    </div>
  );
};
