/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, 
  History, 
  FlaskConical, 
  Dna, 
  ChevronRight, 
  Menu, 
  X,
  Beaker,
  Thermometer,
  Zap,
  Globe,
  Mail
} from 'lucide-react';

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: 'zh' | 'en'; setLang: (l: 'zh' | 'en') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksMap = {
    zh: [
      { name: '起源', href: '#origin' },
      { name: '参数', href: '#atomic' },
      { name: '性质', href: '#properties' },
      { name: '合成', href: '#compounds' },
    ],
    en: [
      { name: 'Origin', href: '#origin' },
      { name: 'Atomic', href: '#atomic' },
      { name: 'Properties', href: '#properties' },
      { name: 'Synthesis', href: '#compounds' },
    ]
  };

  const links = navLinksMap[lang];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-xl cursor-default">Ra</div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white select-none">镭.com</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 items-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold text-white/50 hover:text-accent transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-2 px-3 py-1 border border-white/20 text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            <Globe size={10} />
            {lang === 'zh' ? 'English' : '中文'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-10 flex flex-col gap-6 md:hidden"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black text-white/50 hover:text-accent uppercase italic"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {setLang(lang === 'zh' ? 'en' : 'zh'); setIsOpen(false);}}
              className="text-left text-2xl font-black text-accent uppercase italic flex items-center gap-3"
            >
              <Globe size={20} />
              {lang === 'zh' ? 'English' : '简体中文'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-20 border-l border-white/20 pl-8">
    <span className="text-accent font-black text-xs tracking-[0.3em] uppercase block mb-4">{subtitle}</span>
    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">
      {title}
    </h2>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  const t = {
    zh: {
      heroTitle: '镭',
      heroSubtitle: 'ELEMENT',
      heroOriginLabel: '起源:',
      heroOriginText: '1898年由玛丽·居里与皮埃尔·居里通过沥青铀矿提取发现。源自拉丁语“radius”（射线），因其极强的自发放射性而得名。',
      heroButton: '开启调查',
      heroStable: '稳定状态：否',
      class7: '7类放射性物质',
      discoveryYear: '发现年份',
      atomicLabel: '原子概况',
      originTitle: '起源与历史',
      originSubtitle: 'The Beginning',
      originText1: '1898年，由于发现提纯铀后的矿渣仍具有极强放射性，居里夫妇意识到沥青铀矿中隐藏着一种未知的强大元素。',
      originText2: '在极其艰辛的条件下，玛丽·居里耗时四年才从数吨矿渣中分离出首批 0.1 克氯化镭结晶。这一发现彻底改变了人类对物质结构的认知。',
      extractAmount: '首次提纯量',
      nobel: '诺贝尔奖',
      curieQuote: '“这是我们第一次能够看到这个元素发出的光，它是如此美丽，像是黑暗中的幽灵。”',
      curieName: '—— 玛丽·居里',
      atomicTitle: '原子参数',
      atomicSubtitle: 'Atomic Info',
      atomicData: [
        { label: '符号 Symbol', value: 'Ra', desc: 'Radium' },
        { label: '原子序数 No.', value: '88', desc: '质子' },
        { label: '原子质量 Mass', value: '226', desc: '[226] u' },
        { label: '电子排布 Config', value: '7s²', desc: '[Rn] 核心' },
        { label: '氧化态 Oxid.', value: '+2', desc: '主要价态' },
        { label: '密度 Density', value: '5.5', desc: 'g/cm³' },
        { label: '熔点 Melting', value: '700', desc: '°C' },
        { label: '沸点 Boiling', value: '1737', desc: '°C' },
      ],
      propTitle: '元素性质',
      propSubtitle: 'Characteristics',
      propDesc: '镭是碱土金属中最重、最活泼的一员。其放射性产生的衰变热恒定输出，使镭及其盐类的温度始终高于环境温度。其放射毒性极高，易沉积在骨骼中。',
      levelLabel: '辐射强度',
      highHazard: '极高风险',
      physics: '物理性质',
      physics1: '光学性质',
      physics1Desc: '银白色放射性金属。由于能够轰击空气中的氮气发生电离，镭盐在暗处发出淡蓝色的光。',
      physics2: '磁学性质',
      physics2Desc: '具有顺磁性。在固态下随温度表现出复杂的晶格转化特性。',
      chemistry: '化学性质',
      chemistry1: '反应活性',
      chemistry1Desc: '极其活泼，可将水剧烈分解。其化学性质与重碱土金属钡（Ba）高度相似。',
      chemistry2: '氧化还原',
      chemistry2Desc: '在空气中迅速氧化发黑。主要生成氧化镭 (RaO) 以及氮化镭 (Ra₃N₂)。',
      compTitle: '化合物合成与深度解析',
      compSubtitle: 'Synthetics',
      compounds: [
        { 
          formula: 'RaCl₂', 
          name: '氯化镭', 
          method: '将碳酸镭溶解于高纯盐酸中，在干燥氢气或 HCl 气体流中加热至 1,000°C 彻底脱水。', 
          trait: '居里夫人最早分离出的形式。白色易溶结晶，具强放射发光，随时间推移晶格受损而变黄。' 
        },
        { 
          formula: 'RaBr₂', 
          name: '溴化镭', 
          method: '由氢氧化镭与氢溴酸发生中和反应制得。由于其与钡盐溶解度差异较大，常用于初期分步结晶。', 
          trait: '所有镭盐中发光效率最高。历史上曾广泛用于制造发光表盘（镭姑娘时代）。' 
        },
        { 
          formula: 'RaSO₄', 
          name: '硫酸镭', 
          method: '向可溶性镭盐溶液中滴加硫酸根离子产生沉淀。Ksp 仅为 4.25×10⁻¹¹。', 
          trait: '已知溶解度最低的镭盐。化学性质极其稳定，不溶于酸。是镭储存和固化的最终形式。' 
        },
        { 
          formula: 'RaCO₃', 
          name: '碳酸镭', 
          method: '利用可溶性盐与碱金属碳酸盐发生复分解反应沉淀。', 
          trait: '白色不溶粉末。是制备其他复杂镭化合物的核心中间载体。' 
        },
        { 
          formula: 'Ra(NO₃)₂', 
          name: '硝酸镭', 
          method: '金属镭或碳酸镭溶解于浓硝酸中。无水盐可在 110°C 真空脱水制得。', 
          trait: '白色溶于水结晶。其在浓硝酸中的极低溶解性常被利用于镭的高精提纯工艺。' 
        },
        { 
          formula: 'Ra(OH)₂', 
          name: '氢氧化镭', 
          method: '金属镭与超纯水直接反应，或氧化镭与饱和水蒸气作用。', 
          trait: '强碱。溶解度（21g/L）高于氢氧化钡。具有高腐蚀性。' 
        },
        { 
          formula: 'RaF₂', 
          name: '氟化镭', 
          method: '向镭离子溶液中滴加氢氟酸产生白色颗粒状沉淀。', 
          trait: '具有立方萤石结构。虽不溶于水，但在水溶液中受自身辐射影响易导致晶格位错。' 
        },
        { 
          formula: 'Ra-Be Source', 
          name: '镭-铍复合源', 
          method: '将干燥的溴化镭与金属铍粉末按 1:10 物理压制。', 
          trait: '历史上首个工业化中子源。其基于 ⁹Be(α, n)¹²C 核反应产生高能中子。' 
        }
      ],
      footerProj: '镭元素数据仓库 © 2026',
      authority: '源文献',
      curieArch: '居里实验室原始档案',
      state: '当前状态',
      activeEmission: '高能粒子释放中',
      contact: '联系我们',
    },
    en: {
      heroTitle: 'Radium',
      heroSubtitle: 'ELEMENT',
      heroOriginLabel: 'Origin:',
      heroOriginText: 'Discovered in 1898 by Marie and Pierre Curie through the processing of uraninite. Named from Latin "radius" due to its intense inherent radioactivity.',
      heroButton: 'BEGIN INVESTIGATION',
      heroStable: 'STABLE STATE: FALSE',
      class7: 'CLASS 7 RADIOACTIVE MATERIAL',
      discoveryYear: 'DISCOVERY YEAR',
      atomicLabel: 'ATOMIC PROFILE',
      originTitle: 'Origin & History',
      originSubtitle: 'The Beginning',
      originText1: 'In 1898, noting that uraninite residue was more radioactive than uranium itself, the Curies identified a powerful hidden element.',
      originText2: 'Under brutal conditions, Marie Curie spent four years processing tons of pitchblende to isolate the first 0.1g of pure radium chloride.',
      extractAmount: 'Initial Extract',
      nobel: 'Nobel Prize',
      curieQuote: '"It was the first time that we were able to see the light emitted by this element; it was as beautiful as a ghost in the dark."',
      curieName: '— MARIE CURIE',
      atomicTitle: 'Atomic Data',
      atomicSubtitle: 'Technical Specs',
      atomicData: [
        { label: 'Symbol', value: 'Ra', desc: 'Radium' },
        { label: 'Atomic No.', value: '88', desc: 'Protons' },
        { label: 'Atomic Mass', value: '226', desc: '[226] u' },
        { label: 'Electronic Config', value: '7s²', desc: '[Rn] Core' },
        { label: 'Oxidation State', value: '+2', desc: 'Primary' },
        { label: 'Density', value: '5.5', desc: 'g/cm³' },
        { label: 'Melting Point', value: '700', desc: '°C' },
        { label: 'Boiling Point', value: '1737', desc: '°C' },
      ],
      propTitle: 'Element Properties',
      propSubtitle: 'Characteristics',
      propDesc: 'Radium is the heaviest and most reactive alkaline earth metal. Radioactive decay heat keeps the metal and its salts consistently warmer than the environment.',
      levelLabel: 'Radiation Level',
      highHazard: 'HIGH HAZARD',
      physics: 'Physical Properties',
      physics1: 'Optical',
      physics1Desc: 'Silver-white metal. Luminescent in the dark as radiation ionizes atmospheric Nitrogen, producing a pale blue glow.',
      physics2: 'Magnetic',
      physics2Desc: 'Paramagnetic. Shows significant allotropic phase changes with temperature variation.',
      chemistry: 'Chemical Properties',
      chemistry1: 'Reactivity',
      chemistry1Desc: 'Extremely aggressive; decomposes water violently. Chemically resembles a heavier Barium (Ba).',
      chemistry2: 'Oxidation',
      chemistry2Desc: 'Turns target-black instantly in air, primarily forming oxide (RaO) and nitride (Ra₃N₂).',
      compTitle: 'Compound Synthesis',
      compSubtitle: 'Synthetics',
      compounds: [
        { 
          formula: 'RaCl₂', 
          name: 'Radium Chloride', 
          method: 'Dissolve RaCO₃ in high-purity HCl; dehydrate at 1,000°C in a stream of dry HCl or H₂ gas.', 
          trait: 'The first compound isolated by Marie Curie. White soluble crystals with strong radioluminescence.' 
        },
        { 
          formula: 'RaBr₂', 
          name: 'Radium Bromide', 
          method: 'Neutralization of Ra(OH)₂ with HBr. Its lower solubility in concentrated HCl vs Ba salts allows for fractional crystallization.', 
          trait: 'Highest luminous yield of all Ra salts. Historically used in deadly watch dial paints.' 
        },
        { 
          formula: 'RaSO₄', 
          name: 'Radium Sulfate', 
          method: 'Precipitated by adding SO₄²⁻ ions to soluble Ra salts. Ksp is a mere 4.25×10⁻¹¹.', 
          trait: 'The most insoluble radium salt. Extremely stable and inert; used for nuclear waste immobilization.' 
        },
        { 
          formula: 'RaCO₃', 
          name: 'Radium Carbonate', 
          method: 'Obtained via precipitation from soluble salts using alkali or ammonium carbonate.', 
          trait: 'White insoluble powder; vital intermediate for synthesizing other salts.' 
        },
        { 
          formula: 'Ra(NO₃)₂', 
          name: 'Radium Nitrate', 
          method: 'Formed by dissolving metal or carbonate in concentrated HNO₃. Vacuum dehydration at 110°C.', 
          trait: 'White soluble salt. Low solubility in fuming nitric acid is leveraged for chemical isolation.' 
        },
        { 
          formula: 'Ra(OH)₂', 
          name: 'Radium Hydroxide', 
          method: 'Reaction of metal Ra with ultra-pure water or RaO hydration with saturated steam.', 
          trait: 'Strong base. Much more soluble than Barium Hydroxide (21g/L). Highly caustic.' 
        },
        { 
          formula: 'RaF₂', 
          name: 'Radium Fluoride', 
          method: 'Precipitated from radium salt solution with Hydrofluoric Acid.', 
          trait: 'Cubic fluorite lattice. Extremely stable but subject to lattice dislocations over years of decay.' 
        },
        { 
          formula: 'Ra-Be Source', 
          name: 'Ra-Be Neutron Source', 
          method: 'Physical compaction of RaBr₂ powder with excess Beryllium metal powder (1:10 ratio).', 
          trait: 'The historic standard neutron source. Induces high-energy neutron flux via alpha bombardment.' 
        }
      ],
      footerProj: 'Radium Project © 2026',
      authority: 'Authority',
      curieArch: 'Curie Lab Archive',
      state: 'State',
      activeEmission: 'Active Emission',
      contact: 'Reach out',
    }
  };

  const current = t[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-accent selection:text-black">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
          RA
        </div>

        <div className="max-w-7xl mx-auto px-10 relative z-10 w-full grid grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-8"
          >
            <h1 className="text-huge font-black leading-[0.8] mb-12 tracking-tighter uppercase italic">
              <span className="block text-white">{current.heroTitle}</span>
              <span className="block text-white/20">{current.heroSubtitle}</span>
            </h1>
            
            <div className="max-w-xl">
              <p className="text-xl text-white/70 leading-relaxed mb-12 border-l-2 border-accent pl-8">
                <strong className="text-accent uppercase italic tracking-widest">{current.heroOriginLabel}</strong> {current.heroOriginText}
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <a href="#origin" className="px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-accent transition-all transform hover:scale-105">
                  {current.heroButton}
                </a>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-px bg-white/20"></div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">{current.heroStable}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex col-span-4 flex-col justify-end pb-20 items-end text-right">
            <div className="space-y-12">
              <div>
                <p className="text-[10px] uppercase text-white/30 tracking-widest mb-2 cursor-help" title="Number 88">{current.atomicLabel}</p>
                <div className="text-7xl font-black italic">88</div>
                <p className="text-sm font-mono text-accent">Ra / Radium</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/30 tracking-widest mb-2">{current.discoveryYear}</p>
                <div className="text-5xl font-black italic">1898</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-20 border-t border-white/5 flex items-center px-10 justify-between">
           <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">{current.class7}</span>
           <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-mono">226-RA ISOTOPE // 5.5 G/CM³</span>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <SectionHeader 
                subtitle={current.originSubtitle} 
                title={current.originTitle} 
              />
              <div className="space-y-8 text-xl text-white/50 font-light leading-relaxed">
                <p>{current.originText1}</p>
                <p>{current.originText2}</p>
                <div className="pt-10 flex gap-12 items-baseline">
                  <div>
                    <div className="text-6xl font-black italic text-accent">0.1<span className="text-xl">g</span></div>
                    <div className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-2">{current.extractAmount}</div>
                  </div>
                  <div>
                    <div className="text-6xl font-black italic text-white/50">1911</div>
                    <div className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-2">{current.nobel}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="lg:col-span-5 pt-20">
              <div className="bg-white/5 border border-white/10 p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/10 group-hover:text-accent/50 transition-colors">FIG. 088-A</div>
                <div className="text-sm font-light text-white/40 mb-8 italic leading-relaxed">
                  {current.curieQuote}
                </div>
                <div className="text-xs font-bold text-accent tracking-widest uppercase">{current.curieName}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atomic Section */}
      <section id="atomic" className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <SectionHeader 
            subtitle={current.atomicSubtitle} 
            title={current.atomicTitle} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10">
            {current.atomicData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-12 border border-white/5 hover:bg-white/5 transition-all group"
              >
                <div className="text-white/30 text-[10px] font-black mb-4 uppercase tracking-[0.2em]">{item.label}</div>
                <div className="text-5xl font-black text-white group-hover:text-accent transition-colors italic">{item.value}</div>
                <div className="text-[10px] uppercase text-white/20 tracking-widest mt-2 font-mono whitespace-nowrap overflow-hidden text-clip">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-2/5">
              <SectionHeader 
                subtitle={current.propSubtitle} 
                title={current.propTitle} 
              />
              <p className="text-white/60 text-xl font-light mb-12 leading-relaxed">
                {current.propDesc}
              </p>
              <div className="p-8 bg-accent text-black font-black uppercase text-xs tracking-[0.4em] flex items-center justify-between">
                <span>{current.levelLabel}</span>
                <span className="text-sm">{current.highHazard}</span>
              </div>
            </div>
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div className="p-12 bg-black hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-black text-white mb-6 uppercase italic flex justify-between items-center">
                  {current.physics} <Zap size={16} className="text-accent" />
                </h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">{current.physics1}</span>
                    <p className="text-sm">{current.physics1Desc}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">{current.physics2}</span>
                    <p className="text-sm">{current.physics2Desc}</p>
                  </div>
                </div>
              </div>
              <div className="p-12 bg-black hover:bg-white/[0.02] transition-all">
                <h3 className="text-xl font-black text-white mb-6 uppercase italic flex justify-between items-center">
                  {current.chemistry} <Beaker size={16} className="text-accent" />
                </h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">{current.chemistry1}</span>
                    <p className="text-sm">{current.chemistry1Desc}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest block mb-1">{current.chemistry2}</span>
                    <p className="text-sm">{current.chemistry2Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compounds Section */}
      <section id="compounds" className="py-32">
        <div className="max-w-7xl mx-auto px-10">
          <SectionHeader 
            subtitle={current.compSubtitle} 
            title={current.compTitle} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {current.compounds.map((comp, i) => (
              <div key={i} className="p-12 bg-black hover:bg-white/[0.03] transition-all group">
                <div className="text-accent font-black text-3xl mb-2 group-hover:italic transition-all">{comp.formula}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-10">{comp.name}</div>
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] uppercase text-white/20 tracking-widest mb-2 font-black">Synthesis</p>
                    <p className="text-sm leading-relaxed">{comp.method}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-white/20 tracking-widest mb-2 font-black">Traits</p>
                    <p className="text-sm text-white/50 italic">{comp.trait}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center font-bold text-sm">Ra</div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/40">{current.footerProj}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-white/20 font-black">{current.contact}</span>
              <a href="mailto:Ra@镭.com" className="text-xs font-mono text-white/40 hover:text-accent transition-all flex items-center gap-2 group/mail">
                <Mail size={12} className="group-hover/mail:text-accent" />
                <span className="underline underline-offset-4 decoration-white/5 group-hover/mail:decoration-accent/50">Ra@镭.com</span>
              </a>
            </div>
          </div>
          <div className="flex gap-12">
             <div className="text-right">
               <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">{current.authority}</p>
               <p className="text-[10px] font-mono text-white/40 uppercase">{lang === 'zh' ? '居里研究所档案' : 'Curie Institute Archive'}</p>
             </div>
             <div className="text-right">
               <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">{current.state}</p>
               <p className="text-[10px] font-mono text-accent uppercase">{current.activeEmission}</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
