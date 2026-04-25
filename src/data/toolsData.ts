export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  howTo: string;
  faqs: { question: string; answer: string }[];
  aliases?: string[]; // pSEO variations
  titleTag?: string;
  metaDescription?: string;
}

export const TOOLS: Tool[] = [
  {
    id: 'word-counter',
    slug: 'word-counter',
    name: 'Word Counter',
    description: 'An advanced word, character, and sentence counter to optimize your content.',
    category: 'Text Tools',
    aliases: ['word-count-checker', 'online-character-count', 'essay-length-checker'],
    metaDescription: 'Use our free online Word Counter to instantly check word counts, character limits, and sentence structures for essays and blogs. Fast and private.',
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
    aliases: ['prettify-json-online', 'minify-json-free', 'json-validator-tool'],
    metaDescription: 'Prettify, minify, and validate your JSON data instantly. Our free JSON Formatter runs in-browser for maximum security and performance.',
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
    aliases: ['compress-pdf-to-100kb', 'shrink-pdf-size-free', 'reduce-pdf-file-size-online'],
    metaDescription: 'Reduce PDF file size without losing quality. Compress PDFs to 100KB or smaller for easy emailing and faster web uploads. 100% private.',
    howTo: `### Master Your Document Management with Easy PDF Compression
PDF files are the backbone of modern business communication, but high-resolution assets can cause them to swell to sizes that are impossible to email. Our tool leverages advanced optimization algorithms to reduce your file footprint without sacrificing critical legibility.

#### How to Optimize Your PDFs
1. **Selection:** Upload your desired PDF file directly from your local machine.
2. **Configuration:** Choose between balance or maximum compression modes based on your needs.
3. **Download:** Once processing is complete, your optimized document is ready for instant download.

#### Why File Size Matters
- **Email Compatibility:** Most email clients have a 20MB-25MB limit. Compression ensures your documents reach their destination every time.
- **Improved Loading Speeds:** For web developers, hosting smaller PDFs means faster page loads and improved user experience for your visitors.
- **Storage Savings:** Large amounts of internal documentation can clog cloud storage projects; compressing files saves both space and costs.`,
    faqs: [
        { question: 'Is my data secure?', answer: 'Absolutely. Your PDF is processed locally in your secure browser session using WebAssembly technology, meaning no document data ever travels to our servers.' },
        { question: 'Will my images look blurry?', answer: 'Our intelligent compression focuses on metadata and stream optimization first, maintaining high visual fidelity for text and diagrams.' }
    ]
  },
  {
    id: 'image-resizer',
    slug: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images to exact dimensions for social media or web.',
    category: 'Converter',
    aliases: ['resize-image-for-whatsapp', 'make-image-under-1mb', 'online-png-resizer'],
    metaDescription: 'Instantly resize images for WhatsApp, Instagram, or SEO. Make images under 1MB or set custom dimensions for perfect web performance.',
    howTo: `### Precision Image Resizing for Web and Social Media
In the era of visual communication, having images at the exact dimensions required by platforms like Instagram, LinkedIn, or high-performance websites is non-negotiable. Our Image Resizer provides a surgical approach to file manipulation.

#### The Resizing Workflow
1. **Upload:** Select your JPEG, PNG, or WebP image.
2. **Dimension Logic:** Enter your target width and height. You can choose to maintain the aspect ratio (recommended to prevent skewing) or force specific dimensions.
3. **Optimization:** Our engine performs high-quality resampling to ensure the resized image remains sharp and professional.

#### Critical Use Cases
- **Blogging & SEO:** Large images slow down your site. Resizing to the exact container width improves your Core Web Vitals.
- **Consistency:** Ensure every product photo in your e-commerce store has an identical aspect ratio for a polished, professional look.
- **Social Media Compliance:** Adhere to strict profile picture and cover photo dimensions without manual cropping.`,
    faqs: [
        { question: 'Which formats are supported?', answer: 'We support all major web formats, including JPEG, PNG, and WebP.' },
        { question: 'Does it maintain quality?', answer: 'Yes, we use the Lanczos resampling algorithm to provide high-quality scaling that preserves edge sharpness.' }
    ]
  },
  {
    id: 'lorem-ipsum',
    slug: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for design and development projects.',
    category: 'Text Tools',
    aliases: ['placeholder-text-generator', 'dummy-text-generator', 'latin-text-filler'],
    metaDescription: 'Generate professional Lorem Ipsum placeholder text for your web design and development projects. Custom paragraph lengths and styling.',
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
    aliases: ['hex-color-selector', 'rgb-color-tool', 'online-color-finder'],
    metaDescription: 'Professional online Color Picker for designers and developers. Get instant HEX and RGB values for your next brand project or CSS file.',
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
    aliases: ['metric-to-imperial-converter', 'meters-to-kilometers-online', 'measurement-converter-free'],
    metaDescription: 'Fast and accurate Unit Converter for metric and imperial measurements. Convert length, distance, and mass instantly in your browser.',
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
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Create customizable QR codes for URLs, text, or contact info.',
    category: 'Web Tools',
    aliases: ['make-qr-code-free', 'bulk-qr-generator', 'url-to-qr-online'],
    metaDescription: 'Create custom QR codes for URLs, business cards, or WiFi access instantly. High-resolution downloads with no scan limits.',
    howTo: `### Bridging Physical and Digital with Custom QR Codes
QR codes have become an essential link between the physical world and digital experiences. Whether you are marketing a new product, sharing a contact card, or providing a direct link to a menu, our QR Code Generator provides a high-reliability solution.

#### Creating Your First Code
1. **Input Data:** Enter your URL, plain text, or configuration data into the generator.
2. **Instant Render:** Our system uses high-precision encoding to generate a scannable matrix immediately.
3. **Capture:** Download the resulting image to use on flyers, business cards, or website assets.

#### Why Choose Our Generator?
- **High Scannability:** We use optimized error correction levels to ensure codes are readable even when printed at small sizes or on textured paper.
- **Privacy First:** Unlike many "free" generators that track scans via redirects, our tool generates direct codes that go straight to your destination, preserving user privacy.`,
    faqs: [
        { question: 'Are these codes permanent?', answer: 'Yes, as long as the destination URL or data remains active, the QR code will work forever. They do not expire.' },
        { question: 'Can I use these for commercial projects?', answer: 'Yes, all codes generated are free for both personal and commercial use.' }
    ]
  },
  {
    id: 'password-generator',
    slug: 'password-generator',
    name: 'Password Generator',
    description: 'Generate high-entropy, secure passwords to protect your digital accounts.',
    category: 'Security',
    aliases: ['secure-password-maker', 'generate-strong-password-online', 'random-string-generator'],
    metaDescription: 'Generate high-entropy, secure passwords to protect your digital accounts. 100% offline generation in your browser for maximum security.',
    howTo: `### Hardening Your Digital Security with Entropy
In an era of sophisticated brute-force attacks, "password123" is no longer enough. Our Secure Password Generator uses cryptographically strong random number generation to create strings that are virtually impossible to guess.

#### How to Generate a Strong Password
1. **Length:** Select your desired length. We recommend at least 16 characters for critical accounts.
2. **Character Set:** Toggle between Uppercase, Lowercase, Numbers, and Symbols. A mix of all four provides the highest entropy.
3. **Generate:** Create a unique string and copy it to your secure password manager.

#### The Science of Security
Entropy is the measure of randomness. By using a diverse character set and sufficient length, you increase the "work factor" required for an attacker to crack your account. Our tool runs strictly in your browser, ensuring your new password is never transmitted across the network during generation.`,
    faqs: [
        { question: 'Is this random enough?', answer: 'Yes, we use the browser\'s native Web Crypto API for high-quality randomness.' },
        { question: 'Do you store my passwords?', answer: 'Never. The generation happens entirely on your local machine and the results are not logged or stored by our system.' }
    ]
  },
  {
    id: 'bmi-calculator',
    slug: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) to understand your health status.',
    category: 'Health',
    aliases: ['body-mass-index-checker', 'calculate-bmi-online-free', 'weight-health-status-tool'],
    metaDescription: 'Calculate your Body Mass Index (BMI) instantly. Understand your weight health status using our professional, WHO-standard BMI calculator.',
    howTo: `### The Ultimate Guide to Body Mass Index (BMI)

Body Mass Index (BMI) is a foundational health metric used by medical professionals, fitness experts, and individuals worldwide to assess whether a person has a healthy body weight for their height. While often debated, it remains one of the most effective, low-cost screening tools for weight-related health risks.

#### 1. What is BMI?
BMI is a statistical measurement that looks at the ratio of your weight to your height squared. It doesn't directly measure body fat, but research has shown that BMI scores are moderately correlated with more direct measures of body fat, such as skinfold thickness measurements, bioelectrical impedance, and dual-energy X-ray absorptiometry (DXA).

#### 2. The Science: The BMI Formula
The calculation of BMI is straightforward and was originally developed by Adolphe Quetelet in the mid-19th century.
- **Metric System:** BMI = weight (kg) / [height (m)]²
- **Imperial System:** BMI = 703 × weight (lbs) / [height (in)]²

Our ToolKitPro BMI Calculator handles both calculations instantly, allowing you to use whichever system you are most comfortable with.

#### 3. Understanding the BMI Categories
The World Health Organization (WHO) and the Centers for Disease Control and Prevention (CDC) use standard categories to interpret BMI scores for adults:
- **Underweight (Below 18.5):** This may indicate malnutrition, an underlying health condition, or a higher risk for osteoporosis and anemia.
- **Healthy Weight (18.5 – 24.9):** This range is associated with the lowest risk of developing cardiovascular disease and other metabolic conditions.
- **Overweight (25 – 29.9):** Individuals in this range may have an increased risk of heart disease, type 2 diabetes, and high blood pressure.
- **Obesity Class I (30 – 34.9):** A significantly higher risk for weight-related chronic illnesses.
- **Obesity Class II (35 – 39.9):** Severe obesity associated with profound health implications.
- **Obesity Class III (40 or Above):** Also known as morbid obesity, requiring immediate medical consultation.

#### 4. The Critical Importance of BMI in 2026
In modern preventative medicine, BMI acts as a "early warning system." While it isn't a diagnostic tool on its own—meaning it won't tell you that you *have* diabetes—it tells your doctor that you might be at a *higher risk* for it. High BMI is often linked to:
- **Hypertension:** Increased weight places more strain on the heart, leading to higher blood pressure.
- **Type 2 Diabetes:** Excess body fat can lead to insulin resistance.
- **Metabolic Syndrome:** A cluster of conditions that increase heart disease risk.

#### 5. Limitations: What BMI Doesn't Tell You
It is vital to use BMI as a starting point rather than a final judgment. It has several notable limitations:
- **Muscle Density:** BMI cannot distinguish between lean muscle and adipose tissue (fat). A professional bodybuilder might have a BMI in the "obese" range despite having extremely low body fat.
- **Bone Density:** Individuals with larger skeletal frames may have higher BMIs without being overweight.
- **Age and Gender:** Older adults tend to have more body fat than younger adults with the same BMI. Similarly, women typically have more body fat than men with the same BMI.
- **Fat Distribution:** BMI doesn't account for *where* fat is stored. Visceral fat (stored around the organs in the abdomen) is significantly more dangerous than subcutaneous fat stored in the hips or legs.

#### 6. How to Use our BMI Calculator
To get an accurate reading:
1. **Accurate Height:** Measure your height without shoes, standing flat against a wall.
2. **Morning Weight:** Weigh yourself in the morning before eating, but after using the bathroom, for the most consistent daily reading.
3. **Select Units:** Choose "Metric" or "Imperial" on our tool.
4. **Instant Result:** Your BMI will appear immediately along with your health category.

#### 7. Next Steps After Your Result
If your BMI falls outside the "Healthy" range, don't panic. Use this data as a reason to schedule a check-up with a qualified healthcare professional. They can perform a more comprehensive assessment, including blood pressure checks, cholesterol tests, and waist-to-hip ratio measurements to give you a complete picture of your health.

#### 8. Conclusion
BMI remains a powerful, easy-to-use indicator for the general population. By tracking your BMI over time, you can monitor the effectiveness of your diet and exercise routines, helping you achieve a longer, healthier life.`,
    faqs: [
        { question: 'Is BMI accurate for athletes?', answer: 'Athletes with high muscle mass may receive a "high" BMI despite having low body fat, as muscle weighs more than fat.' },
        { question: 'What is a healthy range?', answer: 'Generally, a BMI between 18.5 and 24.9 is considered the healthy weight range for adults.' },
        { question: 'Should children use the same calculator?', answer: 'No, while the calculation is the same, children and adolescents are measured against age and gender percentiles rather than the static adult ranges.' },
        { question: 'Is waist circumference better than BMI?', answer: 'Waist circumference is often used alongside BMI to measure abdominal fat, which is a strong predictor of metabolic health risks.' }
    ]
  },
  {
    id: 'url-encoder',
    slug: 'url-encoder',
    name: 'URL Encoder / Decoder',
    description: 'Safely encode or decode special characters for URLs and APIs.',
    category: 'Web Tools',
    aliases: ['percent-encoding-online', 'url-formatter-free', 'encode-uri-tool'],
    metaDescription: 'Safely encode or decode special characters for URLs and APIs. Ensure your web requests are formatted correctly with our free URL Encoder.',
    howTo: `### Mastering URL Component Safety
URLs can only be sent over the Internet using the ASCII character set. Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format. URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.

#### Using the Encoder/Decoder
1. **Input:** Paste your raw URL or encoded string into the text field.
2. **Action:** Select "Encode" to make a string safe for URL transmission, or "Decode" to turn a percent-encoded string back into human-readable text.
3. **Result:** Get the clean, processed output instantly.

#### Why Encoding is Required
- **Form Data:** When submitting browser forms, special characters like spaces or "&" must be encoded to prevent breaking the request structure.
- **REST APIs:** Passing parameters with special symbols requires proper percent-encoding to ensure the server interprets the data correctly.`,
    faqs: [
        { question: 'Does this handle spaces?', answer: 'Yes, spaces are correctly converted to %20 during the encoding process.' },
        { question: 'Is it safe for API keys?', answer: 'Yes, all processing is done locally in your browser, keeping your sensitive parameters secure.' }
    ]
  }
];

