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
    description: 'Generate placeholder text for design and development projects.',
    category: 'Text Tools',
    howTo: `### Elevate Your Design Prototypes with Lorem Ipsum
Lorem Ipsum is the industry-standard placeholder text used by designers, developers, and typesetters. When you are building a website, app, or UI layout, you often don't have final content ready. Using real text can distract from the visual design. Our Lorem Ipsum Generator allows you to create high-quality, professional placeholder content with just a click.

#### How to Use Our Generator
1. **Define Length:** Select the number of paragraphs you need for your design layout.
2. **Generate Instant Content:** Click "Generate" to create custom text blocks.
3. **Copy-Paste:** Seamlessly integrate the text into your Figma files, CMS (like WordPress or Webflow), or direct into your code.

#### Why Lorem Ipsum is Essential
- **Focus on Layout:** By removing meaningful content, you force the eye to review typography, spacing, and design hierarchy rather than reading the text.
- **Save Time:** Instead of manually typing or searching for content, our tool gives you exactly the amount of text you need in seconds.
- **Professional Standard:** Proper layout testing is only possible with realistic-looking text—lorem ipsum provides the perfect balance of word lengths and structure.`,
    faqs: [
        { question: 'Is it configurable?', answer: 'Yes, you can specify the number of paragraphs needed for your layout.' },
        { question: 'What is Lorem Ipsum?', answer: 'It is derived from Cicero’s 45 BC text, and has been the industry standard for placeholder text since the 1500s.' }
    ]
  },
  {
    id: 'color-picker',
    slug: 'color-picker',
    name: 'Color Picker',
    description: 'Select colors visually and get accurate HEX and RGB values.',
    category: 'Color Tools',
    howTo: `### Mastering Web Design with the Color Picker
Color is arguably the most critical factor in web branding, mood, and accessibility. Our interactive Color Picker is designed to help developers and designers bridge the gap between sight and code, providing instant hexadecimal and RGB values for any pixel.

#### How the Tool Works
1. **Interactive Selection:** Use our native color picker to drag and select your ideal hue.
2. **Instant Value Conversion:** As you select, the tool instantly updates the HEX (#RRGGBB) and RGB values, which are the two most crucial formats for modern web development (CSS).
3. **Clipboard Sync:** Click the result to copy the hexadecimal code, making it instantly available for your CSS files or design tools.

#### Why Use a Dedicated Color Picker
- **Consistency:** Maintain branded colors across your entire web application.
- **Conversion Simplified:** Move between design tools (Figma/Adobe XD) and code (CSS) without manually calculating color values.
- **Accessibility:** Use the tool to quickly select higher-contrast colors for better legibility, directly helping your site reach WCAG compliance.`,
    faqs: [
        { question: 'Can I copy to clipboard?', answer: 'Yes, just click the hex code and it will automatically copy to your clipboard.' },
        { question: 'Does it support RGBA?', answer: 'Currently, the tool supports HEX and RGB. Future updates will include alpha channel (RGBA) support.' }
    ]
  },
  {
    id: 'unit-converter',
    slug: 'unit-converter',
    name: 'Unit Converter',
    description: 'Quickly convert between metric and imperial measurements.',
    category: 'Converter',
    howTo: `### Unit Converter: Simplifying Scientific Calculations
Whether you are programming a physics engine, baking, or doing scientific analysis, converting units is a daily task. Our Unit Converter takes the friction out of unit arithmetic, supporting a wide range of common metric and imperial conversions.

#### How to Convert Units
1. **Enter Your Value:** Put the numerical value into the input field.
2. **Select Conversion:** Choose between source and target units (e.g., kilometers to meters, meters to kilometers) via our clean, intuitive interface.
3. **Instant Math:** The tool handles the logic instantly, giving you a precise output.

#### Precision and Scope
The tool is designed for speed and consistency, preventing common manual calculation errors (like misplacing a decimal point, which is common when converting meters to kilometers).`,
    faqs: [
        { question: 'Does it support imperial and metric?', answer: 'Yes, both systems (meters/kilometers, etc.) are supported.' },
        { question: 'Will you add more units?', answer: 'Yes, we plan to add temperature, weight, and volume conversions in the coming week.' }
    ]
  }
];
