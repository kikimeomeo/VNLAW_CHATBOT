import React, { useState } from 'react';
import {
  Scale,
  User,
  Copy,
  Check,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  BookmarkCheck
} from 'lucide-react';
import type { ChatMessage } from '../types/legal';

interface ChatMessageItemProps {
  message: ChatMessage;
  onSelectSuggestedPrompt?: (prompt: string) => void;
}

export const ChatMessageItem: React.FC<ChatMessageItemProps> = ({
  message,
  onSelectSuggestedPrompt
}) => {
  const [copied, setCopied] = useState(false);
  const isAssistant = message.role === 'assistant';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to render markdown-like content into structured JSX
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];

    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeader: string[] = [];

    const flushTable = (index: number) => {
      if (tableHeader.length > 0 || tableRows.length > 0) {
        elements.push(
          <div key={`table-${index}`} className="my-3 overflow-x-auto rounded-lg border border-slate-700/80 bg-slate-950/60 shadow-sm">
            <table className="min-w-full text-xs text-left">
              {tableHeader.length > 0 && (
                <thead className="bg-slate-900/90 text-amber-300 font-semibold border-b border-slate-700">
                  <tr>
                    {tableHeader.map((th, i) => (
                      <th key={i} className="px-3 py-2 border-r border-slate-800 last:border-r-0" dangerouslySetInnerHTML={{ __html: formatInline(th) }} />
                    ))}
                  </tr>
                </thead>
              )}
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {tableRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-800/30 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-3 py-2 border-r border-slate-800 last:border-r-0" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableHeader = [];
        tableRows = [];
        inTable = false;
      }
    };

    const formatInline = (text: string): string => {
      let formatted = text;
      // Bold
      formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-200 font-semibold">$1</strong>');
      // Italic
      formatted = formatted.replace(/\*(.*?)\*/g, '<em class="text-slate-300 italic">$1</em>');
      // Math/Code inline
      formatted = formatted.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 font-mono text-[11px]">$1</code>');
      return formatted;
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      // Check table row
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const parts = trimmed.split('|').map(s => s.trim()).filter((_, i, arr) => i !== 0 && i !== arr.length - 1);
        if (parts.every(p => /^[:\s-]+$/.test(p))) {
          // Separator row, skip
          return;
        }
        if (!inTable) {
          inTable = true;
          tableHeader = parts;
        } else {
          tableRows.push(parts);
        }
        return;
      } else if (inTable) {
        flushTable(idx);
      }

      // Headings
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h4 key={idx} className="text-sm font-bold text-amber-300 mt-4 mb-2 flex items-center gap-1.5 font-display">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            {trimmed.replace('### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h3 key={idx} className="text-base font-bold text-white mt-4 mb-2 border-b border-slate-700/60 pb-1 font-display">
            {trimmed.replace('## ', '')}
          </h3>
        );
      }
      // Blockquotes (Legal Quote Highlight)
      else if (trimmed.startsWith('> ')) {
        const quoteText = trimmed.replace(/^>\s*/, '');
        elements.push(
          <div
            key={idx}
            className="my-3 rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-3 text-xs text-amber-100/90 shadow-sm backdrop-blur-sm italic relative"
          >
            <span className="text-amber-400 font-bold text-sm block not-italic mb-1 flex items-center gap-1">
              📜 Trích Dẫn Quy Phạm Pháp Luật:
            </span>
            <div dangerouslySetInnerHTML={{ __html: formatInline(quoteText) }} />
          </div>
        );
      }
      // Bullet points
      else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletText = trimmed.replace(/^[-*]\s*/, '');
        elements.push(
          <li key={idx} className="ml-4 list-disc text-xs text-slate-300 my-1 pl-1 marker:text-amber-400 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: formatInline(bulletText) }} />
          </li>
        );
      }
      // Numbered items
      else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 my-1 leading-relaxed">
            <span className="font-semibold text-amber-400 shrink-0 font-mono">
              {trimmed.match(/^\d+\./)?.[0]}
            </span>
            <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed.replace(/^\d+\.\s*/, '')) }} />
          </div>
        );
      }
      // Plain text / paragraph
      else if (trimmed.length > 0) {
        elements.push(
          <p key={idx} className="text-xs text-slate-200 leading-relaxed my-1.5" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        );
      }
    });

    if (inTable) {
      flushTable(lines.length);
    }

    return elements;
  };

  return (
    <div
      className={`group relative flex gap-3 px-4 py-4 sm:px-6 transition-colors ${
        isAssistant ? 'bg-slate-900/40 border-y border-slate-800/60' : 'bg-transparent'
      }`}
    >
      {/* Avatar */}
      <div className="shrink-0 pt-0.5">
        {isAssistant ? (
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/25 to-slate-800 border border-amber-500/40 shadow-glow-amber">
            <Scale className="h-4 w-4 text-amber-400" />
            <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-300 shadow-sm">
            <User className="h-4 w-4" />
          </div>
        )}
      </div>

      {/* Message Body */}
      <div className="flex-1 space-y-2 overflow-hidden">
        {/* Author header info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-200">
              {isAssistant ? 'Trợ Lý Pháp Luật AI' : 'Bạn (Công Dân / Doanh Nghiệp)'}
            </span>
            {isAssistant && (
              <span className="flex items-center gap-1 rounded bg-blue-500/10 px-1.5 py-0.2 text-[10px] font-medium text-blue-400 border border-blue-500/30">
                <ShieldCheck className="h-3 w-3" />
                Đối chiếu Luật VN
              </span>
            )}
            <span className="text-[10px] text-slate-500">{message.timestamp}</span>
          </div>

          {/* Copy Button */}
          {isAssistant && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 rounded px-2 py-1 text-[11px] text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors border border-transparent hover:border-slate-700"
              title="Sao chép nội dung câu trả lời"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Sao chép</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Citations Tag Bar */}
        {isAssistant && message.lawCitations && message.lawCitations.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 py-1">
            <span className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">
              <BookmarkCheck className="h-3 w-3 text-amber-400" />
              Căn cứ pháp lý:
            </span>
            {message.lawCitations.map((cite, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-md bg-slate-800/90 px-2 py-0.5 text-[10px] font-medium text-amber-300 border border-slate-700 hover:border-amber-500/50 transition-colors cursor-default"
                title={`${cite.article} - ${cite.title}`}
              >
                <span>{cite.document} ({cite.article})</span>
                <ExternalLink className="h-2.5 w-2.5 opacity-60" />
              </span>
            ))}
          </div>
        )}

        {/* Message Content */}
        <div className="prose prose-invert max-w-none text-xs leading-relaxed">
          {renderFormattedContent(message.content)}
        </div>

        {/* Follow-up / Suggested questions */}
        {isAssistant && message.suggestedPrompts && message.suggestedPrompts.length > 0 && (
          <div className="pt-3 border-t border-slate-800/60 mt-3">
            <p className="text-[11px] font-medium text-slate-400 mb-1.5 flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-amber-400" />
              Câu hỏi liên quan đề xuất:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {message.suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => onSelectSuggestedPrompt && onSelectSuggestedPrompt(prompt)}
                  className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-300 hover:border-amber-500/40 hover:bg-slate-800 hover:text-amber-300 transition-all text-left"
                >
                  {prompt} →
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
