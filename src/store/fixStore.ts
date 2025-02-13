import { create } from 'zustand';
import { FixParser, ParsedFixMessage } from '../utils/FixParser';
import { FixValidator } from '../utils/FixValidator';
import { MESSAGE_TEMPLATES } from '../utils/FixDictionary';

interface FixStore {
  rawMessage: string;
  parsedMessage: ParsedFixMessage | null;
  validationErrors: string[];
  fixVersion: string;
  delimiter: string;
  selectedTemplate: string;
  setRawMessage: (message: string) => void;
  parseMessage: () => void;
  resetMessage: () => void;
  loadTemplate: (template: keyof typeof MESSAGE_TEMPLATES) => void;
  setFixVersion: (version: string) => void;
  setDelimiter: (delimiter: string) => void;
}

const formatMessageWithDelimiter = (message: string | Record<number, string>, targetDelimiter: string): string => {
  // If message is an object, convert it to FIX string
  let normalizedMessage = typeof message === 'string' ? message : 
    Object.entries(message)
      .sort(([a], [b]) => parseInt(a) - parseInt(b))
      .map(([tag, value]) => `${tag}=${value}`)
      .join('\u0001') + '\u0001';
  
  // Convert from pipe or space to SOH
  if (normalizedMessage.includes('|')) {
    normalizedMessage = normalizedMessage.replace(/\|/g, '\u0001');
  } else if (!/\u0001/.test(normalizedMessage)) {
    normalizedMessage = normalizedMessage.replace(/\s+/g, '\u0001');
  }
  
  // Then convert to target delimiter
  if (targetDelimiter === '|') {
    return normalizedMessage.replace(/\u0001/g, '|');
  } else if (targetDelimiter === ' ') {
    return normalizedMessage.replace(/\u0001/g, ' ');
  }
  return normalizedMessage;
};

const getVersionString = (version: string) => `FIX.${version}`;

export const useFixStore = create<FixStore>((set, get) => ({
  rawMessage: '',
  parsedMessage: null,
  validationErrors: [],
  fixVersion: localStorage.getItem('fixVersion') || '4.4',
  delimiter: localStorage.getItem('delimiter') || '\u0001',  // Default to SOH
  selectedTemplate: localStorage.getItem('selectedTemplate') || 'newOrder',

  setRawMessage: (message: string) => {
    set({ rawMessage: message });
    setTimeout(() => get().parseMessage(), 500);
  },

  parseMessage: () => {
    const { rawMessage, fixVersion, delimiter } = get();
    const parsedMessage = FixParser.parse(rawMessage, delimiter);
    const validationErrors = FixValidator.validate(parsedMessage, fixVersion);
    set({ parsedMessage, validationErrors });
  },

  resetMessage: () => set({
    rawMessage: '',
    parsedMessage: null,
    validationErrors: []
  }),

  loadTemplate: (template: keyof typeof MESSAGE_TEMPLATES) => {
    const { delimiter, fixVersion } = get();
    const versionString = getVersionString(fixVersion);
    // Get template function and call it with version
    const templateMessage = MESSAGE_TEMPLATES[template](versionString);
    const formattedMessage = formatMessageWithDelimiter(templateMessage, delimiter);
    localStorage.setItem('selectedTemplate', template);
    set({ 
      rawMessage: formattedMessage,
      selectedTemplate: template
    });
    get().parseMessage();
  },

  setFixVersion: (version: string) => {
    localStorage.setItem('fixVersion', version);
    set({ fixVersion: version });
    // Reload template with new version if one is selected
    const { selectedTemplate } = get();
    if (selectedTemplate) {
      get().loadTemplate(selectedTemplate as keyof typeof MESSAGE_TEMPLATES);
    }
  },
  
  setDelimiter: (delimiter: string) => {
    const { rawMessage } = get();
    const formattedMessage = formatMessageWithDelimiter(rawMessage, delimiter);
    localStorage.setItem('delimiter', delimiter);
    set({ 
      delimiter: delimiter,
      rawMessage: formattedMessage
    });
    get().parseMessage();
  }
}));