// =========================================================================
    // 1. CATALOG, SECTORS, NEWS & GROUNDED FY2025-26 COMPANY ANNUAL REPORTS
    // =========================================================================
    const INITIAL_BALANCE = 1000000;
    const STORAGE_KEY = "paperview_state_v2";
    const THEME_KEY = "paperview_theme_v4";
    const FX_KEY = "paperview_fx_v3";

    const THEMES = [
      { id: "daylight", label: "Daylight Crisp", group: "Light", dot: "#0284c7" },
      { id: "ivory", label: "Warm Ivory Paper", group: "Light", dot: "#b45309" },
      { id: "mint", label: "Mint Ledger", group: "Light", dot: "#0d9488" },
      { id: "rose", label: "Rose Quartz Studio", group: "Light", dot: "#4f46e5" },
      { id: "midnight", label: "Midnight Navy", group: "Dark", dot: "#38bdf8" },
      { id: "obsidian", label: "Obsidian Pro", group: "Dark", dot: "#22d3ee" },
      { id: "emerald", label: "Emerald Terminal", group: "Dark", dot: "#34d399" }
    ];

    const INSTRUMENTS = [
      { symbol: "NIFTY 50", name: "NIFTY 50 Index", exchange: "NSE", type: "INDEX", sector: "Benchmark", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 25514.30, prev: 25227.95 },
      { symbol: "BANKNIFTY", name: "NIFTY Bank Index", exchange: "NSE", type: "INDEX", sector: "Banking", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 64310.40, prev: 63063.00 },
      { symbol: "SENSEX", name: "BSE SENSEX Index", exchange: "BSE", type: "INDEX", sector: "Benchmark", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 82714.31, prev: 83021.75 },
      { symbol: "INDIA VIX", name: "India Volatility Index", exchange: "NSE", type: "INDEX", sector: "Volatility", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 16.98, prev: 16.11 },

      { symbol: "RELIANCE", name: "Reliance Industries Ltd", exchange: "NSE", type: "STOCK", sector: "Energy & Telecom", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 1366.00, prev: 1349.80 },
      { symbol: "TCS", name: "Tata Consultancy Services Ltd", exchange: "NSE", type: "STOCK", sector: "IT Services", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 2331.80, prev: 2379.50 },
      { symbol: "HDFCBANK", name: "HDFC Bank Ltd", exchange: "NSE", type: "STOCK", sector: "Banking", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 814.70, prev: 808.15 },
      { symbol: "INFY", name: "Infosys Ltd", exchange: "NSE", type: "STOCK", sector: "IT Services", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 1073.70, prev: 1108.80 },
      { symbol: "ICICIBANK", name: "ICICI Bank Ltd", exchange: "NSE", type: "STOCK", sector: "Banking", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 1597.00, prev: 1601.30 },
      { symbol: "SBIN", name: "State Bank of India", exchange: "NSE", type: "STOCK", sector: "Banking", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 1147.40, prev: 1126.50 },
      { symbol: "BHARTIARTL", name: "Bharti Airtel Ltd", exchange: "NSE", type: "STOCK", sector: "Energy & Telecom", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 2142.10, prev: 2132.00 },
      { symbol: "BAJFINANCE", name: "Bajaj Finance Ltd", exchange: "NSE", type: "STOCK", sector: "Financials & NBFC", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 1096.20, prev: 1093.85 },
      { symbol: "LT", name: "Larsen & Toubro Ltd", exchange: "NSE", type: "STOCK", sector: "Infrastructure", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 4171.90, prev: 4159.00 },
      { symbol: "ITC", name: "ITC Ltd", exchange: "NSE", type: "STOCK", sector: "FMCG", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 299.65, prev: 296.60 },
      { symbol: "MARUTI", name: "Maruti Suzuki India Ltd", exchange: "NSE", type: "STOCK", sector: "Automobile", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 13439.00, prev: 12632.00 },
      { symbol: "TATASTEEL", name: "Tata Steel Ltd", exchange: "NSE", type: "STOCK", sector: "Metals", lot: 1, expiry: null, strike: null, optType: null, underlying: null, base: 180.59, prev: 183.10 },

      { symbol: "NIFTY26NOVFUT", name: "NIFTY Nov 2026 Future", exchange: "NSE", type: "FUTURE", sector: "Derivatives", lot: 65, expiry: "2026-11-26", strike: null, optType: null, underlying: "NIFTY 50", base: 25544.00, prev: 25280.00 },
      { symbol: "NIFTY26DECFUT", name: "NIFTY Dec 2026 Future", exchange: "NSE", type: "FUTURE", sector: "Derivatives", lot: 65, expiry: "2026-12-31", strike: null, optType: null, underlying: "NIFTY 50", base: 25668.50, prev: 25402.00 },
      { symbol: "BANKNIFTY26NOVFUT", name: "BANKNIFTY Nov 2026 Future", exchange: "NSE", type: "FUTURE", sector: "Banking", lot: 30, expiry: "2026-11-26", strike: null, optType: null, underlying: "BANKNIFTY", base: 64395.00, prev: 63140.00 },
      { symbol: "SENSEX26NOVFUT", name: "SENSEX Nov 2026 Future", exchange: "BSE", type: "FUTURE", sector: "Derivatives", lot: 20, expiry: "2026-11-27", strike: null, optType: null, underlying: "SENSEX", base: 82810.00, prev: 83120.00 },
      { symbol: "RELIANCE26NOVFUT", name: "RELIANCE Nov 2026 Future", exchange: "NSE", type: "FUTURE", sector: "Energy & Telecom", lot: 500, expiry: "2026-11-26", strike: null, optType: null, underlying: "RELIANCE", base: 1370.20, prev: 1353.50 },

      { symbol: "NIFTY26NOV25500CE", name: "NIFTY 26 Nov 25500 CE", exchange: "NSE", type: "OPTION", sector: "Derivatives", lot: 65, expiry: "2026-11-26", strike: 25500, optType: "CE", underlying: "NIFTY 50", base: 228.40, prev: 194.20 },
      { symbol: "NIFTY26NOV25500PE", name: "NIFTY 26 Nov 25500 PE", exchange: "NSE", type: "OPTION", sector: "Derivatives", lot: 65, expiry: "2026-11-26", strike: 25500, optType: "PE", underlying: "NIFTY 50", base: 186.75, prev: 238.50 },
      { symbol: "NIFTY26NOV25600CE", name: "NIFTY 26 Nov 25600 CE", exchange: "NSE", type: "OPTION", sector: "Derivatives", lot: 65, expiry: "2026-11-26", strike: 25600, optType: "CE", underlying: "NIFTY 50", base: 172.10, prev: 141.80 },
      { symbol: "BANKNIFTY26NOV64300CE", name: "BANKNIFTY 26 Nov 64300 CE", exchange: "NSE", type: "OPTION", sector: "Banking", lot: 30, expiry: "2026-11-26", strike: 64300, optType: "CE", underlying: "BANKNIFTY", base: 542.60, prev: 468.00 },
      { symbol: "BANKNIFTY26NOV64300PE", name: "BANKNIFTY 26 Nov 64300 PE", exchange: "NSE", type: "OPTION", sector: "Banking", lot: 30, expiry: "2026-11-26", strike: 64300, optType: "PE", underlying: "BANKNIFTY", base: 495.20, prev: 572.40 },
      { symbol: "SENSEX26NOV82700CE", name: "SENSEX 27 Nov 82700 CE", exchange: "BSE", type: "OPTION", sector: "Derivatives", lot: 20, expiry: "2026-11-27", strike: 82700, optType: "CE", underlying: "SENSEX", base: 618.50, prev: 655.00 }
    ];

    const SECTORS_LIST = [
      { id: "Banking", label: "NIFTY Bank", symbols: ["HDFCBANK", "ICICIBANK", "SBIN"] },
      { id: "IT Services", label: "NIFTY IT", symbols: ["TCS", "INFY"] },
      { id: "Automobile", label: "NIFTY Auto", symbols: ["MARUTI"] },
      { id: "Energy & Telecom", label: "Energy & Telecom", symbols: ["RELIANCE", "BHARTIARTL"] },
      { id: "FMCG", label: "NIFTY FMCG", symbols: ["ITC"] },
      { id: "Infrastructure", label: "NIFTY Infra", symbols: ["LT"] },
      { id: "Financials & NBFC", label: "Fin Services", symbols: ["BAJFINANCE"] },
      { id: "Metals", label: "NIFTY Metal", symbols: ["TATASTEEL"] }
    ];

    // Grounded FY2025-26 Company Annual Reports (official Investor Relations URLs & highlights)
    const ANNUAL_REPORTS = {
      RELIANCE: {
        fy: "FY 2025-26",
        title: "Reliance Industries Integrated Annual Report 2025-26",
        url: "https://www.ril.com/ar2025-26/index.html",
        metrics: [
          { label: "Consolidated Revenue", value: "₹11,75,919 Cr (+9.8% YoY)" },
          { label: "EBITDA", value: "₹2,07,911 Cr (+13.4% YoY)" },
          { label: "Profit After Tax", value: "₹95,754 Cr (+17.8% YoY)" },
          { label: "EPS / Net Margin", value: "₹59.7 / 8.1%" }
        ],
        summary: "Jio crossed 524M users (268M 5G) with Jio Platforms PAT surpassing ₹30,000 Cr; Reliance Retail delivered ₹3,71,085 Cr revenue and O2C posted ₹6,62,401 Cr."
      },
      INFY: {
        fy: "FY 2025-26",
        title: "Infosys Integrated Annual Report 2025-26",
        url: "https://www.infosys.com/investors/reports-filings/annual-report/annual-reports/ar-2025-26.html",
        metrics: [
          { label: "Revenue", value: "₹1,78,650 Cr (+9.6% YoY)" },
          { label: "Operating Margin", value: "21.0% Adjusted" },
          { label: "EPS / ROE", value: "₹71.58 (+11%) / 31.6%" },
          { label: "Dividend / Large Deals", value: "₹48/sh · $14.9B TCV" }
        ],
        summary: "AI-led programs deployed across 90% of top 200 clients; free cash flow reached ₹33,097 Cr (112.3% FCF conversion) alongside ₹18,000 Cr buyback completion."
      },
      TCS: {
        fy: "FY 2025-26",
        title: "TCS Integrated Annual Report 2025-26",
        url: "https://www.tcs.com/content/dam/tcs/investor-relations/financial-statements/2025-26/ar/annual-report-2025-2026.pdf",
        metrics: [
          { label: "AI Workforce", value: "2,70,000+ Advanced AI Skills" },
          { label: "Dividend (FY26)", value: "₹110 per share" },
          { label: "Strategic Focus", value: "Enterprise AI & HyperVault" },
          { label: "Reporting Period", value: "Apr 2025 – Mar 2026" }
        ],
        summary: "Highlights TCS's integrated AI stack, HyperVault secure-by-design AI infrastructure, agentic AI deployments, and full financial & statutory disclosures."
      },
      HDFCBANK: {
        fy: "FY 2025-26",
        title: "HDFC Bank Investor Relations & Annual Reports",
        url: "https://www.hdfc.bank.in/about-us/investor-relations",
        metrics: [
          { label: "Sector", value: "Private Sector Banking" },
          { label: "Filings Hub", value: "Annual & Quarterly Reports" },
          { label: "Benchmark", value: "NIFTY 50 & BANKNIFTY" },
          { label: "Disclosures", value: "SEBI LODR & Basel III" }
        ],
        summary: "Access HDFC Bank's audited annual financial statements, management discussion & analysis, Basel III capital disclosures, and quarterly investor presentations."
      },
      ICICIBANK: {
        fy: "FY 2025-26",
        title: "ICICI Bank Annual Report FY2026",
        url: "https://www.icici.bank.in/about-us/annual",
        metrics: [
          { label: "Format", value: "HTML & Integrated PDF" },
          { label: "Sector", value: "Private Sector Banking" },
          { label: "Benchmark", value: "NIFTY 50 & BANKNIFTY" },
          { label: "Filings", value: "Annual Report & SEC 20-F" }
        ],
        summary: "Includes ICICI Bank's FY2026 Integrated Report, standalone & consolidated financial statements, credit quality metrics, and governance disclosures."
      },
      SBIN: {
        fy: "FY 2025-26",
        title: "State Bank of India Annual Report 2025-26",
        url: "https://sbi.bank.in/web/investor-relations/annual-report",
        metrics: [
          { label: "Report", value: "SBI Annual Report 2025-26" },
          { label: "Sector", value: "PSU Banking Leader" },
          { label: "Benchmark", value: "NIFTY 50 & BANKNIFTY" },
          { label: "Access", value: "Official IR PDF (English)" }
        ],
        summary: "Covers India's largest public-sector bank's FY25-26 balance sheet, deposit & advances growth, digital banking scale (YONO), and asset quality review."
      },
      BHARTIARTL: {
        fy: "FY 2025-26",
        title: "Bharti Airtel Integrated Report & Financial Statements 2025-26",
        url: "https://assets.airtel.in/static-assets/cms/investor/docs/annual_results_2025_26/Airtel---Annual-Report-2026.pdf",
        metrics: [
          { label: "India Wireless Base", value: "~373.2M Subscribers" },
          { label: "India ARPU (Q4FY26)", value: "₹257 (+4.9% YoY)" },
          { label: "Q4FY26 Consol. Rev", value: "₹55,383 Cr (+15.7% YoY)" },
          { label: "EBITDA Margin", value: "56.9% Consolidated" }
        ],
        summary: "Details Bharti Airtel's 4G/5G subscriber growth (299.1M data users), India & Africa operations, strong free cash flow generation, and net debt reduction."
      },
      BAJFINANCE: {
        fy: "FY 2025-26",
        title: "Bajaj Finance Investor Relations — Annual Reports",
        url: "https://www.bajajfinserv.in/finance-investor-relations-annual-reports",
        metrics: [
          { label: "Sector", value: "Consumer & Commercial NBFC" },
          { label: "Benchmark", value: "NIFTY 50 Constituent" },
          { label: "Disclosures", value: "Annual Reports & Reg. 46/62" },
          { label: "Archive", value: "Official IR Portal" }
        ],
        summary: "Direct access to Bajaj Finance's annual reports, investor presentations, AUM & asset-quality updates, and SEBI LODR shareholder disclosures."
      },
      LT: {
        fy: "FY 2025-26",
        title: "Larsen & Toubro Integrated Annual Report 2025-26",
        url: "https://investors.larsentoubro.com/upload/AnnualRep/FY2026AnnualRepLNTIARFY2026.pdf",
        metrics: [
          { label: "Order Momentum", value: "Record FY26 Order Inflows" },
          { label: "Core Verticals", value: "EPC, Hi-Tech Mfg, IT" },
          { label: "Safety Record", value: "1,369M Accident-Free Hrs" },
          { label: "Space & Defence", value: "Industry-Built PSLV & Zorawar" }
        ],
        summary: "Covers L&T's record order book, EPC infrastructure execution, precision engineering in defence & aerospace, and SEBI BRSR sustainability disclosures."
      },
      ITC: {
        fy: "FY 2025-26",
        title: "ITC Limited Investor Relations & Annual Report Hub",
        url: "https://itcportal.com/investors.html",
        metrics: [
          { label: "Gross Revenue (FY26)", value: "₹80,867 Crore" },
          { label: "EBITDA (FY26)", value: "₹25,208 Crore" },
          { label: "Segments", value: "FMCG, Paperboards, Agri, IT" },
          { label: "Associates", value: "ITC Hotels & ITC Infotech" }
        ],
        summary: "Comprehensive financial performance across ITC's diversified FMCG, packaging, specialty papers, agri-business, and IT services portfolio."
      },
      MARUTI: {
        fy: "FY 2025-26",
        title: "Maruti Suzuki Annual Integrated Report 2025-26 ('The Next Million')",
        url: "https://www.marutisuzuki.com/content/dam/arena-eds/corporate/pdf/company-reports/2025-2026/MSIL_IR_2025-26_HR_updated_1.pdf",
        metrics: [
          { label: "Capacity Addition", value: "+5,00,000 Units" },
          { label: "Product Pipeline", value: "7 New SUVs Planned" },
          { label: "Net-Zero Initiative", value: "₹561 Cr Biogas Plants" },
          { label: "Industry Outlook", value: "6.1–6.3M Units by FY31" }
        ],
        summary: "Themed 'The Next Million', detailing Maruti Suzuki's manufacturing expansion across Gurugram, Manesar, Hansalpur & Kharkhoda, SUV roadmap, and clean mobility."
      },
      TATASTEEL: {
        fy: "FY 2025-26",
        title: "Tata Steel Integrated Report & Annual Accounts 2025-26 (119th Year)",
        url: "https://www.tatasteel.com/investors/integrated-reportannual-report/integrated-report-annual-accounts-2025-26-119th-year-and-related-documents/",
        metrics: [
          { label: "Edition", value: "119th Integrated Annual Report" },
          { label: "Sector", value: "Metals & Steel" },
          { label: "Operations", value: "India, Europe & SE Asia" },
          { label: "Disclosures", value: "TNFD, CBAM & Financial Accts" }
        ],
        summary: "Full FY25-26 annual accounts, India & European steel operations review, decarbonization & CBAM readiness, and corporate governance statements."
      }
    };

    const MARKET_NEWS = [
      { title: "Nifty Bank hits new high; HDFC Bank, ICICI Bank rally up to 21% in November", source: "Business Standard", time: "20 Nov 2026", tags: ["BANKNIFTY", "HDFCBANK", "ICICIBANK", "SBIN"], url: "https://www.business-standard.com/markets/news/nifty-bank-hits-new-high-hdfc-bank-icici-bank-rally-up-to-21-in-november-126112000367_1.html" },
      { title: "FPIs pump record ₹99,158 crore into Indian equities in November 2026", source: "Angel One", time: "18 Nov 2026", tags: ["NIFTY 50", "SENSEX", "RELIANCE", "BAJFINANCE"], url: "https://www.angelone.in/news/market-updates/fpis-pump-record-99-158-crore-into-indian-equities-in-november-2026" },
      { title: "TCS, Infosys and Indian IT stocks rally up to 4% amid global AI rotation", source: "Economic Times", time: "20 Nov 2026", tags: ["TCS", "INFY"], url: "https://economictimes.indiatimes.com/infosys-ltd/stocksupdate/companyid-10960.cms" },
      { title: "Nifty Auto surges 4.4% as Maruti Suzuki jumps 7.6% in broad market rally", source: "HDFC Sky", time: "19 Nov 2026", tags: ["MARUTI", "NIFTY 50"], url: "https://hdfcsky.com/news/sectoral-snapshot-today-november-19-2026-auto-financials-consumer-durables-lead-rally-it-bucks-trend" },
      { title: "India VIX rises 5.34% to 16.98 amid global sell-off and Asian market cues", source: "HDFC Sky", time: "20 Nov 2026", tags: ["INDIA VIX", "NIFTY 50", "SENSEX"], url: "https://hdfcsky.com/news/india-vix-rises-5-34percent-as-asian-markets-slide-and-us-tech-sell-off-weighs-on-indian-markets-november-20-2026" },
      { title: "TCS & Maruti feature among midday gainers while Tata Steel slips 1.99%", source: "HDFC Sky", time: "20 Nov 2026", tags: ["TATASTEEL", "TCS", "MARUTI"], url: "https://hdfcsky.com/news/top-gainers-losers-november-20-2026-at-12-pm" },
      { title: "Nifty, Sensex stage sharp recovery as financials and heavyweights rebound", source: "HDFC Sky", time: "19 Nov 2026", tags: ["RELIANCE", "NIFTY 50", "SENSEX", "LT", "BHARTIARTL", "ITC"], url: "https://hdfcsky.com/news/market-close-report-today-november-19-2026-nifty-sensex-stage-sharp-recovery-as-fed-fails-to-scare-stocks" }
    ];

    const dynamicInstruments = {};

    function getInstrument(symbol) {
      const sym = String(symbol || "RELIANCE").toUpperCase();
      const found = INSTRUMENTS.find(i => i.symbol.toUpperCase() === sym);
      if (found) return found;
      if (dynamicInstruments[sym]) return dynamicInstruments[sym];
      const m = sym.match(/^(NIFTY|BANKNIFTY|SENSEX)(\d{2}[A-Z]{3})(\d+)(CE|PE)$/);
      if (m) {
        const [, root, exp, strikeStr, optType] = m;
        const underlying = root === "NIFTY" ? "NIFTY 50" : root;
        const lot = root === "NIFTY" ? 65 : root === "BANKNIFTY" ? 30 : 20;
        const inst = {
          symbol: sym, name: `${root} ${exp} ${strikeStr} ${optType}`,
          exchange: root === "SENSEX" ? "BSE" : "NSE", type: "OPTION", sector: "Derivatives",
          lot, expiry: root === "SENSEX" ? "2026-11-27" : "2026-11-26",
          strike: Number(strikeStr), optType, underlying, base: 150, prev: 145
        };
        dynamicInstruments[sym] = inst;
        return inst;
      }
      return INSTRUMENTS[4];
    }

    function getRelevantNews(symbol) {
      const inst = getInstrument(symbol);
      const matchKey = inst.underlying || inst.symbol;
      const direct = MARKET_NEWS.filter(n => n.tags.includes(matchKey) || n.tags.includes(inst.symbol)).map(n => ({ ...n, isDirect: true }));
      const rest = MARKET_NEWS.filter(n => !(n.tags.includes(matchKey) || n.tags.includes(inst.symbol))).map(n => ({ ...n, isDirect: false }));
      return [...direct, ...rest];
    }

    function getAnnualReport(symbol) {
      const inst = getInstrument(symbol);
      return ANNUAL_REPORTS[inst.symbol] || (inst.underlying ? ANNUAL_REPORTS[inst.underlying] : null) || null;
    }

    // =========================================================================
    // 2. FORMATTERS, BLACK-SCHOLES, CHARGES & TECHNICAL INDICATORS
    // =========================================================================
    function formatINR(val, showSign = false) {
      if (!Number.isFinite(val)) return "₹0.00";
      const abs = Math.abs(val).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      if (val < 0) return `-₹${abs}`;
      if (showSign && val > 0) return `+₹${abs}`;
      return `₹${abs}`;
    }
    function formatNum(val, dec = 2) { return Number.isFinite(val) ? val.toLocaleString("en-IN", { minimumFractionDigits: dec, maximumFractionDigits: dec }) : "0.00"; }
    function formatPct(val) { return Number.isFinite(val) ? `${val > 0 ? "+" : ""}${val.toFixed(2)}%` : "0.00%"; }
    function formatVol(vol) {
      if (!Number.isFinite(vol) || vol <= 0) return "—";
      if (vol >= 1e7) return `${(vol / 1e7).toFixed(2)} Cr`;
      if (vol >= 1e5) return `${(vol / 1e5).toFixed(2)} L`;
      if (vol >= 1e3) return `${(vol / 1e3).toFixed(1)} K`;
      return String(Math.round(vol));
    }

    function getISTStatus() {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
      const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(now);
      const wd = parts.find(p => p.type === "weekday")?.value || "Mon";
      const mins = Number(parts.find(p => p.type === "hour")?.value || 0) * 60 + Number(parts.find(p => p.type === "minute")?.value || 0);
      const isOpen = !["Sat", "Sun"].includes(wd) && mins >= 555 && mins <= 930;
      return { isOpen, label: isOpen ? "NSE/BSE Open · IST" : "Markets Closed · IST", istTime: `${istTime} IST` };
    }

    function normPdf(x) { return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI); }
    function normCdf(x) {
      const sign = x < 0 ? -1 : 1;
      const ax = Math.abs(x) / Math.sqrt(2);
      const t = 1 / (1 + 0.3275911 * ax);
      const erf = 1 - (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) * Math.exp(-ax * ax);
      return 0.5 * (1 + sign * erf);
    }

    function blackScholes(spot, strike, days, iv, type) {
      const r = 0.068, T = Math.max(days, 0.25) / 365, sigma = Math.max(iv, 0.05), sqrtT = Math.sqrt(T);
      const d1 = (Math.log(spot / strike) + (r + 0.5 * sigma * sigma) * T) / (sigma * sqrtT);
      const d2 = d1 - sigma * sqrtT, pdf = normPdf(d1), nd1 = normCdf(d1), nd2 = normCdf(d2);
      let premium, delta, theta;
      if (type === "CE") {
        premium = spot * nd1 - strike * Math.exp(-r * T) * nd2; delta = nd1;
        theta = (-(spot * pdf * sigma) / (2 * sqrtT) - r * strike * Math.exp(-r * T) * nd2) / 365;
      } else {
        premium = strike * Math.exp(-r * T) * normCdf(-d2) - spot * normCdf(-d1); delta = nd1 - 1;
        theta = (-(spot * pdf * sigma) / (2 * sqrtT) + r * strike * Math.exp(-r * T) * normCdf(-d2)) / 365;
      }
      const oi = Math.round((1800000 + (strike % 500) * 900) * Math.exp(-Math.abs(spot - strike) / spot * 22));
      return { premium: Math.max(0.05, Number(premium.toFixed(2))), iv: Number((sigma * 100).toFixed(2)), delta: Number(delta.toFixed(3)), theta: Number(theta.toFixed(2)), gamma: Number((pdf / (spot * sigma * sqrtT)).toFixed(5)), vega: Number(((spot * pdf * sqrtT) / 100).toFixed(2)), oi };
    }

    function buildOptionChain(underlying, spot) {
      const step = (underlying === "BANKNIFTY" || underlying === "SENSEX") ? 100 : underlying === "NIFTY 50" ? 50 : 20;
      const atm = Math.round(spot / step) * step;
      const root = underlying.replace(/\s+50$/, "").replace(/\s+/g, "");
      const rows = [];
      for (let i = -8; i <= 8; i++) {
        const strike = atm + i * step;
        const iv = 0.165 * (1 + Math.pow(Math.abs(i) / 8, 1.6) * 0.18 + (i < 0 ? 0.025 : 0));
        rows.push({ strike, isAtm: i === 0, ceSymbol: `${root}26NOV${strike}CE`, peSymbol: `${root}26NOV${strike}PE`, ce: blackScholes(spot, strike, 6, iv, "CE"), pe: blackScholes(spot, strike, 6, iv, "PE") });
      }
      return rows;
    }

    function calcCharges(assetType, productType, side, qty, price, enabled) {
      if (!enabled || qty <= 0 || price <= 0) return { brokerage: 0, stt: 0, gst: 0, total: 0 };
      const turnover = qty * price;
      let brokerage = 0, stt = 0, exch = 0, stamp = 0;
      if (assetType === "STOCK") {
        if (productType === "CNC") { brokerage = 0; stt = turnover * 0.001; stamp = side === "BUY" ? turnover * 0.00015 : 0; }
        else { brokerage = Math.min(20, turnover * 0.0003); stt = side === "SELL" ? turnover * 0.00025 : 0; stamp = side === "BUY" ? turnover * 0.00003 : 0; }
        exch = turnover * 0.0000297;
      } else if (assetType === "FUTURE") {
        brokerage = Math.min(20, turnover * 0.0003); stt = side === "SELL" ? turnover * 0.0002 : 0; exch = turnover * 0.0000173; stamp = side === "BUY" ? turnover * 0.00002 : 0;
      } else if (assetType === "OPTION") {
        brokerage = 20; stt = side === "SELL" ? turnover * 0.001 : 0; exch = turnover * 0.0003503; stamp = side === "BUY" ? turnover * 0.00003 : 0;
      }
      const sebi = turnover * 0.000001, gst = (brokerage + exch + sebi) * 0.18;
      return { brokerage: Number(brokerage.toFixed(2)), stt: Number(stt.toFixed(2)), gst: Number(gst.toFixed(2)), total: Number((brokerage + stt + exch + sebi + stamp + gst).toFixed(2)) };
    }

    function calcMargin(assetType, productType, side, qty, price, underlyingSpot) {
      const notional = qty * price;
      if (assetType === "STOCK") return Number((productType === "MIS" ? notional * 0.2 : notional).toFixed(2));
      if (assetType === "FUTURE") return Number((notional * (productType === "MIS" ? 0.12 : 0.16)).toFixed(2));
      if (assetType === "OPTION") return side === "BUY" ? Number(notional.toFixed(2)) : Number((qty * (underlyingSpot || price * 40) * 0.14).toFixed(2));
      return 0;
    }

    function gauss() { let u = 0, v = 0; while (u === 0) u = Math.random(); while (v === 0) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
    function calcSMA(c, p) { return c.map((_, i) => i < p - 1 ? null : c.slice(i - p + 1, i + 1).reduce((a, b) => a + b.c, 0) / p); }
    function calcEMA(c, p) { const k = 2 / (p + 1); const out = []; let prev = c[0]?.c || 0; for (let i = 0; i < c.length; i++) { prev = i === 0 ? c[i].c : c[i].c * k + prev * (1 - k); out.push(prev); } return out; }
    function calcVWAP(c) { let pv = 0, v = 0; return c.map(x => { pv += ((x.h + x.l + x.c) / 3) * x.v; v += x.v; return v > 0 ? pv / v : x.c; }); }
    function calcBB(c, p = 20, m = 2) { const sma = calcSMA(c, p); return c.map((_, i) => { if (sma[i] === null) return null; const sd = Math.sqrt(c.slice(i - p + 1, i + 1).reduce((a, b) => a + Math.pow(b.c - sma[i], 2), 0) / p); return { mid: sma[i], upper: sma[i] + m * sd, lower: sma[i] - m * sd }; }); }
    function calcRSI(c, p = 14) { if (c.length <= p) return 50; let g = 0, l = 0; for (let i = c.length - p; i < c.length; i++) { const d = c[i].c - c[i - 1].c; if (d >= 0) g += d; else l -= d; } if (l === 0) return 100; return Number((100 - 100 / (1 + (g / p) / (l / p))).toFixed(1)); }

    // =========================================================================
    // 3. STATE MANAGEMENT
    // =========================================================================
    function buildDemoUser() {
      const now = Date.now(), h = hrs => new Date(now - hrs * 3600000).toISOString();
      return {
        profile: { id: "demo-user", name: "Demo Trader", email: "demo@paperview.in", isDemo: true, balance: 678420.50, marginUsed: 327785.00, chargesEnabled: true },
        watchlist: ["RELIANCE", "TCS", "HDFCBANK", "INFY", "NIFTY26NOVFUT", "BANKNIFTY26NOV64300CE"],
        positions: [
          { id: "p1", symbol: "RELIANCE", name: "Reliance Industries Ltd", type: "STOCK", product: "CNC", qty: 50, avg: 1348.50, margin: 67425.00, lot: 1 },
          { id: "p2", symbol: "NIFTY26NOVFUT", name: "NIFTY Nov 2026 Future", type: "FUTURE", product: "NRML", qty: 65, avg: 25410.00, margin: 245000.00, lot: 65 },
          { id: "p3", symbol: "BANKNIFTY26NOV64300CE", name: "BANKNIFTY 26 Nov 64300 CE", type: "OPTION", product: "NRML", qty: 30, avg: 512.00, margin: 15360.00, lot: 30 }
        ],
        orders: [
          { id: "o6", symbol: "BANKNIFTY26NOV64300CE", side: "BUY", orderType: "MARKET", product: "NRML", qty: 30, price: 512.00, trigger: null, execPrice: 512.00, status: "EXECUTED", charges: 30.80, createdAt: h(2) },
          { id: "o5", symbol: "NIFTY26NOVFUT", side: "BUY", orderType: "MARKET", product: "NRML", qty: 65, price: 25410.00, trigger: null, execPrice: 25410.00, status: "EXECUTED", charges: 58.20, createdAt: h(3) },
          { id: "o4", symbol: "RELIANCE", side: "BUY", orderType: "MARKET", product: "CNC", qty: 50, price: 1348.50, trigger: null, execPrice: 1348.50, status: "EXECUTED", charges: 79.60, createdAt: h(5) },
          { id: "o3", symbol: "INFY", side: "SELL", orderType: "MARKET", product: "MIS", qty: 40, price: 1098.00, trigger: null, execPrice: 1098.00, status: "EXECUTED", charges: 26.80, realizedPnl: -420.00, createdAt: h(18) },
          { id: "o2", symbol: "TCS", side: "SELL", orderType: "MARKET", product: "MIS", qty: 20, price: 2368.50, trigger: null, execPrice: 2368.50, status: "EXECUTED", charges: 30.20, realizedPnl: 1170.00, createdAt: h(24) },
          { id: "o1", symbol: "TCS", side: "BUY", orderType: "MARKET", product: "MIS", qty: 20, price: 2310.00, trigger: null, execPrice: 2310.00, status: "EXECUTED", charges: 18.40, createdAt: h(28) }
        ],
        ledger: [
          { id: "l4", type: "TRADE_DEBIT", amount: -322254.10, balanceAfter: 678420.50, note: "Margin Blocked · RELIANCE, NIFTY FUT & BANKNIFTY CE", createdAt: h(2) },
          { id: "l3", type: "TRADE_DEBIT", amount: -446.80, balanceAfter: 1000674.60, note: "Realized P&L · INFY MIS (incl. charges)", createdAt: h(18) },
          { id: "l2", type: "TRADE_CREDIT", amount: 1121.40, balanceAfter: 1001121.40, note: "Realized P&L · TCS MIS (incl. charges)", createdAt: h(24) },
          { id: "l1", type: "INITIAL_CREDIT", amount: INITIAL_BALANCE, balanceAfter: INITIAL_BALANCE, note: "Initial Virtual Capital Credit (₹10,00,000)", createdAt: h(36) }
        ],
        journal: [
          { id: "j1", orderId: "o2", symbol: "TCS", strategy: "VWAP Breakout", emotion: "Disciplined", notes: "Clean morning breakout above VWAP with strong IT sector breadth.", createdAt: h(24) },
          { id: "j2", orderId: "o3", symbol: "INFY", strategy: "Mean Reversion", emotion: "Impatient", notes: "Shorted before confirmation candle closed. Exited at stop.", createdAt: h(18) },
          { id: "j3", orderId: "o5", symbol: "NIFTY26NOVFUT", strategy: "Trend Continuation", emotion: "Calm", notes: "1 lot (65 qty) long above 25,400 support with trailing stop.", createdAt: h(3) }
        ]
      };
    }

    function buildFreshUser(name, email) {
      return {
        profile: { id: "u-" + Date.now(), name: name || "Trader", email, isDemo: false, balance: INITIAL_BALANCE, marginUsed: 0, chargesEnabled: true },
        watchlist: [], positions: [], orders: [],
        ledger: [{ id: "l-init", type: "INITIAL_CREDIT", amount: INITIAL_BALANCE, balanceAfter: INITIAL_BALANCE, note: "Initial Virtual Capital Credit (₹10,00,000)", createdAt: new Date().toISOString() }],
        journal: []
      };
    }

    function initQuotes() {
      const q = {};
      for (const inst of INSTRUMENTS) {
        const chg = Number((inst.base - inst.prev).toFixed(2));
        q[inst.symbol] = { ltp: inst.base, prev: inst.prev, change: chg, changePct: inst.prev > 0 ? Number(((chg / inst.prev) * 100).toFixed(2)) : 0, volume: inst.type === "INDEX" ? 0 : Math.round(750000 + Math.random() * 5400000), tickDir: "flat" };
      }
      return q;
    }

    const appState = {
      theme: "daylight",
      fxEnabled: true,
      fxPulse: true,
      fxOpacity: 25, // 0..100 % (step 1% for ultra-minimal throb)
      gradientUi: false,
      fxPopoverOpen: false,
      user: null,

      route: "markets",
      activeSymbol: "RELIANCE",
      feedMode: "SIM",
      drawerOpen: false,
      mobileOrderSheet: false,
      globalQuery: "",
      moverTab: "gainers",
      mQuery: "",
      mType: "ALL",
      mSector: "ALL",
      mExpiry: "ALL",
      mSort: "changePct",
      mDesc: true,
      tTab: "chart", // chart | chain | payoff | report
      tTimeframe: "15m",
      tChartMode: "candle",
      indicators: { sma20: true, ema9: false, vwap: true, bb: false, volume: true, rsi: true },
      drawTool: "cursor",
      drawings: {},
      pendingTrendPt: null,
      oSide: "BUY",
      oType: "MARKET",
      oProduct: "CNC",
      oQty: 1,
      oLimit: "",
      oTrigger: "",
      oError: null,
      confirmOrderModal: false,
      payoffSide: "BUY",
      payoffLots: 1,
      ordersTab: "open",
      confirmResetModal: false,
      quotes: initQuotes(),
      candlesCache: {}
    };

    function applyThemeAndFx() {
      document.documentElement.setAttribute("data-theme", appState.theme);
      document.documentElement.setAttribute("data-fx", appState.fxEnabled && appState.fxOpacity > 0 ? "on" : "off");
      document.documentElement.setAttribute("data-pulse", appState.fxPulse && appState.fxOpacity > 0 ? "on" : "off");
      document.documentElement.setAttribute("data-gradient", appState.gradientUi ? "on" : "off");
      document.documentElement.style.setProperty("--fx-opacity", (appState.fxOpacity / 100).toFixed(2));
      document.documentElement.style.setProperty("--fx-pulse-spread", `${((appState.fxOpacity / 100) * 3.5).toFixed(2)}px`);
    }

    try {
      const savedTheme = window.localStorage.getItem(THEME_KEY);
      if (savedTheme && THEMES.some(t => t.id === savedTheme)) appState.theme = savedTheme;
      const savedFx = window.localStorage.getItem(FX_KEY);
      if (savedFx) {
        const fx = JSON.parse(savedFx);
        if (typeof fx.enabled === "boolean") appState.fxEnabled = fx.enabled;
        if (typeof fx.pulse === "boolean") appState.fxPulse = fx.pulse;
        if (typeof fx.gradient === "boolean") appState.gradientUi = fx.gradient;
        if (Number.isFinite(fx.opacity)) appState.fxOpacity = Math.max(0, Math.min(100, fx.opacity));
      }
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.profile) appState.user = parsed;
      }
    } catch (e) {}
    applyThemeAndFx();

    function persistUser() { try { if (appState.user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.user)); else window.localStorage.removeItem(STORAGE_KEY); } catch (e) {} }
    function persistFx() { try { window.localStorage.setItem(FX_KEY, JSON.stringify({ enabled: appState.fxEnabled, pulse: appState.fxPulse, gradient: appState.gradientUi, opacity: appState.fxOpacity })); } catch (e) {} }

    function showToast(msg, tone = "emerald") {
      const root = document.getElementById("toast-root");
      if (!root) return;
      const el = document.createElement("div");
      const styles = tone === "rose" ? "bg-rose-950/95 border-rose-500/50 text-rose-100" : tone === "amber" ? "bg-amber-950/95 border-amber-500/50 text-amber-100" : "bg-emerald-950/95 border-emerald-500/50 text-emerald-100";
      el.className = `pointer-events-auto px-4 py-2.5 rounded-xl border text-xs font-medium shadow-2xl ${styles}`;
      el.textContent = msg;
      root.appendChild(el);
      setTimeout(() => el.remove(), 3400);
    }

    function getCandles(symbol, tf) {
      const key = `${symbol}_${tf}`;
      if (appState.candlesCache[key]) return appState.candlesCache[key];
      const inst = getInstrument(symbol);
      const ltp = appState.quotes[inst.symbol]?.ltp || inst.base;
      const volMap = { "1m": 0.0014, "5m": 0.0025, "15m": 0.0038, "1H": 0.0065, "1D": 0.013, "1W": 0.025 };
      const vol = volMap[tf] || 0.0038, count = 64, closes = new Array(count);
      closes[count - 1] = ltp;
      for (let i = count - 2; i >= 0; i--) closes[i] = Math.max(1, closes[i + 1] / Math.exp(gauss() * vol));
      const list = [];
      for (let i = 0; i < count; i++) {
        const o = i === 0 ? closes[0] * (1 + (Math.random() - 0.5) * vol) : closes[i - 1], c = closes[i];
        list.push({ o: Number(o.toFixed(2)), h: Number((Math.max(o, c) * (1 + Math.abs(gauss()) * vol * 0.45)).toFixed(2)), l: Number((Math.min(o, c) * (1 - Math.abs(gauss()) * vol * 0.45)).toFixed(2)), c: Number(c.toFixed(2)), v: Math.round(25000 + Math.random() * 165000) });
      }
      appState.candlesCache[key] = list;
      return list;
    }

    function getSymbolDrawings(sym) { if (!appState.drawings[sym]) appState.drawings[sym] = { hlines: [], trends: [] }; return appState.drawings[sym]; }

    // =========================================================================
    // 4. ORDER EXECUTION & LIVE TICK ENGINE
    // =========================================================================
    function executeOrderAtomic(order, fillPrice, inst) {
      const u = appState.user; if (!u) return;
      const ch = calcCharges(inst.type, order.product, order.side, order.qty, fillPrice, u.profile.chargesEnabled);
      const signedQty = order.side === "BUY" ? order.qty : -order.qty;
      const idx = u.positions.findIndex(p => p.symbol === order.symbol && p.product === order.product);
      const underlyingSpot = inst.underlying ? (appState.quotes[inst.underlying]?.ltp || inst.base) : fillPrice;
      let balanceDelta = -ch.total, marginDelta = 0, realized = 0;

      if (idx === -1) {
        const mReq = calcMargin(inst.type, order.product, order.side, order.qty, fillPrice, underlyingSpot);
        balanceDelta -= mReq; marginDelta += mReq;
        u.positions.unshift({ id: "pos-" + Date.now() + Math.random().toString(36).slice(2, 5), symbol: order.symbol, name: inst.name, type: inst.type, product: order.product, qty: signedQty, avg: fillPrice, margin: mReq, lot: inst.lot });
      } else {
        const pos = u.positions[idx], newQty = pos.qty + signedQty;
        if (Math.sign(pos.qty) === Math.sign(signedQty)) {
          const addM = calcMargin(inst.type, order.product, order.side, order.qty, fillPrice, underlyingSpot);
          pos.avg = Number(((Math.abs(pos.qty) * pos.avg + order.qty * fillPrice) / (Math.abs(pos.qty) + order.qty)).toFixed(2));
          pos.qty = newQty; pos.margin = Number((pos.margin + addM).toFixed(2)); balanceDelta -= addM; marginDelta += addM;
        } else {
          const closing = Math.min(Math.abs(pos.qty), order.qty);
          realized = Number(((pos.qty > 0 ? fillPrice - pos.avg : pos.avg - fillPrice) * closing).toFixed(2));
          const relM = Number(((closing / Math.abs(pos.qty)) * pos.margin).toFixed(2));
          balanceDelta += relM + realized; marginDelta -= relM;
          if (newQty === 0) u.positions.splice(idx, 1);
          else if (Math.sign(newQty) === Math.sign(pos.qty)) { pos.qty = newQty; pos.margin = Math.max(0, Number((pos.margin - relM).toFixed(2))); }
          else {
            const newM = calcMargin(inst.type, order.product, order.side, Math.abs(newQty), fillPrice, underlyingSpot);
            balanceDelta -= newM; marginDelta += newM; pos.qty = newQty; pos.avg = fillPrice; pos.margin = newM;
          }
        }
      }
      u.profile.balance = Math.max(0, Number((u.profile.balance + balanceDelta).toFixed(2)));
      u.profile.marginUsed = Math.max(0, Number((u.profile.marginUsed + marginDelta).toFixed(2)));
      order.status = "EXECUTED"; order.execPrice = fillPrice; order.charges = ch.total;
      if (realized !== 0) order.realizedPnl = realized;
      if (!u.orders.some(o => o.id === order.id)) u.orders.unshift(order);
      u.ledger.unshift({ id: "led-" + Date.now() + Math.random().toString(36).slice(2, 4), type: balanceDelta >= 0 ? "TRADE_CREDIT" : "TRADE_DEBIT", amount: Number(balanceDelta.toFixed(2)), balanceAfter: u.profile.balance, note: `${order.side} ${order.qty} ${order.symbol} @ ₹${fillPrice.toFixed(2)}${ch.total > 0 ? ` (charges ₹${ch.total})` : ""}`, createdAt: new Date().toISOString() });
      persistUser();
    }

    function submitValidatedOrder() {
      const u = appState.user, inst = getInstrument(appState.activeSymbol), ltp = appState.quotes[inst.symbol]?.ltp || inst.base;
      const qty = Number(appState.oQty), limitP = Number(appState.oLimit), trigP = Number(appState.oTrigger);
      const effPrice = appState.oType === "MARKET" ? ltp : appState.oType === "LIMIT" ? limitP : trigP;
      const underlyingSpot = inst.underlying ? (appState.quotes[inst.underlying]?.ltp || inst.base) : ltp;
      const existingPos = u.positions.find(p => p.symbol === inst.symbol && p.product === appState.oProduct);
      const isClosing = existingPos && Math.sign(existingPos.qty) !== (appState.oSide === "BUY" ? 1 : -1) && qty <= Math.abs(existingPos.qty);

      if (!isClosing) {
        const mReq = calcMargin(inst.type, appState.oProduct, appState.oSide, qty, effPrice, underlyingSpot);
        const ch = calcCharges(inst.type, appState.oProduct, appState.oSide, qty, effPrice, u.profile.chargesEnabled);
        if (mReq + ch.total > u.profile.balance) { appState.oError = "Insufficient virtual balance for required margin and simulated charges."; appState.confirmOrderModal = false; render(); return; }
      }
      const ord = { id: "ord-" + Date.now(), symbol: inst.symbol, side: appState.oSide, orderType: appState.oType, product: appState.oProduct, qty, price: appState.oType === "LIMIT" ? limitP : ltp, trigger: appState.oType === "SL" ? trigP : null, execPrice: null, status: "OPEN", charges: 0, createdAt: new Date().toISOString() };
      const fillNow = appState.oType === "MARKET" || (appState.oType === "LIMIT" && ((appState.oSide === "BUY" && ltp <= limitP) || (appState.oSide === "SELL" && ltp >= limitP)));
      if (fillNow) {
        const fillP = appState.oType === "MARKET" ? ltp : limitP;
        executeOrderAtomic(ord, fillP, inst);
        showToast(`Executed ${ord.side} ${ord.qty} ${ord.symbol} @ ${formatINR(fillP)} — live P&L active below!`, "emerald");
      } else {
        u.orders.unshift(ord); persistUser();
        showToast(`Placed pending ${ord.orderType} order — auto-executes when price crosses target`, "amber");
      }
      appState.confirmOrderModal = false; appState.mobileOrderSheet = false; appState.oError = null; render();
    }

    function tickMarket() {
      const all = [...INSTRUMENTS, ...Object.values(dynamicInstruments)];
      for (const inst of all) {
        if (inst.type !== "STOCK" && inst.type !== "INDEX") continue;
        const q = appState.quotes[inst.symbol] || { ltp: inst.base, prev: inst.prev, change: 0, changePct: 0, volume: 900000, tickDir: "flat" };
        const vol = inst.symbol === "INDIA VIX" ? 0.0022 : 0.0014;
        const pull = ((inst.base - q.ltp) / inst.base) * 0.04;
        const ltp = Math.max(0.5, Number((Math.round(q.ltp * Math.exp(pull + gauss() * vol) * 20) / 20).toFixed(2)));
        const change = Number((ltp - q.prev).toFixed(2));
        appState.quotes[inst.symbol] = { ltp, prev: q.prev, change, changePct: q.prev > 0 ? Number(((change / q.prev) * 100).toFixed(2)) : 0, volume: inst.type === "INDEX" ? 0 : q.volume + Math.round(350 + Math.random() * 4800), tickDir: ltp > q.ltp ? "up" : ltp < q.ltp ? "down" : "flat" };
      }
      for (const inst of all) {
        if (inst.type === "FUTURE" && inst.underlying) {
          const prevLtp = appState.quotes[inst.symbol]?.ltp || inst.base;
          const spot = appState.quotes[inst.underlying]?.ltp || inst.base;
          const days = inst.expiry && inst.expiry.includes("12-31") ? 41 : 6;
          const ltp = Number((Math.round((spot * (1 + 0.068 * days / 365) + gauss() * spot * 0.00025) * 20) / 20).toFixed(2));
          const prev = appState.quotes[inst.symbol]?.prev || inst.prev;
          const change = Number((ltp - prev).toFixed(2));
          appState.quotes[inst.symbol] = { ltp, prev, change, changePct: Number(((change / prev) * 100).toFixed(2)), volume: (appState.quotes[inst.symbol]?.volume || 820000) + inst.lot * Math.round(2 + Math.random() * 12), tickDir: ltp > prevLtp ? "up" : ltp < prevLtp ? "down" : "flat" };
        } else if (inst.type === "OPTION" && inst.underlying && inst.strike && inst.optType) {
          const prevLtp = appState.quotes[inst.symbol]?.ltp || inst.base;
          const spot = appState.quotes[inst.underlying]?.ltp || inst.strike;
          const vix = (appState.quotes["INDIA VIX"]?.ltp || 16.5) / 100;
          const ltp = Number((Math.round(blackScholes(spot, inst.strike, 6, vix, inst.optType).premium * 20) / 20).toFixed(2));
          const prev = appState.quotes[inst.symbol]?.prev || inst.prev;
          const change = Number((ltp - prev).toFixed(2));
          appState.quotes[inst.symbol] = { ltp, prev, change, changePct: prev > 0 ? Number(((change / prev) * 100).toFixed(2)) : 0, volume: (appState.quotes[inst.symbol]?.volume || 1400000) + inst.lot * Math.round(4 + Math.random() * 20), tickDir: ltp > prevLtp ? "up" : ltp < prevLtp ? "down" : "flat" };
        }
      }
      const activeKey = `${appState.activeSymbol}_${appState.tTimeframe}`;
      if (appState.candlesCache[activeKey]) {
        const list = appState.candlesCache[activeKey], last = list[list.length - 1], ltp = appState.quotes[appState.activeSymbol]?.ltp;
        if (last && ltp) { last.c = ltp; if (ltp > last.h) last.h = ltp; if (ltp < last.l) last.l = ltp; }
      }
      if (appState.user) {
        for (const o of appState.user.orders.filter(x => x.status === "OPEN")) {
          const q = appState.quotes[o.symbol]; if (!q) continue;
          let hit = false, fill = q.ltp;
          if (o.orderType === "LIMIT" && o.price) { if ((o.side === "BUY" && q.ltp <= o.price) || (o.side === "SELL" && q.ltp >= o.price)) { hit = true; fill = o.price; } }
          else if (o.orderType === "SL" && o.trigger) { if ((o.side === "BUY" && q.ltp >= o.trigger) || (o.side === "SELL" && q.ltp <= o.trigger)) { hit = true; fill = q.ltp; } }
          if (hit) { executeOrderAtomic(o, fill, getInstrument(o.symbol)); showToast(`Pending ${o.orderType} executed: ${o.side} ${o.qty} ${o.symbol} @ ${formatINR(fill)}`, "emerald"); }
        }
      }
      const ae = document.activeElement;
      const busy = ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.tagName === "SELECT");
      if (appState.user && !busy && !appState.confirmOrderModal && !appState.confirmResetModal && !appState.fxPopoverOpen) render();
    }

    let tickTimer = null;
    function startTickLoop() { if (tickTimer) clearInterval(tickTimer); tickTimer = setInterval(tickMarket, 1500); }

    // =========================================================================
    // 5. CHART RENDERING (Indicators + H-Line & Trendline Drawing)
    // =========================================================================
    let chartInstances = {}, lastChartGeom = null;

    function drawCandlestickCanvas() {
      const canvas = document.getElementById("trading-canvas"); if (!canvas) return;
      const rect = canvas.parentElement.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
      const w = Math.max(280, rect.width), h = 340;
      canvas.width = w * dpr; canvas.height = h * dpr; canvas.style.width = w + "px"; canvas.style.height = h + "px";

      const cs = getComputedStyle(document.documentElement);
      const bgCol = cs.getPropertyValue("--chart-bg").trim() || "#0d1424";
      const gridCol = cs.getPropertyValue("--chart-grid").trim() || "#1e2d4a";
      const textCol = cs.getPropertyValue("--chart-text").trim() || "#94a3b8";

      const ctx = canvas.getContext("2d"); ctx.scale(dpr, dpr); ctx.fillStyle = bgCol; ctx.fillRect(0, 0, w, h);
      const data = getCandles(appState.activeSymbol, appState.tTimeframe); if (!data.length) return;

      const padR = 66, padT = 16, padB = 24, padL = 10, volSpace = appState.indicators.volume ? 44 : 8;
      const chartW = w - padR - padL, chartH = h - padT - padB - volSpace;
      let minP = Infinity, maxP = -Infinity, maxV = 1;
      for (const c of data) { if (c.l < minP) minP = c.l; if (c.h > maxP) maxP = c.h; if (c.v > maxV) maxV = c.v; }
      const range = Math.max(0.1, maxP - minP); minP -= range * 0.1; maxP += range * 0.1;
      const yOf = p => padT + ((maxP - p) / (maxP - minP)) * chartH;
      const pOf = y => maxP - ((y - padT) / chartH) * (maxP - minP);
      const stepX = chartW / data.length, xOf = i => padL + i * stepX + stepX / 2;
      lastChartGeom = { padL, padT, padR, chartW, chartH, minP, maxP, stepX, count: data.length, pOf, yOf, xOf };

      ctx.strokeStyle = gridCol; ctx.lineWidth = 1; ctx.fillStyle = textCol; ctx.font = "11px Inter, system-ui, sans-serif"; ctx.textAlign = "left";
      for (let i = 0; i <= 4; i++) {
        const y = padT + (chartH / 4) * i, pVal = maxP - ((maxP - minP) / 4) * i;
        ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
        ctx.fillText(pVal.toFixed(2), w - padR + 6, y + 4);
      }

      if (appState.indicators.volume) {
        const volBaseY = h - padB;
        data.forEach((c, idx) => {
          const x = padL + idx * stepX + stepX * 0.18, bw = Math.max(2, stepX * 0.64), vh = (c.v / maxV) * 38;
          ctx.fillStyle = c.c >= c.o ? "rgba(16,185,129,0.28)" : "rgba(244,63,94,0.28)";
          ctx.fillRect(x, volBaseY - vh, bw, vh);
        });
      }

      if (appState.indicators.bb) {
        const bb = calcBB(data, 20, 2);
        ctx.beginPath(); let st = false;
        bb.forEach((b, i) => { if (!b) return; if (!st) { ctx.moveTo(xOf(i), yOf(b.upper)); st = true; } else ctx.lineTo(xOf(i), yOf(b.upper)); });
        for (let i = bb.length - 1; i >= 0; i--) if (bb[i]) ctx.lineTo(xOf(i), yOf(bb[i].lower));
        ctx.closePath(); ctx.fillStyle = "rgba(129,140,248,0.12)"; ctx.fill();
        ["upper", "lower"].forEach(s => {
          ctx.beginPath(); let ok = false;
          bb.forEach((b, i) => { if (!b) return; if (!ok) { ctx.moveTo(xOf(i), yOf(b[s])); ok = true; } else ctx.lineTo(xOf(i), yOf(b[s])); });
          ctx.strokeStyle = "rgba(129,140,248,0.65)"; ctx.lineWidth = 1; ctx.stroke();
        });
      }

      if (appState.tChartMode === "candle") {
        data.forEach((c, idx) => {
          const cx = xOf(idx), color = c.c >= c.o ? "#10b981" : "#f43f5e";
          ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(cx, yOf(c.h)); ctx.lineTo(cx, yOf(c.l)); ctx.stroke();
          const top = yOf(Math.max(c.o, c.c)), bot = yOf(Math.min(c.o, c.c)), bw = Math.max(2.5, stepX * 0.62);
          ctx.fillRect(cx - bw / 2, top, bw, Math.max(1.5, bot - top));
        });
      } else {
        const grad = ctx.createLinearGradient(0, padT, 0, padT + chartH);
        grad.addColorStop(0, "rgba(56,189,248,0.34)"); grad.addColorStop(1, "rgba(56,189,248,0.01)");
        ctx.beginPath(); data.forEach((c, idx) => idx === 0 ? ctx.moveTo(xOf(idx), yOf(c.c)) : ctx.lineTo(xOf(idx), yOf(c.c)));
        ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 2; ctx.stroke();
        ctx.lineTo(xOf(data.length - 1), padT + chartH); ctx.lineTo(xOf(0), padT + chartH); ctx.closePath(); ctx.fillStyle = grad; ctx.fill();
      }

      const drawLine = (vals, col, dash = false) => {
        ctx.save(); if (dash) ctx.setLineDash([5, 4]); ctx.strokeStyle = col; ctx.lineWidth = 1.6; ctx.beginPath();
        let st = false; vals.forEach((v, i) => { if (v == null) return; if (!st) { ctx.moveTo(xOf(i), yOf(v)); st = true; } else ctx.lineTo(xOf(i), yOf(v)); });
        ctx.stroke(); ctx.restore();
      };
      if (appState.indicators.sma20) drawLine(calcSMA(data, 20), "#f59e0b");
      if (appState.indicators.ema9) drawLine(calcEMA(data, 9), "#a855f7");
      if (appState.indicators.vwap) drawLine(calcVWAP(data), "#0ea5e9", true);

      const activePos = appState.user?.positions.find(p => p.symbol === appState.activeSymbol);
      if (activePos) {
        const py = yOf(activePos.avg);
        if (py >= padT && py <= padT + chartH) {
          ctx.save(); ctx.setLineDash([6, 3]); ctx.strokeStyle = activePos.qty > 0 ? "#10b981" : "#f43f5e"; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(padL, py); ctx.lineTo(w - padR, py); ctx.stroke(); ctx.restore();
          ctx.fillStyle = activePos.qty > 0 ? "#10b981" : "#f43f5e"; ctx.fillRect(padL + 4, py - 15, 118, 15);
          ctx.fillStyle = "#ffffff"; ctx.font = "bold 9.5px Inter, system-ui, sans-serif";
          ctx.fillText(`POS AVG ₹${activePos.avg.toFixed(2)}`, padL + 8, py - 4);
        }
      }

      const drw = getSymbolDrawings(appState.activeSymbol);
      drw.hlines.forEach(price => {
        const hy = yOf(price); if (hy < padT || hy > padT + chartH) return;
        ctx.strokeStyle = "#eab308"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(padL, hy); ctx.lineTo(w - padR, hy); ctx.stroke();
        ctx.fillStyle = "#eab308"; ctx.fillRect(w - padR + 2, hy - 8, 60, 16);
        ctx.fillStyle = "#070b14"; ctx.font = "bold 10px Inter, system-ui, sans-serif"; ctx.fillText(price.toFixed(2), w - padR + 5, hy + 3);
      });
      drw.trends.forEach(tr => {
        ctx.strokeStyle = "#f97316"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(xOf(tr.i1), yOf(tr.p1)); ctx.lineTo(xOf(tr.i2), yOf(tr.p2)); ctx.stroke();
        ctx.fillStyle = "#f97316";
        ctx.beginPath(); ctx.arc(xOf(tr.i1), yOf(tr.p1), 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(xOf(tr.i2), yOf(tr.p2), 3.5, 0, Math.PI * 2); ctx.fill();
      });
      if (appState.pendingTrendPt) { ctx.fillStyle = "#f97316"; ctx.beginPath(); ctx.arc(xOf(appState.pendingTrendPt.i), yOf(appState.pendingTrendPt.p), 4.5, 0, Math.PI * 2); ctx.fill(); }

      const lastP = data[data.length - 1].c, ly = yOf(lastP);
      ctx.save(); ctx.setLineDash([4, 4]); ctx.strokeStyle = "#0284c7"; ctx.beginPath(); ctx.moveTo(padL, ly); ctx.lineTo(w - padR, ly); ctx.stroke(); ctx.restore();
      ctx.fillStyle = "#0284c7"; ctx.fillRect(w - padR + 2, ly - 9, 60, 18);
      ctx.fillStyle = "#ffffff"; ctx.font = "bold 10px Inter, system-ui, sans-serif"; ctx.fillText(lastP.toFixed(2), w - padR + 5, ly + 3.5);

      canvas.onclick = evt => {
        if (!lastChartGeom || appState.drawTool === "cursor") return;
        const b = canvas.getBoundingClientRect(), cx = evt.clientX - b.left, cy = evt.clientY - b.top;
        if (cy < lastChartGeom.padT || cy > lastChartGeom.padT + lastChartGeom.chartH) return;
        const price = Number(lastChartGeom.pOf(cy).toFixed(2));
        const idx = Math.max(0, Math.min(lastChartGeom.count - 1, Math.round((cx - lastChartGeom.padL) / lastChartGeom.stepX)));
        const d = getSymbolDrawings(appState.activeSymbol);
        if (appState.drawTool === "hline") { d.hlines.push(price); showToast(`Placed price line at ₹${price.toFixed(2)}`, "amber"); drawCandlestickCanvas(); }
        else if (appState.drawTool === "trend") {
          if (!appState.pendingTrendPt) { appState.pendingTrendPt = { i: idx, p: price }; showToast("Click second point to finish trendline", "amber"); drawCandlestickCanvas(); }
          else { d.trends.push({ i1: appState.pendingTrendPt.i, p1: appState.pendingTrendPt.p, i2: idx, p2: price }); appState.pendingTrendPt = null; showToast("Trendline drawn", "emerald"); drawCandlestickCanvas(); }
        }
      };
      canvas.onmousemove = evt => {
        if (!lastChartGeom) return;
        const b = canvas.getBoundingClientRect(), cx = evt.clientX - b.left, cy = evt.clientY - b.top;
        const idx = Math.max(0, Math.min(data.length - 1, Math.floor((cx - lastChartGeom.padL) / lastChartGeom.stepX)));
        const c = data[idx], infoEl = document.getElementById("chart-ohlc-readout");
        if (infoEl && c) infoEl.textContent = `O: ₹${c.o}  H: ₹${c.h}  L: ₹${c.l}  C: ₹${c.c}  Vol: ${formatVol(c.v)}  |  Cursor: ₹${lastChartGeom.pOf(cy).toFixed(2)}`;
      };
    }

    function renderChartJsWidgets() {
      Object.values(chartInstances).forEach(ch => { try { ch.destroy(); } catch (e) {} });
      chartInstances = {};
      const cs = getComputedStyle(document.documentElement);
      const gridCol = cs.getPropertyValue("--chart-grid").trim() || "#1e2d4a";
      const textCol = cs.getPropertyValue("--chart-text").trim() || "#94a3b8";

      const payoffCanvas = document.getElementById("payoff-chart");
      if (payoffCanvas && window.Chart) {
        const inst = getInstrument(appState.activeSymbol), ltp = appState.quotes[inst.symbol]?.ltp || inst.base;
        const strike = inst.strike || 25500, qty = appState.payoffLots * inst.lot, minS = Math.round(strike * 0.93), maxS = Math.round(strike * 1.07);
        const labels = [], values = [];
        for (let i = 0; i <= 32; i++) {
          const s = Math.round(minS + ((maxS - minS) / 32) * i);
          const intr = inst.optType === "CE" ? Math.max(0, s - strike) : Math.max(0, strike - s);
          labels.push(s.toLocaleString("en-IN")); values.push(Number(((appState.payoffSide === "BUY" ? intr - ltp : ltp - intr) * qty).toFixed(2)));
        }
        chartInstances.payoff = new Chart(payoffCanvas, {
          type: "line", data: { labels, datasets: [{ label: "Expiry P&L (₹)", data: values, borderColor: "#10b981", backgroundColor: "rgba(16,185,129,0.16)", fill: true, tension: 0.1, pointRadius: 0 }] },
          options: { responsive: true, maintainAspectRatio: false, animation: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { color: textCol, maxTicksLimit: 7 }, grid: { color: gridCol } }, y: { ticks: { color: textCol }, grid: { color: gridCol } } } }
        });
      }
      const eqCanvas = document.getElementById("equity-chart");
      if (eqCanvas && window.Chart && appState.user) {
        const exec = appState.user.orders.filter(o => o.status === "EXECUTED").slice().reverse();
        let running = INITIAL_BALANCE; const labels = ["Start"], values = [running];
        exec.forEach((o, i) => { if (typeof o.realizedPnl === "number") { running += o.realizedPnl - o.charges; labels.push(`T${i + 1}`); values.push(Number(running.toFixed(2))); } });
        const unreal = appState.user.positions.reduce((a, p) => a + ((appState.quotes[p.symbol]?.ltp || p.avg) - p.avg) * p.qty, 0);
        labels.push("Live"); values.push(Number((running + unreal).toFixed(2)));
        chartInstances.equity = new Chart(eqCanvas, {
          type: "line", data: { labels, datasets: [{ label: "Virtual Equity (₹)", data: values, borderColor: "#0284c7", backgroundColor: "rgba(2,132,199,0.16)", fill: true, tension: 0.25, pointRadius: 3 }] },
          options: { responsive: true, maintainAspectRatio: false, animation: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { color: textCol }, grid: { color: gridCol } }, y: { ticks: { color: textCol }, grid: { color: gridCol } } } }
        });
      }
    }

    // =========================================================================
    // 6. ACTIONS
    // =========================================================================
    window.act = {
      setTheme(themeId) {
        appState.theme = themeId;
        applyThemeAndFx();
        try { window.localStorage.setItem(THEME_KEY, themeId); } catch (e) {}
        render();
      },
      toggleFx() {
        appState.fxEnabled = !appState.fxEnabled;
        applyThemeAndFx(); persistFx();
        showToast(`Visual effects ${appState.fxEnabled ? "enabled" : "turned off"}`, "amber");
        render();
      },
      togglePulse() {
        appState.fxPulse = !appState.fxPulse;
        applyThemeAndFx(); persistFx();
        showToast(`Position pulse / throb ${appState.fxPulse ? "enabled" : "turned off"}`, "amber");
        render();
      },
      toggleGradient() {
        appState.gradientUi = !appState.gradientUi;
        applyThemeAndFx(); persistFx();
        showToast(`Gradient UI ${appState.gradientUi ? "enabled" : "turned off"}`, "amber");
        render();
      },
      setFxOpacity(val) {
        const parsed = parseInt(val, 10);
        appState.fxOpacity = Number.isFinite(parsed) ? Math.max(0, Math.min(100, parsed)) : 0;
        applyThemeAndFx(); persistFx();
        const lbl = document.getElementById("fx-opacity-val");
        if (lbl) lbl.textContent = `${appState.fxOpacity}%`;
        const lbl2 = document.getElementById("fx-opacity-val-settings");
        if (lbl2) lbl2.textContent = `${appState.fxOpacity}%`;
      },
      toggleFxPopover() { appState.fxPopoverOpen = !appState.fxPopoverOpen; render(); },
      startTrading() { appState.user = buildDemoUser(); appState.route = "markets"; persistUser(); showToast("Welcome to PAPER VIEW — ₹10,00,000 virtual terminal ready!", "emerald"); render(); },
      logout() { appState.user = null; appState.drawerOpen = false; appState.fxPopoverOpen = false; persistUser(); render(); },
      nav(route, symbol) {
        appState.route = route; appState.drawerOpen = false; appState.fxPopoverOpen = false; appState.globalQuery = ""; appState.pendingTrendPt = null;
        if (symbol) {
          appState.activeSymbol = symbol;
          const inst = getInstrument(symbol);
          appState.oQty = inst.lot;
          appState.oProduct = (inst.type === "FUTURE" || inst.type === "OPTION") ? "NRML" : "CNC";
          const ltp = appState.quotes[inst.symbol]?.ltp || inst.base;
          appState.oLimit = ltp.toFixed(2); appState.oTrigger = ltp.toFixed(2); appState.oError = null; appState.tTab = "chart";
        }
        render();
      },
      toggleFeed() { appState.feedMode = appState.feedMode === "SIM" ? "LIVE" : "SIM"; showToast(appState.feedMode === "SIM" ? "24/7 Practice Sim active" : "Live Feed enabled (with automatic Sim fallback)", "amber"); render(); },
      toggleDrawer() { appState.drawerOpen = !appState.drawerOpen; render(); },
      toggleMobileSheet(open) { appState.mobileOrderSheet = open; render(); },
      setGlobalQuery(val) { appState.globalQuery = val; render(); const el = document.getElementById("global-search"); if (el) { el.focus(); el.setSelectionRange(val.length, val.length); } },
      toggleWatchlist(sym) {
        if (!appState.user) return;
        const idx = appState.user.watchlist.indexOf(sym);
        if (idx >= 0) { appState.user.watchlist.splice(idx, 1); showToast(`Removed ${sym} from Watchlist`, "amber"); }
        else { appState.user.watchlist.unshift(sym); showToast(`Added ${sym} to Watchlist`, "emerald"); }
        persistUser(); render();
      },
      setMoverTab(t) { appState.moverTab = t; render(); },
      setMSector(sec) { appState.mSector = appState.mSector === sec ? "ALL" : sec; if (appState.mSector !== "ALL") appState.mType = "STOCK"; render(); },
      setMQuery(val) { appState.mQuery = val; render(); const el = document.getElementById("m-search"); if (el) { el.focus(); el.setSelectionRange(val.length, val.length); } },
      setMType(t) { appState.mType = t; if (t !== "STOCK" && t !== "ALL") appState.mSector = "ALL"; render(); },
      setMExpiry(e) { appState.mExpiry = e; render(); },
      setMSort(k) { if (appState.mSort === k) appState.mDesc = !appState.mDesc; else { appState.mSort = k; appState.mDesc = true; } render(); },
      setTTab(t) { appState.tTab = t; render(); },
      setTF(tf) { appState.tTimeframe = tf; render(); },
      setChartMode(m) { appState.tChartMode = m; render(); },
      toggleIndicator(key) { appState.indicators[key] = !appState.indicators[key]; render(); },
      setDrawTool(tool) { appState.drawTool = tool; appState.pendingTrendPt = null; render(); },
      clearDrawings() { appState.drawings[appState.activeSymbol] = { hlines: [], trends: [] }; appState.pendingTrendPt = null; showToast(`Cleared drawn lines on ${appState.activeSymbol}`, "amber"); render(); },
      setOSide(s) { appState.oSide = s; appState.oError = null; render(); },
      setOType(t) { appState.oType = t; appState.oError = null; render(); },
      setOProd(p) { appState.oProduct = p; appState.oError = null; render(); },
      stepQty(dir) { const inst = getInstrument(appState.activeSymbol); appState.oQty = Math.max(inst.lot, Number(appState.oQty) + dir * inst.lot); appState.oError = null; render(); },
      setOQty(v) { appState.oQty = Math.max(0, parseInt(v, 10) || 0); appState.oError = null; render(); },
      setOLimit(v) { appState.oLimit = v; appState.oError = null; },
      setOTrigger(v) { appState.oTrigger = v; appState.oError = null; },
      reviewOrder() {
        const inst = getInstrument(appState.activeSymbol), qty = Number(appState.oQty);
        if (!Number.isInteger(qty) || qty <= 0) { appState.oError = "Quantity must be greater than zero."; render(); return; }
        if ((inst.type === "FUTURE" || inst.type === "OPTION") && qty % inst.lot !== 0) { appState.oError = `F&O quantity must be a multiple of 1 lot (${inst.lot} units).`; render(); return; }
        if (appState.oType === "LIMIT" && (!Number(appState.oLimit) || Number(appState.oLimit) <= 0)) { appState.oError = "Enter a valid positive limit price."; render(); return; }
        if (appState.oType === "SL" && (!Number(appState.oTrigger) || Number(appState.oTrigger) <= 0)) { appState.oError = "Enter a valid positive stop-loss trigger price."; render(); return; }
        appState.oError = null; appState.confirmOrderModal = true; render();
      },
      closeConfirm() { appState.confirmOrderModal = false; render(); },
      confirmOrder() { submitValidatedOrder(); },
      setPayoffSide(s) { appState.payoffSide = s; render(); },
      setPayoffLots(v) { appState.payoffLots = Math.max(1, parseInt(v, 10) || 1); render(); },
      squareOff(posId) {
        const u = appState.user, pos = u.positions.find(p => p.id === posId); if (!pos) return;
        const inst = getInstrument(pos.symbol), ltp = appState.quotes[pos.symbol]?.ltp || pos.avg;
        executeOrderAtomic({ id: "ord-" + Date.now(), symbol: pos.symbol, side: pos.qty > 0 ? "SELL" : "BUY", orderType: "MARKET", product: pos.product, qty: Math.abs(pos.qty), price: ltp, trigger: null, execPrice: null, status: "OPEN", charges: 0, createdAt: new Date().toISOString() }, ltp, inst);
        showToast(`Squared off ${pos.symbol} @ ${formatINR(ltp)}`, "emerald"); render();
      },
      setOrdersTab(t) { appState.ordersTab = t; render(); },
      cancelOrder(id) { const o = appState.user.orders.find(x => x.id === id); if (o && o.status === "OPEN") { o.status = "CANCELLED"; persistUser(); showToast(`Cancelled order for ${o.symbol}`, "amber"); render(); } },
      saveJournal(e) {
        e.preventDefault();
        const orderId = document.getElementById("j-order")?.value, strategy = document.getElementById("j-strategy")?.value || "VWAP Breakout", emotion = document.getElementById("j-emotion")?.value || "Disciplined", notes = document.getElementById("j-notes")?.value.trim() || "";
        const ord = appState.user.orders.find(o => o.id === orderId); if (!ord || !notes) return;
        const idx = appState.user.journal.findIndex(j => j.orderId === orderId);
        const entry = { id: "j-" + Date.now(), orderId, symbol: ord.symbol, strategy, emotion, notes, createdAt: new Date().toISOString() };
        if (idx >= 0) appState.user.journal[idx] = entry; else appState.user.journal.unshift(entry);
        persistUser(); showToast("Saved trade journal entry", "emerald"); render();
      },
      toggleCharges() { appState.user.profile.chargesEnabled = !appState.user.profile.chargesEnabled; persistUser(); showToast(`Indian charges simulation ${appState.user.profile.chargesEnabled ? "enabled" : "disabled"}`, "amber"); render(); },
      openReset() { appState.confirmResetModal = true; render(); },
      closeReset() { appState.confirmResetModal = false; render(); },
      confirmReset() {
        const u = appState.user; u.profile.balance = INITIAL_BALANCE; u.profile.marginUsed = 0; u.positions = [];
        u.orders.forEach(o => { if (o.status === "OPEN") o.status = "CANCELLED"; });
        u.ledger.unshift({ id: "l-rst-" + Date.now(), type: "RESET", amount: INITIAL_BALANCE, balanceAfter: INITIAL_BALANCE, note: "Virtual Account Reset to ₹10,00,000.00", createdAt: new Date().toISOString() });
        appState.confirmResetModal = false; persistUser(); showToast("Virtual balance reset to ₹10,00,000.00", "emerald"); render();
      }
    };

    window.addEventListener("keydown", e => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") { e.preventDefault(); document.getElementById("global-search")?.focus(); }
      else if (e.key === "Escape") { appState.drawerOpen = false; appState.fxPopoverOpen = false; appState.confirmOrderModal = false; appState.confirmResetModal = false; appState.mobileOrderSheet = false; appState.globalQuery = ""; appState.pendingTrendPt = null; render(); }
      else if (appState.route === "trade" && tag !== "INPUT" && tag !== "TEXTAREA") {
        if (e.key.toLowerCase() === "b") window.act.setOSide("BUY");
        if (e.key.toLowerCase() === "s") window.act.setOSide("SELL");
      }
    });
    window.addEventListener("resize", () => { if (appState.route === "trade" && appState.tTab === "chart") drawCandlestickCanvas(); });

    // =========================================================================
    // 7. UI RENDERERS
    // =========================================================================
    function flashClassFor(sym, qtySign = 1) {
      if (!appState.fxEnabled) return "";
      const dir = appState.quotes[sym]?.tickDir;
      if (dir === "up") return qtySign >= 0 ? "flash-up" : "flash-down";
      if (dir === "down") return qtySign >= 0 ? "flash-down" : "flash-up";
      return "";
    }

    function renderWelcomeScreen() {
      const lightThemes = THEMES.filter(t => t.group === "Light");
      const darkThemes = THEMES.filter(t => t.group === "Dark");
      return `
        <div class="min-h-screen relative flex flex-col justify-between px-6 py-8 overflow-hidden">
          <!-- Minimalistic architectural hairline backdrop -->
          <svg class="pointer-events-none absolute inset-0 w-full h-full opacity-[0.35]" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1200 720">
            <line x1="0" y1="140" x2="1200" y2="140" stroke="currentColor" stroke-width="0.6" class="text-muted" stroke-dasharray="4 8" />
            <line x1="0" y1="580" x2="1200" y2="580" stroke="currentColor" stroke-width="0.6" class="text-muted" stroke-dasharray="4 8" />
            <line x1="180" y1="0" x2="180" y2="720" stroke="currentColor" stroke-width="0.5" class="text-muted" />
            <line x1="1020" y1="0" x2="1020" y2="720" stroke="currentColor" stroke-width="0.5" class="text-muted" />
            <!-- Minimalist market curve line -->
            <path d="M 60 510 L 210 470 L 340 492 L 490 410 L 620 432 L 770 325 L 910 355 L 1140 230" fill="none" stroke="currentColor" stroke-width="1.25" class="text-sky-500/50" />
            <circle cx="490" cy="410" r="3" fill="currentColor" class="text-sky-500/70" />
            <circle cx="770" cy="325" r="3" fill="currentColor" class="text-emerald-500/70" />
            <circle cx="1140" cy="230" r="3.5" fill="currentColor" class="text-emerald-500/80" />
          </svg>

          <!-- Minimal top hairline bar -->
          <div class="relative z-10 max-w-5xl w-full mx-auto flex items-center justify-between text-[11px] text-muted">
            <span class="tracking-[0.22em] font-semibold uppercase">NSE · BSE · F&amp;O</span>
            <span class="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 font-semibold tracking-wider text-[10px]">
              PAPER TRADING · VIRTUAL ₹ ONLY
            </span>
          </div>

          <!-- Centerpiece Hero -->
          <div class="relative z-10 max-w-2xl w-full mx-auto text-center py-12 space-y-8">
            <div class="flex items-center justify-center gap-4">
              <span class="h-px w-12 sm:w-20 bg-current opacity-20"></span>
              <span class="text-[11px] uppercase tracking-[0.3em] text-muted font-medium">Virtual Market Terminal</span>
              <span class="h-px w-12 sm:w-20 bg-current opacity-20"></span>
            </div>

            <div class="space-y-3">
              <h1 class="text-5xl sm:text-7xl font-light tracking-[0.22em] text-primary select-none">
                PAPER <span class="font-semibold">VIEW</span>
              </h1>
              <div class="mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-70"></div>
              <p class="text-sm sm:text-base text-secondary max-w-md mx-auto leading-relaxed pt-2 font-normal">
                Practice Indian equities, indexes, futures &amp; options with ₹10,00,000 virtual capital, live charts, and zero real-money risk.
              </p>
            </div>

            <div class="pt-2 flex flex-col items-center gap-4">
              <button onclick="act.startTrading()" class="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-sky-500 text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-slate-900/15 hover:shadow-xl hover:-translate-y-0.5">
                <span>Start Paper Trading</span>
                <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
              </button>
              <div class="flex items-center gap-4 text-[11px] text-muted tabular-nums">
                <span>₹10,00,000 Virtual Cash</span>
                <span class="w-1 h-1 rounded-full bg-current opacity-30"></span>
                <span>24/7 Live Sim</span>
                <span class="w-1 h-1 rounded-full bg-current opacity-30"></span>
                <span>No Sign-Up Needed</span>
              </div>
            </div>
          </div>

          <!-- Minimal bottom theme strip -->
          <div class="relative z-10 max-w-5xl w-full mx-auto flex flex-wrap items-center justify-center gap-1.5 pt-4 border-t border-subtle">
            <span class="text-[10px] uppercase tracking-widest text-muted mr-1">Theme</span>
            ${[...lightThemes, ...darkThemes].map(t => `
              <button onclick="act.setTheme('${t.id}')" class="px-2.5 py-1 rounded-full text-[11px] font-medium border transition ${appState.theme === t.id ? 'border-sky-500 bg-sky-500/10 text-sky-600 font-semibold' : 'border-subtle bg-elevated/80 text-secondary bg-hover'}">${t.label}</button>
            `).join("")}
            <button onclick="act.toggleGradient()" class="px-2.5 py-1 rounded-full text-[11px] font-medium border transition ${appState.gradientUi ? 'border-sky-500 bg-sky-500 text-white' : 'border-subtle bg-elevated/80 text-secondary'}">Gradient</button>
          </div>
        </div>
      `;
    }

    function renderLivePositionsStrip() {
      const u = appState.user; if (!u || u.positions.length === 0) return "";
      const totalUnreal = u.positions.reduce((a, p) => a + ((appState.quotes[p.symbol]?.ltp || p.avg) - p.avg) * p.qty, 0);
      return `
        <div class="bg-elevated border border-subtle rounded-2xl p-3.5 space-y-2.5">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500 ${appState.fxEnabled ? 'animate-ping' : ''}"></span>
              <h2 class="text-xs font-bold uppercase tracking-wider text-secondary">Live Open Positions (${u.positions.length})</h2>
            </div>
            <div class="text-xs font-bold tabular-nums ${totalUnreal >= 0 ? 'text-emerald-500' : 'text-rose-500'}">
              Total Live P&amp;L: ${formatINR(totalUnreal, true)}
            </div>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            ${u.positions.map(p => {
              const q = appState.quotes[p.symbol] || { ltp: p.avg, tickDir: "flat" };
              const pnl = (q.ltp - p.avg) * p.qty, pct = p.avg > 0 ? ((q.ltp - p.avg) / p.avg) * 100 * Math.sign(p.qty) : 0;
              const isCurrent = appState.route === "trade" && appState.activeSymbol === p.symbol;
              return `
                <div class="rounded-xl border ${isCurrent ? 'border-sky-500 pos-pulse' : 'border-subtle'} bg-surface p-2.5 flex items-center justify-between gap-2 ${flashClassFor(p.symbol, Math.sign(p.qty))}">
                  <button onclick="act.nav('trade','${p.symbol}')" class="text-left min-w-0">
                    <div class="flex items-center gap-1.5">
                      <span class="font-bold text-xs truncate">${p.symbol}</span>
                      <span class="px-1.5 py-0.5 rounded text-[9px] font-bold ${p.qty > 0 ? 'bg-emerald-500/15 text-emerald-500' : 'bg-rose-500/15 text-rose-500'}">${p.qty > 0 ? 'LONG ' + p.qty : 'SHORT ' + Math.abs(p.qty)}</span>
                    </div>
                    <div class="text-[10px] text-muted tabular-nums mt-0.5">Avg ${formatINR(p.avg)} · LTP ${formatINR(q.ltp)}</div>
                  </button>
                  <div class="text-right shrink-0 tabular-nums">
                    <div class="text-xs font-extrabold ${pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatINR(pnl, true)}</div>
                    <div class="flex items-center justify-end gap-1.5 mt-0.5">
                      <span class="text-[10px] font-semibold ${pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(pct)}</span>
                      <button onclick="act.squareOff('${p.id}')" class="px-1.5 py-0.5 rounded bg-rose-500/15 hover:bg-rose-500/30 text-rose-500 text-[10px] font-bold">Exit</button>
                    </div>
                  </div>
                </div>`;
            }).join("")}
          </div>
        </div>
      `;
    }

    function renderSectorsStrip() {
      return `
        <div class="bg-elevated border border-subtle rounded-2xl p-4 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h2 class="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <i data-lucide="layers" class="w-3.5 h-3.5 text-sky-500"></i> Sectors — How They Are Trading
            </h2>
            ${appState.mSector !== "ALL" ? `<button onclick="act.setMSector('ALL')" class="text-[11px] font-semibold text-sky-500 hover:underline">Clear Sector Filter (${appState.mSector})</button>` : `<span class="text-[11px] text-muted">Click a sector to filter stocks below</span>`}
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            ${SECTORS_LIST.map(sec => {
              const vals = sec.symbols.map(s => appState.quotes[s]?.changePct || 0);
              const avgPct = vals.reduce((a, b) => a + b, 0) / Math.max(1, vals.length);
              const adv = vals.filter(v => v >= 0).length;
              const up = avgPct >= 0;
              const active = appState.mSector === sec.id;
              const barW = Math.min(100, Math.max(12, Math.abs(avgPct) * 22));
              return `
                <button onclick="act.setMSector('${sec.id}')" class="text-left p-2.5 rounded-xl border transition ${active ? 'border-sky-500 bg-sky-500/10' : 'border-subtle bg-surface bg-hover'}">
                  <div class="text-[11px] font-bold truncate">${sec.label}</div>
                  <div class="text-xs font-extrabold tabular-nums mt-1 ${up ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(avgPct)}</div>
                  <div class="h-1 w-full bg-elevated rounded-full overflow-hidden mt-1.5">
                    <div class="h-full rounded-full ${up ? 'bg-emerald-500' : 'bg-rose-500'}" style="width:${barW}%"></div>
                  </div>
                  <div class="text-[9px] text-muted mt-1">${adv}/${vals.length} Adv</div>
                </button>`;
            }).join("")}
          </div>
        </div>
      `;
    }

    function renderNewsCompactCard(items, title = "Market & Stock News", singleWindow = false) {
      return `
        <div class="bg-elevated border border-subtle rounded-2xl p-4 space-y-2.5">
          <div class="flex items-center justify-between">
            <h2 class="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
              <i data-lucide="newspaper" class="w-3.5 h-3.5 text-sky-500"></i> ${title}
            </h2>
            <span class="text-[10px] text-muted">${items.length} Headlines · Nov 2026</span>
          </div>
          <div class="divide-y divide-subtle ${singleWindow ? 'max-h-72 overflow-y-auto pr-1' : ''}">
            ${items.map(n => `
              <a href="${n.url}" target="_blank" rel="noopener noreferrer" class="block py-2 first:pt-0 last:pb-0 group">
                <div class="flex items-start justify-between gap-1.5">
                  <div class="text-xs font-medium group-hover:text-sky-500 transition leading-snug">${n.title}</div>
                  ${n.isDirect ? '<span class="shrink-0 px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-500 text-[9px] font-bold">MATCH</span>' : ''}
                </div>
                <div class="flex items-center justify-between mt-1 text-[10px] text-muted">
                  <span>${n.source} · ${n.time}</span>
                  <span class="text-sky-500 font-semibold">${n.tags.slice(0, 2).join(" · ")}</span>
                </div>
              </a>`).join("")}
          </div>
        </div>
      `;
    }

    function renderOrderTicketHTML(inst, ltp) {
      const u = appState.user;
      if (inst.type === "INDEX") {
        const futMap = { "NIFTY 50": "NIFTY26NOVFUT", "BANKNIFTY": "BANKNIFTY26NOVFUT", "SENSEX": "SENSEX26NOVFUT" };
        const target = futMap[inst.symbol];
        return `<div class="bg-elevated border border-subtle rounded-2xl p-5 space-y-4"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/15 text-amber-500 text-[10px] font-semibold">PAPER TRADING · VIRTUAL ₹ ONLY</span><h3 class="font-semibold text-base">Spot Index (Non-Tradable)</h3><p class="text-xs text-secondary leading-relaxed">${inst.symbol} is a benchmark index. Trade its derivative Futures or Option Chain contracts instead.</p>${target ? `<button onclick="act.nav('trade', '${target}')" class="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs">Trade ${target} →</button>` : ""}</div>`;
      }
      const isFno = inst.type === "FUTURE" || inst.type === "OPTION";
      const effPrice = appState.oType === "MARKET" ? ltp : appState.oType === "LIMIT" ? (Number(appState.oLimit) || ltp) : (Number(appState.oTrigger) || ltp);
      const underlyingSpot = inst.underlying ? (appState.quotes[inst.underlying]?.ltp || ltp) : ltp;
      const orderVal = appState.oQty * effPrice, reqMargin = calcMargin(inst.type, appState.oProduct, appState.oSide, appState.oQty, effPrice, underlyingSpot);
      const ch = calcCharges(inst.type, appState.oProduct, appState.oSide, appState.oQty, effPrice, u.profile.chargesEnabled);

      return `
        <div class="bg-elevated border border-subtle rounded-2xl p-4 space-y-3.5">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-500">PAPER TRADING · VIRTUAL ₹ ONLY</span>
            <span class="text-[11px] text-muted">Keys: B / S</span>
          </div>
          <div class="grid grid-cols-2 gap-1.5 bg-surface p-1 rounded-xl border border-subtle">
            <button onclick="act.setOSide('BUY')" class="py-2 rounded-lg text-xs font-bold ${appState.oSide === 'BUY' ? 'bg-emerald-500 text-slate-950' : 'text-secondary'}">BUY</button>
            <button onclick="act.setOSide('SELL')" class="py-2 rounded-lg text-xs font-bold ${appState.oSide === 'SELL' ? 'bg-rose-500 text-white' : 'text-secondary'}">SELL</button>
          </div>
          <div class="flex gap-1.5">
            ${(isFno ? ["NRML", "MIS"] : ["CNC", "MIS"]).map(pt => `<button onclick="act.setOProd('${pt}')" class="flex-1 py-1.5 rounded-lg text-xs font-semibold border ${appState.oProduct === pt ? 'border-sky-500 bg-sky-500/15 text-sky-500' : 'border-subtle bg-surface text-secondary'}">${pt}</button>`).join("")}
          </div>
          <div class="grid grid-cols-3 gap-1.5">
            ${["MARKET", "LIMIT", "SL"].map(ot => `<button onclick="act.setOType('${ot}')" class="py-1.5 rounded-lg text-xs font-semibold border ${appState.oType === ot ? 'border-sky-500 bg-sky-500/15 text-sky-500' : 'border-subtle bg-surface text-secondary'}">${ot}</button>`).join("")}
          </div>
          <div>
            <div class="flex justify-between text-xs text-secondary mb-1"><span>Quantity ${isFno ? `(${(appState.oQty / inst.lot).toFixed(0)} Lot)` : "(Shares)"}</span>${isFno ? `<span class="text-sky-500">1 Lot = ${inst.lot}</span>` : ""}</div>
            <div class="flex items-center gap-2">
              <button onclick="act.stepQty(-1)" aria-label="Decrease quantity" class="p-2.5 rounded-xl bg-surface border border-subtle bg-hover"><i data-lucide="minus" class="w-4 h-4"></i></button>
              <input type="number" min="${inst.lot}" step="${inst.lot}" value="${appState.oQty}" onchange="act.setOQty(this.value)" class="flex-1 text-center py-2 rounded-xl bg-surface border border-subtle text-sm font-bold tabular-nums focus:outline-none focus:border-sky-500" />
              <button onclick="act.stepQty(1)" aria-label="Increase quantity" class="p-2.5 rounded-xl bg-surface border border-subtle bg-hover"><i data-lucide="plus" class="w-4 h-4"></i></button>
            </div>
          </div>
          ${appState.oType === "LIMIT" ? `<div><label class="block text-xs text-secondary mb-1">Limit Price (₹)</label><input type="number" step="0.05" value="${appState.oLimit}" oninput="act.setOLimit(this.value)" class="w-full px-3 py-2 rounded-xl bg-surface border border-subtle text-sm tabular-nums focus:outline-none focus:border-sky-500" /></div>` : ""}
          ${appState.oType === "SL" ? `<div><label class="block text-xs text-secondary mb-1">Stop-Loss Trigger (₹)</label><input type="number" step="0.05" value="${appState.oTrigger}" oninput="act.setOTrigger(this.value)" class="w-full px-3 py-2 rounded-xl bg-surface border border-subtle text-sm tabular-nums focus:outline-none focus:border-sky-500" /></div>` : ""}
          <div class="bg-surface rounded-xl p-3 space-y-1 text-xs tabular-nums border border-subtle">
            <div class="flex justify-between"><span class="text-secondary">Order Value</span><span>${formatINR(orderVal)}</span></div>
            <div class="flex justify-between"><span class="text-secondary">Est. Margin</span><span class="font-bold">${formatINR(reqMargin)}</span></div>
            <div class="flex justify-between"><span class="text-secondary">Simulated Charges</span><span class="text-amber-500">${formatINR(ch.total)}</span></div>
            <div class="flex justify-between pt-1 border-t border-subtle"><span class="text-secondary">Available Cash</span><span class="font-bold text-emerald-500">${formatINR(u.profile.balance)}</span></div>
          </div>
          ${appState.oError ? `<div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs">${appState.oError}</div>` : ""}
          <button onclick="act.reviewOrder()" class="w-full py-3 rounded-xl font-bold text-sm transition ${appState.oSide === 'BUY' ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950' : 'bg-rose-500 hover:bg-rose-400 text-white'}">Review ${appState.oSide} Order</button>
        </div>
      `;
    }

    function renderMarketsView() {
      const u = appState.user, ist = getISTStatus(), idxSyms = ["NIFTY 50", "BANKNIFTY", "SENSEX", "INDIA VIX"];
      const unreal = u.positions.reduce((a, p) => a + ((appState.quotes[p.symbol]?.ltp || p.avg) - p.avg) * p.qty, 0);
      const totalEq = u.profile.balance + u.profile.marginUsed + unreal;

      const stocks = INSTRUMENTS.filter(i => i.type === "STOCK");
      let moverList = [];
      if (appState.moverTab === "gainers") moverList = [...stocks].sort((a, b) => appState.quotes[b.symbol].changePct - appState.quotes[a.symbol].changePct).slice(0, 4);
      else if (appState.moverTab === "losers") moverList = [...stocks].sort((a, b) => appState.quotes[a.symbol].changePct - appState.quotes[b.symbol].changePct).slice(0, 4);
      else if (appState.moverTab === "traded") moverList = [...stocks].sort((a, b) => appState.quotes[b.symbol].volume - appState.quotes[a.symbol].volume).slice(0, 4);
      else moverList = [...stocks].sort((a, b) => Math.abs(appState.quotes[b.symbol].changePct) - Math.abs(appState.quotes[a.symbol].changePct)).slice(0, 4);

      const expiries = Array.from(new Set(INSTRUMENTS.map(i => i.expiry).filter(Boolean))).sort();
      const rows = INSTRUMENTS.filter(i => {
        if (appState.mType !== "ALL" && i.type !== appState.mType) return false;
        if (appState.mSector !== "ALL" && i.sector !== appState.mSector) return false;
        if (appState.mExpiry !== "ALL" && i.expiry !== appState.mExpiry) return false;
        if (appState.mQuery.trim()) {
          const q = appState.mQuery.toLowerCase();
          return i.symbol.toLowerCase().includes(q) || i.name.toLowerCase().includes(q);
        }
        return true;
      }).sort((a, b) => {
        const qa = appState.quotes[a.symbol], qb = appState.quotes[b.symbol];
        const va = appState.mSort === "ltp" ? qa.ltp : appState.mSort === "volume" ? qa.volume : qa.changePct;
        const vb = appState.mSort === "ltp" ? qb.ltp : appState.mSort === "volume" ? qb.volume : qb.changePct;
        return appState.mDesc ? vb - va : va - vb;
      });

      return `
        <div class="space-y-4 max-w-7xl mx-auto">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            ${idxSyms.map(sym => {
              const q = appState.quotes[sym], up = q.change >= 0;
              return `<button onclick="act.nav('trade', '${sym}')" class="text-left bg-elevated border border-subtle hover:border-strong rounded-2xl p-3.5 transition ${flashClassFor(sym)}">
                <div class="flex items-center justify-between text-xs"><span class="font-bold">${sym}</span><span class="font-semibold tabular-nums ${up ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(q.changePct)}</span></div>
                <div class="mt-1.5 flex items-baseline justify-between tabular-nums"><span class="text-lg font-bold">${formatNum(q.ltp)}</span><span class="text-xs ${up ? 'text-emerald-500' : 'text-rose-500'}">${up ? '+' : ''}${formatNum(q.change)}</span></div>
              </button>`;
            }).join("")}
          </div>

          <div class="bg-elevated border border-subtle rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap gap-6 tabular-nums">
              <div><div class="text-[11px] text-muted">Total Virtual Equity</div><div class="text-lg font-bold">${formatINR(totalEq)}</div></div>
              <div><div class="text-[11px] text-muted">Available Cash</div><div class="text-base font-bold text-emerald-500">${formatINR(u.profile.balance)}</div></div>
              <div><div class="text-[11px] text-muted">Live Unrealized P&amp;L</div><div class="text-base font-bold ${unreal >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatINR(unreal, true)}</div></div>
              <div><div class="text-[11px] text-muted">Open Positions</div><div class="text-base font-bold">${u.positions.length}</div></div>
            </div>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-subtle bg-surface text-xs text-secondary">
              <span class="w-2 h-2 rounded-full ${ist.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}"></span>${ist.label}
            </span>
          </div>

          ${renderLivePositionsStrip()}
          ${renderSectorsStrip()}

          <div class="grid lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-7 bg-elevated border border-subtle rounded-2xl p-4 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h2 class="text-xs font-bold uppercase tracking-wider text-secondary">Market Movers &amp; Most Traded</h2>
                <div class="flex flex-wrap gap-1 bg-surface p-1 rounded-xl border border-subtle text-[11px]">
                  ${[["gainers","Top Gainers"],["losers","Top Losers"],["traded","Most Traded"],["movers","Biggest Movers"]].map(([id, lbl]) => `
                    <button onclick="act.setMoverTab('${id}')" class="px-2.5 py-1 rounded-lg font-semibold ${appState.moverTab === id ? 'bg-sky-500 text-white' : 'text-secondary'}">${lbl}</button>
                  `).join("")}
                </div>
              </div>
              <div class="grid sm:grid-cols-2 gap-2">
                ${moverList.map(st => {
                  const q = appState.quotes[st.symbol], up = q.changePct >= 0;
                  return `<button onclick="act.nav('trade','${st.symbol}')" class="text-left p-3 rounded-xl bg-surface border border-subtle bg-hover transition flex items-center justify-between gap-2 ${flashClassFor(st.symbol)}">
                    <div class="min-w-0"><div class="font-bold text-xs truncate">${st.symbol}</div><div class="text-[10px] text-muted truncate">${st.sector}</div><div class="text-[10px] text-secondary mt-0.5 tabular-nums">Vol: ${formatVol(q.volume)}</div></div>
                    <div class="text-right shrink-0 tabular-nums"><div class="text-xs font-bold">${formatINR(q.ltp)}</div><div class="text-xs font-bold ${up ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(q.changePct)}</div></div>
                  </button>`;
                }).join("")}
              </div>
            </div>
            <div class="lg:col-span-5">${renderNewsCompactCard(MARKET_NEWS.slice(0, 4), "India Market News")}</div>
          </div>

          <div class="bg-elevated border border-subtle rounded-2xl overflow-hidden">
            <div class="p-4 border-b border-subtle space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <h2 class="text-sm font-semibold">Instrument Explorer (${rows.length})${appState.mSector !== "ALL" ? ` · ${appState.mSector}` : ""}</h2>
                <input id="m-search" value="${appState.mQuery}" oninput="act.setMQuery(this.value)" placeholder="Filter by symbol or company..." class="w-full sm:w-72 px-3 py-1.5 rounded-lg bg-surface border border-subtle text-xs focus:outline-none focus:border-sky-500" />
              </div>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div class="flex flex-wrap gap-1.5">
                  ${[["ALL","All"],["STOCK","Stocks"],["INDEX","Indexes"],["FUTURE","Futures"],["OPTION","Options"]].map(([k, lbl]) => `
                    <button onclick="act.setMType('${k}')" class="px-3 py-1 rounded-lg text-xs font-medium ${appState.mType === k ? 'bg-sky-500 text-white font-bold' : 'bg-surface text-secondary border border-subtle'}">${lbl}</button>
                  `).join("")}
                  <select onchange="act.setMExpiry(this.value)" aria-label="Filter by expiry" class="px-2.5 py-1 rounded-lg bg-surface border border-subtle text-xs text-secondary">
                    <option value="ALL" ${appState.mExpiry === "ALL" ? "selected" : ""}>All Expiries</option>
                    ${expiries.map(ex => `<option value="${ex}" ${appState.mExpiry === ex ? "selected" : ""}>Expiry: ${ex}</option>`).join("")}
                  </select>
                </div>
                <div class="flex items-center gap-1.5 text-xs">
                  <span class="text-muted">Sort:</span>
                  ${[["ltp","LTP"],["changePct","% Chg"],["volume","Volume"]].map(([k, lbl]) => `
                    <button onclick="act.setMSort('${k}')" class="px-2 py-1 rounded ${appState.mSort === k ? 'bg-sky-500/15 text-sky-500 font-bold' : 'text-secondary'}">${lbl}${appState.mSort === k ? (appState.mDesc ? ' ↓' : ' ↑') : ''}</button>
                  `).join("")}
                </div>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-xs">
                <thead class="bg-surface text-secondary border-b border-subtle">
                  <tr><th class="py-2.5 px-4 text-left">Instrument</th><th class="py-2.5 px-3 text-left">Sector / Type</th><th class="py-2.5 px-3 text-right">LTP</th><th class="py-2.5 px-3 text-right">% Change</th><th class="py-2.5 px-3 text-right hidden sm:table-cell">Volume</th><th class="py-2.5 px-4 text-right">Action</th></tr>
                </thead>
                <tbody class="divide-y divide-subtle">
                  ${rows.map(inst => {
                    const q = appState.quotes[inst.symbol], up = q.changePct >= 0, starred = u.watchlist.includes(inst.symbol);
                    const openPos = u.positions.find(p => p.symbol === inst.symbol);
                    const posPnl = openPos ? (q.ltp - openPos.avg) * openPos.qty : 0;
                    const rowFlash = openPos ? flashClassFor(inst.symbol, Math.sign(openPos.qty)) : "";
                    return `<tr class="bg-hover ${rowFlash}">
                      <td class="py-2.5 px-4">
                        <div class="flex items-center gap-2">
                          <button onclick="act.toggleWatchlist('${inst.symbol}')" aria-label="Star ${inst.symbol}" class="p-1 text-muted hover:text-amber-500"><i data-lucide="star" class="w-3.5 h-3.5 ${starred ? 'fill-amber-400 text-amber-400' : ''}"></i></button>
                          <div>
                            <div class="flex items-center gap-1.5 flex-wrap">
                              <span class="font-semibold">${inst.symbol}</span>
                              ${openPos ? `<span class="px-1.5 py-0.5 rounded bg-sky-500/15 border border-sky-500/40 text-[9px] font-bold tabular-nums ${posPnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}">OPEN · ${formatINR(posPnl, true)}</span>` : ""}
                            </div>
                            <div class="text-[11px] text-muted">${inst.name} · ${inst.exchange}${inst.lot > 1 ? ` · Lot ${inst.lot}` : ""}</div>
                          </div>
                        </div>
                      </td>
                      <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded bg-surface border border-subtle text-[10px] font-semibold text-secondary">${inst.sector || inst.type}</span></td>
                      <td class="py-2.5 px-3 text-right font-semibold tabular-nums">${formatINR(q.ltp)}</td>
                      <td class="py-2.5 px-3 text-right font-semibold tabular-nums ${up ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(q.changePct)}</td>
                      <td class="py-2.5 px-3 text-right text-secondary tabular-nums hidden sm:table-cell">${formatVol(q.volume)}</td>
                      <td class="py-2.5 px-4 text-right"><button onclick="act.nav('trade', '${inst.symbol}')" class="px-2.5 py-1 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-500 font-semibold">Trade →</button></td>
                    </tr>`;
                  }).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    function renderTradeView() {
      const inst = getInstrument(appState.activeSymbol);
      const q = appState.quotes[inst.symbol] || { ltp: inst.base, change: 0, changePct: 0, tickDir: "flat" };
      const up = q.change >= 0, starred = appState.user.watchlist.includes(inst.symbol);
      const fnoUnd = inst.underlying || (["NIFTY 50", "BANKNIFTY", "SENSEX", "RELIANCE"].includes(inst.symbol) ? inst.symbol : "NIFTY 50");
      const undSpot = appState.quotes[fnoUnd]?.ltp || 25514.30;
      const tick = q.ltp > 5000 ? 0.5 : 0.05;
      const bids = Array.from({ length: 5 }, (_, i) => ({ p: (q.ltp - (i + 1) * tick).toFixed(2), qty: inst.lot * (8 + i * 6) }));
      const asks = Array.from({ length: 5 }, (_, i) => ({ p: (q.ltp + (i + 1) * tick).toFixed(2), qty: inst.lot * (7 + i * 5) }));
      const candles = getCandles(inst.symbol, appState.tTimeframe), rsiVal = calcRSI(candles, 14);
      const drw = getSymbolDrawings(inst.symbol), totalLines = drw.hlines.length + drw.trends.length;
      const activePos = appState.user.positions.find(p => p.symbol === inst.symbol);
      const activePnl = activePos ? (q.ltp - activePos.avg) * activePos.qty : 0;
      const annualReport = getAnnualReport(inst.symbol);

      let tabBody = "";
      if (appState.tTab === "chart") {
        tabBody = `
          <div class="bg-elevated border border-subtle rounded-2xl p-4 space-y-3">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex flex-wrap items-center gap-1 bg-surface p-1 rounded-lg border border-subtle">
                ${["1m","5m","15m","1H","1D","1W"].map(tf => `<button onclick="act.setTF('${tf}')" class="px-2 py-1 rounded-md text-xs font-medium ${appState.tTimeframe === tf ? 'bg-sky-500 text-white font-bold' : 'text-secondary'}">${tf}</button>`).join("")}
              </div>
              <div class="flex items-center gap-1 bg-surface p-1 rounded-lg border border-subtle">
                <button onclick="act.setChartMode('candle')" class="px-2.5 py-1 rounded-md text-xs ${appState.tChartMode === 'candle' ? 'bg-sky-500 text-white font-bold' : 'text-secondary'}">Candles</button>
                <button onclick="act.setChartMode('area')" class="px-2.5 py-1 rounded-md text-xs ${appState.tChartMode === 'area' ? 'bg-sky-500 text-white font-bold' : 'text-secondary'}">Area</button>
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-subtle text-[11px]">
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-muted font-semibold">Indicators:</span>
                ${[["sma20","SMA 20","#f59e0b"],["ema9","EMA 9","#a855f7"],["vwap","VWAP","#0ea5e9"],["bb","BB(20)","#818cf8"],["volume","Vol","#10b981"],["rsi","RSI 14","#38bdf8"]].map(([k, lbl, col]) => `
                  <button onclick="act.toggleIndicator('${k}')" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border font-semibold ${appState.indicators[k] ? 'border-sky-500 bg-sky-500/15 text-primary' : 'border-subtle bg-surface text-muted'}"><span class="w-1.5 h-1.5 rounded-full" style="background:${col}"></span>${lbl}</button>`).join("")}
              </div>
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="text-muted font-semibold">Draw:</span>
                ${[["cursor","Crosshair"],["hline","Price Line"],["trend","Trendline"]].map(([id, lbl]) => `
                  <button onclick="act.setDrawTool('${id}')" class="px-2 py-0.5 rounded-md border font-semibold ${appState.drawTool === id ? 'border-amber-500 bg-amber-500/15 text-amber-500' : 'border-subtle bg-surface text-secondary'}">${lbl}</button>`).join("")}
                ${totalLines > 0 ? `<button onclick="act.clearDrawings()" class="px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-500 font-semibold">Clear (${totalLines})</button>` : ""}
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] tabular-nums text-muted">
              <span id="chart-ohlc-readout">O: ₹${candles[candles.length-1].o}  H: ₹${candles[candles.length-1].h}  L: ₹${candles[candles.length-1].l}  C: ₹${candles[candles.length-1].c}</span>
              ${appState.indicators.rsi ? `<span class="px-2 py-0.5 rounded bg-surface border border-subtle font-semibold ${rsiVal > 70 ? 'text-rose-500' : rsiVal < 30 ? 'text-emerald-500' : 'text-sky-500'}">RSI(14): ${rsiVal}</span>` : ""}
            </div>
            <div class="w-full h-[340px] relative ${appState.drawTool !== 'cursor' ? 'cursor-crosshair' : ''}"><canvas id="trading-canvas"></canvas></div>
          </div>

          ${renderLivePositionsStrip()}

          <div class="bg-elevated border border-subtle rounded-2xl p-4">
            <h2 class="text-xs font-bold uppercase tracking-wider text-secondary mb-3">5-Level Market Depth</h2>
            <div class="grid grid-cols-2 gap-4 text-xs tabular-nums">
              <div><div class="flex justify-between text-[10px] text-muted pb-1 border-b border-subtle"><span>BID PRICE</span><span>QTY</span></div>${bids.map(b => `<div class="flex justify-between py-1 border-b border-subtle/50"><span class="text-emerald-500 font-semibold">₹${b.p}</span><span>${b.qty.toLocaleString("en-IN")}</span></div>`).join("")}</div>
              <div><div class="flex justify-between text-[10px] text-muted pb-1 border-b border-subtle"><span>ASK PRICE</span><span>QTY</span></div>${asks.map(a => `<div class="flex justify-between py-1 border-b border-subtle/50"><span class="text-rose-500 font-semibold">₹${a.p}</span><span>${a.qty.toLocaleString("en-IN")}</span></div>`).join("")}</div>
            </div>
          </div>
          <div class="lg:hidden">${renderNewsCompactCard(getRelevantNews(inst.symbol), `All Stock News · ${inst.symbol}`, true)}</div>
        `;
      } else if (appState.tTab === "chain") {
        const chain = buildOptionChain(fnoUnd, undSpot);
        tabBody = `
          <div class="bg-elevated border border-subtle rounded-2xl overflow-hidden">
            <div class="px-4 py-3 border-b border-subtle flex items-center justify-between">
              <div><h3 class="text-sm font-semibold">Option Chain — ${fnoUnd}</h3><p class="text-xs text-muted">Expiry: 26 Nov 2026 · Spot: <span class="tabular-nums text-primary font-semibold">${formatINR(undSpot)}</span></p></div>
              <span class="text-[11px] px-2 py-0.5 rounded bg-surface border border-subtle text-secondary">ATM ± 8</span>
            </div>
            <div class="overflow-x-auto"><table class="w-full text-xs tabular-nums">
              <thead class="bg-surface text-secondary border-b border-subtle"><tr><th class="py-2 px-2 text-right">OI</th><th class="py-2 px-2 text-right">IV%</th><th class="py-2 px-2 text-right">Delta</th><th class="py-2 px-2 text-right text-emerald-500">CALL LTP</th><th class="py-2 px-3 text-center">STRIKE</th><th class="py-2 px-2 text-right text-rose-500">PUT LTP</th><th class="py-2 px-2 text-right">Delta</th><th class="py-2 px-2 text-right">IV%</th><th class="py-2 px-2 text-right">OI</th></tr></thead>
              <tbody class="divide-y divide-subtle">${chain.map(r => `<tr class="${r.isAtm ? 'bg-sky-500/10 font-semibold' : 'bg-hover'}"><td class="py-2 px-2 text-right text-muted">${formatVol(r.ce.oi)}</td><td class="py-2 px-2 text-right text-secondary">${r.ce.iv}%</td><td class="py-2 px-2 text-right text-secondary">${r.ce.delta}</td><td class="py-2 px-2 text-right"><button onclick="act.nav('trade','${r.ceSymbol}')" class="text-emerald-500 hover:underline font-semibold">₹${r.ce.premium.toFixed(2)}</button></td><td class="py-2 px-3 text-center bg-surface font-bold">${r.strike.toLocaleString("en-IN")}${r.isAtm ? ' <span class="text-[10px] text-sky-500">ATM</span>' : ''}</td><td class="py-2 px-2 text-right"><button onclick="act.nav('trade','${r.peSymbol}')" class="text-rose-500 hover:underline font-semibold">₹${r.pe.premium.toFixed(2)}</button></td><td class="py-2 px-2 text-right text-secondary">${r.pe.delta}</td><td class="py-2 px-2 text-right text-secondary">${r.pe.iv}%</td><td class="py-2 px-2 text-right text-muted">${formatVol(r.pe.oi)}</td></tr>`).join("")}</tbody>
            </table></div>
          </div>
        `;
      } else if (appState.tTab === "report" && annualReport) {
        tabBody = `
          <div class="bg-elevated border border-subtle rounded-2xl p-5 space-y-4">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span class="px-2 py-0.5 rounded bg-sky-500/15 text-sky-500 text-[10px] font-bold">${annualReport.fy} · OFFICIAL FILING</span>
                <h3 class="text-base font-bold mt-1.5">${annualReport.title}</h3>
              </div>
              <a href="${annualReport.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shrink-0">
                <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Open Official Report ↗
              </a>
            </div>
            <div class="grid sm:grid-cols-2 gap-2.5 tabular-nums">
              ${annualReport.metrics.map(m => `
                <div class="p-3 rounded-xl bg-surface border border-subtle">
                  <div class="text-[11px] text-muted">${m.label}</div>
                  <div class="text-sm font-bold mt-0.5">${m.value}</div>
                </div>`).join("")}
            </div>
            <p class="text-xs text-secondary leading-relaxed">${annualReport.summary}</p>
          </div>
        `;
      } else {
        const strike = inst.strike || 25500, qty = appState.payoffLots * inst.lot, be = inst.optType === "CE" ? strike + q.ltp : strike - q.ltp;
        const maxProfit = appState.payoffSide === "BUY" ? (inst.optType === "CE" ? "Unlimited" : formatINR((strike - q.ltp) * qty)) : formatINR(q.ltp * qty);
        const maxLoss = appState.payoffSide === "BUY" ? formatINR(-q.ltp * qty) : (inst.optType === "CE" ? "Unlimited" : formatINR(-(strike - q.ltp) * qty));
        tabBody = `
          <div class="bg-elevated border border-subtle rounded-2xl p-4 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div><h3 class="text-sm font-semibold">Options Payoff Visualizer</h3><p class="text-xs text-muted">Strike ₹${strike.toLocaleString("en-IN")} ${inst.optType} · Premium ₹${q.ltp.toFixed(2)} · ${appState.payoffLots} Lot (${qty} qty)</p></div>
              <div class="flex items-center gap-2">
                <div class="flex bg-surface p-0.5 rounded-lg border border-subtle text-xs">
                  <button onclick="act.setPayoffSide('BUY')" class="px-2.5 py-1 rounded font-semibold ${appState.payoffSide === 'BUY' ? 'bg-emerald-500 text-slate-950' : 'text-secondary'}">Long</button>
                  <button onclick="act.setPayoffSide('SELL')" class="px-2.5 py-1 rounded font-semibold ${appState.payoffSide === 'SELL' ? 'bg-rose-500 text-white' : 'text-secondary'}">Short</button>
                </div>
                <input type="number" min="1" max="20" value="${appState.payoffLots}" onchange="act.setPayoffLots(this.value)" aria-label="Payoff lots" class="w-16 px-2 py-1 rounded-lg bg-surface border border-subtle text-xs text-center tabular-nums" />
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-xs tabular-nums">
              <div class="bg-surface border border-subtle rounded-xl p-2.5"><div class="text-muted">Breakeven</div><div class="font-bold text-sky-500 mt-0.5">₹${formatNum(be)}</div></div>
              <div class="bg-surface border border-subtle rounded-xl p-2.5"><div class="text-muted">Max Profit</div><div class="font-bold text-emerald-500 mt-0.5">${maxProfit}</div></div>
              <div class="bg-surface border border-subtle rounded-xl p-2.5"><div class="text-muted">Max Loss</div><div class="font-bold text-rose-500 mt-0.5">${maxLoss}</div></div>
            </div>
            <div class="relative h-64"><canvas id="payoff-chart"></canvas></div>
          </div>
        `;
      }

      return `
        <div class="space-y-4 max-w-7xl mx-auto">
          <div class="bg-elevated border border-subtle rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 ${activePos ? flashClassFor(inst.symbol, Math.sign(activePos.qty)) : ''}">
            <div class="flex items-center gap-3">
              <button onclick="act.toggleWatchlist('${inst.symbol}')" aria-label="Toggle watchlist" class="p-2 rounded-xl bg-surface border border-subtle"><i data-lucide="star" class="w-4 h-4 ${starred ? 'fill-amber-400 text-amber-400' : 'text-secondary'}"></i></button>
              <div>
                <div class="flex items-center gap-2 flex-wrap">
                  <h1 class="text-lg font-bold">${inst.symbol}</h1>
                  <span class="px-2 py-0.5 rounded bg-surface border border-subtle text-[10px] font-semibold text-sky-500">${inst.exchange} · ${inst.sector || inst.type}</span>
                  ${inst.lot > 1 ? `<span class="px-2 py-0.5 rounded bg-surface border border-subtle text-[10px] text-secondary">Lot ${inst.lot}</span>` : ""}
                  ${activePos ? `<span class="px-2 py-0.5 rounded bg-sky-500/15 border border-sky-500/40 text-[10px] font-bold tabular-nums ${activePnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}">YOUR POS (${activePos.qty > 0 ? '+' : ''}${activePos.qty}): ${formatINR(activePnl, true)}</span>` : ""}
                </div>
                <p class="text-xs text-muted">${inst.name}</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="text-right tabular-nums">
                <div class="text-xl font-bold">${formatINR(q.ltp)}</div>
                <div class="text-xs font-semibold ${up ? 'text-emerald-500' : 'text-rose-500'}">${up ? '+' : ''}${q.change.toFixed(2)} (${formatPct(q.changePct)})</div>
              </div>
              <button onclick="act.toggleMobileSheet(true)" class="lg:hidden px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs">Order Ticket</button>
            </div>
          </div>

          <div class="flex gap-1.5 overflow-x-auto pb-1">
            ${["RELIANCE","TCS","HDFCBANK","INFY","MARUTI","NIFTY26NOVFUT","BANKNIFTY26NOV64300CE"].map(sym => `
              <button onclick="act.nav('trade','${sym}')" class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border ${sym === inst.symbol ? 'bg-sky-500/15 border-sky-500/40 text-sky-500 font-semibold' : 'bg-elevated border-subtle text-secondary'}">${sym}</button>`).join("")}
          </div>

          <div class="grid lg:grid-cols-12 gap-4 items-start">
            <div class="lg:col-span-8 space-y-4">
              <div class="flex flex-wrap gap-1.5 bg-elevated p-1 rounded-xl border border-subtle w-fit">
                <button onclick="act.setTTab('chart')" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold ${appState.tTab === 'chart' ? 'bg-sky-500 text-white' : 'text-secondary'}">Chart &amp; Tools</button>
                <button onclick="act.setTTab('chain')" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold ${appState.tTab === 'chain' ? 'bg-sky-500 text-white' : 'text-secondary'}">Option Chain (${fnoUnd})</button>
                ${inst.type === "OPTION" ? `<button onclick="act.setTTab('payoff')" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold ${appState.tTab === 'payoff' ? 'bg-sky-500 text-white' : 'text-secondary'}">Options Payoff</button>` : ""}
                ${annualReport ? `<button onclick="act.setTTab('report')" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold ${appState.tTab === 'report' ? 'bg-sky-500 text-white' : 'text-secondary'}">Annual Report (${annualReport.fy})</button>` : ""}
              </div>
              ${tabBody}
            </div>
            <div class="hidden lg:block lg:col-span-4 sticky top-20 space-y-4">
              ${renderOrderTicketHTML(inst, q.ltp)}
              ${renderNewsCompactCard(getRelevantNews(inst.symbol), `All Stock News · ${inst.symbol}`, true)}
            </div>
          </div>
        </div>
      `;
    }

    function renderPortfolioView() {
      const u = appState.user, unreal = u.positions.reduce((a, p) => a + ((appState.quotes[p.symbol]?.ltp || p.avg) - p.avg) * p.qty, 0);
      const totCap = u.profile.balance + u.profile.marginUsed, mPct = totCap > 0 ? Math.min(100, (u.profile.marginUsed / totCap) * 100) : 0;
      return `
        <div class="space-y-5 max-w-7xl mx-auto">
          <div class="flex items-center justify-between"><h1 class="text-xl font-bold">Portfolio &amp; Open Positions</h1><button onclick="act.nav('markets')" class="px-3.5 py-2 rounded-xl bg-sky-500/15 text-sky-500 text-xs font-semibold">+ Explore Markets</button></div>
          <div class="grid sm:grid-cols-3 gap-3 tabular-nums">
            <div class="bg-elevated border border-subtle rounded-2xl p-4"><div class="text-xs text-muted">Live Unrealized P&amp;L</div><div class="text-xl font-bold mt-1 ${unreal >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatINR(unreal, true)}</div></div>
            <div class="bg-elevated border border-subtle rounded-2xl p-4"><div class="text-xs text-muted">Margin Blocked</div><div class="text-xl font-bold mt-1">${formatINR(u.profile.marginUsed)}</div></div>
            <div class="bg-elevated border border-subtle rounded-2xl p-4"><div class="text-xs text-muted">Available Virtual Cash</div><div class="text-xl font-bold text-emerald-500 mt-1">${formatINR(u.profile.balance)}</div></div>
          </div>
          <div class="bg-elevated border border-subtle rounded-2xl p-4">
            <div class="flex justify-between text-xs mb-2 tabular-nums"><span class="text-secondary">Margin Utilization</span><span class="font-bold text-sky-500">${mPct.toFixed(1)}%</span></div>
            <div class="h-2.5 bg-surface rounded-full overflow-hidden border border-subtle"><div class="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full" style="width:${mPct}%"></div></div>
          </div>
          ${u.positions.length === 0 ? `<div class="bg-elevated border border-subtle rounded-2xl p-10 text-center space-y-3"><i data-lucide="briefcase" class="w-10 h-10 mx-auto text-muted"></i><h2 class="text-base font-semibold">No Open Positions Yet</h2><button onclick="act.nav('markets')" class="px-4 py-2 rounded-xl bg-sky-500 text-white font-bold text-xs">Explore Markets</button></div>` : `
            <div class="bg-elevated border border-subtle rounded-2xl overflow-hidden"><div class="px-4 py-3 border-b border-subtle text-sm font-semibold">Active Positions &amp; Holdings (${u.positions.length})</div><div class="overflow-x-auto"><table class="w-full text-xs tabular-nums"><thead class="bg-surface text-secondary border-b border-subtle"><tr><th class="py-2.5 px-4 text-left">Instrument</th><th class="py-2.5 px-3 text-right">Qty</th><th class="py-2.5 px-3 text-right">Avg Price</th><th class="py-2.5 px-3 text-right">LTP</th><th class="py-2.5 px-3 text-right">Live P&amp;L</th><th class="py-2.5 px-4 text-right">Action</th></tr></thead>
            <tbody class="divide-y divide-subtle">${u.positions.map(p => { const ltp = appState.quotes[p.symbol]?.ltp || p.avg, pnl = (ltp - p.avg) * p.qty, pct = p.avg > 0 ? ((ltp - p.avg) / p.avg) * 100 * Math.sign(p.qty) : 0; return `<tr class="${flashClassFor(p.symbol, Math.sign(p.qty))}"><td class="py-3 px-4"><button onclick="act.nav('trade','${p.symbol}')" class="font-semibold hover:text-sky-500">${p.symbol}</button><div class="text-[11px] text-muted">${p.product} · ${p.type}</div></td><td class="py-3 px-3 text-right font-semibold">${p.qty > 0 ? '+' + p.qty : p.qty}</td><td class="py-3 px-3 text-right">${formatINR(p.avg)}</td><td class="py-3 px-3 text-right font-semibold">${formatINR(ltp)}</td><td class="py-3 px-3 text-right font-bold ${pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}"><div>${formatINR(pnl, true)}</div><div class="text-[10px]">${formatPct(pct)}</div></td><td class="py-3 px-4 text-right"><button onclick="act.squareOff('${p.id}')" class="px-3 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-500 font-semibold">Square Off</button></td></tr>`; }).join("")}</tbody></table></div></div>`}
        </div>
      `;
    }

    function renderOrdersView() {
      const u = appState.user, open = u.orders.filter(o => o.status === "OPEN"), hist = u.orders.filter(o => o.status !== "OPEN");
      return `
        <div class="space-y-5 max-w-7xl mx-auto">
          <div class="flex flex-wrap items-center justify-between gap-3"><h1 class="text-xl font-bold">Orders &amp; Virtual Cash Ledger</h1><div class="flex gap-1 bg-elevated p-1 rounded-xl border border-subtle">${[["open", `Open (${open.length})`], ["history", `History (${hist.length})`], ["ledger", `Cash Ledger (${u.ledger.length})`]].map(([id, lbl]) => `<button onclick="act.setOrdersTab('${id}')" class="px-3 py-1.5 rounded-lg text-xs font-semibold ${appState.ordersTab === id ? 'bg-sky-500 text-white' : 'text-secondary'}">${lbl}</button>`).join("")}</div></div>
          ${appState.ordersTab === "open" ? `<div class="bg-elevated border border-subtle rounded-2xl overflow-hidden">${open.length === 0 ? `<div class="p-10 text-center text-xs text-muted">No pending Limit or Stop-Loss orders.</div>` : `<div class="overflow-x-auto"><table class="w-full text-xs tabular-nums"><thead class="bg-surface text-secondary border-b border-subtle"><tr><th class="py-2.5 px-4 text-left">Instrument</th><th class="py-2.5 px-3 text-left">Side / Type</th><th class="py-2.5 px-3 text-right">Qty</th><th class="py-2.5 px-3 text-right">Target</th><th class="py-2.5 px-4 text-right">Action</th></tr></thead><tbody class="divide-y divide-subtle">${open.map(o => `<tr><td class="py-3 px-4 font-semibold">${o.symbol}</td><td class="py-3 px-3"><span class="font-bold ${o.side === 'BUY' ? 'text-emerald-500' : 'text-rose-500'}">${o.side}</span> · ${o.orderType} · ${o.product}</td><td class="py-3 px-3 text-right">${o.qty}</td><td class="py-3 px-3 text-right">${formatINR(o.orderType === 'SL' ? o.trigger : o.price)}</td><td class="py-3 px-4 text-right"><button onclick="act.cancelOrder('${o.id}')" class="px-3 py-1 rounded-lg bg-rose-500/15 text-rose-500 font-semibold">Cancel</button></td></tr>`).join("")}</tbody></table></div>`}</div>`
          : appState.ordersTab === "history" ? `<div class="bg-elevated border border-subtle rounded-2xl overflow-hidden">${hist.length === 0 ? `<div class="p-10 text-center text-xs text-muted">No executed trades yet.</div>` : `<div class="overflow-x-auto"><table class="w-full text-xs tabular-nums"><thead class="bg-surface text-secondary border-b border-subtle"><tr><th class="py-2.5 px-4 text-left">Instrument</th><th class="py-2.5 px-3 text-left">Side</th><th class="py-2.5 px-3 text-right">Qty</th><th class="py-2.5 px-3 text-right">Exec Price</th><th class="py-2.5 px-3 text-right">Charges</th><th class="py-2.5 px-4 text-right">Status</th></tr></thead><tbody class="divide-y divide-subtle">${hist.map(o => `<tr><td class="py-2.5 px-4 font-semibold">${o.symbol}</td><td class="py-2.5 px-3 font-bold ${o.side === 'BUY' ? 'text-emerald-500' : 'text-rose-500'}">${o.side} (${o.product})</td><td class="py-2.5 px-3 text-right">${o.qty}</td><td class="py-2.5 px-3 text-right">${o.execPrice ? formatINR(o.execPrice) : '—'}</td><td class="py-2.5 px-3 text-right text-amber-500">${formatINR(o.charges)}</td><td class="py-2.5 px-4 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-semibold ${o.status === 'EXECUTED' ? 'bg-emerald-500/15 text-emerald-500' : 'bg-surface text-muted'}">${o.status}</span></td></tr>`).join("")}</tbody></table></div>`}</div>`
          : `<div class="bg-elevated border border-subtle rounded-2xl overflow-hidden"><div class="overflow-x-auto"><table class="w-full text-xs tabular-nums"><thead class="bg-surface text-secondary border-b border-subtle"><tr><th class="py-2.5 px-4 text-left">Type</th><th class="py-2.5 px-3 text-left">Description</th><th class="py-2.5 px-3 text-right">Amount</th><th class="py-2.5 px-4 text-right">Balance After</th></tr></thead><tbody class="divide-y divide-subtle">${u.ledger.map(l => `<tr><td class="py-2.5 px-4 font-semibold">${l.type}</td><td class="py-2.5 px-3 text-secondary">${l.note}</td><td class="py-2.5 px-3 text-right font-semibold ${l.amount >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatINR(l.amount, true)}</td><td class="py-2.5 px-4 text-right font-semibold">${formatINR(l.balanceAfter)}</td></tr>`).join("")}</tbody></table></div></div>`}
        </div>
      `;
    }

    function renderWatchlistView() {
      const u = appState.user;
      return `
        <div class="space-y-5 max-w-5xl mx-auto">
          <div class="flex items-center justify-between"><h1 class="text-xl font-bold">My Watchlist (${u.watchlist.length})</h1><button onclick="act.nav('markets')" class="px-3.5 py-2 rounded-xl bg-sky-500/15 text-sky-500 text-xs font-semibold">+ Add Instruments</button></div>
          ${u.watchlist.length === 0 ? `<div class="bg-elevated border border-subtle rounded-2xl p-10 text-center space-y-3"><i data-lucide="bookmark" class="w-10 h-10 mx-auto text-muted"></i><h2 class="text-base font-semibold">Your Watchlist Is Empty</h2><button onclick="act.nav('markets')" class="px-4 py-2 rounded-xl bg-sky-500 text-white font-bold text-xs">Explore Markets</button></div>` : `
            <div class="bg-elevated border border-subtle rounded-2xl divide-y divide-subtle">${u.watchlist.map(sym => { const inst = getInstrument(sym), q = appState.quotes[sym] || { ltp: inst.base, changePct: 0 }; return `<div class="p-4 flex items-center justify-between gap-3 ${flashClassFor(sym)}"><div><div class="font-semibold text-sm">${sym}</div><div class="text-xs text-muted">${inst.name} · ${inst.sector || inst.type}</div></div><div class="flex items-center gap-3 tabular-nums"><div class="text-right"><div class="font-bold text-sm">${formatINR(q.ltp)}</div><div class="text-xs font-semibold ${q.changePct >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(q.changePct)}</div></div><button onclick="act.nav('trade','${sym}')" class="px-3 py-1.5 rounded-lg bg-sky-500/15 text-sky-500 text-xs font-semibold">Trade →</button><button onclick="act.toggleWatchlist('${sym}')" aria-label="Remove ${sym}" class="p-2 text-muted hover:text-rose-500"><i data-lucide="trash-2" class="w-4 h-4"></i></button></div></div>`; }).join("")}</div>`}
        </div>
      `;
    }

    function renderAnalyticsView() {
      const u = appState.user, exec = u.orders.filter(o => o.status === "EXECUTED"), closed = exec.filter(o => typeof o.realizedPnl === "number");
      const realized = closed.reduce((a, o) => a + o.realizedPnl, 0), winRate = closed.length > 0 ? (closed.filter(o => o.realizedPnl > 0).length / closed.length) * 100 : 0;
      const unreal = u.positions.reduce((a, p) => a + ((appState.quotes[p.symbol]?.ltp || p.avg) - p.avg) * p.qty, 0);
      const sorted = [...closed].sort((a, b) => b.realizedPnl - a.realizedPnl);
      return `
        <div class="space-y-5 max-w-7xl mx-auto">
          <h1 class="text-xl font-bold">Analytics &amp; Trade Journal</h1>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 tabular-nums">
            <div class="bg-elevated border border-subtle rounded-2xl p-4"><div class="text-xs text-muted">Win Rate</div><div class="text-xl font-bold text-sky-500 mt-1">${winRate.toFixed(1)}%</div></div>
            <div class="bg-elevated border border-subtle rounded-2xl p-4"><div class="text-xs text-muted">Realized P&amp;L</div><div class="text-xl font-bold mt-1 ${realized >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatINR(realized, true)}</div></div>
            <div class="bg-elevated border border-subtle rounded-2xl p-4"><div class="text-xs text-muted">Unrealized P&amp;L</div><div class="text-xl font-bold mt-1 ${unreal >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatINR(unreal, true)}</div></div>
            <div class="bg-elevated border border-subtle rounded-2xl p-4"><div class="text-xs text-muted">Best / Worst Trade</div><div class="text-xs mt-1 space-y-0.5"><div class="text-emerald-500 font-semibold">Best: ${sorted[0] ? `${sorted[0].symbol} (${formatINR(sorted[0].realizedPnl, true)})` : '—'}</div><div class="text-rose-500 font-semibold">Worst: ${sorted.length ? `${sorted[sorted.length - 1].symbol} (${formatINR(sorted[sorted.length - 1].realizedPnl, true)})` : '—'}</div></div></div>
          </div>
          <div class="bg-elevated border border-subtle rounded-2xl p-4"><h2 class="text-sm font-semibold mb-3">Virtual Equity Curve (₹)</h2><div class="relative h-64"><canvas id="equity-chart"></canvas></div></div>
          <div class="grid lg:grid-cols-12 gap-4">
            <form onsubmit="act.saveJournal(event)" class="lg:col-span-5 bg-elevated border border-subtle rounded-2xl p-4 space-y-3">
              <h2 class="text-sm font-semibold">Add / Edit Trade Journal Note</h2>
              <div><label class="block text-xs text-secondary mb-1">Executed Order</label><select id="j-order" class="w-full px-3 py-2 rounded-xl bg-surface border border-subtle text-xs">${exec.length === 0 ? `<option value="">No executed trades yet</option>` : exec.map(o => `<option value="${o.id}">${o.side} ${o.qty} ${o.symbol} @ ₹${o.execPrice}</option>`).join("")}</select></div>
              <div class="grid grid-cols-2 gap-2">
                <div><label class="block text-xs text-secondary mb-1">Strategy</label><select id="j-strategy" class="w-full px-3 py-2 rounded-xl bg-surface border border-subtle text-xs"><option>VWAP Breakout</option><option>Trend Continuation</option><option>Mean Reversion</option><option>Option Hedge</option></select></div>
                <div><label class="block text-xs text-secondary mb-1">Emotion</label><select id="j-emotion" class="w-full px-3 py-2 rounded-xl bg-surface border border-subtle text-xs"><option>Disciplined</option><option>Calm</option><option>FOMO</option><option>Impatient</option></select></div>
              </div>
              <div><label class="block text-xs text-secondary mb-1">Notes</label><textarea id="j-notes" rows="3" required placeholder="Document your setup and lesson..." class="w-full px-3 py-2 rounded-xl bg-surface border border-subtle text-xs focus:outline-none focus:border-sky-500"></textarea></div>
              <button type="submit" ${exec.length === 0 ? 'disabled' : ''} class="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white font-bold text-xs">Save Journal Entry</button>
            </form>
            <div class="lg:col-span-7 bg-elevated border border-subtle rounded-2xl p-4 space-y-2.5">
              <h2 class="text-sm font-semibold">Journal Entries (${u.journal.length})</h2>
              ${u.journal.length === 0 ? `<p class="text-xs text-muted py-6 text-center">No journal notes yet.</p>` : u.journal.map(j => `<div class="p-3 rounded-xl bg-surface border border-subtle space-y-1"><div class="flex items-center justify-between"><span class="font-semibold text-xs">${j.symbol}</span><div class="flex gap-1.5"><span class="px-2 py-0.5 rounded bg-sky-500/15 text-sky-500 text-[10px] font-semibold">${j.strategy}</span><span class="px-2 py-0.5 rounded bg-amber-500/15 text-amber-500 text-[10px] font-semibold">${j.emotion}</span></div></div><p class="text-xs text-secondary">${j.notes}</p></div>`).join("")}
            </div>
          </div>
        </div>
      `;
    }

    function renderLeaderboardView() {
      const u = appState.user, unreal = u.positions.reduce((a, p) => a + ((appState.quotes[p.symbol]?.ltp || p.avg) - p.avg) * p.qty, 0);
      const eq = u.profile.balance + u.profile.marginUsed + unreal, roi = ((eq - INITIAL_BALANCE) / INITIAL_BALANCE) * 100;
      const board = [
        { name: "Rohan_FNO", roi: 8.42, eq: 1084200, trades: 24, you: false },
        { name: "NiftyScalper", roi: 5.18, eq: 1051800, trades: 19, you: false },
        { name: "MeeraEquities", roi: 3.64, eq: 1036400, trades: 11, you: false },
        { name: "QuantKaran", roi: -1.12, eq: 988800, trades: 15, you: false },
        { name: `${u.profile.name} (You)`, roi: Number(roi.toFixed(2)), eq, trades: u.orders.filter(o => o.status === "EXECUTED").length, you: true }
      ].sort((a, b) => b.roi - a.roi);
      const lightThemes = THEMES.filter(t => t.group === "Light"), darkThemes = THEMES.filter(t => t.group === "Dark");

      return `
        <div class="space-y-5 max-w-5xl mx-auto">
          <h1 class="text-xl font-bold">Leaderboard &amp; Account Settings</h1>
          <div class="bg-elevated border border-subtle rounded-2xl overflow-hidden">
            <div class="px-4 py-3 border-b border-subtle flex items-center gap-2"><i data-lucide="trophy" class="w-4 h-4 text-amber-500"></i><h2 class="text-sm font-semibold">Virtual ROI% Leaderboard</h2></div>
            <div class="overflow-x-auto"><table class="w-full text-xs tabular-nums">
              <thead class="bg-surface text-secondary border-b border-subtle"><tr><th class="py-2.5 px-4 text-left">Rank</th><th class="py-2.5 px-3 text-left">Trader</th><th class="py-2.5 px-3 text-right">Trades</th><th class="py-2.5 px-3 text-right">Virtual Equity</th><th class="py-2.5 px-4 text-right">ROI %</th></tr></thead>
              <tbody class="divide-y divide-subtle">${board.map((r, i) => `<tr class="${r.you ? 'bg-sky-500/10 font-bold' : ''}"><td class="py-3 px-4">#${i + 1}</td><td class="py-3 px-3">${r.name}</td><td class="py-3 px-3 text-right">${r.trades}</td><td class="py-3 px-3 text-right">${formatINR(r.eq)}</td><td class="py-3 px-4 text-right font-bold ${r.roi >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(r.roi)}</td></tr>`).join("")}</tbody>
            </table></div>
          </div>

          <div class="bg-elevated border border-subtle rounded-2xl p-5 space-y-5">
            <div>
              <h2 class="text-sm font-semibold">UI Color Themes</h2>
              <p class="text-xs text-secondary mt-0.5">Choose from 4 light themes (including Daylight Crisp) and 3 dark themes.</p>
              <div class="mt-3 space-y-2.5">
                <div class="text-[11px] font-bold uppercase tracking-wider text-muted">Light Themes</div>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  ${lightThemes.map(t => `<button onclick="act.setTheme('${t.id}')" class="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold ${appState.theme === t.id ? 'border-sky-500 bg-sky-500/15 text-sky-500' : 'border-subtle bg-surface text-secondary'}"><span class="w-3 h-3 rounded-full" style="background:${t.dot}"></span>${t.label}</button>`).join("")}
                </div>
                <div class="text-[11px] font-bold uppercase tracking-wider text-muted pt-1">Dark Themes</div>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  ${darkThemes.map(t => `<button onclick="act.setTheme('${t.id}')" class="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold ${appState.theme === t.id ? 'border-sky-500 bg-sky-500/15 text-sky-500' : 'border-subtle bg-surface text-secondary'}"><span class="w-3 h-3 rounded-full" style="background:${t.dot}"></span>${t.label}</button>`).join("")}
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-subtle space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 class="text-sm font-semibold">Gradient UI Mode</h2>
                  <p class="text-xs text-secondary mt-0.5">Enable subtle ambient glass-gradient surfaces across your chosen light or dark theme.</p>
                </div>
                <button onclick="act.toggleGradient()" class="px-4 py-2 rounded-xl text-xs font-bold ${appState.gradientUi ? 'bg-sky-500 text-white' : 'bg-surface border border-subtle text-secondary'}">${appState.gradientUi ? 'Gradient ON' : 'Flat UI'}</button>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-subtle">
                <div>
                  <h2 class="text-sm font-semibold">Visual Effects (Flash &amp; Throb)</h2>
                  <p class="text-xs text-secondary mt-0.5">Control tick flashes, position pulse/throb, and fine-tune opacity down to 0–1%.</p>
                </div>
                <div class="flex gap-2">
                  <button onclick="act.toggleFx()" class="px-3.5 py-2 rounded-xl text-xs font-bold ${appState.fxEnabled ? 'bg-emerald-500 text-slate-950' : 'bg-surface border border-subtle text-secondary'}">Flash: ${appState.fxEnabled ? 'ON' : 'OFF'}</button>
                  <button onclick="act.togglePulse()" class="px-3.5 py-2 rounded-xl text-xs font-bold ${appState.fxPulse ? 'bg-sky-500 text-white' : 'bg-surface border border-subtle text-secondary'}">Throb: ${appState.fxPulse ? 'ON' : 'OFF'}</button>
                </div>
              </div>
              <div class="flex items-center gap-3 bg-surface border border-subtle rounded-xl px-3.5 py-2.5">
                <span class="text-xs text-secondary whitespace-nowrap">Effect Intensity</span>
                <input type="range" min="0" max="100" step="1" value="${appState.fxOpacity}" oninput="act.setFxOpacity(this.value)" ${!appState.fxEnabled ? 'disabled' : ''} aria-label="Visual effects opacity" class="flex-1 accent-sky-500" />
                <span id="fx-opacity-val-settings" class="text-xs font-bold tabular-nums w-10 text-right">${appState.fxOpacity}%</span>
              </div>
            </div>

            <div class="pt-4 border-t border-subtle flex items-center justify-between gap-4">
              <div><h2 class="text-sm font-semibold">Realistic Indian Charges Simulation</h2><p class="text-xs text-secondary mt-0.5">Include simulated brokerage, STT, exchange fees, stamp duty &amp; 18% GST.</p></div>
              <button onclick="act.toggleCharges()" class="px-4 py-2 rounded-xl text-xs font-bold ${u.profile.chargesEnabled ? 'bg-emerald-500 text-slate-950' : 'bg-surface border border-subtle text-secondary'}">${u.profile.chargesEnabled ? 'Enabled' : 'Disabled'}</button>
            </div>
            <div class="pt-4 border-t border-subtle flex flex-wrap items-center justify-between gap-4">
              <div><h2 class="text-sm font-semibold">Reset Virtual Account</h2><p class="text-xs text-secondary mt-0.5">Closes all open positions, cancels pending orders, and restores balance to ₹10,00,000.00.</p></div>
              <button onclick="act.openReset()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/35 text-rose-500 text-xs font-semibold"><i data-lucide="rotate-ccw" class="w-4 h-4"></i> Reset Virtual Balance to ₹10,00,000</button>
            </div>
          </div>
        </div>
      `;
    }

    function render() {
      const root = document.getElementById("app");
      if (!appState.user) { root.innerHTML = renderWelcomeScreen(); if (window.lucide) lucide.createIcons(); return; }

      const u = appState.user, ist = getISTStatus();
      const navItems = [["markets","Markets","compass"],["trade","Trade","activity"],["portfolio","Portfolio","briefcase"],["orders","Orders","clipboard-list"],["watchlist","Watchlist","bookmark"],["analytics","Analytics","bar-chart-3"],["leaderboard","Leaderboard","trophy"]];
      const searchMatches = appState.globalQuery.trim() ? INSTRUMENTS.filter(i => i.symbol.toLowerCase().includes(appState.globalQuery.toLowerCase()) || i.name.toLowerCase().includes(appState.globalQuery.toLowerCase())).slice(0, 6) : [];
      let mainHTML = "";
      if (appState.route === "markets") mainHTML = renderMarketsView();
      else if (appState.route === "trade") mainHTML = renderTradeView();
      else if (appState.route === "portfolio") mainHTML = renderPortfolioView();
      else if (appState.route === "orders") mainHTML = renderOrdersView();
      else if (appState.route === "watchlist") mainHTML = renderWatchlistView();
      else if (appState.route === "analytics") mainHTML = renderAnalyticsView();
      else mainHTML = renderLeaderboardView();

      const inst = getInstrument(appState.activeSymbol), activeLtp = appState.quotes[inst.symbol]?.ltp || inst.base;
      const lightThemes = THEMES.filter(t => t.group === "Light"), darkThemes = THEMES.filter(t => t.group === "Dark");

      root.innerHTML = `
        <div class="min-h-screen flex flex-col">
          <header class="sticky top-0 z-40 h-14 bg-elevated/95 backdrop-blur border-b border-subtle px-3 md:px-5 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <button onclick="act.nav('markets')" class="font-extrabold text-base tracking-tight flex items-center gap-2 shrink-0">
                <span class="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-500 font-bold text-xs">PV</span>
                <span class="hidden sm:inline">PAPER VIEW</span>
              </button>
              <span class="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/35 text-amber-500 text-[10px] font-semibold whitespace-nowrap">PAPER TRADING · VIRTUAL ₹ ONLY</span>
            </div>

            <div class="relative flex-1 max-w-xs hidden lg:block">
              <input id="global-search" value="${appState.globalQuery}" oninput="act.setGlobalQuery(this.value)" placeholder="Search NSE/BSE... (Press /)" aria-label="Global search" class="w-full px-3 py-1.5 rounded-lg bg-surface border border-subtle text-xs focus:outline-none focus:border-sky-500" />
              ${searchMatches.length ? `<div class="absolute left-0 right-0 mt-1 bg-elevated border border-strong rounded-xl shadow-2xl overflow-hidden z-50">${searchMatches.map(m => { const mq = appState.quotes[m.symbol]; return `<button onclick="act.nav('trade','${m.symbol}')" class="w-full px-3 py-2 flex items-center justify-between bg-hover text-left text-xs"><div><span class="font-semibold">${m.symbol}</span> <span class="text-[10px] text-muted">${m.type}</span><div class="text-[11px] text-muted">${m.name}</div></div><div class="text-right tabular-nums"><div class="font-semibold">${formatINR(mq.ltp)}</div><div class="${mq.changePct >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(mq.changePct)}</div></div></button>`; }).join("")}</div>` : ""}
            </div>

            <div class="flex items-center gap-1.5 shrink-0 relative">
              <select onchange="act.setTheme(this.value)" aria-label="Color theme" class="px-2 py-1 rounded-lg bg-surface border border-subtle text-[11px] font-medium text-secondary focus:outline-none focus:border-sky-500">
                <optgroup label="Light Themes">${lightThemes.map(t => `<option value="${t.id}" ${appState.theme === t.id ? 'selected' : ''}>${t.label}</option>`).join("")}</optgroup>
                <optgroup label="Dark Themes">${darkThemes.map(t => `<option value="${t.id}" ${appState.theme === t.id ? 'selected' : ''}>${t.label}</option>`).join("")}</optgroup>
              </select>

              <button onclick="act.toggleFxPopover()" aria-label="Visual effects controls" class="inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-semibold ${appState.fxEnabled ? 'border-sky-500/40 bg-sky-500/10 text-sky-500' : 'border-subtle bg-surface text-muted'}">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i><span class="hidden sm:inline">FX</span>
              </button>

              ${appState.fxPopoverOpen ? `
                <div class="absolute right-0 top-11 w-72 bg-elevated border border-strong rounded-2xl shadow-2xl p-3.5 space-y-3 z-50">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold">Gradient UI</span>
                    <button onclick="act.toggleGradient()" class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${appState.gradientUi ? 'bg-sky-500 text-white' : 'bg-surface border border-subtle text-secondary'}">${appState.gradientUi ? 'ON' : 'OFF'}</button>
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t border-subtle">
                    <span class="text-xs font-bold">Tick Flash</span>
                    <button onclick="act.toggleFx()" class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${appState.fxEnabled ? 'bg-emerald-500 text-slate-950' : 'bg-surface border border-subtle text-secondary'}">${appState.fxEnabled ? 'ON' : 'OFF'}</button>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold">Position Throb / Pulse</span>
                    <button onclick="act.togglePulse()" class="px-2.5 py-1 rounded-lg text-[11px] font-bold ${appState.fxPulse ? 'bg-sky-500 text-white' : 'bg-surface border border-subtle text-secondary'}">${appState.fxPulse ? 'ON' : 'OFF'}</button>
                  </div>
                  <div class="space-y-1">
                    <div class="flex justify-between text-[11px] text-secondary"><span>Effect Opacity (0–100%)</span><span id="fx-opacity-val" class="font-bold tabular-nums">${appState.fxOpacity}%</span></div>
                    <input type="range" min="0" max="100" step="1" value="${appState.fxOpacity}" oninput="act.setFxOpacity(this.value)" ${!appState.fxEnabled ? 'disabled' : ''} aria-label="Effect opacity slider" class="w-full accent-sky-500" />
                  </div>
                  <button onclick="act.toggleFxPopover()" class="w-full py-1.5 rounded-lg bg-surface border border-subtle text-[11px] font-semibold">Done</button>
                </div>` : ""}

              <button onclick="act.toggleFeed()" class="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-subtle text-[11px] font-medium">
                <span class="w-2 h-2 rounded-full ${appState.feedMode === 'LIVE' ? 'bg-emerald-500' : 'bg-sky-500'} animate-pulse"></span>${appState.feedMode === 'LIVE' ? 'Live' : '24/7 Sim'}
              </button>
              <button onclick="act.toggleDrawer()" aria-label="Watchlist drawer" class="p-2 rounded-lg bg-surface border border-subtle text-secondary hover:text-primary"><i data-lucide="bookmark" class="w-4 h-4"></i></button>
              <div class="hidden sm:flex flex-col items-end leading-tight tabular-nums">
                <span class="text-[10px] text-muted">${u.profile.name}</span>
                <span class="text-xs font-bold text-emerald-500">${formatINR(u.profile.balance)}</span>
              </div>
              <button onclick="act.logout()" aria-label="Sign out" class="p-2 rounded-lg bg-surface border border-subtle text-secondary hover:text-rose-500"><i data-lucide="log-out" class="w-4 h-4"></i></button>
            </div>
          </header>

          <div class="flex flex-1 min-h-0">
            <aside class="hidden md:flex w-52 shrink-0 flex-col border-r border-subtle bg-elevated p-3 gap-1">
              ${navItems.map(([id, lbl, ic]) => `<button onclick="act.nav('${id}')" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition ${appState.route === id ? 'bg-sky-500/15 text-sky-500 border border-sky-500/30 font-semibold' : 'text-secondary bg-hover hover:text-primary'}"><i data-lucide="${ic}" class="w-4 h-4"></i>${lbl}</button>`).join("")}
              <div class="mt-auto pt-3 border-t border-subtle text-[10px] text-muted tabular-nums px-2">${ist.istTime}</div>
            </aside>
            <main class="flex-1 min-w-0 p-3 md:p-5 pb-20 md:pb-6">${mainHTML}</main>
          </div>

          <nav class="md:hidden fixed bottom-0 left-0 right-0 z-40 h-16 bg-elevated/95 backdrop-blur border-t border-subtle grid grid-cols-5">
            ${[["markets","Markets","compass"],["watchlist","Watchlist","bookmark"],["trade","Trade","activity"],["portfolio","Portfolio","briefcase"],["leaderboard","More","trophy"]].map(([id, lbl, ic]) => `<button onclick="act.nav('${id}')" class="flex flex-col items-center justify-center gap-1 text-[11px] font-medium ${appState.route === id ? 'text-sky-500 font-bold' : 'text-secondary'}"><i data-lucide="${ic}" class="w-4 h-4"></i>${lbl}</button>`).join("")}
          </nav>

          ${appState.drawerOpen ? `<div class="fixed inset-0 z-50 flex justify-end bg-black/60"><div class="w-80 max-w-full bg-elevated border-l border-subtle h-full flex flex-col"><div class="p-4 border-b border-subtle flex items-center justify-between"><h2 class="font-semibold text-sm">Quick Watchlist (${u.watchlist.length})</h2><button onclick="act.toggleDrawer()" aria-label="Close drawer" class="p-1 text-secondary"><i data-lucide="x" class="w-4 h-4"></i></button></div><div class="flex-1 overflow-y-auto divide-y divide-subtle">${u.watchlist.length === 0 ? `<div class="p-6 text-center text-xs text-muted">Star instruments in Markets to track them here.</div>` : u.watchlist.map(sym => { const q = appState.quotes[sym] || { ltp: 0, changePct: 0 }; return `<button onclick="act.nav('trade','${sym}')" class="w-full px-4 py-3 flex items-center justify-between bg-hover text-xs tabular-nums ${flashClassFor(sym)}"><span class="font-semibold">${sym}</span><div class="text-right"><div class="font-bold">${formatINR(q.ltp)}</div><div class="${q.changePct >= 0 ? 'text-emerald-500' : 'text-rose-500'}">${formatPct(q.changePct)}</div></div></button>`; }).join("")}</div></div></div>` : ""}

          ${appState.mobileOrderSheet ? `<div class="lg:hidden fixed inset-0 z-50 bg-black/70 flex items-end"><div class="w-full max-h-[88vh] overflow-y-auto bg-elevated rounded-t-3xl border-t border-strong p-4"><div class="flex justify-between items-center mb-3"><span class="font-semibold text-sm">${inst.symbol} Order Ticket</span><button onclick="act.toggleMobileSheet(false)" class="text-xs text-secondary px-2 py-1">Close</button></div>${renderOrderTicketHTML(inst, activeLtp)}</div></div>` : ""}

          ${appState.confirmOrderModal ? `<div class="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"><div class="bg-elevated border border-strong rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/15 text-amber-500 text-[11px] font-semibold">Confirm Virtual Order — No Real Money</span><h3 class="text-base font-bold">${appState.oSide} ${appState.oQty} × ${inst.symbol}</h3><div class="bg-surface border border-subtle rounded-xl p-3 space-y-1.5 text-xs tabular-nums"><div class="flex justify-between"><span class="text-secondary">Order / Product</span><span>${appState.oType} · ${appState.oProduct}</span></div><div class="flex justify-between"><span class="text-secondary">Est. Execution Price</span><span>${formatINR(appState.oType === 'MARKET' ? activeLtp : appState.oType === 'LIMIT' ? Number(appState.oLimit) : Number(appState.oTrigger))}</span></div></div><div class="flex gap-2"><button onclick="act.closeConfirm()" class="flex-1 py-2.5 rounded-xl bg-surface border border-subtle text-xs font-semibold">Cancel</button><button onclick="act.confirmOrder()" class="flex-1 py-2.5 rounded-xl text-xs font-bold ${appState.oSide === 'BUY' ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white'}">Confirm Virtual ${appState.oSide}</button></div></div></div>` : ""}

          ${appState.confirmResetModal ? `<div class="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"><div class="bg-elevated border border-strong rounded-2xl max-w-md w-full p-5 space-y-4"><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/15 text-amber-500 text-[11px] font-semibold">Confirm Account Reset</span><h3 class="text-base font-bold">Reset Virtual Balance to ₹10,00,000?</h3><p class="text-xs text-secondary">This closes all open positions, cancels pending orders, and logs a RESET entry in your virtual cash ledger.</p><div class="flex gap-2"><button onclick="act.closeReset()" class="flex-1 py-2.5 rounded-xl bg-surface border border-subtle text-xs font-semibold">Cancel</button><button onclick="act.confirmReset()" class="flex-1 py-2.5 rounded-xl bg-rose-500 text-white text-xs font-bold">Yes, Reset to ₹10,00,000</button></div></div></div>` : ""}
        </div>
      `;

      if (window.lucide) lucide.createIcons();
      if (appState.route === "trade" && appState.tTab === "chart") drawCandlestickCanvas();
      renderChartJsWidgets();
    }

    render();
    startTickLoop();
