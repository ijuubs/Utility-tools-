export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  howTo: string; // Will expand this during render or keep as long string
  faqs: { question: string; answer: string }[];
}

export const TOOLS: Tool[] = [
  {
    id: 'word-counter',
    slug: 'word-counter',
    name: 'Word Counter',
    description: 'An advanced word, character, and sentence counter to optimize your content.',
    category: 'Text Tools',
    howTo: 'The Word Counter is a versatile tool for professionals, students, and writers who need to adhere to specific content constraints. \n\nTo use it, simply type or paste your text into the primary text box. As you type, the tool immediately calculates: \n- **Word Count:** The total number of words based on whitespace separation.\n- **Character Count:** Including spaces and excluding spaces for technical precision.\n- **Sentence Count:** Calculated using standard punctuation markers (. ! ?).\n- **Paragraph Count:** Calculated based on newline breaks.\n\n### Why use an online word counter?\nWhether you are writing a blog post, an academic essay, or a technical document, meeting length requirements is crucial. Our real-time engine ensures you don\'t have to manually recount your text as you edit. It is also completely private, running directly in your browser without ever sending text to a server.',
    faqs: [
        { question: 'Is the Word Counter accurate?', answer: 'Yes, our algorithm is designed to handle common word boundary cases and provides precise counts.' },
        { question: 'Do you save my text?', answer: 'No, everything is processed locally in your browser. We never log or store your input.' },
        { question: 'Does this handle special characters?', answer: 'Yes, it correctly counts characters, including special symbols and punctuation, making it ideal for technical copy and social media limit checks.' }
    ]
  },
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'JSON Formatter',
    description: 'A powerful tool to prettify, minify, and validate JSON code.',
    category: 'Web Tools',
    howTo: 'The JSON Formatter and Validator is a critical tool for developers handling JSON payloads.\n\n### How to format your JSON:\n1. **Paste your JSON:** Insert your raw or minified JSON string into the input area.\n2. **Choose an Action:** \n   - **Prettify:** Instantly transforms dense, unreadable JSON into a beautifully indented, structured format. Ideal for debugging and reviewing configuration files.\n   - **Minify:** Strips all whitespace and unnecessary characters to make your JSON as compact as possible for API transmission.\n3. **Validation:** Our tool will highlight any syntax errors immediately, showing you precisely where the JSON fails to validate, which saves hours of debugging time.\n\n### Benefits for developers\n- **Faster Debugging:** Quickly spot missing commas or brackets.\n- **Compact Payloads:** Reduce bandwidth for web APIs by minifying production configuration.',
    faqs: [
        { question: 'Does this tool validate JSON?', answer: 'Yes, if you enter invalid JSON, the tool will alert you to the specific syntax error and indicate the line number where the issue occurred.' },
        { question: 'Is it safe for configuration files?', answer: 'Yes, because the tool runs entirely in your browser, it is perfectly safe for handling sensitive local configuration files.' }
    ]
  },
  {
    id: 'pdf-compressor',
    slug: 'pdf-compressor',
    name: 'PDF Compressor',
    description: 'Shrink your heavy PDFs without compromising visual quality.',
    category: 'Converter',
    howTo: 'PDFs can become frustratingly large due to high-resolution images. Our PDF Compressor allows you to reduce file size for easy email sharing.\n\nSimply upload your PDF file, choose a compression level (e.g., "High Quality" or "Maximum Compression"), and receive a optimized version of your file immediately.',
    faqs: [
        { question: 'Is my data secure?', answer: 'Yes, your PDF is processed locally in your secure browser session.' }
    ]
  },
  {
    id: 'image-resizer',
    slug: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images to exact dimensions for social media or web.',
    category: 'Converter',
    howTo: 'Our Image Resizer allows you to batch resize images while maintaining aspect ratio or force-fitting custom dimensions.\n\nUpload an image, enter your target width and height, and download the optimized result.',
    faqs: [
        { question: 'Which formats are supported?', answer: 'We support JPEG, PNG, and WebP for optimal performance.' }
    ]
  },
  {
    id: 'lorem-ipsum',
    slug: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text.',
    category: 'Text Tools',
    howTo: 'Generate custom paragraphs of placeholder text for your design mockups.',
    faqs: [
        { question: 'Is it configurable?', answer: 'Yes, set paragraph counts easily.' }
    ]
  },
  {
    id: 'password-generator',
    slug: 'password-generator',
    name: 'Password Generator',
    description: 'Generate random, secure passwords.',
    category: 'Generator',
    howTo: 'Configure length and characters to create a strong password.',
    faqs: [
        { question: 'Is it secure?', answer: 'Yes, it uses browser-native random number generation.' }
    ]
  },
  {
    id: 'bmi-calculator',
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index.',
    category: 'Math Tools',
    howTo: 'Enter weight and height to get your BMI calculation.',
    faqs: [
        { question: 'What is BMI?', answer: 'A measure of body fat based on height and weight.' }
    ]
  },
  {
    id: 'time-zone-converter',
    slug: 'time-zone-converter',
    name: 'Time Zone Converter',
    description: 'Convert times across zones.',
    category: 'Time',
    howTo: 'Select source and target time zones to convert times instantly.',
    faqs: [
        { question: 'Does it use daylight savings?', answer: 'Yes, it respects regional DST rules.' }
    ]
  },
  {
    id: 'url-encoder',
    slug: 'url-encoder',
    name: 'URL Encoder/Decoder',
    description: 'Safely encode/decode URLs.',
    category: 'Encode',
    howTo: 'Paste your URL to encode or decode it for web usage.',
    faqs: [
        { question: 'Is it safe?', answer: 'Yes, it runs locally in your browser.' }
    ]
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Generate custom QR codes from any URL.',
    category: 'Generator',
    howTo: 'Enter your URL or text to generate a downloadable QR code instantly.',
    faqs: [
        { question: 'Do they expire?', answer: 'No, your generated QR codes do not expire.' }
    ]
  },
  {
    id: 'color-picker',
    slug: 'color-picker',
    name: 'Color Picker',
    description: 'Pick colors and get HEX/RGB values.',
    category: 'Color Tools',
    howTo: 'Use the interactive color picker to select colors and view their code formats.',
    faqs: [
        { question: 'Can I copy to clipboard?', answer: 'Yes, click the hex code to copy automatically.' }
    ]
  },
  {
    id: 'unit-converter',
    slug: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert units of measurement easily.',
    category: 'Converter',
    howTo: 'Select the units you want to convert and enter your value.',
    faqs: [
        { question: 'Does it support imperial and metric?', answer: 'Yes, both systems are fully supported.' }
    ]
  }
];
