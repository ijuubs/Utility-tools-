import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      <Helmet>
        <title>Contact Us | ToolKitPro</title>
        <meta name="description" content="Reach out to the ToolKitPro team for support, feature requests, or business inquiries." />
      </Helmet>
      
      <h1 className="text-5xl font-black uppercase tracking-tighter border-b-8 border-black pb-4">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-xl font-bold">Have a question or a suggestion? We'd love to hear from you.</p>
          <p className="text-[var(--muted)]">Our team is committed to making ToolKitPro the best utility hub on the web. Your feedback directly impacts our development roadmap.</p>
          
          <div className="space-y-4">
              <div className="border-4 border-black p-4 bg-yellow-100 flex items-center gap-4">
                  <div className="font-black text-2xl uppercase">Email</div>
                  <div className="font-bold underline">support@toolkitpro.io</div>
              </div>
              <div className="border-4 border-black p-4 bg-white flex items-center gap-4">
                  <div className="font-black text-2xl uppercase">Twitter</div>
                  <div className="font-bold underline">@ToolKitPro_AI</div>
              </div>
          </div>
        </div>

        <form className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
            <div>
                <label className="block font-black uppercase text-sm mb-1">Name</label>
                <input type="text" className="w-full border-4 border-black p-2 focus:bg-yellow-50 outline-none" placeholder="John Doe" />
            </div>
            <div>
                <label className="block font-black uppercase text-sm mb-1">Email</label>
                <input type="email" className="w-full border-4 border-black p-2 focus:bg-yellow-50 outline-none" placeholder="john@example.com" />
            </div>
            <div>
                <label className="block font-black uppercase text-sm mb-1">Message</label>
                <textarea className="w-full border-4 border-black p-2 focus:bg-yellow-50 outline-none h-32" placeholder="Tell us what's on your mind..."></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white font-black uppercase py-4 hover:bg-yellow-400 hover:text-black transition-colors">
                Send Message
            </button>
        </form>
      </div>
    </div>
  );
}
