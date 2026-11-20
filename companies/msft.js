/* ==========================================================
   msft · 单公司模块（数据 + 主图标注）
   新增一家：复制本文件改名，改 id/nav/name 与数据，然后在 _order.txt 加一行
   ========================================================== */
addCompany(Object.assign({
 id:"msft", nav:"微软",
 name:"Microsoft Corporation", code:"NASDAQ: MSFT",
 period:"2027财年第一季度（2026年7—9月）", end:"2026年9月30日", disclosed:"2026-10-28",
 basis:"美国公认会计准则（US GAAP）· 未经审计 · 单季口径", unit:"亿美元",
 title:"微软怎么赚钱", sub:"FY2027 Q1 利润表 · 单位：美元 · 同比对比2025年7—9月季度",
 take:[
  {k:"经营",t:"收入 922.8亿美元、同比 +19%，经营利润 459.2亿美元、同比 +21%，经营利润率 49.8%（同比 +0.9个百分点）。增量几乎全在 Agents and Infra：767.9亿美元、+25%（Azure 331.7亿、+48%）；Devices and Consumer 154.8亿美元、-3%，Windows OEM 与设备收入 -22%。"},
  {k:"现金",t:"经营现金流 580.0亿美元、同比 +28.7%，但资本开支 393.7亿美元、同比 +103%，自由现金流 186.3亿美元（计算值）、上年同期 256.6亿美元；本季回购 43.8亿＋分红 67.6亿，股东回报 111.4亿美元。"},
  {k:"观察",t:"下季看两点：一是资本开支能否兑现“单季超 500亿美元、2026自然年约 1,700亿”的指引（跟踪季度 capex 与经营现金流覆盖倍数）；二是 Azure 48% 的增速在第三方产能延迟缓解后能否再加速（跟踪 Azure 收入与商业 RPO 677亿美元、+73%）。"}
 ],
 poster:{
  h:1220, rev:922.79,
  nodes:[
   {id:"s0",y:340,h:22,v:767.95,parent:"__X__",fill:"ink"},
   {id:"s1",y:340,h:22,v:154.84,parent:"__X__",fill:"ink"},
   {id:"rev", y:460,h:64,v:922.79,mode:"root",fill:"ink"},
   {id:"gp",  y:590,h:58,v:625.59,parent:"rev",fill:"green"},
   {id:"cost",y:590,h:58,v:297.20,parent:"rev",fill:"red"},
   {id:"op",  y:690,h:58,v:459.15,parent:"gp", fill:"green"},
   {id:"opex",y:690,h:58,v:166.44,parent:"gp", fill:"red"},
   {id:"ptx", y:890,h:44,v:459.53,mode:"left",fill:"green"},
   {id:"tax", y:980,h:52,v:93.24, parent:"ptx",fill:"red"},
   {id:"ni",  y:980,h:52,v:366.29,parent:"ptx",fill:"green"}
  ],
  links:[
   {f:"s0",t:"rev",v:767.95,k:"w"},{f:"s1",t:"rev",v:154.84,k:"w"},
   {f:"rev",t:"gp",v:625.59,k:"g"},{f:"rev",t:"cost",v:297.20,k:"r"},
   {f:"gp",t:"op",v:459.15,k:"g"},{f:"gp",t:"opex",v:166.44,k:"r"},
   {f:"op",t:"ptx",v:459.15,k:"g"},
   {f:"ptx",t:"tax",v:93.24,k:"r"},{f:"ptx",t:"ni",v:366.29,k:"g"}
  ],
  cards:[{l:"Azure 收入",v:"331.7亿",s:"同比+48% · 占总收入36%"},
         {l:"Microsoft Cloud",v:"639亿",s:"同比+30% · 占总收入69%"},
         {l:"资本开支",v:"393.7亿",s:"同比+103% · 自由现金流186.3亿"}]
 },
 cash:{title:"本季现金：经营进 580亿美元，资本开支出 394亿",
   bars:[{l:"经营活动",v:580.00},{l:"投资活动",v:-419.65},{l:"筹资活动",v:-166.40}],
   max:600,
   facts:[{i:"资本开支",b:"393.7亿美元",s:"同比+103%，相当于经营现金流的68%；CFO 电话会口径452亿含融资租赁"},
          {i:"自由现金流（计算值）",b:"186.3亿美元",s:"经营现金流−资本开支；上年同期256.6亿，同比-27.4%"},
          {i:"最大一笔现金支出",b:"投资活动净流出419.7亿",s:"其中购置固定资产393.7亿；投资买卖净额仅+4.3亿"},
          {i:"股东回报",b:"回购43.8亿＋分红67.6亿",s:"合计111.4亿；另偿还债务48.5亿"}],
   note:"净利润 366.3亿 < 经营现金流 580.0亿：差额主要来自折旧摊销111.4亿、股权激励31.3亿、递延所得税46.1亿等非现金项目，另应收账款减少171.0亿（上年同期164.9亿）贡献现金。"},
 bs:[{l:"现金及现金等价物",v:"202.8亿美元",s:"6月末209.4亿；另有短期投资442.3亿"},
     {l:"现金及短期投资",v:"645.1亿美元",s:"6月末768.4亿，-16.0%（用于资本开支与回报）"},
     {l:"有息债务",v:"354.8亿美元",s:"一年内到期43.9亿／6月末402.9亿"},
     {l:"净现金（现金+短期投资−债务）",v:"290.3亿美元",s:"公司未直接披露，为计算值"}],
 trend:[
  {l:"FY26Q1",rev:776.73,opm:48.9,ocf:450.57,fcf:256.63},
  {l:"FY26Q2",rev:812.73,opm:47.1,ocf:357.58,fcf:58.82},
  {l:"FY26Q3",rev:828.86,opm:46.3,ocf:466.79,fcf:158.03},
  {l:"FY26Q4",rev:900.07,opm:45.1,ocf:554.41,fcf:196.39},
  {l:"FY27Q1",rev:922.79,opm:49.8,ocf:580.00,fcf:186.33}
 ],
 trendNote:"FY26Q1—FY27Q1 五个季度；单位为亿美元。经营利润率＝经营利润/收入。自由现金流＝经营现金流−资本开支（计算值，现金流量表口径）。",
 notes:[
  {h:"口径：分部只有两个，产品线在右侧单列",b:"微软自 FY2027 起调整分部，改为 Agents and Infra（767.95亿美元，+25%）与 Devices and Consumer（154.84亿美元，-3%），历史数已按新分部重列。桑基顶部按新分部画；右栏 8 条产品线（Azure 331.65、M365云 277.78、生产力与服务器授权 84.07、搜索与广告 65.54、Xbox 53.79、行业方案 53.37、Windows OEM与设备 35.51、前沿与支持 21.08）合计 922.79亿美元，与合并收入完全闭合。"},
  {h:"口径：毛利−经营费用＝经营利润",b:"毛利 625.59 − 经营费用 166.44（研发90.47＋销售及市场57.16＋一般及行政18.81）＝ 459.15亿美元，与报表经营利润一致，不存在“其他收益冲抵”项。毛利率 67.8%（同比 -1.3个百分点），公司解释为 AI 基础设施上量与 AI 功能使用增加。"},
  {h:"GAAP 与 non-GAAP：OpenAI 投资影响",b:"GAAP 净利 366.29亿美元；剔除 OpenAI 投资影响后 non-GAAP 净利 364.22亿美元（影响 -2.07亿，即本季为净收益，剔除后略低）。上年同期 GAAP 277.47亿、non-GAAP 308.33亿（含 31亿投资损失）。图中主链条一律用 GAAP，non-GAAP 只在此处标注。"},
  {h:"资本开支与自由现金流的两个口径",b:"报表（现金流量表）：本季“Additions to property and equipment”393.67亿美元。CFO 在电话会提到的 452亿美元含融资租赁资产增加，属另一口径。公司不在公告中定义自由现金流，本页按“经营现金流−资本开支”推算 186.33亿美元，并标注为计算值。"},
  {h:"折旧年限变更：影响未来可比性",b:"公司公告 FY2027 起将数据中心与办公楼折旧年限由 15 年延长至 25 年，并把部分新增产能改为经营租赁。这会在后续季度压低折旧、抬高经营利润，同时资本开支口径上移（FY27 指引约1,750亿美元），跨期比较需注意。"},
  {h:"下季两个可验证问题",b:"① Azure 能否守住 48% 以上：跟踪下季 Azure 收入同比与商业 RPO（本季 677亿美元、+73%）。② 资本开支是否兑现“单季超500亿”：跟踪季度 capex、经营现金流/capex 覆盖倍数（本季 1.47 倍，FY26Q2 曾低至 1.20 倍）。"}
 ],
 src:["数据来源：Microsoft Corporation 8-K（2026年10月28日）及附件 99.1《Microsoft Announces First Quarter Results》——利润表、资产负债表（2026-09-30 vs 2026-06-30）、现金流量表、分部与产品线收入表：https://microsoft.gcs-web.com/node/35411/html",
      "同季 10-Q（截至2026年9月30日，未经审计）：https://microsoft.gcs-web.com/static-files/f84ad3d9-6d9c-4c63-9163-2f5d954f15f7；趋势数据取自 FY26 Q2/Q3/Q4 各季业绩公告的现金流量表（microsoft.com/en-us/investor/earnings/fy-2026-q2、-q3、-q4）。",
      "金额由报表的百万美元折算为亿美元（÷100）后四舍五入至一位小数。标“计算值”者为推算。仅供信息参考，不构成投资建议。"]
},{
  header:{"tY":96,"subY":142,"hz":170,"note":"两大分部收入 922.8亿美元 · FY2027 起新分部口径"},
  draw:function(t,q,rect,icon,push,co,X,F,fmt,fmt0){

    /* 微软：FY27 新分部（2 个）+ 右栏 8 条产品线 */
    const seg=[{n:"Agents and Infra",v:767.95,vv:"+25%",oi:"经营利润 405.6亿 · 利润率 52.8%",sub:"Azure 331.7亿（+48%）· M365云 277.8亿（+17%）",ic:"cloud"},
               {n:"Devices and Consumer",v:154.84,vv:"-3%",oi:"经营利润 53.6亿 · 利润率 34.6%",sub:"搜索 +10% · Xbox -2% · Windows -22%",ic:"grid"}];
    seg.forEach((s,i)=>{
      const n=q("s"+i);
      icon(s.ic,n.c,196,24,F.navy);
      t(n.c,232,s.n,{size:i===0?16.5:13.5,weight:700});
      t(n.c,258,fmt0(s.v)+"亿美元",{size:19,weight:700});
      t(n.c,278,"同比"+s.vv,{size:12,fill:F.grey});
      t(n.c,296,s.oi,{size:10.5,fill:F.sub});
      t(n.c,312,s.sub,{size:9.5,fill:F.grey});
    });
    push('<text x="540" y="'+(q("rev").y+41)+'" font-size="32" font-weight="800" fill="#fff" text-anchor="middle">营业收入 '+fmt(co.poster.rev)+'亿美元<tspan font-size="15" font-weight="400" fill="#cfcfcd" dx="14">同比+19%</tspan></text>');
    const gp=q("gp"),cost=q("cost"),op=q("op"),opex=q("opex"),ptx=q("ptx"),tax=q("tax"),ni=q("ni");
    t(gp.c,gp.y+28,"毛利 "+fmt(625.59)+"亿美元",{size:26,weight:800,fill:"#fff"});
    t(gp.c,gp.y+48,"毛利率67.8% · 同比-1.3pp",{size:11.5,fill:"#e9f4e3"});
    t(cost.s+12,cost.y+25,"营业成本 "+fmt(297.20)+"亿美元",{size:16,weight:800,anchor:"start",fill:"#fff"});
    t(cost.s+12,cost.y+45,"占收入32.2% · 同比+23.6% · AI基建上量",{size:10,anchor:"start",fill:"#fbe3e1"});
    t(op.c,op.y+24,"经营利润 "+fmt(459.15)+"亿美元",{size:22,weight:800,fill:"#fff"});
    t(op.c,op.y+44,"利润率49.8% · 同比+0.9pp",{size:11.5,fill:"#e2f0dc"});
    t(opex.c,opex.y+20,"经营费用 "+fmt(166.44),{size:13.5,weight:800,fill:"#fff"});
    t(opex.c,opex.y+36,"占收入18.0%",{size:10,fill:"#fbe3e1"});
    t(opex.c,opex.y+50,"同比+6.2%",{size:9.5,fill:"#f7dedb"});
    /* 费用明细（左侧列表） */
    const rows=[{n:"研发",v:"90.5",p:"9.8%",y:"+11.1%"},{n:"销售及市场",v:"57.2",p:"6.2%",y:"持平"},
                {n:"一般及行政",v:"18.8",p:"2.0%",y:"+4.2%"},{n:"经营费用合计",v:"166.4",p:"18.0%",y:"+6.2%"}];
    rows.forEach((r,i)=>{const y=806+i*18;
      rect(X[0],y-7,5,5,r.n==="经营费用合计"?F.red:F.redT,1);
      t(X[0]+12,y,r.n+" "+r.v+"亿 · 占收入"+r.p+" · 同比"+r.y,{size:10.5,anchor:"start",fill:i===3?F.redT:F.grey});});
    /* 其他收益 & 所得税 */
    t(X[0],956,"＋其他收益净额 0.4亿美元（上年 -36.6亿，含 OpenAI 投资损失）· EPS 4.92美元、non-GAAP 4.89",{size:9.5,anchor:"start",fill:F.sub});
    push('<text x="'+(ptx.c).toFixed(1)+'" y="'+(ptx.y+28)+'" font-size="19" font-weight="800" fill="#fff" text-anchor="middle">税前利润 '+fmt(459.53)+'亿美元<tspan font-size="11.5" font-weight="400" fill="#e7f3e1" dx="9">同比+34% · 其他收益+0.4</tspan></text>');
    push('<text x="'+tax.c.toFixed(1)+'" y="'+(tax.y+22)+'" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">所得税</text>');
    push('<text x="'+tax.c.toFixed(1)+'" y="'+(tax.y+40)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(93.24)+'亿</text>');
    t(tax.c,tax.y+tax.h+24,"税率20.3% · 上年19.1%",{size:10,weight:700,fill:F.redT});
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+24)+'" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">净利润 '+fmt(366.29)+'亿美元</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+42)+'" font-size="10.5" fill="#e7f3e1" text-anchor="middle">净利率39.7% · 同比+4.0pp</text>');
    /* 右栏：8 条产品线 */
    t(560,776,"收入构成 · 8 条产品线（亿美元）",{size:12.5,weight:800,anchor:"start"});
    t(560,794,"合计 922.8亿；Azure 占36%（+48%）、M365云 占30%（+17%）",{size:9.5,fill:F.grey,anchor:"start"});
    const pl=[["Azure",331.65],["Microsoft 365 云",277.78],["生产力与服务器授权",84.07],["搜索与广告",65.54],
              ["Xbox",53.79],["行业方案",53.37],["Windows OEM与设备",35.51],["前沿与支持",21.08]];
    const pmax=331.65,bx=706,bw=200;
    pl.forEach((r,i)=>{const y=824+i*29;
      t(560,y,r[0],{size:10.5,fill:F.sub,anchor:"start"});
      push('<rect x="'+bx+'" y="'+(y-9)+'" width="'+Math.max(1.5,r[1]/pmax*bw).toFixed(1)+'" height="11" rx="2" fill="#7fb98a"/>');
      t(1024,y,fmt(r[1])+"亿",{size:10.5,weight:800,anchor:"end"});});
    t(560,1046,"收缩项只有两个：Windows OEM与设备 -22%、Xbox -2%",{size:9.5,fill:F.grey,anchor:"start"});
    /* 三张指标卡 */
    const cw=304,cg=28;
    co.poster.cards.forEach((c,i)=>{const x=X[0]+i*(cw+cg),y=1090;
      push('<rect x="'+x+'" y="'+y+'" width="'+cw+'" height="104" rx="16" fill="'+F.ink+'"/>');
      t(x+cw/2,y+34,c.l,{size:16,fill:"#e8e8e4"});
      t(x+cw/2,y+74,c.v,{size:32,weight:800,fill:"#fff"});
      t(x+cw/2,y+94,c.s,{size:10.5,fill:"#b6b6b1"});});
  
  }
}));
