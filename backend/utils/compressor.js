// Textese-style abbreviation dictionary - aggressive compression
const abbreviations = {
  // Common phrases (longest first)
  'laugh out loud': 'lol',
  'oh my god': 'omg',
  'to be honest': 'tbh',
  'by the way': 'btw',
  'as soon as possible': 'asap',
  'see you': 'cya',
  'talk to you later': 'ttyl',
  'be right back': 'brb',
  'in my opinion': 'imo',
  'for your information': 'fyi',
  'as far as i know': 'afaik',
  'if i recall correctly': 'iirc',
  'to be fair': 'tbf',
  'just kidding': 'jk',
  'no problem': 'np',
  'you are welcome': 'yw',
  'what the hell': 'wth',
  'what the fuck': 'wtf',
  'rolling on the floor laughing': 'rofl',
  'laughing my ass off': 'lmao',
  'be back later': 'bbl',
  'got to go': 'gtg',
  'good night': 'gn',
  'good morning': 'gm',
  'good luck': 'gl',
  'i love you': 'ily',
  'miss you': 'miss u',
  'see you later': 'cyl',
  'see you soon': 'sys',
  'see you tomorrow': 'syt',
  'thanks a lot': 'thx',
  'thank you very much': 'tyvm',
  
  // Contractions and common phrases
  'you are': 'ur',
  'you have': "u've",
  'you will': "u'll",
  'you would': "u'd",
  'i am': "i'm",
  'i will': "i'll",
  'i would': "i'd",
  'i have': "i've",
  'we are': "we're",
  'we will': "we'll",
  'we have': "we've",
  'they are': "they're",
  'they will': "they'll",
  'they have': "they've",
  'that is': "that's",
  'there is': "there's",
  'what is': "what's",
  'where is': "where's",
  'who is': "who's",
  'how is': "how's",
  'why is': "why's",
  'when is': "when's",
  
  // Number substitutions
  'great': 'gr8',
  'mate': 'm8',
  'late': 'l8',
  'wait': 'w8',
  'before': 'b4',
  'for': '4',
  'to': '2',
  'too': '2',
  'two': '2',
  'four': '4',
  'ate': '8',
  'eight': '8',
  'one': '1',
  'won': '1',
  'today': '2day',
  'tonight': '2nite',
  'together': '2gthr',
  
  // Ultra-short common words
  'you': 'u',
  'are': 'r',
  'your': 'ur',
  'be': 'b',
  'see': 'c',
  'why': 'y',
  'yes': 'y',
  'okay': 'k',
  'ok': 'k',
  'please': 'pls',
  'thanks': 'thx',
  'thank you': 'ty',
  'sorry': 'sry',
  'because': 'bc',
  'about': 'abt',
  'people': 'ppl',
  'tomorrow': 'tmrw',
  'yesterday': 'yday',
  'message': 'msg',
  'picture': 'pic',
  'video': 'vid',
  'probably': 'prob',
  'definitely': 'def',
  'maybe': 'mayb',
  'something': 'smth',
  'someone': 'sm1',
  'anyone': 'any1',
  'everyone': 'every1',
  'nothing': 'nothin',
  'anything': 'anythin',
  'everything': 'everythin',
  'no one': 'no1',
  'anybody': 'any1',
  'everybody': 'every1',
  'nobody': 'no1',
  'somebody': 'sm1',
  'though': 'tho',
  'through': 'thru',
  'right': 'rite',
  'write': 'rite',
  'night': 'nite',
  'tonight': '2nite',
  'alright': 'aight',
  'already': 'alrdy',
  'almost': 'almst',
  'always': 'alwys',
  'another': 'anothr',
  'anyway': 'anywy',
  'awesome': 'awsome',
  'between': 'btwn',
  'business': 'biz',
  'coming': 'comin',
  'going': 'goin',
  'going to': 'gonna',
  'good': 'gud',
  'great': 'gr8',
  'happened': 'happnd',
  'happening': 'happenin',
  'happy': 'hppy',
  'hello': 'hi',
  'here': 'hr',
  'home': 'hm',
  'house': 'hse',
  'however': 'howevr',
  'important': 'impt',
  'information': 'info',
  'instead': 'insted',
  'internet': 'net',
  'interesting': 'intrsting',
  'just': 'jst',
  'keep': 'kp',
  'know': 'no',
  'later': 'latr',
  'learn': 'lrn',
  'leave': 'lv',
  'let me': 'lemme',
  'little': 'lil',
  'love': 'luv',
  'make': 'mk',
  'making': 'makin',
  'maybe': 'mayb',
  'message': 'msg',
  'might': 'mite',
  'minute': 'min',
  'minutes': 'mins',
  'more': 'mor',
  'morning': 'mornin',
  'move': 'mv',
  'much': 'mch',
  'music': 'msc',
  'near': 'nr',
  'nearly': 'nrly',
  'need': 'nd',
  'never': 'nevr',
  'next': 'nxt',
  'night': 'nite',
  'normal': 'nrml',
  'nothing': 'nothin',
  'number': 'num',
  'obviously': 'obvs',
  'often': 'oftn',
  'other': 'othr',
  'over': 'ovr',
  'people': 'ppl',
  'picture': 'pic',
  'please': 'pls',
  'probably': 'prob',
  'problem': 'prob',
  'quick': 'qk',
  'quickly': 'qkly',
  'really': 'rly',
  'remember': 'rmmbr',
  'right': 'rite',
  'room': 'rm',
  'save': 'sv',
  'school': 'skool',
  'second': 'sec',
  'see': 'c',
  'send': 'snd',
  'serious': 'srs',
  'seriously': 'srsly',
  'should': 'shud',
  'show': 'shw',
  'since': 'snc',
  'small': 'sml',
  'someone': 'sm1',
  'something': 'smth',
  'sometimes': 'smtms',
  'soon': 'sn',
  'sorry': 'sry',
  'sound': 'snd',
  'speak': 'spk',
  'still': 'stll',
  'stop': 'stp',
  'story': 'story',
  'street': 'st',
  'strong': 'strng',
  'student': 'stdnt',
  'study': 'stdy',
  'stuff': 'stff',
  'sure': 'sure',
  'take': 'tk',
  'talk': 'tlk',
  'tell': 'tll',
  'than': 'thn',
  'thanks': 'thx',
  'that': 'dat',
  'then': 'thn',
  'there': 'ther',
  'they': 'dey',
  'thing': 'thng',
  'think': 'thnk',
  'though': 'tho',
  'through': 'thru',
  'time': 'time',
  'today': '2day',
  'together': '2gthr',
  'tonight': '2nite',
  'too': '2',
  'touch': 'tch',
  'toward': 'twrd',
  'town': 'twn',
  'try': 'try',
  'turn': 'trn',
  'understand': 'undrstnd',
  'until': 'untl',
  'used': 'usd',
  'very': 'vry',
  'video': 'vid',
  'wait': 'w8',
  'walk': 'wlk',
  'want': 'wnt',
  'watch': 'wtch',
  'water': 'wtr',
  'way': 'wy',
  'week': 'wk',
  'welcome': 'wlcm',
  'well': 'wl',
  'went': 'wnt',
  'were': 'wer',
  'what': 'wht',
  'when': 'whn',
  'where': 'whr',
  'which': 'whch',
  'while': 'whl',
  'who': 'who',
  'why': 'y',
  'will': 'll',
  'with': 'wth',
  'without': 'wthout',
  'work': 'wrk',
  'world': 'wrld',
  'would': 'wud',
  'write': 'rite',
  'wrong': 'wrg',
  'year': 'yr',
  'years': 'yrs',
  'yes': 'y',
  'yesterday': 'yday',
  'you': 'u',
  'your': 'ur',
  'yourself': 'urself',
};

