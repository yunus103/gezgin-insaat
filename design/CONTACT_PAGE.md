<!DOCTYPE html>

<html class="light" lang="tr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary-fixed-dim": "#e9c176",
                    "background": "#faf9f4",
                    "on-secondary": "#ffffff",
                    "inverse-primary": "#e9c176",
                    "secondary-container": "#e0e2e8",
                    "surface-container": "#efeee9",
                    "error-container": "#ffdad6",
                    "surface-variant": "#e3e3de",
                    "surface-bright": "#faf9f4",
                    "on-primary-container": "#4e3700",
                    "tertiary-container": "#a4a5a7",
                    "surface-container-lowest": "#ffffff",
                    "on-primary": "#ffffff",
                    "tertiary-fixed-dim": "#c6c6c9",
                    "inverse-surface": "#30312e",
                    "on-primary-fixed-variant": "#5d4201",
                    "on-secondary-fixed-variant": "#44474b",
                    "secondary": "#5b5f63",
                    "outline-variant": "#d1c5b4",
                    "surface-container-low": "#f5f4ef",
                    "primary-container": "#c5a059",
                    "on-surface": "#1b1c19",
                    "tertiary-fixed": "#e2e2e5",
                    "on-secondary-fixed": "#181c20",
                    "secondary-fixed-dim": "#c4c6cc",
                    "on-background": "#1b1c19",
                    "on-tertiary": "#ffffff",
                    "error": "#ba1a1a",
                    "outline": "#7f7667",
                    "inverse-on-surface": "#f2f1ec",
                    "on-primary-fixed": "#261900",
                    "primary-fixed": "#ffdea5",
                    "on-error-container": "#93000a",
                    "surface-tint": "#775a19",
                    "secondary-fixed": "#e0e2e8",
                    "on-surface-variant": "#4e4639",
                    "on-error": "#ffffff",
                    "tertiary": "#5d5e61",
                    "surface-dim": "#dbdad5",
                    "surface-container-highest": "#e3e3de",
                    "surface-container-high": "#e9e8e3",
                    "primary": "#775a19",
                    "on-tertiary-fixed": "#1a1c1e",
                    "on-secondary-container": "#616569",
                    "on-tertiary-container": "#393b3d",
                    "surface": "#faf9f4",
                    "on-tertiary-fixed-variant": "#454749"
            },
            "borderRadius": {
                    "DEFAULT": "0px",
                    "lg": "0px",
                    "xl": "0px",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Manrope"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .font-headline { font-family: 'Manrope', sans-serif; }
    </style>
</head>
<body class="bg-surface text-on-surface selection:bg-primary selection:text-white">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-[#faf9f4] dark:bg-stone-950">
<nav class="flex justify-between items-center px-12 py-6 max-w-[1920px] mx-auto">
<div class="text-2xl font-black tracking-tighter text-[#1b1c19] dark:text-[#faf9f4]">
                Gezgin İnşaat
            </div>
<div class="hidden md:flex items-center gap-10">
<a class="text-[#5b5f63] hover:text-[#775a19] transition-colors duration-300 font-['Manrope'] uppercase tracking-widest text-sm font-bold" href="#">Projeler</a>
<a class="text-[#5b5f63] hover:text-[#775a19] transition-colors duration-300 font-['Manrope'] uppercase tracking-widest text-sm font-bold" href="#">Hizmetler</a>
<a class="text-[#5b5f63] hover:text-[#775a19] transition-colors duration-300 font-['Manrope'] uppercase tracking-widest text-sm font-bold" href="#">Hakkımızda</a>
<a class="text-[#775a19] border-b-2 border-[#775a19] pb-1 font-['Manrope'] uppercase tracking-widest text-sm font-bold" href="#">İletişim</a>
</div>
<button class="bg-primary text-on-primary px-8 py-3 font-headline font-bold text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-all active:scale-95">
                TEKLİF AL
            </button>
</nav>
</header>
<main>
<!-- Hero Section -->
<section class="relative h-[614px] flex items-center bg-surface-container-low overflow-hidden mt-20">
<div class="absolute inset-0 opacity-10">
<img alt="Architectural details" class="w-full h-full object-cover grayscale" data-alt="abstract close-up of a modern glass skyscraper reflecting a clear sky with sharp geometric lines and metallic textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArt-sE3qbssTorcQCHc0HIaoG76eluocykqhloggnjVTPPXx8Tz0Jhm2S0lopJQOVymHmhhW7OmV_m6O2ZlhjqoRrEJ71CE_dZpIys3JNfMdw5_HF-FKKSZ0fsC0lcp0UnczwGOM_W8rBik14Ahfvkikmb7n1xQMvV_w_abvpOTaP0O5tC-CI_3qEQ5elrezo7h0myAa6ELSEwnoyV0jDqXt-E5MtrAemifx1vjPeO69IoMpGF6ar3g74i73XNmPtKrdhGgfBeKf0"/>
</div>
<div class="container mx-auto px-12 relative z-10">
<div class="max-w-4xl">
<span class="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Bize Ulaşın</span>
<h1 class="text-6xl md:text-8xl font-black text-on-surface tracking-tighter leading-none mb-8">
                        İletişim
                    </h1>
<p class="text-lg md:text-xl text-secondary max-w-xl leading-relaxed font-light">
                        Hayallerinizdeki yapıyı inşa etmek için profesyonel ekibimizle tanışın. Projeleriniz hakkında detaylı bilgi ve teklif almak için buradayız.
                    </p>
</div>
</div>
<div class="absolute bottom-0 right-0 w-1/3 h-1/2 bg-surface-container-highest/30 backdrop-blur-sm p-12 hidden lg:flex items-end">
<div class="border-l-2 border-primary pl-6">
<p class="text-sm uppercase tracking-widest font-bold text-on-surface">Mimari Mükemmellik</p>
<p class="text-xs text-secondary mt-1">Gezgin İnşaat Güvencesiyle</p>
</div>
</div>
</section>
<!-- Form and Info Section -->
<section class="bg-surface py-32">
<div class="container mx-auto px-12">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-24">
<!-- Contact Info -->
<div class="lg:col-span-5 space-y-16">
<div>
<h2 class="text-3xl font-bold tracking-tight mb-12">Genel Merkezimiz</h2>
<div class="space-y-10">
<div class="flex items-start gap-6">
<span class="material-symbols-outlined text-primary mt-1">location_on</span>
<div>
<h3 class="font-bold text-sm tracking-widest uppercase mb-2">Adres</h3>
<p class="text-secondary leading-relaxed">Levent Plaza, Büyükdere Cad. No:193<br/>34394 Şişli/İstanbul, Türkiye</p>
</div>
</div>
<div class="flex items-start gap-6">
<span class="material-symbols-outlined text-primary mt-1">call</span>
<div>
<h3 class="font-bold text-sm tracking-widest uppercase mb-2">Telefon</h3>
<p class="text-secondary">+90 (212) 555 00 00</p>
</div>
</div>
<div class="flex items-start gap-6">
<span class="material-symbols-outlined text-primary mt-1">mail</span>
<div>
<h3 class="font-bold text-sm tracking-widest uppercase mb-2">E-posta</h3>
<p class="text-secondary">info@gezgininsaat.com</p>
</div>
</div>
</div>
</div>
<div class="pt-8 border-t border-outline-variant/30">
<h3 class="font-bold text-sm tracking-widest uppercase mb-8">Sosyal Medya</h3>
<div class="flex gap-8">
<a class="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#">
<span class="text-xs font-bold tracking-widest uppercase">Instagram</span>
<span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">north_east</span>
</a>
<a class="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#">
<span class="text-xs font-bold tracking-widest uppercase">LinkedIn</span>
<span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">north_east</span>
</a>
<a class="text-secondary hover:text-primary transition-colors flex items-center gap-2 group" href="#">
<span class="text-xs font-bold tracking-widest uppercase">YouTube</span>
<span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">north_east</span>
</a>
</div>
</div>
</div>
<!-- Contact Form -->
<div class="lg:col-span-7 bg-surface-container-low p-12 lg:p-20 relative">
<div class="absolute top-0 left-0 w-2 h-full bg-primary/20"></div>
<h2 class="text-3xl font-bold tracking-tight mb-12">Mesaj Gönderin</h2>
<form class="space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-2">
<label class="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Ad Soyad</label>
<input class="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 font-light" placeholder="İsminizi buraya yazın" type="text"/>
</div>
<div class="space-y-2">
<label class="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">E-posta</label>
<input class="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 font-light" placeholder="eposta@adresiniz.com" type="email"/>
</div>
</div>
<div class="space-y-2">
<label class="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Konu</label>
<input class="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 font-light" placeholder="Hangi proje ile ilgileniyorsunuz?" type="text"/>
</div>
<div class="space-y-2">
<label class="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Mesajınız</label>
<textarea class="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 font-light resize-none" placeholder="Detayları buraya yazın..." rows="4"></textarea>
</div>
<button class="w-full bg-primary text-on-primary py-5 font-headline font-extrabold tracking-[0.3em] uppercase hover:bg-on-surface transition-all active:scale-[0.98] mt-8" type="submit">
                                GÖNDER
                            </button>
</form>
</div>
</div>
</div>
</section>
<!-- Google Maps Section -->
<section class="w-full h-[500px] bg-surface-container overflow-hidden">
<div class="w-full h-full grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-700">
<img alt="Location Map" class="w-full h-full object-cover" data-alt="stylized architectural topographic map showing urban layout with clean lines and premium aesthetic in monochrome" data-location="Istanbul" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDangFZZ1CMDQEfgrrSi60fDnNIsmnLXZxUUuhbkm6yG-HDeFH3mB82Th9O-rWt1WvOhMrHqSGRly985Z-F7fWf_nN-jMrEMxqMZjLvhaD9_hKLS5lZRVQEcVr7y0lb2YPcdOfC-FCrHPyL75ktUw2ItHNRJ0Zr_2Xo5RRS1tMmV8hE30FFR3vbuhTXLFBhCOire7YddO_PEyGr70ZrzgsVKGEaykDrJNcixarb2fc0ohKFcu6kQOhzMAD-U8X-HyI4R0n7tf944_8"/>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-auto bg-[#e3e3de] dark:bg-stone-900">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 border-t border-[#d1c5b4]/30">
<div class="md:col-span-1">
<div class="text-xl font-bold text-[#1b1c19] mb-6">Gezgin İnşaat</div>
<p class="text-[#5b5f63] font-['Inter'] text-xs leading-relaxed max-w-xs">
                    Mükemmelliği inşa etmek, sadece beton ve çelikle değil, vizyon ve tutkuyla mümkündür. Gezgin İnşaat ile geleceği şekillendirin.
                </p>
</div>
<div class="md:col-span-1">
<h4 class="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-[#775a19] mb-6">Hızlı Linkler</h4>
<ul class="space-y-4">
<li><a class="font-['Inter'] text-xs text-[#5b5f63] hover:text-[#775a19] underline underline-offset-4 transition-all duration-200" href="#">Projelerimiz</a></li>
<li><a class="font-['Inter'] text-xs text-[#5b5f63] hover:text-[#775a19] underline underline-offset-4 transition-all duration-200" href="#">Hizmetlerimiz</a></li>
<li><a class="font-['Inter'] text-xs text-[#5b5f63] hover:text-[#775a19] underline underline-offset-4 transition-all duration-200" href="#">Hakkımızda</a></li>
</ul>
</div>
<div class="md:col-span-1">
<h4 class="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-[#775a19] mb-6">Kurumsal</h4>
<ul class="space-y-4">
<li><a class="font-['Inter'] text-xs text-[#5b5f63] hover:text-[#775a19] underline underline-offset-4 transition-all duration-200" href="#">Gizlilik Politikası</a></li>
<li><a class="font-['Inter'] text-xs text-[#5b5f63] hover:text-[#775a19] underline underline-offset-4 transition-all duration-200" href="#">KVKK</a></li>
<li><a class="font-['Inter'] text-xs text-[#5b5f63] hover:text-[#775a19] underline underline-offset-4 transition-all duration-200" href="#">Çerez Politikası</a></li>
</ul>
</div>
<div class="md:col-span-1">
<h4 class="font-['Manrope'] uppercase tracking-widest text-[10px] font-bold text-[#775a19] mb-6">Bize Katılın</h4>
<div class="flex gap-4">
<button class="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-sm">alternate_email</span>
</button>
<button class="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-sm">groups</span>
</button>
</div>
</div>
</div>
<div class="px-12 py-8 bg-surface-container-highest border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
<span class="font-['Inter'] text-xs tracking-tight text-[#5b5f63]">© 2024 Gezgin İnşaat. Tüm Hakları Saklıdır.</span>
<div class="flex gap-6">
<span class="font-['Inter'] text-[10px] tracking-tight text-[#5b5f63] uppercase">Istanbul</span>
<span class="font-['Inter'] text-[10px] tracking-tight text-[#5b5f63] uppercase">London</span>
<span class="font-['Inter'] text-[10px] tracking-tight text-[#5b5f63] uppercase">Dubai</span>
</div>
</div>
</footer>
</body></html>
