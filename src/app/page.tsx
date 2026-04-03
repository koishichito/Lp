"use client";

import { useState } from "react";

/* ─── Icon Components ─── */
function IconSearch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function IconUsers({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconClock({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconHeart({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function IconChart({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function IconCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconChevronDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function IconArrowRight({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconPhone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconBuilding({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function IconUserMd({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function IconStar({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ─── FAQ Accordion ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        <span className={`text-primary transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}>
          <IconChevronDown />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      {/* ────────── Header ────────── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              Med<span className="text-primary">Match</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-primary transition-colors">特徴</a>
            <a href="#flow" className="hover:text-primary transition-colors">ご利用の流れ</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">利用者の声</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              無料で相談する
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ────────── Hero ────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-secondary-light">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                医師・病院 双方の満足度 98%
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                医師と病院の<br />
                <span className="text-primary">最適なマッチング</span>を<br />
                実現する
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                独自のアルゴリズムとキャリアアドバイザーが、<br className="hidden sm:inline" />
                医師のキャリアと病院の採用課題を同時に解決します。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                >
                  <IconUserMd className="w-5 h-5" />
                  医師の方はこちら
                </a>
                <a
                  href="#cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold px-8 py-4 rounded-xl text-lg transition-all"
                >
                  <IconBuilding className="w-5 h-5" />
                  病院の方はこちら
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-secondary" />完全無料</span>
                <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-secondary" />最短3日でマッチング</span>
                <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-secondary" />秘密厳守</span>
              </div>
            </div>
          </div>
        </section>

        {/* ────────── Problems ────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Problems</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">こんなお悩みありませんか？</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-primary-light/50 border border-primary/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <IconUserMd className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">医師の方</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "自分に合った病院が見つからない",
                    "忙しくて転職活動の時間が取れない",
                    "給与・待遇の交渉が苦手",
                    "今の職場に知られずに転職したい",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary-light/50 border border-secondary/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <IconBuilding className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">病院の方</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "求める専門医がなかなか見つからない",
                    "採用コストが高すぎる",
                    "入職後のミスマッチが多い",
                    "急な欠員に対応できない",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 w-5 h-5 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center mt-10 text-xl font-bold text-primary">
              MedMatchがすべて解決します
            </p>
          </div>
        </section>

        {/* ────────── Features ────────── */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Features</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">MedMatchが選ばれる理由</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                医療業界に特化したマッチングプラットフォームだからこそ実現できる価値があります。
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <IconSearch className="w-7 h-7" />,
                  title: "AIマッチング",
                  desc: "専門科目、勤務条件、キャリアプランなど多角的な要素をAIが分析し、最適な候補を提案します。",
                },
                {
                  icon: <IconUsers className="w-7 h-7" />,
                  title: "専任アドバイザー",
                  desc: "医療業界に精通した専任のキャリアアドバイザーが、面談から入職までを一貫サポート。",
                },
                {
                  icon: <IconShield className="w-7 h-7" />,
                  title: "秘密厳守",
                  desc: "個人情報は厳重に管理。現職に知られることなく安心して転職活動を進められます。",
                },
                {
                  icon: <IconClock className="w-7 h-7" />,
                  title: "スピード対応",
                  desc: "登録から最短3日でマッチング候補をご提案。急な採用ニーズにも柔軟に対応します。",
                },
                {
                  icon: <IconHeart className="w-7 h-7" />,
                  title: "高い定着率",
                  desc: "入職後1年以内の離職率はわずか3%。ミスマッチのない確かなマッチングを実現。",
                },
                {
                  icon: <IconChart className="w-7 h-7" />,
                  title: "市場データ活用",
                  desc: "最新の医師給与・求人動向データをもとに、適正な条件での交渉を支援します。",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 transition-shadow group"
                >
                  <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────── Stats ────────── */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">数字で見るMedMatch</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15,000+", label: "登録医師数" },
                { number: "3,200+", label: "提携病院数" },
                { number: "98%", label: "満足度" },
                { number: "97%", label: "定着率（1年後）" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">
                    {s.number}
                  </div>
                  <div className="text-white/70 text-sm sm:text-base font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────── Flow ────────── */}
        <section id="flow" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">How it works</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">ご利用の流れ</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                簡単4ステップで、理想のマッチングを実現します。
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20" />
              {[
                { step: "01", title: "無料登録", desc: "最短1分で登録完了。基本情報と希望条件を入力するだけ。" },
                { step: "02", title: "ヒアリング", desc: "専任アドバイザーが詳細な希望条件やキャリアプランをヒアリング。" },
                { step: "03", title: "マッチング", desc: "AIと専門家の知見を組み合わせ、最適な候補をご提案。" },
                { step: "04", title: "面談・入職", desc: "面談の日程調整から条件交渉、入職手続きまでフルサポート。" },
              ].map((s) => (
                <div key={s.step} className="relative text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 relative z-10 shadow-lg shadow-primary/25">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────── Testimonials ────────── */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">Testimonials</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">利用者の声</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "田中 一郎",
                  role: "循環器内科医 / 38歳",
                  text: "忙しい中でもアドバイザーの方が全てサポートしてくれました。希望通りの条件で、ワークライフバランスの取れた病院に転職できました。",
                },
                {
                  name: "佐藤 美咲",
                  role: "小児科医 / 34歳",
                  text: "女性医師としてのキャリアプランを親身に相談に乗ってもらえました。育児と両立できる環境が見つかり感謝しています。",
                },
                {
                  name: "鈴木 院長",
                  role: "総合病院 院長",
                  text: "これまで採用に苦労していた麻酔科医を2名採用できました。マッチングの精度が高く、定着率も非常に良いです。",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────── FAQ ────────── */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">よくある質問</h2>
            </div>
            <div className="space-y-4">
              <FAQItem
                question="利用料金はかかりますか？"
                answer="医師の方は完全無料でご利用いただけます。病院側は成功報酬型の料金体系となっており、採用が決まるまで費用は一切かかりません。"
              />
              <FAQItem
                question="現職に知られずに転職活動できますか？"
                answer="はい、秘密厳守を徹底しています。ご本人の許可なく情報が現職や第三者に開示されることはありません。匿名での求人閲覧も可能です。"
              />
              <FAQItem
                question="登録からマッチングまでどのくらいかかりますか？"
                answer="ご登録後、最短3日で候補のご提案が可能です。ただし、ご希望条件やエリアによっては、最適なマッチングのためにお時間をいただく場合があります。"
              />
              <FAQItem
                question="どの診療科に対応していますか？"
                answer="内科、外科、小児科、産婦人科、整形外科、精神科など、全ての診療科に対応しています。専門医資格をお持ちの方には、特に手厚いサポートをご用意しています。"
              />
              <FAQItem
                question="非常勤やスポット勤務も探せますか？"
                answer="はい、常勤だけでなく非常勤、スポット勤務、当直バイトなど幅広い勤務形態に対応しています。複数の働き方を組み合わせたご提案も可能です。"
              />
            </div>
          </div>
        </section>

        {/* ────────── CTA ────────── */}
        <section id="cta" className="py-20 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              理想のマッチングを、今すぐ始めましょう
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              まずは無料相談から。専任アドバイザーが丁寧にご希望をお伺いします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
              >
                <IconUserMd className="w-5 h-5" />
                医師として無料登録
                <IconArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white/30 hover:bg-white/20 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                <IconBuilding className="w-5 h-5" />
                病院として求人掲載
                <IconArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/70 text-sm">
              <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-white/90" />登録無料</span>
              <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-white/90" />秘密厳守</span>
              <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-white/90" />成功報酬型</span>
            </div>
          </div>
        </section>
      </main>

      {/* ────────── Footer ────────── */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="font-bold text-xl text-white">
                  Med<span className="text-primary">Match</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                医師と病院の最適なマッチングを実現し、<br />
                医療の未来に貢献します。
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">医師の方へ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">病院の方へ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入事例</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-white transition-colors">特定商取引法</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <IconPhone className="w-4 h-4 text-primary" />
                  0120-XXX-XXX
                </li>
                <li className="flex items-center gap-2">
                  <IconMail className="w-4 h-4 text-primary" />
                  info@medmatch.jp
                </li>
                <li className="text-xs text-gray-500">受付時間: 平日 9:00〜18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 MedMatch Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
