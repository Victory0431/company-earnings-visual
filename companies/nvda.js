/* ==========================================================
   nvda · 单公司模块（数据 + 主图标注）
   ========================================================== */
addCompany(Object.assign({
 id:"nvda", nav:"英伟达",
 name:"NVIDIA Corporation", code:"NASDAQ: NVDA",
 period:"FY2027 第三季度（2026年8—10月）", end:"2026年10月25日", disclosed:"2026-11-17",
 basis:"美国公认会计准则（US GAAP）· 未经审计 · 单季口径", unit:"亿美元",
 title:"英伟达 怎么赚钱", sub:"FY2027 Q3 利润表 · 单位：美元 · 同比对比 FY2026 Q3",
 take:[
  {k:"经营",t:"收入 1,158.4亿美元、同比 +103%、环比 +20%；数据中心 1,076亿、+110%（环比 +21%），边缘计算（原游戏等）82亿、+42%。毛利率 74.8%（同比 +1.4pp），经营利润率 66.9%，净利 652.9亿、+105%。Vera Rubin NVL72 已开始出货，公司称是史上最快的一次产品爬坡。"},
  {k:"现金",t:"经营现金流 482.5亿、自由现金流 437.8亿——资本开支只有 44.2亿，这是典型的轻资产模型；但应收 810.3亿（年初 384.7亿）、存货 397.2亿，收入翻倍把营运资本一起放大。本季回购 221.2亿、分红 60.3亿，合计返还 281亿，回购授权再增 1,500亿。"},
  {k:"观察",t:"Q4 指引收入 1,300亿美元（含额外一周、且完全不含中国数据中心收入），但毛利率指引降到 71—72%，比本季 74.8% 低约 3 个百分点——Rubin 爬坡的初期成本与产品结构变化。下季看两件事：毛利率能否守住 71%，以及应收增速是否继续快于收入。"}
 ],
 poster:{
  h:1300, rev:1158.44,
  nodes:[
   {id:"s0",y:330,h:24,v:1076.44,parent:"__X__",fill:"ink"},
   {id:"s1",y:330,h:24,v:82.00,  parent:"__X__",fill:"ink"},
   {id:"rev", y:460,h:64,v:1158.44,mode:"root",fill:"ink"},
   {id:"gp",  y:590,h:58,v:866.76,parent:"rev",fill:"green"},
   {id:"cost",y:590,h:58,v:291.68,parent:"rev",fill:"red"},
   {id:"op",  y:700,h:58,v:775.20,parent:"gp", fill:"green"},
   {id:"opex",y:700,h:58,v:91.56, parent:"gp", fill:"red"},
   {id:"ptx", y:944,h:52,v:790.17,parent:"op", fill:"green"},
   {id:"tax", y:1032,h:52,v:137.30,parent:"ptx",fill:"red"},
   {id:"ni",  y:1032,h:52,v:652.87,parent:"ptx",fill:"green"}
  ],
  links:[
   {f:"s0",t:"rev",v:1076.44,k:"w"},{f:"s1",t:"rev",v:82.00,k:"w"},
   {f:"rev",t:"gp",v:866.76,k:"g"},{f:"rev",t:"cost",v:291.68,k:"r"},
   {f:"gp",t:"op",v:775.20,k:"g"},{f:"gp",t:"opex",v:91.56,k:"r"},
   {f:"op",t:"ptx",v:775.20,k:"g"},
   {f:"ptx",t:"tax",v:137.30,k:"r"},{f:"ptx",t:"ni",v:652.87,k:"g"}
  ],
  cards:[{l:"数据中心收入",v:"1,076亿",s:"同比+110% · 环比+21%"},
         {l:"毛利率",v:"74.8%",s:"Q4指引 71—72%"},
         {l:"单季自由现金流",v:"437.8亿",s:"经营现金流482.5亿 · 资本开支仅44.2亿"}]
 },
 cash:{title:"本季现金：经营进 483亿，投资出 107亿，回购分红出 309亿",
   bars:[{l:"经营活动",v:482.53},{l:"投资活动",v:-107.39},{l:"筹资活动",v:-308.68}],
   max:520,
   facts:[{i:"资本开支",b:"44.2亿美元",s:"占收入3.8%；轻资产，产能主要靠供应商"},
          {i:"股权回购 + 分红",b:"281.5亿美元",s:"回购221.2亿、分红60.3亿；授权再增1,500亿"},
          {i:"现金净增",b:"66.5亿美元",s:"期末现金290.9亿；另有权益证券442.2亿"}],
   note:"经营现金流 482.5亿 低于净利润 652.9亿，主要因为应收账款增加 180.5亿、存货增加 81.5亿——收入在四个季度里翻倍，营运资本被同步放大。这部分不是收不回来，而是账期与备货的时间差。"},
 bs:[{l:"现金+证券",v:"977.3亿美元",s:"现金290.9 + 债务证券244.2 + 权益证券442.2；年初625.6亿"},
     {l:"债务",v:"323.7亿美元",s:"全部为长期债务；年初84.7亿（含短期10.0亿）"},
     {l:"净现金",v:"653.6亿美元",s:"计算值（现金及证券−债务）"},
     {l:"总资产 / 股东权益",v:"3,722亿 / 2,667亿",s:"年初2,068.0亿 / 1,572.9亿；应收810.3亿、存货397.2亿"}],
 trend:[
  {l:"FY26Q3",rev:570.06,opm:63.2,ocf:237.50,fcf:220.89},
  {l:"FY27Q1",rev:816.37,opm:65.6,ocf:503.45,fcf:485.54},
  {l:"FY27Q2",rev:962.00,opm:66.3,ocf:240.77,fcf:213.41},
  {l:"FY27Q3",rev:1158.44,opm:66.9,ocf:482.53,fcf:437.77}
 ],
 trendNote:"单位亿美元。FY27Q1 的经营现金流、经营利润、资本开支由前三季累计数减去 Q2、Q3 得出（计算值）；FY27Q2 用公司披露值；自由现金流＝经营现金流−购置物业设备及无形资产−相关本金支付，与公司口径一致。",
 notes:[
  {h:"口径：只有两段，合计闭合",b:"数据中心 1,076亿 ＋ 边缘计算 82亿 ＝ 1,158亿美元，与合并收入一致（差额 0.4亿为四舍五入）。注意公司已把原来的「游戏」业务并入「边缘计算（Edge Computing）」，PC、汽车、机器人都在这一段里。"},
  {h:"口径：毛利率高到可以让费用几乎不影响结果",b:"收入 1,158.44 − 成本 291.68 ＝ 毛利 866.76（74.8%）→ 减研发 74.54、销售及管理 17.02 ＝ 经营利润 775.20（66.9%）→ 加其他收入 14.97 ＝ 税前 790.17 → 减税 137.30 ＝ 净利 652.87。图上「税前利润」条比「经营利润」宽约 2%，就是这 15亿其他收入。"},
  {h:"为什么 Q4 毛利率指引要降 3 个百分点",b:"本季 74.8%，Q4 指引 71—72%。公司口径：Vera Rubin 处于爬坡初期，新产品导入期的良率与产品结构会压毛利；Q4 还多一个额外周（53 周财年）。这不是需求问题，是产品切换的成本问题——历史上每次大世代切换都出现过。"},
  {h:"应收 810亿、存货 397亿：这不是坏账，是规模",b:"应收从年初 384.7亿增至 810.3亿（+111%），存货从 214.0亿增至 397.2亿（+86%），两者增速都快于收入（9 个月 +99%）。OCF 482.5亿 低于净利 652.9亿，差额 170.4亿几乎全部由这两项占用造成。看这家的现金流，必须先看营运资本。"},
  {h:"用现金买生态：投资比资本开支大得多",b:"本季购买权益证券 157.0亿、投资活动净流出 107.4亿；非流动证券从 222.5亿增至 655.3亿。也就是说，公司把大笔现金变成了对 AI 生态公司的股权（含对客户的战略投资），而不是买设备。这类资产的公允价值波动会进「其他收入」。"},
  {h:"Q4 指引的括号很重要",b:"收入 1,300亿美元 ±3%，公司明确「不含来自中国的数据中心计算收入」，且包含一个额外周。也就是说，这份指引完全没有把中国市场算进去。毛利率 71—72%、经营费用 110亿（GAAP）。"},
  {h:"下季两个可验证问题",b:"① 毛利率：71—72% 是底线还是起点？若 Rubin 爬坡顺利，FY28 应回升；若继续下探，说明定价或成本结构变差。② 应收：810.3亿对应约 63 天账期，若下季应收增速继续快于收入，需要确认是客户结构变化还是回款变慢。"}
 ],
 src:["数据来源：NVIDIA 2026年11月17日业绩公告（Form 8-K 附件 99.1，含利润表、资产负债表、现金流量表与 GAAP 到 non-GAAP 调整表）：https://www.sec.gov/Archives/edgar/data/1045810/000104581026000088/q3fy27pr.htm",
      "同季 CFO 评论（分部、区域与运营指标）：https://www.sec.gov/Archives/edgar/data/1045810/000104581026000088/q3fy27cfocommentary.htm",
      "上季完整报表（Form 10-Q，截至2026年7月26日）：https://www.sec.gov/Archives/edgar/data/1045810/000104581026000075/nvda-20260726.htm 。金额由百万美元折算为亿美元（÷100）后四舍五入至一位小数，标「计算值」者为推算。仅供信息参考，不构成投资建议。"]
},{
  header:{"tY":96,"subY":142,"hz":170,"note":"两段收入 1,076＋82＝1,158亿美元（原「游戏」已并入边缘计算）"},
  draw:function(t,q,rect,icon,push,co,X,F,fmt,fmt0){

    icon("chip",506,196,24,F.navy);
    t(506,232,"数据中心 Data Center",{size:16,weight:700});
    t(506,258,fmt(1076.44)+"亿",{size:19,weight:700});
    t(506,278,"同比+110% · 环比+21% · 占收入93%",{size:12,fill:F.grey});
    t(506,296,"Vera Rubin NVL72 已出货 · Anthropic/Meta/OpenAI 扩容",{size:10.5,fill:F.sub});

    t(994,232,"边缘计算 82.0亿",{size:14,weight:700,anchor:"end"});
    t(994,252,"同比+42% · 环比+14%",{size:10,anchor:"end",fill:F.grey});
    t(994,268,"PC·汽车·机器人（原游戏业务）",{size:9,anchor:"end",fill:F.grey});

    push('<text x="540" y="'+(q("rev").y+41)+'" font-size="32" font-weight="800" fill="#fff" text-anchor="middle">营业收入 '+fmt(co.poster.rev)+'亿美元<tspan font-size="15" font-weight="400" fill="#cfcfcd" dx="14">同比+103%</tspan></text>');

    const gp=q("gp"),cost=q("cost"),op=q("op"),opex=q("opex"),ptx=q("ptx"),ni=q("ni"),tax=q("tax");
    t(gp.c,gp.y+27,"毛利 "+fmt(866.76)+"亿美元",{size:25,weight:800,fill:"#fff"});
    t(gp.c,gp.y+46,"毛利率74.8% · 同比+1.4pp",{size:11,fill:"#e9f4e3"});
    t(cost.s+10,cost.y+25,"成本 "+fmt(291.68)+"亿美元",{size:15,weight:800,anchor:"start",fill:"#fff"});
    t(cost.s+10,cost.y+45,"占收入25.2% · 同比+92%",{size:9.5,anchor:"start",fill:"#fbe3e1"});

    t(op.c,op.y+20,"经营利润",{size:11,weight:700,fill:"#fff"});
    t(op.c,op.y+38,fmt(775.20)+"亿",{size:16,weight:800,fill:"#fff"});
    t(op.c,op.y+51,"66.9% · +115%",{size:9,fill:"#e2f0dc"});

    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+22)+'" font-size="8.5" font-weight="700" fill="#fff" text-anchor="middle">经营费用</text>');
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+40)+'" font-size="11" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(91.56)+'亿</text>');
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+52)+'" font-size="7.5" fill="#fbe3e1" text-anchor="middle">研74.5/管17.0</text>');

    t(X[0],1112,"税率17.4%（上年15.9%）｜稀释EPS 2.70美元（上年1.30）｜其他收入+15.0亿（含权益证券重估）｜前三季净利1,833.0亿",{size:9,weight:700,anchor:"start",fill:F.navy});

    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+18)+'" font-size="10.5" font-weight="700" fill="#fff" text-anchor="middle">税前利润</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+37)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(790.17)+'亿</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+50)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">68.2% · +108%（含其他收入15.0）</text>');

    push('<text x="'+tax.c.toFixed(1)+'" y="'+(tax.y+17)+'" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">所得税</text>');
    push('<text x="'+tax.c.toFixed(1)+'" y="'+(tax.y+33)+'" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(137.30)+'亿</text>');
    push('<text x="'+tax.c.toFixed(1)+'" y="'+(tax.y+46)+'" font-size="8.5" fill="#fbe3e1" text-anchor="middle">税率17.4%</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+20)+'" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">净利润</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+38)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(652.87)+'亿</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+49)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">56.4% · +105%</text>');

    t(742,770,"规模带来的三个副作用（亿美元）",{size:12,weight:800,anchor:"start"});
    const kpi=[["应收账款","810.3","年初384.7（+111%）"],
               ["存货","397.2","年初214.0（+86%）"],
               ["非流动权益证券","655.3","年初222.5（买AI生态股权）"],
               ["本季回购+分红","281.5","授权再增1,500亿"]];
    kpi.forEach((r,i)=>{const y=796+i*32;
      t(742,y,r[0],{size:10,fill:F.sub,anchor:"start"});
      t(900,y,r[1],{size:14,weight:800,anchor:"end"});
      t(1024,y,r[2],{size:8.5,fill:F.grey,anchor:"end"});});
    t(742,1010,"下季指引：收入1,300亿（不含中国数据中心）· 毛利率71—72%",{size:9.5,weight:700,anchor:"start",fill:F.redT});
    t(742,1026,"现金转化：OCF 482.5 − 净利 652.9 ＝ −170.4（应收+存货占用）",{size:9,fill:F.grey,anchor:"start"});

    const cw=304,cg=28;
    co.poster.cards.forEach((c,i)=>{const x=X[0]+i*(cw+cg),y=1156;
      push('<rect x="'+x+'" y="'+y+'" width="'+cw+'" height="104" rx="16" fill="'+F.ink+'"/>');
      t(x+cw/2,y+34,c.l,{size:16,fill:"#e8e8e4"});
      t(x+cw/2,y+74,c.v,{size:30,weight:800,fill:"#fff"});
      t(x+cw/2,y+94,c.s,{size:10.5,fill:"#b6b6b1"});});

  }
}));
