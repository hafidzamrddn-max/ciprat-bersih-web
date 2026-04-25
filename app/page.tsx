import Image from "next/image";
import { ShieldCheck, MapPin, Clock, Droplets, CheckCircle, MessageCircle, Image as ImageIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Business Logo */}
            <Image src="/logo.png" alt="Ciprat Bersih Logo" width={48} height={48} className="w-12 h-12" />
            <span className="text-xl font-bold text-gray-900 tracking-tight">Ciprat Bersih</span>
          </div>
          <a
            href="https://wa.me/6288212650468"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            <MessageCircle className="w-5 h-5" />
            Order Now
          </a>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-20 pb-32">
          {/* Decorative water drop background blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary font-medium text-sm mb-8">
              <Droplets className="w-4 h-4" />
              <span>Premium Shoe Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
              Step into Freshness
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the ultimate shoe spa. We bring your favorite pairs back to life.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 max-w-md mx-auto mb-12 border border-blue-50">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">Flat Price</p>
              <p className="text-4xl font-bold text-primary mb-6">All Shoes 42K</p>
              <a
                href="https://wa.me/6288212650468"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/40"
              >
                <MessageCircle className="w-6 h-6" />
                Book a Wash
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">The Ciprat Bersih Standard</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">We don't just clean, we restore.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary mb-6">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Maximum Cleaning Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every shoe undergoes a meticulous deep cleaning process targeting dirt, stains, and odors, ensuring an immaculate finish inside and out.
                </p>
              </div>

              <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Cleanliness Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your satisfaction is our priority. If you're not completely happy with the results, we will re-clean your shoes absolutely free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricelist Section */}
        <section className="py-24 bg-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Our Services & Pricing</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Transparent and affordable pricing for maximum cleanliness.</p>
            </div>
            <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white">
              <Image src="/pricelist.png" alt="Ciprat Bersih Pricelist" width={800} height={1000} className="w-full h-auto object-contain bg-white" />
            </div>
          </div>
        </section>

        {/* Gallery / Before After Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">See the Difference</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Real results from our ultimate shoe spa.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Before Image */}
              <div className="relative group">
                <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden relative shadow-md">
                  <Image src="/sebelum.jpg" alt="Before Wash" fill className="object-cover" />
                </div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-sm font-medium">Before</div>
              </div>
              
              {/* After Image */}
              <div className="relative group">
                <div className="aspect-[4/3] bg-blue-100 rounded-2xl overflow-hidden relative shadow-lg shadow-blue-900/10 border-2 border-white">
                  <Image src="/sesudah.png" alt="After Wash" fill className="object-cover" />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm">After</div>
              </div>
            </div>
          </div>
        </section>

        {/* Operations & Coverage Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-primary/20">
               <h2 className="text-3xl font-bold mb-10 text-center">We Make It Easy For You</h2>
               
               <div className="grid md:grid-cols-2 gap-10">
                 <div className="flex gap-4 items-start">
                   <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                     <Clock className="w-6 h-6 text-white" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-lg mb-1">Operational Hours</h3>
                     <p className="text-white/80">Open Daily</p>
                     <p className="text-white/90 font-medium mt-1">09:00 - 18:00 WIB</p>
                   </div>
                 </div>

                 <div className="flex gap-4 items-start">
                   <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                     <MapPin className="w-6 h-6 text-white" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-lg mb-1">Free Pick-up & Delivery</h3>
                     <p className="text-white/80 leading-relaxed">
                       Within a 10km radius from our locations:
                     </p>
                     <ul className="mt-2 space-y-1 text-white/90 font-medium">
                       <li>• Cempaka Putih (Jakarta)</li>
                       <li>• Graha Asri (Cikarang)</li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="mb-6">
            <Image src="/logo.png" alt="Ciprat Bersih Logo" width={64} height={64} className="w-16 h-16" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Ciprat Bersih</h2>
          
          <div className="flex gap-4 mb-8">
            <a
              href="https://www.instagram.com/cipratbersih/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E1306C]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </a>
            <a
              href="https://wa.me/6288212650468"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-5 py-2.5 rounded-xl font-medium hover:bg-[#25D366]/20 transition-all shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ciprat Bersih. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}


