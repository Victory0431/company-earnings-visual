/* ==========================================================
   googl · 单公司模块（数据 + 主图标注）
   ========================================================== */
addCompany(Object.assign({
 id:"googl", nav:"Alphabet",
 name:"Alphabet Inc.", code:"NASDAQ: GOOGL / GOOG",
 period:"2026年第三季度（7—9月）", end:"2026年9月30日", disclosed:"2026-10-28",
 basis:"美国公认会计准则（US GAAP）· 未经审计 · 单季口径", unit:"亿美元",
 title:"Alphabet 怎么赚钱", sub:"2026 Q3 利润表 · 单位：美元 · 同比对比2025 Q3",
 take:[
  {k:"经营",t:"收入 1,275.8亿美元、同比 +25%（连续 13 个季度双位数增长）；经营利润 405.8亿、同比 +30%，但经营利润率 31.8%，比上季度的 34.0% 回落 2.2 个百分点——成本 +24%、研发 +36% 跑在收入前面。增量主力是 Google Cloud：307.1亿、+103%，分部经营利润 111.2亿、利润率 36.2%。"},
  {k:"现金",t:"经营现金流 422.9亿美元、同比 −13%；资本开支 513.6亿、同比 +114%，单季自由现金流 −90.7亿（计算值）。前三季合计经营现金流 1,271亿、资本开支 1,320亿，自由现金流 −48.0亿；公司 2026 年资本开支指引已上调到 1,950—2,050亿美元。"},
  {k:"观察",t:"净利润 261.7亿、同比 −25%，原因不在经营——「其他收支净额」从去年同期的 +127.6亿变成 −82.2亿（权益证券重估反转）。下季看两点：Cloud 的 103% 增速能否维持；资本开支与经营现金流的缺口（本季 51.4 vs 42.3）。"}
 ],
 poster:{
  h:1300, rev:1275.77,
  nodes:[
   {id:"s0",y:330,h:24,v:963.02,parent:"__X__",fill:"ink"},
   {id:"s1",y:330,h:24,v:307.09,parent:"__X__",fill:"ink"},
   {id:"s2",y:330,h:24,v:5.66, parent:"__X__",fill:"ink"},
   {id:"rev", y:460,h:64,v:1275.77,mode:"root",fill:"ink"},
   {id:"gp",  y:590,h:58,v:761.58,parent:"rev",fill:"green"},
   {id:"cost",y:590,h:58,v:514.19,parent:"rev",fill:"red"},
   {id:"op",  y:700,h:58,v:405.76,parent:"gp", fill:"green"},
   {id:"opex",y:700,h:58,v:355.82,parent:"gp", fill:"red"},
   {id:"ptx", y:944,h:52,v:323.55,parent:"op",fill:"green"},
   {id:"nop", y:944,h:52,v:82.21, parent:"op",fill:"red"},
   {id:"tax", y:1032,h:52,v:58.87, parent:"ptx",fill:"red"},
   {id:"ni",  y:1032,h:52,v:264.68,parent:"ptx",fill:"green"}
  ],
  links:[
   {f:"s0",t:"rev",v:963.02,k:"w"},{f:"s1",t:"rev",v:307.09,k:"w"},{f:"s2",t:"rev",v:5.66,k:"w"},
   {f:"rev",t:"gp",v:761.58,k:"g"},{f:"rev",t:"cost",v:514.19,k:"r"},
   {f:"gp",t:"op",v:405.76,k:"g"},{f:"gp",t:"opex",v:355.82,k:"r"},
   {f:"op",t:"ptx",v:323.55,k:"g"},{f:"op",t:"nop",v:82.21,k:"r"},
   {f:"ptx",t:"tax",v:58.87,k:"r"},{f:"ptx",t:"ni",v:264.68,k:"g"}
  ],
  cards:[{l:"Google Cloud 收入",v:"307.1亿",s:"同比+103% · 占总收入24%"},
         {l:"资本开支",v:"513.6亿",s:"同比+114% · 全年指引1,950—2,050亿"},
         {l:"单季自由现金流",v:"−90.7亿",s:"上年同期+244.6亿（计算值）"}]
 },
 cash:{title:"本季现金：经营进 423亿，投资出 713亿，发债补 294亿",
   bars:[{l:"经营活动",v:422.90},{l:"投资活动",v:-713.49},{l:"筹资活动",v:294.37}],
   max:800,
   facts:[{i:"资本开支",b:"513.6亿美元",s:"同比+114%；前9个月合计1,319.5亿"},
          {i:"自由现金流（计算值）",b:"−90.7亿美元",s:"422.9−513.6；公司未单列本季FCF"},
          {i:"最大一笔现金来源",b:"发债 852.2亿美元",s:"前9个月合计；长期债务从465亿升到1,251亿；报表无短期借款科目"}],
   note:"净利润 264.7亿 与经营现金流 422.9亿 的差额，主要来自折旧摊销（前9个月 219.6亿）、股权激励 233.4亿、递延所得税 330.8亿，以及权益证券未实现收益（前9个月 −1,267.6亿，即从利润里扣回的非现金收益）。"},
 bs:[{l:"现金+有价证券",v:"2,651.0亿美元",s:"现金563.3亿 + 有价证券2,087.6亿；年初1,268.4亿（+109%）"},
     {l:"长期债务",v:"1,251.0亿美元",s:"年初465.5亿；报表未设短期借款科目"},
     {l:"净现金（现金+证券−长债）",v:"1,400.0亿美元",s:"计算值；未含经营租赁负债"},
     {l:"总资产",v:"10,033.1亿美元",s:"年初5,952.8亿（+68%）；存货2.4亿→133.1亿（TPU 硬件）"}],
 trend:[
  {l:"25Q3",rev:1022.46,opm:30.5,ocf:484.14,fcf:244.61},
  {l:"25Q4",rev:1138.28,opm:31.6,ocf:524.00,fcf:246.00},
  {l:"26Q1",rev:1098.96,opm:36.1,ocf:457.59,fcf:100.61},
  {l:"26Q2",rev:1197.96,opm:34.0,ocf:391.00,fcf:-58.00},
  {l:"26Q3",rev:1275.77,opm:31.8,ocf:422.90,fcf:-90.65}
 ],
 trendNote:"单位亿美元。单季经营现金流、资本开支由累计数相减得出（25Q3/26Q1/26Q3 为计算值），25Q4 与 26Q2 用公司当期披露值；自由现金流＝经营现金流−资本开支，公司未逐季披露。",
 notes:[
  {h:"口径：三段收入含“其他”，且合计闭合",b:"Google Services 963.02 + Google Cloud 307.09 + 其他 5.66 = 1,275.77亿美元，与合并收入完全相等。这里的“其他”＝Other Bets 3.72亿 ＋ 对冲收益 1.94亿；Other Bets 收入极小但经营亏损 20.47亿，图上按净额并入，细节在下方说明。"},
  {h:"口径：毛利减三项费用就是经营利润，但中间还有一层总部费用",b:"毛利 761.58 −（研发 206.40 ＋ 销售及市场 88.04 ＋ 一般及行政 61.38 ＝ 355.82）＝ 405.76亿美元，与合并经营利润相等。注意分部利润之和不等于合并数：Services 391.57 ＋ Cloud 111.21 − Other Bets 20.47 ＝ 482.31，再减“Alphabet 层级活动”76.55，才是 405.76。"},
  {h:"净利润同比 −25%：一笔非经营的重估反转",b:"本季「其他收支净额」−82.21亿美元（上年同期 +127.59亿）。公司说明主要来自权益证券未实现损失；上一季度则是 +979.83亿的未实现收益（把 Q2 净利推到 1,121.07亿）。这项波动与经营无关，但会让净利单季剧烈起落。"},
  {h:"Google Cloud +103% 里有“卖硬件”的成分",b:"公司明确：Cloud 增长由 GCP 企业 AI 基础设施、企业 AI 方案以及核心 GCP 服务驱动，TPU 系统对外销售也是重要贡献。对应资产负债表上存货从年初 24.39亿升至 133.08亿美元。硬件销售的收入质量与利润率低于订阅/消费型服务，看增速时要分开。"},
  {h:"资本开支与自由现金流的口径",b:"本季资本开支 513.55亿＝前9个月 1,319.53 − 前6个月 805.98；经营现金流 422.90＝1,271.49 − 848.59。两者相减得 −90.65亿。公司通常在全年口径披露自由现金流，不逐季给出。"},
  {h:"债务：Alphabet 的杠杆是这轮扩张的新变量",b:"前9个月发债净流入 852.22亿（发行 852.22、偿还 88.79），长期债务余额从 465.47 升至 1,251.02亿美元；同时发行强制可转换优先股 190.34亿、普通股 428.70亿。资产负债表没有单独的短期借款科目，因此净现金为计算值。"},
  {h:"下季两个可验证问题",b:"① Cloud 增速：本季 307.1亿、+103%，Q2 时 Cloud 在手订单（backlog）5,140亿美元，跟踪订单与收入确认节奏。② 现金流缺口：本季资本开支 513.6亿 vs 经营现金流 422.9亿，全年指引 1,950—2,050亿，跟踪两者比值能否回到 1 倍以内。"}
 ],
 src:["数据来源：Alphabet Inc. Form 10-Q（截至2026年9月30日，未经审计）——合并资产负债表（第4页）、合并利润表（第5页）、合并现金流量表（第9页）：https://www.sec.gov/Archives/edgar/data/1652044/000165204426000084/goog-20260930.htm",
      "同季业绩公告与分部、产品线补充信息（2026年10月28日）：https://s206.q4cdn.com/479360582/files/doc_news/2026/Oct/28/attachments/2026q3-alphabet-earnings-release.pdf",
      "单季推算所用的上半年累计数取自 Form 10-Q（截至2026年6月30日）：https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm ；25Q4 数据取自 2025 年第四季度业绩公告。金额由百万美元折算为亿美元（÷100）后四舍五入至一位小数，标“计算值”者为推算。仅供信息参考，不构成投资建议。"]
},{
  header:{"tY":96,"subY":142,"hz":170,"note":"三段收入 963.0＋307.1＋5.7＝1,275.8亿美元（“其他”含 Other Bets 与对冲）"},
  draw:function(t,q,rect,icon,push,co,X,F,fmt,fmt0){

    icon("grid",330,196,24,F.navy);
    t(330,232,"Google Services",{size:16,weight:700});
    t(330,258,fmt(963.02)+"亿",{size:19,weight:700});
    t(330,278,"同比+10.7%",{size:12,fill:F.grey});
    t(330,296,"分部经营利润 391.6亿 · 40.7%",{size:10.5,fill:F.sub});

    icon("cloud",860,196,24,F.navy);
    t(860,232,"Google Cloud",{size:16,weight:700});
    t(860,258,fmt(307.09)+"亿",{size:19,weight:700,fill:F.greenT});
    t(860,278,"同比+103%",{size:12,fill:F.grey});
    t(860,296,"分部经营利润 111.2亿 · 36.2%",{size:10.5,fill:F.sub});

    t(1024,232,"其他 5.7亿",{size:11,weight:700,anchor:"end",fill:F.sub});
    t(1024,250,"含 Other Bets 与对冲",{size:9,anchor:"end",fill:F.grey});
    t(1024,264,"Other Bets 亏损 20.5亿",{size:9,anchor:"end",fill:F.redT});

    push('<text x="540" y="'+(q("rev").y+41)+'" font-size="32" font-weight="800" fill="#fff" text-anchor="middle">营业收入 '+fmt(co.poster.rev)+'亿美元<tspan font-size="15" font-weight="400" fill="#cfcfcd" dx="14">同比+25%</tspan></text>');

    const gp=q("gp"),cost=q("cost"),op=q("op"),opex=q("opex"),ptx=q("ptx"),nop=q("nop"),ni=q("ni"),tax=q("tax");
    t(gp.c,gp.y+27,"毛利 "+fmt(761.58)+"亿美元",{size:25,weight:800,fill:"#fff"});
    t(gp.c,gp.y+46,"毛利率59.7% · 同比+0.1pp",{size:11,fill:"#e9f4e3"});
    t(cost.s+12,cost.y+25,"成本 "+fmt(514.19)+"亿美元",{size:16,weight:800,anchor:"start",fill:"#fff"});
    t(cost.s+12,cost.y+45,"含流量获取成本 · 占收入40.3% · 同比+24%",{size:10,anchor:"start",fill:"#fbe3e1"});

    t(op.c,op.y+20,"经营利润",{size:11,weight:700,fill:"#fff"});
    t(op.c,op.y+38,fmt(405.76)+"亿",{size:16,weight:800,fill:"#fff"});
    t(op.c,op.y+51,"31.8% · +30%",{size:9,fill:"#e2f0dc"});
    push('<text x="'+(opex.c).toFixed(1)+'" y="'+(opex.y+22)+'" font-size="19" font-weight="800" fill="#fff" text-anchor="middle">三项经营费用 '+fmt(355.82)+'亿美元</text>');
    push('<text x="'+(opex.c).toFixed(1)+'" y="'+(opex.y+42)+'" font-size="11" fill="#fbe3e1" text-anchor="middle">占收入27.9% · 同比+31%（研发是主力）</text>');

    t(X[0],1112,"税率18.2%（上年20.5%）｜稀释EPS 2.12美元（上年2.87）｜净利 −25% 全部来自「其他收支」−82.2亿（上年+127.6亿）",{size:9,weight:700,anchor:"start",fill:F.navy});

    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+18)+'" font-size="10.5" font-weight="700" fill="#fff" text-anchor="middle">税前利润</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+37)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(323.55)+'亿</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+49)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">25.4% · −26%</text>');
    push('<text x="'+(nop.c).toFixed(1)+'" y="'+(nop.y+21)+'" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">其他收支</text>');
    push('<text x="'+(nop.c).toFixed(1)+'" y="'+(nop.y+37)+'" font-size="11" font-weight="800" fill="#fff" text-anchor="middle">−82.2亿</text>');
    t(nop.s,1010,"投资组合重估反转",{size:9,fill:F.redT,anchor:"start"});
    t(nop.s,1024,"上年同期 +127.6亿",{size:9,fill:F.grey,anchor:"start"});

    t(X[0]+2,tax.y+tax.h+14,"所得税 58.9亿",{size:9,fill:F.redT,weight:700,anchor:"start"});
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+20)+'" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">净利润</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+38)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(264.68)+'亿</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+49)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">20.7% · −24%</text>');

    t(664,668,"三项经营费用（亿美元）",{size:12,weight:800,anchor:"start"});
    const rows=[{n:"研发",v:"206.4",p:"16.2%",y:"+36%",c:"#c04a3e"},
                {n:"销售及市场",v:"88.0",p:"6.9%",y:"+22%",c:"#c04a3e"},
                {n:"一般及行政",v:"61.4",p:"4.8%",y:"−17%",c:"#7fb98a"}];
    rows.forEach((r,i)=>{const y=692+i*18;
      rect(664,y-7,5,5,r.c,1);
      t(676,y,r.n+" "+r.v+"亿 · 占收入"+r.p+" · 同比"+r.y,{size:10,anchor:"start",fill:F.grey});});

    t(664,760,"收入构成 · 产品线（亿美元）",{size:12,weight:800,anchor:"start"});
    t(664,778,"合计 1,275.8亿；Search 占50%、Cloud 占24%",{size:9.5,fill:F.grey,anchor:"start"});
    const pl=[["Search 及其他",633.50],["YouTube 广告",112.07],["Google Network",74.55],
              ["订阅·平台·设备",142.90],["Google Cloud",307.09],["对冲收益",1.94],["Other Bets",3.72]];
    const pmax=633.50,bx=812,bw=140;
    pl.forEach((r,i)=>{const y=800+i*29;
      t(664,y,r[0],{size:10.5,fill:F.sub,anchor:"start"});
      push('<rect x="'+bx+'" y="'+(y-9)+'" width="'+Math.max(1.5,r[1]/pmax*bw).toFixed(1)+'" height="11" rx="2" fill="#7fb98a"/>');
      t(1024,y,fmt(r[1])+"亿",{size:10.5,weight:800,anchor:"end"});});
    t(664,1010,"Search 同比+12%（查询量增速为五年来最高）· Cloud 同比+103% · Network 仅+1.4%",{size:9,fill:F.grey,anchor:"start"});

    const cw=304,cg=28;
    co.poster.cards.forEach((c,i)=>{const x=X[0]+i*(cw+cg),y=1156;
      push('<rect x="'+x+'" y="'+y+'" width="'+cw+'" height="104" rx="16" fill="'+F.ink+'"/>');
      t(x+cw/2,y+34,c.l,{size:16,fill:"#e8e8e4"});
      t(x+cw/2,y+74,c.v,{size:30,weight:800,fill:"#fff"});
      t(x+cw/2,y+94,c.s,{size:10.5,fill:"#b6b6b1"});});

  }
}));
