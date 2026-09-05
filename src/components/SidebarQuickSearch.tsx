import React, { useState, useMemo } from 'react';
import {
  Search,
  ChevronDown,
  Car,
  Scale,
  Briefcase,
  Home,
  Building2,
  BadgePercent,
  Users,
  ShieldCheck,
  BookOpen,
  Sparkles,
  X,
  ArrowRight,
  Filter
} from 'lucide-react';
import type { LegalCategory, LegalSubItem } from '../data/legalCategories';

interface SidebarQuickSearchProps {
  categories: LegalCategory[];
  onSelectPrompt: (promptQuestion: string, categoryName?: string) => void;
  onCloseMobileDrawer?: () => void;
}

export const SidebarQuickSearch: React.FC<SidebarQuickSearchProps> = ({
  categories,
  onSelectPrompt,
  onCloseMobileDrawer
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Tất cả');

  // Nested Accordion State: By default ALL are closed
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const filterTags = [
    'Tất cả',
    'Giao thông',
    'Hình sự',
    'Lao động',
    'Đất đai',
    'Doanh nghiệp',
    'Thuế',
    'Dân sự',
    'An ninh mạng'
  ];

  const toggleCategory = (categoryId: string) => {
    if (expandedCategoryId === categoryId) {
      setExpandedCategoryId(null);
      setExpandedItemId(null);
    } else {
      setExpandedCategoryId(categoryId);
      setExpandedItemId(null);
    }
  };

  const toggleItem = (itemId: string) => {
    setExpandedItemId(prev => (prev === itemId ? null : itemId));
  };

  // Filter items by tag and search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return categories
      .filter(cat => selectedTag === 'Tất cả' || cat.tag === selectedTag)
      .map(cat => {
        const filteredItems = cat.items.filter(item => {
          if (!q) return true;
          return (
            item.title.toLowerCase().includes(q) ||
            item.reference.toLowerCase().includes(q) ||
            item.summary.toLowerCase().includes(q) ||
            item.promptQuestion.toLowerCase().includes(q)
          );
        });

        return {
          ...cat,
          items: filteredItems,
        };
      })
      .filter(cat => cat.items.length > 0);
  }, [categories, selectedTag, searchQuery]);

  const totalItemCount = filteredCategories.reduce((sum, c) => sum + c.items.length, 0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="h-4 w-4 text-blue-600" />;
      case 'Scale':
        return <Scale className="h-4 w-4 text-red-600" />;
      case 'Briefcase':
        return <Briefcase className="h-4 w-4 text-emerald-600" />;
      case 'Home':
        return <Home className="h-4 w-4 text-amber-600" />;
      case 'Building2':
        return <Building2 className="h-4 w-4 text-indigo-600" />;
      case 'BadgePercent':
        return <BadgePercent className="h-4 w-4 text-purple-600" />;
      case 'Users':
        return <Users className="h-4 w-4 text-teal-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-4 w-4 text-cyan-600" />;
      default:
        return <BookOpen className="h-4 w-4 text-slate-600" />;
    }
  };

  const handleAskAI = (item: LegalSubItem, categoryName: string) => {
    onSelectPrompt(item.promptQuestion, categoryName);
    if (onCloseMobileDrawer) {
      onCloseMobileDrawer();
    }
  };

  return (
    <aside className="flex h-full flex-col bg-white border-r border-slate-200 text-slate-800">
      {/* Search Header Panel */}
      <div className="p-4 border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-blue-600" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
              Danh Mục Tra Cứu Pháp Luật
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
            {totalItemCount} mục
          </span>
        </div>

        {/* Realtime Search Input */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim() && !expandedCategoryId && filteredCategories[0]) {
                setExpandedCategoryId(filteredCategories[0].id);
              }
            }}
            placeholder="Tìm theo điều luật, mức phạt, tình huống..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-8 py-2 text-xs text-slate-900 placeholder-slate-400 transition-all focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Xóa tìm kiếm"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* 8 Filter Tags Requested */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
          <span className="text-slate-400 flex items-center pr-1 shrink-0">
            <Filter className="h-3 w-3 mr-0.5" />
          </span>
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setExpandedCategoryId(null);
                setExpandedItemId(null);
              }}
              className={`whitespace-nowrap px-2.5 py-1 rounded-md transition-all font-medium ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Nested Accordion Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
        {filteredCategories.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center bg-slate-50/50">
            <Search className="mx-auto h-7 w-7 text-slate-400 mb-2" />
            <p className="text-xs font-semibold text-slate-700">Không tìm thấy nội dung phù hợp</p>
            <p className="text-[11px] text-slate-500 mt-1">
              Thử từ khóa khác như "nồng độ cồn", "lừa đảo", "sổ đỏ", "thử việc", "thuế môn bài"...
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('Tất cả');
                setExpandedCategoryId(null);
                setExpandedItemId(null);
              }}
              className="mt-3 text-xs text-blue-600 font-semibold hover:underline"
            >
              Xem tất cả 8 nhóm chủ đề
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => {
            const isCategoryExpanded = expandedCategoryId === category.id;

            return (
              <div
                key={category.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                {/* Level 1: Category Header (Always closed by default) */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full flex items-center justify-between p-3 text-left transition-colors ${
                    isCategoryExpanded ? 'bg-blue-50/60 border-b border-slate-200' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 border border-slate-200 shrink-0">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {category.name}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                          {category.items.length} mục
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate max-w-[210px] sm:max-w-xs mt-0.5">
                        {category.docTitle}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                      isCategoryExpanded ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {/* Level 2: Sub-items List (Only opens when category is clicked) */}
                {isCategoryExpanded && (
                  <div className="divide-y divide-slate-100 bg-slate-50/40 p-1.5 space-y-1">
                    {category.items.map((item) => {
                      const isItemExpanded = expandedItemId === item.id;

                      return (
                        <div
                          key={item.id}
                          className="rounded-lg border border-slate-200/80 bg-white overflow-hidden transition-all"
                        >
                          {/* Sub-item Title Row */}
                          <div
                            onClick={() => toggleItem(item.id)}
                            className={`flex items-center justify-between p-2.5 cursor-pointer transition-colors ${
                              isItemExpanded ? 'bg-blue-50/30' : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex-1 pr-2 overflow-hidden">
                              <h4 className="text-xs font-semibold text-slate-800 leading-snug truncate">
                                {item.title}
                              </h4>
                              <span className="text-[10px] text-blue-700 font-mono mt-0.5 block truncate">
                                📜 {item.reference}
                              </span>
                            </div>

                            <ChevronDown
                              className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-150 shrink-0 ${
                                isItemExpanded ? 'rotate-180 text-blue-600' : ''
                              }`}
                            />
                          </div>

                          {/* Level 3: Detail Box & "Hỏi AI về mục này" */}
                          {isItemExpanded && (
                            <div className="px-3 pb-3 pt-2 border-t border-slate-100 bg-white text-xs space-y-2.5">
                              <p className="text-slate-700 text-[11px] leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                                {item.summary}
                              </p>

                              <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between px-1">
                                <span>Căn cứ: {item.reference}</span>
                                <span className="text-blue-600">{category.source}</span>
                              </div>

                              {/* Ask AI CTA Button */}
                              <button
                                onClick={() => handleAskAI(item, category.name)}
                                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all group"
                              >
                                <Sparkles className="h-3.5 w-3.5 text-blue-200 group-hover:scale-110 transition-transform" />
                                <span>Hỏi AI về mục này</span>
                                <ArrowRight className="h-3 w-3 ml-auto text-blue-200 group-hover:translate-x-0.5 transition-transform" />
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Minimal Footer Info */}
      <div className="p-2.5 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between">
        <span>8 nhóm chuyên đề pháp lý</span>
        <span className="font-semibold text-blue-700">vbpl.vn</span>
      </div>
    </aside>
  );
};
