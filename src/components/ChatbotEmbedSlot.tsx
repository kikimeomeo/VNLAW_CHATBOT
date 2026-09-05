import React, { useState } from 'react';
import { Code2, Check, Copy } from 'lucide-react';

interface ChatbotEmbedSlotProps {
  onBackToNative: () => void;
}

export const ChatbotEmbedSlot: React.FC<ChatbotEmbedSlotProps> = ({ onBackToNative }) => {
  const [embedType, setEmbedType] = useState<'iframe' | 'script'>('iframe');
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleIframeCode = `<div id="chatbot-embed" class="w-full h-full min-h-[700px] rounded-2xl border border-[#334155] overflow-hidden">\n  <iframe \n    src="https://udify.app/chatbot/bXxZTkVnjdKw6kou"\n    style="width: 100%; height: 100%; min-height: 700px"\n    frameborder="0"\n    allow="microphone; clipboard-write"\n    title="Trợ Lý Pháp Luật AI Dify"\n  ></iframe>\n</div>`;

  const sampleScriptCode = `<div id="chatbot-embed">\n  <!-- Script Widget Chatbot Pháp Lý -->\n  <script \n    src="https://udify.app/embed.js" \n    data-chatbot-id="bXxZTkVnjdKw6kou" \n    data-container="#chatbot-embed" \n    defer\n  ></script>\n</div>`;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#0B0F19] text-slate-200 p-2 sm:p-4 overflow-y-auto">
      {/* Top Banner */}
      <div className="rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 p-3 sm:p-4 mb-3 shadow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-display flex items-center gap-2">
                <span>Vị Trí Nhúng Widget Chatbot Ngoài (Dify AI)</span>
                <code className="text-xs text-amber-300 font-mono bg-slate-900/90 px-2 py-0.5 rounded border border-amber-500/30">
                  #chatbot-embed
                </code>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400">
                Container chuẩn HTML5 đã tích hợp sẵn iframe Dify: udify.app/chatbot/bXxZTkVnjdKw6kou.
              </p>
            </div>
          </div>

          <button
            onClick={onBackToNative}
            className="self-start sm:self-center px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
          >
            ← Quay lại Giao diện Chat
          </button>
        </div>
      </div>

      {/* Actual #chatbot-embed container with rounded-2xl and #334155 border */}
      <div className="flex-1 min-h-[500px] flex flex-col justify-between">
        <div
          id="chatbot-embed"
          className="w-full h-full min-h-[450px] flex-1 rounded-2xl border border-[#334155] bg-slate-900/60 shadow-2xl overflow-hidden backdrop-blur-sm relative"
        >
          <iframe
            src="https://udify.app/chatbot/bXxZTkVnjdKw6kou"
            className="w-full h-full flex-1 border-0 rounded-2xl"
            style={{ width: '100%', height: '100%', minHeight: '500px' }}
            allow="microphone; clipboard-write"
            title="Trợ Lý Pháp Luật AI Dify Embed"
          />
        </div>

        {/* Code Snippet Helper Tabs */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">Mã nhúng mẫu:</span>
              <div className="flex rounded-md border border-slate-800 bg-slate-900 p-0.5 text-xs">
                <button
                  onClick={() => setEmbedType('iframe')}
                  className={`px-2 py-0.5 rounded text-[11px] ${
                    embedType === 'iframe'
                      ? 'bg-amber-500/20 text-amber-300 font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Dạng &lt;iframe&gt;
                </button>
                <button
                  onClick={() => setEmbedType('script')}
                  className={`px-2 py-0.5 rounded text-[11px] ${
                    embedType === 'script'
                      ? 'bg-amber-500/20 text-amber-300 font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Dạng &lt;script&gt;
                </button>
              </div>
            </div>

            <button
              onClick={() => handleCopyCode(embedType === 'iframe' ? sampleIframeCode : sampleScriptCode)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-300 transition-colors"
            >
              {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedCode ? 'Đã sao chép' : 'Sao chép mã'}</span>
            </button>
          </div>

          <pre className="text-[11px] bg-slate-900/90 text-amber-300/90 p-3 rounded-lg border border-slate-800 font-mono overflow-x-auto">
            <code>{embedType === 'iframe' ? sampleIframeCode : sampleScriptCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
