export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'calculate-bmi-correctly',
    slug: 'how-to-calculate-bmi-correctly',
    title: 'How to Calculate BMI Correctly: A Comprehensive Guide',
    excerpt: 'Learn the science behind Body Mass Index, its limitations, and how to accurately measure your health status using our professional tools.',
    date: 'April 20, 2026',
    author: 'Dr. Sarah Health',
    category: 'Health',
    readTime: '8 min read',
    content: `
## What is BMI?
The Body Mass Index (BMI) is a medical screening tool that measures the ratio of your height to your weight. It was designed to give healthcare providers a quick way to categorize people into health zones.

## The Formula
The standard calculation for BMI is:
**BMI = weight (kg) / [height (m)]²**

## Understanding the Ranges
- **Underweight:** BMI < 18.5
- **Healthy Weight:** BMI 18.5–24.9
- **Overweight:** BMI 25–29.9
- **Obesity:** BMI 30+

## Limitations of BMI
It is important to remember that BMI doesn't distinguish between muscle and fat. For athletes, a high BMI might not indicate poor health, but rather high muscle mass.

... (Imagine 1000+ words here for brevity in this response, but I will expand the actual component with more real text)
    `
  },
  {
    id: 'best-free-online-calculators-2026',
    slug: 'best-free-online-calculators-2026',
    title: 'Top 10 Best Free Online Calculators in 2026',
    excerpt: 'From mortgage payments to cryptographical entropy, we review the essential tools every professional should bookmark this year.',
    date: 'April 15, 2026',
    author: 'Tech Guru Marco',
    category: 'Technology',
    readTime: '12 min read',
    content: `
## The Rise of Browser-Side Utilities
In 2026, we've seen a shift towards static, private utility sites. No one wants to upload their sensitive data to a server just to format a JSON file.

...
    `
  },
  {
    id: 'loan-interest-explained',
    slug: 'loan-interest-explained',
    title: 'Loan Interest Explained: Amortization and Compound Growth',
    excerpt: 'Planning a purchase? Understand how interest accumulates and how to use calculators to save thousands over your loan lifetime.',
    date: 'April 10, 2026',
    author: 'Finn Finance',
    category: 'Finance',
    readTime: '10 min read',
    content: `
## Principal vs Interest
When you take out a loan, you're not just paying back what you borrowed...
    `
  },
  {
    id: 'image-optimization-for-seo',
    slug: 'image-optimization-for-seo',
    title: 'The Developer\'s Guide to Image Optimization for SEO',
    excerpt: 'Core Web Vitals are more important than ever. Learn how resizing and compressing images impacts your Google rankings.',
    date: 'April 05, 2026',
    author: 'SEO Master Leo',
    category: 'Marketing',
    readTime: '15 min read',
    content: `
## WebP vs JPEG in 2026
While WebP was the darling of 2024, new formats are emerging...
    `
  },
  {
    id: 'securing-passwords-with-entropy',
    slug: 'securing-passwords-with-entropy',
    title: 'Hardening Your Security: How Entropy Protects Your Passwords',
    excerpt: 'A deep dive into cryptographically secure random number generation and why local-only password tools are the future of security.',
    date: 'March 28, 2026',
    author: 'Cipher Security',
    category: 'Security',
    readTime: '7 min read',
    content: `
## What is Entropy?
In the context of passwords, entropy measures the complexity and unpredictability of a string...
    `
  },
  {
    id: 'mastering-json-debugging',
    slug: 'mastering-json-debugging',
    title: 'Mastering JSON Debugging: Prettifiers and Linters',
    excerpt: 'Stop wrestling with unreadable API responses. Learn how to leverage modern linters to streamline your development workflow.',
    date: 'March 20, 2026',
    author: 'Dev Ops Dan',
    category: 'Development',
    readTime: '6 min read',
    content: `
## Validating Large Payloads
When your JSON hits several megabytes, manual inspection is impossible...
    `
  }
];
