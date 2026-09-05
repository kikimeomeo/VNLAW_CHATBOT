import { useState } from 'react';
import { Header } from './components/Header';
import { SidebarQuickSearch } from './components/SidebarQuickSearch';
import { ChatContainer } from './components/ChatContainer';
import { LegalDisclaimer } from './components/LegalDisclaimer';
import { legalCategories } from './data/legalCategories';
import { X } from 'lucide-react';

export function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [copiedPromptNotification, setCopiedPromptNotification] = useState<string | null>(null);

  const handleSelectPrompt = (promptText: string) => {
    // Copy to clipboard
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(promptText).catch(() => {});
    }
    setCopiedPromptNotification(promptText);
  };

  return (
    <div className="flex h-screen w-full flex-col bg-slate-50 text-slate-900 antialiased overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* Top Clean Header */}
      <Header
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      {/* Main Dual-Column Grid Layout */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Mobile Drawer Backdrop */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden transition-opacity"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Column 1: Minimalist Nested Sidebar (42% on desktop) */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full max-w-[340px] sm:max-w-[380px] lg:static lg:z-auto lg:w-[42%] lg:max-w-none lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white ${
            isMobileSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
          }`}
        >
          <div className="relative h-full flex flex-col">
            {/* Mobile close drawer button */}
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 lg:hidden border border-slate-200"
              aria-label="Đóng danh mục"
            >
              <X className="h-4 w-4" />
            </button>

            <SidebarQuickSearch
              categories={legalCategories}
              onSelectPrompt={handleSelectPrompt}
              onCloseMobileDrawer={() => setIsMobileSidebarOpen(false)}
            />
          </div>
        </div>

        {/* Column 2: Main Chat Hub (58% on desktop, centered & balanced) */}
        <main className="flex flex-1 flex-col overflow-hidden bg-slate-50 p-2 sm:p-4 lg:p-5 lg:w-[58%] items-center justify-center">
          <div className="w-full h-full max-w-4xl flex flex-col justify-center">
            <ChatContainer
              copiedPromptNotification={copiedPromptNotification}
              onDismissNotification={() => setCopiedPromptNotification(null)}
            />
          </div>
        </main>
      </div>

      {/* Subtle Footer Disclaimer */}
      <LegalDisclaimer />
    </div>
  );
}

export default App;
