"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Clock,
  Droplets,
  CheckCircle,
  MessageCircle,
  Image as ImageIcon,
  ChevronDown,
  Sparkles,
  Star,
} from "lucide-react";

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Reveal Wrapper Component ─── */
function Reveal({
  children,
  className = "",
  type = "reveal",
}: {
  children: React.ReactNode;
  className?: string;
  type?: "reveal" | "reveal-scale" | "reveal-stagger";
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`${type} ${className}`}>
      {children}
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ═══════════════════════════════════════
          SECTION 1: FULL-SCREEN LOGO INTRO
          ═══════════════════════════════════════ */}
      <section
        id="intro"
        className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
      >
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,86,210,0.06)_0%,_transparent_70%)]"></div>

        <div className="logo-entrance relative z-10 flex flex-col items-center">
          <Image
            src="/logo-full.png"
            alt="Ciprat Bersih — Jasa Cuci Sepatu"
            width={420}
            height={420}
            className="w-64 md:w-80 lg:w-96 h-auto"
            priority
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-3 scroll-indicator">
          <span className="text-xs font-medium text-gray-400 tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2: HERO — TAGLINE + CTA
          ═══════════════════════════════════════ */}
      <section
        id="hero"
        className="relative py-28 md:py-40 overflow-hidden section-gradient"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-secondary/8 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-medium text-sm mb-10">
              <Droplets className="w-4 h-4" />
              <span>Premium Shoe Care</span>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] mb-8">
              Sepatu Kotor?
              <br />
              <span className="gradient-text">Kami Kembalikan</span>
              <br />
              Seperti Baru.
            </h1>
          </Reveal>

          <Reveal>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
              Layanan cuci sepatu premium dengan hasil yang bikin kamu nggak
              percaya. Bersih total, luar dalam, dijamin puas.
            </p>
          </Reveal>

          {/* Pricing Card */}
          <Reveal type="reveal-scale">
            <div className="glass-card rounded-3xl p-8 md:p-10 max-w-md mx-auto">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-[0.15em] mb-4">
                Harga Flat — Tanpa Ribet
              </p>
              <div className="mb-2">
                <p className="text-4xl font-black text-gray-900">
                  35<span className="text-xl font-bold text-gray-400">K</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">Flat Shoes</p>
              </div>
              <div className="w-12 h-px bg-gray-200 mx-auto my-4"></div>
              <div className="mb-8">
                <p className="text-4xl font-black text-gray-900">
                  42<span className="text-xl font-bold text-gray-400">K</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">Semua Jenis Sepatu Lainnya</p>
              </div>
              <a
                href="https://wa.me/6288212650468"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 w-full bg-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Pesan Sekarang
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3: FEATURES
          ═══════════════════════════════════════ */}
      <section id="features" className="py-28 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Standar Kebersihan
                <br />
                <span className="gradient-text">Tanpa Kompromi</span>
              </h2>
              <p className="text-lg text-gray-400 font-light">
                Bukan sekadar cuci — kami restorasi.
              </p>
            </div>
          </Reveal>

          <Reveal type="reveal-stagger">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Feature 1 */}
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  Deep Clean Total
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Setiap sepatu melewati proses pembersihan mendalam — noda
                  membandel, bau, kotoran tersembunyi — semua terangkat. Luar
                  dalam, bersih maksimal.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  Garansi 100% Bersih
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Nggak puas? Kami cuci ulang gratis. Tanpa syarat, tanpa ribet.
                  Kepuasan kamu adalah prioritas utama kami.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  Harga Flat, Transparan
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Nggak ada biaya tersembunyi. Harga sudah termasuk cuci luar
                  dalam, deodorizing, dan packaging rapi. Simpel.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="glass-card rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  Pick-up & Delivery Gratis
                </h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Tinggal duduk manis — kami jemput dan antar balik sepatumu.
                  Gratis dalam radius 10km dari titik operasional.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4: BEFORE / AFTER — INTERACTIVE
          ═══════════════════════════════════════ */}
      <section id="before-after" className="py-28 md:py-36 section-dark">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-white mb-4">
                Bukti Nyata,
                <br />
                Bukan Janji.
              </h2>
              <p className="text-lg text-gray-400 font-light">
                Tap untuk lihat transformasinya.
              </p>
            </div>
          </Reveal>

          <Reveal type="reveal-scale">
            <div className="relative max-w-2xl mx-auto">
              {/* Toggle Pill */}
              <div className="flex justify-center mb-8">
                <div className="toggle-pill flex p-1 gap-0">
                  <div
                    className={`toggle-slider ${showAfter ? "right" : ""}`}
                    style={{ left: "4px" }}
                  ></div>
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors ${
                      !showAfter ? "text-white" : "text-gray-400"
                    }`}
                  >
                    Sebelum
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors ${
                      showAfter ? "text-white" : "text-gray-400"
                    }`}
                  >
                    Sesudah
                  </button>
                </div>
              </div>

              {/* Image Container */}
              <div
                className="relative aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer border border-white/10"
                onClick={() => setShowAfter(!showAfter)}
              >
                {/* Before Image */}
                <Image
                  src="/before-shoe.jpg"
                  alt="Sepatu Sebelum Dicuci"
                  fill
                  className={`object-cover ba-image ${
                    !showAfter ? "visible-img" : "hidden-img"
                  }`}
                />
                {/* After Image */}
                <Image
                  src="/after-shoe.jpg"
                  alt="Sepatu Sesudah Dicuci"
                  fill
                  className={`object-cover ba-image absolute inset-0 ${
                    showAfter ? "visible-img" : "hidden-img"
                  }`}
                />

                {/* Label overlay */}
                <div className="absolute bottom-6 left-6 z-20">
                  <div
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold backdrop-blur-md transition-all duration-500 ${
                      showAfter
                        ? "bg-primary/90 text-white"
                        : "bg-black/60 text-white"
                    }`}
                  >
                    {showAfter ? "✨ Sesudah — Seperti Baru!" : "Sebelum — Kotor & Kusam"}
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-500 text-sm mt-6 font-light">
                Klik foto untuk beralih antara sebelum & sesudah
              </p>
            </div>
          </Reveal>

          {/* Portfolio Link */}
          <Reveal>
            <div className="mt-16 text-center">
              <a
                href="https://drive.google.com/drive/folders/1blmPamL0XsxFB7i_iuiNU7KFl_edYR01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <ImageIcon className="w-4 h-4" />
                Lihat Portfolio Selengkapnya
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5: TESTIMONIALS
          ═══════════════════════════════════════ */}
      <section id="testimonials" className="py-28 md:py-36 section-gradient">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Kata Mereka yang
                <br />
                <span className="gradient-text">Sudah Merasakan</span>
              </h2>
              <p className="text-lg text-gray-400 font-light">
                Testimoni asli dari pelanggan Ciprat Bersih.
              </p>
            </div>
          </Reveal>

          <Reveal type="reveal-stagger">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Testimonial 1 */}
              <div className="testimonial-card">
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Pelanggan Ciprat Bersih</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                    &ldquo;Bersihnya gacor ini mah, diluar ekspektasi gua. Ntar
                    kalo kotor lagi, gua nyuci di Ciprat Bersih lagi!&rdquo;
                  </p>
                </div>
                <div className="relative aspect-[1/1.15] overflow-hidden">
                  <Image
                    src="/testimoni-1.png"
                    alt="Testimoni WhatsApp"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-card">
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Pelanggan Ciprat Bersih</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                    &ldquo;Sepatunya bersih banget luar dalem, walaupun warnanya
                    putih, Ciprat Bersih bisa bikin bener-bener jadi kaya baru.
                    Super keren dan puas!&rdquo;
                  </p>
                </div>
                <div className="relative aspect-[1/1.25] overflow-hidden">
                  <Image
                    src="/testimoni-2.png"
                    alt="Testimoni WhatsApp"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-card">
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Pelanggan Ciprat Bersih</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                    &ldquo;Gokill, kaya baru coyyy! Aman banget ini mah, bakal
                    langganan. Bersih banget!&rdquo;
                  </p>
                </div>
                <div className="relative aspect-[1/1.3] overflow-hidden">
                  <Image
                    src="/testimoni-3.png"
                    alt="Testimoni WhatsApp"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="testimonial-card">
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Pelanggan Ciprat Bersih</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
                    &ldquo;Hasilnya oke banget nih, jadi kinclong sepatu saya.
                    Padahal udah lama banget ga dicuci, ga ekspek jadi sebersih
                    ini!&rdquo;
                  </p>
                </div>
                <div className="relative aspect-[1/1.15] overflow-hidden">
                  <Image
                    src="/testimoni-4.png"
                    alt="Testimoni WhatsApp"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6: PRICELIST IMAGE
          ═══════════════════════════════════════ */}
      <section id="pricing" className="py-28 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Detail Layanan
                <br />
                <span className="gradient-text">& Harga</span>
              </h2>
              <p className="text-lg text-gray-400 font-light">
                Transparan. Terjangkau. Tanpa biaya tersembunyi.
              </p>
            </div>
          </Reveal>

          <Reveal type="reveal-scale">
            <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100">
              <Image
                src="/pricelist.png"
                alt="Ciprat Bersih Pricelist"
                width={800}
                height={1000}
                className="w-full h-auto object-contain bg-white"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7: OPERATIONS & COVERAGE
          ═══════════════════════════════════════ */}
      <section id="operations" className="py-28 md:py-36 section-gradient">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] text-gray-900 mb-4">
                Gampang Banget,
                <br />
                <span className="gradient-text">Tinggal Duduk Manis</span>
              </h2>
            </div>
          </Reveal>

          <Reveal type="reveal-scale">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-14 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
              {/* Decorative dots */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="grid md:grid-cols-2 gap-10 relative z-10">
                <div className="flex gap-5 items-start">
                  <div className="bg-white/15 p-3.5 rounded-2xl backdrop-blur-sm flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Jam Operasional</h3>
                    <p className="text-white/70 text-sm">Buka Setiap Hari</p>
                    <p className="text-white font-semibold text-xl mt-1">
                      09:00 — 18:00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="bg-white/15 p-3.5 rounded-2xl backdrop-blur-sm flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Free Pick-up & Delivery
                    </h3>
                    <p className="text-white/70 text-sm mb-3">
                      Radius 10km dari titik operasional:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                        <span className="text-white/90 font-medium">
                          Cempaka Putih, Jakarta
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                        <span className="text-white/90 font-medium">
                          Graha Asri, Cikarang
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8: FINAL CTA
          ═══════════════════════════════════════ */}
      <section id="cta" className="py-28 md:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-gray-900 mb-6">
              Siap Bikin Sepatumu
              <br />
              <span className="gradient-text">Kinclong Lagi?</span>
            </h2>
            <p className="text-lg text-gray-400 font-light mb-12 max-w-lg mx-auto">
              Pesan sekarang lewat WhatsApp. Gratis jemput, gratis antar, hasil
              dijamin memuaskan.
            </p>
          </Reveal>

          <Reveal type="reveal-scale">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/6288212650468"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-3 bg-primary text-white px-10 py-4.5 rounded-2xl font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </a>
              <a
                href="https://www.instagram.com/cipratbersih/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 text-gray-700 px-10 py-4.5 rounded-2xl font-semibold text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#E1306C]"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="bg-gray-50 border-t border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <Image
            src="/logo-full.png"
            alt="Ciprat Bersih"
            width={120}
            height={120}
            className="w-20 h-auto mb-4 opacity-50"
          />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ciprat Bersih. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