// Sort abbreviations by length (longest first) for proper matching
const sortedAbbreviations = Object.entries(abbreviations).sort(
  (a, b) => b[0].length - a[0].length
);

/**
 * Aggressively removes vowels from words (textese style)
 * @param {string} word - The word to compress
 * @returns {string} - Compressed word
 */
function removeVowels(word) {
  // Don't compress very short words (1-2 chars) or words that are already short
  if (word.length <= 2) return word;
  
  // Don't compress if it's all consonants already
  if (!/[aeiou]/i.test(word)) return word;
  
  // Keep first letter, remove vowels from middle, keep last letter if it's a consonant
  const first = word[0];
  const last = word[word.length - 1];
  const middle = word.slice(1, -1);
  
  // Remove vowels from middle, but keep important consonants
  const compressedMiddle = middle.replace(/[aeiou]/gi, '');
  
  // If middle becomes empty, keep at least one consonant
  if (compressedMiddle.length === 0 && middle.length > 0) {
    // Keep first consonant of middle
    const firstConsonant = middle.match(/[bcdfghjklmnpqrstvwxyz]/i);
    if (firstConsonant) {
      return first + firstConsonant[0] + last;
    }
  }
  
  // Reconstruct word
  let result = first + compressedMiddle;
  
  // Add last letter if it's a consonant, or if it's a vowel and word is getting too short
  if (/[bcdfghjklmnpqrstvwxyz]/i.test(last)) {
    result += last;
  } else if (result.length < 2) {
    result += last;
  }
  
  return result.length >= 2 ? result : word;
}

/**
 * Compresses text using textese-style abbreviations and aggressive vowel removal
 * @param {string} text - The input text to compress
 * @returns {string} - The compressed text
 */
export function compressText(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }

  let compressed = text.toLowerCase();
  
  // Step 1: Replace known phrases and words (longest matches first)
  for (const [original, abbreviation] of sortedAbbreviations) {
    const regex = new RegExp(`\\b${original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    compressed = compressed.replace(regex, abbreviation);
  }
  
  // Step 2: Apply aggressive vowel removal to remaining words
  // Split into words while preserving punctuation
  compressed = compressed.replace(/\b([a-z]{3,})\b/gi, (match, word) => {
    // Skip if already abbreviated or contains numbers
    if (/\d/.test(word) || word.length <= 2) return match;
    
    // Skip common short words that shouldn't be compressed
    const skipWords = ['the', 'and', 'but', 'for', 'are', 'was', 'were', 'had', 'has', 'have', 'did', 'got', 'get', 'can', 'may', 'not', 'now', 'how', 'who', 'why', 'when', 'what', 'where'];
    if (skipWords.includes(word)) return match;
    
    return removeVowels(word);
  });
  
  // Step 3: Additional textese patterns
  // Remove double letters in some cases
  compressed = compressed.replace(/([a-z])\1{2,}/gi, '$1$1');
  
  // Restore capitalization for first letter of sentences
  compressed = compressed.replace(/(^|\. |! |\? )([a-z])/g, (match, p1, p2) => {
    return p1 + p2.toUpperCase();
  });

  return compressed;
}

/**
 * Calculates the reduction percentage
 * @param {string} original - Original text
 * @param {string} compressed - Compressed text
 * @returns {string} - Reduction percentage as string
 */
export function calculateReduction(original, compressed) {
  if (!original || !compressed) {
    return '0%';
  }

  const originalLength = original.length;
  const compressedLength = compressed.length;
  
  if (originalLength === 0) {
    return '0%';
  }

  const reduction = ((originalLength - compressedLength) / originalLength) * 100;
  return `${Math.round(reduction)}%`;
}

