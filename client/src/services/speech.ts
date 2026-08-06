// Speech Recognition & Speech Synthesis Utility

const langToBCP47: Record<string, string> = {
  en: 'en-IN',
  te: 'te-IN',
  hi: 'hi-IN',
  ta: 'ta-IN',
  kn: 'kn-IN',
  ml: 'ml-IN'
};

export class SpeechService {
  private static recognition: any = null;
  private static isListening: boolean = false;

  public static speak(text: string, lang: string = 'en', onEnd?: () => void) {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      if (onEnd) onEnd();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Clean text by stripping markdown symbols
    const cleanText = text.replace(/[*#_`~]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langToBCP47[lang] || 'en-IN';
    utterance.rate = 0.95; // Slightly calmer pace for farmers
    utterance.pitch = 1.0;

    // Try finding matching voice
    const voices = window.speechSynthesis.getVoices();
    const targetLangPrefix = (langToBCP47[lang] || 'en-IN').split('-')[0];
    const matchedVoice = voices.find(v => v.lang.startsWith(targetLangPrefix));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  }

  public static stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public static startListening(
    lang: string = 'en',
    onResult: (transcript: string, isFinal: boolean) => void,
    onError?: (err: any) => void
  ) {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      if (onError) onError('Speech Recognition is not supported by your browser.');
      return null;
    }

    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = langToBCP47[lang] || 'en-IN';

    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      const text = finalTranscript || interimTranscript;
      onResult(text, !!finalTranscript);
    };

    recognition.onerror = (event: any) => {
      console.warn('Speech Recognition error:', event.error);
      this.isListening = false;
      if (onError) onError(event.error);
    };

    recognition.onend = () => {
      this.isListening = false;
    };

    this.recognition = recognition;
    this.isListening = true;
    recognition.start();
    return recognition;
  }

  public static stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  // Read Page feature implementation: extracts visible text elements on screen
  public static readCurrentPage(lang: string = 'en', onComplete?: () => void) {
    const mainEl = document.querySelector('main') || document.body;
    if (!mainEl) return;

    // Extract visible paragraph, heading, card text, ignoring buttons, nav, icons, hidden elements
    const elements = mainEl.querySelectorAll('h1, h2, h3, h4, p, li, span');
    const textPieces: string[] = [];

    elements.forEach((el) => {
      // Skip buttons, icons, or hidden elements
      if (
        el.closest('button') ||
        el.closest('nav') ||
        el.closest('footer') ||
        el.classList.contains('sr-only') ||
        (el as HTMLElement).offsetParent === null
      ) {
        return;
      }
      const txt = el.textContent?.trim();
      if (txt && txt.length > 3 && !textPieces.includes(txt)) {
        textPieces.push(txt);
      }
    });

    const fullPageText = textPieces.join('. ');
    if (fullPageText) {
      this.speak(fullPageText, lang, onComplete);
    } else {
      if (onComplete) onComplete();
    }
  }
}
