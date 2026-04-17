<!DOCTYPE html>

<html lang="tr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@300;400;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-bright": "#faf9f4",
                        "on-error-container": "#93000a",
                        "inverse-primary": "#e9c176",
                        "secondary": "#5b5f63",
                        "surface": "#faf9f4",
                        "on-primary-fixed": "#261900",
                        "inverse-on-surface": "#f2f1ec",
                        "primary": "#775a19",
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "surface-container-high": "#e9e8e3",
                        "secondary-container": "#e0e2e8",
                        "background": "#faf9f4",
                        "tertiary-fixed-dim": "#c6c6c9",
                        "on-primary-container": "#4e3700",
                        "tertiary": "#5d5e61",
                        "on-primary-fixed-variant": "#5d4201",
                        "on-background": "#1b1c19",
                        "secondary-fixed-dim": "#c4c6cc",
                        "surface-container-highest": "#e3e3de",
                        "on-tertiary": "#ffffff",
                        "surface-container": "#efeee9",
                        "on-error": "#ffffff",
                        "on-surface-variant": "#4e4639",
                        "on-secondary-container": "#616569",
                        "primary-fixed-dim": "#e9c176",
                        "primary-container": "#c5a059",
                        "on-tertiary-fixed": "#1a1c1e",
                        "on-secondary-fixed-variant": "#44474b",
                        "surface-variant": "#e3e3de",
                        "tertiary-fixed": "#e2e2e5",
                        "surface-tint": "#775a19",
                        "on-tertiary-fixed-variant": "#454749",
                        "secondary-fixed": "#e0e2e8",
                        "on-tertiary-container": "#393b3d",
                        "on-surface": "#1b1c19",
                        "primary-fixed": "#ffdea5",
                        "on-secondary-fixed": "#181c20",
                        "surface-dim": "#dbdad5",
                        "on-secondary": "#ffffff",
                        "outline-variant": "#d1c5b4",
                        "surface-container-low": "#f5f4ef",
                        "tertiary-container": "#a4a5a7",
                        "error": "#ba1a1a",
                        "error-container": "#ffdad6",
                        "outline": "#7f7667",
                        "inverse-surface": "#30312e"
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
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Manrope', sans-serif; }
        .monolith-gradient {
            background: linear-gradient(45deg, #775a19 0%, #c5a059 100%);
        }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- TopNavBar -->
<header class="bg-[#faf9f4] dark:bg-[#1b1c19] docked full-width top-0 z-50 tonal-shift-bg-surface-container-low">
<nav class="flex justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto">
<div class="font-['Manrope'] font-extrabold tracking-tighter text-xl text-[#775a19] dark:text-[#c5a059]">
                GEZGİN İNŞAAT
            </div>
<div class="hidden md:flex gap-10 items-center">
<a class="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#5b5f63] dark:text-[#e3e3de] hover:text-[#775a19] transition-colors" href="#">Projects</a>
<a class="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#775a19] dark:text-[#c5a059] border-b-2 border-[#775a19] pb-1" href="#">Services</a>
<a class="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#5b5f63] dark:text-[#e3e3de] hover:text-[#775a19] transition-colors" href="#">About</a>
<a class="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#5b5f63] dark:text-[#e3e3de] hover:text-[#775a19] transition-colors" href="#">Philosophy</a>
<a class="font-['Manrope'] font-bold tracking-tight uppercase text-sm text-[#5b5f63] dark:text-[#e3e3de] hover:text-[#775a19] transition-colors" href="#">Contact</a>
<button class="bg-primary text-on-primary px-8 py-2.5 font-bold uppercase text-xs tracking-widest scale-100 active:scale-95 transition-transform">Inquire</button>
</div>
<div class="md:hidden">
<span class="material-symbols-outlined text-primary">menu</span>
</div>
</nav>
</header>
<main>
<!-- Hero Header -->
<section class="relative bg-surface-container-low py-32 md:py-48 px-12 overflow-hidden">
<div class="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div class="md:col-span-8">
<h1 class="text-6xl md:text-9xl font-extrabold tracking-tighter text-primary leading-none mb-8">
                        Hizmetlerimiz
                    </h1>
<p class="text-lg md:text-2xl text-secondary max-w-2xl font-light leading-relaxed border-l-4 border-primary pl-8">
                        Mimari mükemmellik ve mühendislik disipliniyle, geleceğin silüetlerini bugünden şekillendiriyoruz. Modern yapı teknolojilerini estetikle buluşturan çözümler.
                    </p>
</div>
<div class="md:col-span-4 flex justify-end">
<div class="text-xs tracking-[0.3em] uppercase font-bold text-secondary-fixed-variant flex items-center gap-4">
<span class="w-12 h-[1px] bg-primary"></span>
                        Architectural Authority
                    </div>
</div>
</div>
</section>
<!-- Services Section: Detailed & Immersive -->
<section class="space-y-0 bg-surface">
<!-- Service 01: Konut Projeleri -->
<div class="grid grid-cols-1 md:grid-cols-2 min-h-[819px] items-center">
<div class="order-2 md:order-1 px-12 py-20 md:p-24 bg-surface-container">
<div class="text-primary font-bold text-sm tracking-[0.4em] mb-6 flex items-center gap-4">
<span class="text-4xl opacity-20">01</span> SEKTÖRÜN ZİRVESİ
                    </div>
<h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-on-surface">Konut Projeleri</h2>
<p class="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-xl">
                        Yaşam alanlarını sadece birer yapı olarak değil, birer sanat eseri ve huzur merkezi olarak kurguluyoruz. Her detayda konforun ve kalitenin izlerini sürerken, sürdürülebilir mimariyi modern ihtiyaçlarla harmanlıyoruz.
                    </p>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Lüks Villalar
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Akıllı Rezidanslar
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Tarihi Restorasyon
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Karma Konut Siteleri
                        </li>
</ul>
</div>
<div class="h-full min-h-[400px] bg-cover bg-center order-1 md:order-2" data-alt="ultra-modern luxury minimalist villa with large glass panels at sunset, surrounded by manicured gardens and architectural pool" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuATn-tHuaO8JEwdM4qGgDaBaMc0bMorN7dmZmo6JuAM46GSERDGNUSY91XGIp0RkJts2DVaxY6NjxI1HyewlpWeL62TgXlXSfY8wFdo5Igg-O3sxsPNVvR-0TH9Smmp3X0NsS6qAGBLnW50QgyAIBKcqqiXbTFu-79UXqrhIzzx9lqPAi8Q9r8F723zvkSTLOkO-KI6Zi0e1EC8tAkBTTQ0exhEdvVGdLiEnG5Vu4cT01dWUDZyrYP6cNiUCOFs0jAQQhlVggAnnNQ')">
</div>
</div>
<!-- Service 02: Ticari Yapılar -->
<div class="grid grid-cols-1 md:grid-cols-2 min-h-[819px] items-center">
<div class="h-full min-h-[400px] bg-cover bg-center" data-alt="imposing glass and steel skyscraper architectural detail reflecting blue sky, high-end commercial office district mood" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFF0m2VMPGNltvG3SWKUgmaIATHdTf4lbtGh3Xu3nQ7Eet7qdw4a_recy7WNhJvUm1CvnwCJENiSgW7flosfRUzhVmAvrp0IIDyL3SxmzNIbjjN-aVMyR8DaFG45_-ixWUktu3GzA6iFaCbOvBl1g3OF69gs88WYb3qWQcT8oOnxVDIyPHXSqBuCjgBJaHRkmPDXGeD-l6uaqy_c5R1YTN8OxQPiDeT77zte2z6lqIxWJsgQM7nbQw3g22l6srIu1FJwSDoxJ94GA')">
</div>
<div class="px-12 py-20 md:p-24 bg-surface-container-high">
<div class="text-primary font-bold text-sm tracking-[0.4em] mb-6 flex items-center gap-4">
<span class="text-4xl opacity-20">02</span> KURUMSAL GÜÇ
                    </div>
<h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-on-surface">Ticari Yapılar</h2>
<p class="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-xl">
                        İş dünyasının dinamizmine uygun, verimliliği maksimize eden ve marka kimliğini yansıtan ikonik yapılar inşa ediyoruz. Modern ofislerden alışveriş merkezlerine kadar her ölçekte profesyonel çözümler.
                    </p>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Business Centerlar
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Alışveriş Kompleksleri
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Endüstriyel Tesisler
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Showroom &amp; Sergi Alanları
                        </li>
</ul>
</div>
</div>
<!-- Service 03: Altyapı & Zemin -->
<div class="grid grid-cols-1 md:grid-cols-2 min-h-[819px] items-center">
<div class="order-2 md:order-1 px-12 py-20 md:p-24 bg-surface-container-highest">
<div class="text-primary font-bold text-sm tracking-[0.4em] mb-6 flex items-center gap-4">
<span class="text-4xl opacity-20">03</span> SAĞLAM TEMELLER
                    </div>
<h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-on-surface">Altyapı &amp; Zemin</h2>
<p class="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-xl">
                        Her büyük yapının arkasında görünmeyen bir mühendislik harikası yatar. Gezgin İnşaat olarak, zemin mekaniği ve altyapı projelerinde sarsılmaz güvenilirlik sağlıyoruz.
                    </p>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Jet Grouting &amp; İksa
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Derin Temel Sistemleri
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Ulaşım Ağları
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Kanalizasyon &amp; Islah
                        </li>
</ul>
</div>
<div class="h-full min-h-[400px] bg-cover bg-center order-1 md:order-2" data-alt="large scale construction site excavation with heavy machinery and steel reinforcements, technical civil engineering aesthetic" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRF1VTsTIXhotutbtK_ZbRkAIRi95fqf2KWQ_f-Ko87o5bKCwjFEjzvZ2qTdL9BnJD-R9UgPagVDwwWBPZuMw8ATUYB-EFKJOmhdv9K3VuDylBBfS-NaCSn18y0cv6-Ium9f4z8r-iM6efzXUcGSktIx3iyJAiAYA2XiCDl-MmnYA1YwhyjItVHDLyBI1HgpKWupFfurnattTgyVLUS0q2Q6kSDzGAcOHGMU0f_iGXqwr8DIOddcm3hdqCiZWD9bsnqBmk9Qzg9YU')">
</div>
</div>
<!-- Service 04: Proje Yönetimi -->
<div class="grid grid-cols-1 md:grid-cols-2 min-h-[819px] items-center">
<div class="h-full min-h-[400px] bg-cover bg-center" data-alt="architect's hands reviewing large blueprints on a light stone table with high-end drafting tools and architectural models" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwQMxW5X-8iUpf89wwZknhD9MvoleT9D2tmyerM82VhJcjCtTcj2lEiLayuySH7XyTJzjSG_mGoJmO3IRoAFBpxVH--xt5pxHZSYEGiqBQczTwFvtIDtTjZ18dEAwQPxa47I1JpC8aXTKgr8WZVWVhmGJRO9zy_-DmWH8sjR4tEJ1QqXIBTMknKoqOMnyLaej0VM9-6EzHiLVZmUTFkTBQkHCSNW3MjfEUKPVukDTzcDTeVq5PQqHX9JbGX4z3iZ8TaMCF4dSZvfY')">
</div>
<div class="px-12 py-20 md:p-24 bg-surface">
<div class="text-primary font-bold text-sm tracking-[0.4em] mb-6 flex items-center gap-4">
<span class="text-4xl opacity-20">04</span> STRATEJİK YÖNETİM
                    </div>
<h2 class="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-on-surface">Proje Yönetimi</h2>
<p class="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-xl">
                        Fikir aşamasından anahtar teslimine kadar her saniyeyi optimize ediyoruz. Maliyet kontrolü, risk analizi ve zaman yönetimi konularında profesyonel danışmanlık ve uygulama.
                    </p>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Fizibilite Raporları
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Teknik Müşavirlik
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Kalite Kontrol
                        </li>
<li class="flex items-center gap-3 text-secondary uppercase tracking-widest text-xs font-bold italic">
<span class="w-2 h-2 bg-primary"></span> Bütçeleme &amp; Planlama
                        </li>
</ul>
</div>
</div>
</section>
<!-- Process/Philosophy Section -->
<section class="py-32 bg-surface-container-low px-12">
<div class="max-w-[1920px] mx-auto">
<div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<h2 class="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
                        İnşaat <br/><span class="text-primary">Felsefemiz</span>
</h2>
<p class="text-secondary max-w-md font-medium text-lg leading-snug">
                        Her yapının bir ruhu olduğuna inanıyoruz. Sürecimiz, bu ruhu en sağlam formda gerçeğe dönüştürmek üzerine kuruludur.
                    </p>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-outline-variant/30">
<div class="p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-between min-h-[300px]">
<span class="text-primary font-extrabold text-5xl">01</span>
<div>
<h3 class="text-xl font-bold mb-4 uppercase tracking-widest">Kavramsal Tasarım</h3>
<p class="text-sm text-secondary leading-relaxed">Vizyonun ilk çizgilerle buluştuğu, estetik ve işlevselliğin dengelendiği aşama.</p>
</div>
</div>
<div class="p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-between min-h-[300px] bg-surface-container">
<span class="text-primary font-extrabold text-5xl">02</span>
<div>
<h3 class="text-xl font-bold mb-4 uppercase tracking-widest">Teknik Analiz</h3>
<p class="text-sm text-secondary leading-relaxed">Mühendislik hesaplamaları ve zemin etütleri ile yapının sarsılmaz temelleri atılır.</p>
</div>
</div>
<div class="p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-between min-h-[300px]">
<span class="text-primary font-extrabold text-5xl">03</span>
<div>
<h3 class="text-xl font-bold mb-4 uppercase tracking-widest">Hassas Uygulama</h3>
<p class="text-sm text-secondary leading-relaxed">Saha yönetiminde milimetrik hassasiyetle ilerleyen, disiplinli inşa süreci.</p>
</div>
</div>
<div class="p-12 flex flex-col justify-between min-h-[300px] bg-surface-container">
<span class="text-primary font-extrabold text-5xl">04</span>
<div>
<h3 class="text-xl font-bold mb-4 uppercase tracking-widest">Teslim &amp; Ötesi</h3>
<p class="text-sm text-secondary leading-relaxed">Anahtar tesliminden sonra da süregelen kurumsal garanti ve destek.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Impactful CTA -->
<section class="relative py-40 px-12 overflow-hidden text-center">
<div class="absolute inset-0 z-0 opacity-10">
<div class="absolute inset-0 monolith-gradient"></div>
</div>
<div class="relative z-10 max-w-4xl mx-auto">
<h2 class="text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-12">
                    Geleceği Birlikte İnşa Edelim
                </h2>
<p class="text-xl text-secondary mb-16 max-w-2xl mx-auto">
                    Hayalinizdeki projeyi teknik mükemmellik ve estetik vizyonla hayata geçirmek için profesyonel ekibimizle iletişime geçin.
                </p>
<div class="flex flex-col md:flex-row gap-6 justify-center">
<button class="bg-primary text-on-primary px-16 py-6 font-bold uppercase text-sm tracking-[0.2em] transition-all hover:bg-on-primary-container active:scale-95">
                        Teklif Alın
                    </button>
<button class="border border-outline text-on-surface px-16 py-6 font-bold uppercase text-sm tracking-[0.2em] transition-all hover:bg-surface-container-high active:scale-95">
                        Bize Ulaşın
                    </button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#efeee9] dark:bg-[#121210] full-width bottom-0 tonal-shift from surface to surface-container mt-20">
<div class="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10 max-w-[1920px] mx-auto">
<div class="font-['Manrope'] font-bold text-lg text-[#5b5f63] mb-8 md:mb-0">
                GEZGİN İNŞAAT
            </div>
<div class="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
<a class="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-[#5b5f63] opacity-70 hover:opacity-100 hover:text-[#775a19] transition-opacity" href="#">Privacy Policy</a>
<a class="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-[#5b5f63] opacity-70 hover:opacity-100 hover:text-[#775a19] transition-opacity" href="#">Terms of Service</a>
<a class="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-[#5b5f63] opacity-70 hover:opacity-100 hover:text-[#775a19] transition-opacity" href="#">Legal Notice</a>
<a class="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-[#5b5f63] opacity-70 hover:opacity-100 hover:text-[#775a19] transition-opacity" href="#">Careers</a>
</div>
<div class="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-[#5b5f63] opacity-70">
                © 2024 GEZGİN İNŞAAT. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>
</body></html>
