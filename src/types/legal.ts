export type LegalDomain = 'all' | 'traffic' | 'labor' | 'land' | 'business';

export interface QuickReferenceItem {
  id: string;
  title: string;
  domain: LegalDomain;
  lawReference: string;
  summary: string;
  highlights: string[];
  promptText: string;
  tags: string[];
}

export interface QuickReferenceCategory {
  id: LegalDomain;
  title: string;
  iconName: string;
  badge: string;
  badgeColor: string;
  description: string;
  items: QuickReferenceItem[];
}

export interface LawCitation {
  document: string;
  article: string;
  title: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  lawCitations?: LawCitation[];
  domainTag?: string;
  suggestedPrompts?: string[];
  isVerified?: boolean;
}

export interface PromptSuggestion {
  id: string;
  domain: LegalDomain;
  title: string;
  prompt: string;
  icon: string;
  tag: string;
}
