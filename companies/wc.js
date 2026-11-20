/* ==========================================================
   wc · 单公司模块（数据 + 主图标注）
   新增一家：复制本文件改名，改 id/nav/name 与数据，然后在 _order.txt 加一行
   ========================================================== */
addCompany(Object.assign({
 id:"wc", nav:"潍柴动力",
 name:"潍柴动力股份有限公司", code:"SZ: 000338 ／ HKEX: 02338",
 period:"2026年1—9月（前三季度累计）", end:"2026年9月30日", disclosed:"2026-10-29",
 basis:"中国企业会计准则 · 未经审计 · 年初至今累计", unit:"人民币亿元",
 title:"潍柴动力怎么赚钱", sub:"2026年前三季度利润表 · 单位：人民币 · 同比对比2025年前三季度",
 take:[
  {k:"经营",t:"收入 1,811.7亿元、同比 +6.2%，归母净利润 106.6亿元、同比 +20.1%；但毛利率 21.9% 与去年持平（+0.01个百分点），利润增长主要来自费用及税金下降 2.6%（少花 6.6亿元）和投资收益 17.3亿元（去年仅 3.0亿元）。"},
  {k:"现金",t:"经营现金流 102.5亿元、同比 -31.7%，其中三季度单季转为净流出 11.0亿元（Q1 -27.2亿、Q2 +140.7亿）；资本开支 36.7亿元，自由现金流 65.8亿元（计算值）。"},
  {k:"观察",t:"三季度单季收入 580.1亿元、同比 +1.0%，经营利润 48.6亿元、同比 -4.7%，增速已放缓；下季看两点：单季经营现金流能否回正，以及 KION 所在智慧物流分部的盈利修复。"}
 ],
 poster:{
  h:1300, rev:1811.71,
  nodes:[
   {id:"s0",y:318,h:16,v:41.92,parent:"__X__",fill:"ink"},
   {id:"s1",y:318,h:16,v:37.09,parent:"__X__",fill:"ink"},
   {id:"s2",y:318,h:16,v:8.82, parent:"__X__",fill:"ink"},
   {id:"s3",y:318,h:16,v:12.17,parent:"__X__",fill:"ink"},
   {id:"rev", y:470,h:64,v:1811.71,mode:"root",fill:"ink"},
   {id:"gp",  y:626,h:54,v:397.10, parent:"rev",fill:"green"},
   {id:"cost",y:626,h:54,v:1414.61,parent:"rev",fill:"red"},
   {id:"core",y:744,h:54,v:150.94, parent:"gp", fill:"green"},
   {id:"opex",y:744,h:54,v:246.16, parent:"gp", fill:"red"},
   {id:"sell",y:838,h:18,v:88.50, parent:"opex",fill:"red"},
   {id:"adm", y:838,h:18,v:81.79, parent:"opex",fill:"red"},
   {id:"rd",  y:838,h:18,v:60.04, parent:"opex",fill:"red"},
   {id:"op",  y:1000,h:50,v:160.27,mode:"left",fill:"green"},
   {id:"ptx", y:1096,h:46,v:163.04,mode:"left",fill:"green"},
   {id:"tax", y:1186,h:60,v:28.42, parent:"ptx",fill:"red"},
   {id:"ni",  y:1186,h:60,v:134.61,parent:"ptx",fill:"green"}
  ],
  links:[
   {f:"s0",t:"rev",v:41.92,k:"w"},{f:"s1",t:"rev",v:37.09,k:"w"},
   {f:"s2",t:"rev",v:8.82,k:"w"},{f:"s3",t:"rev",v:12.17,k:"w"},
   {f:"rev",t:"gp",v:397.10,k:"g"},{f:"rev",t:"cost",v:1414.61,k:"r"},
   {f:"gp",t:"core",v:150.94,k:"g"},{f:"gp",t:"opex",v:246.16,k:"r"},
   {f:"opex",t:"sell",v:88.50,k:"r"},{f:"opex",t:"adm",v:81.79,k:"r"},{f:"opex",t:"rd",v:60.04,k:"r"},
   {f:"core",t:"op",v:150.94,k:"g"},
   {f:"op",t:"ptx",v:160.27,k:"g"},
   {f:"ptx",t:"tax",v:28.42,k:"r"},{f:"ptx",t:"ni",v:134.61,k:"g"}
  ],
  cards:[{l:"毛利率",v:"21.9%",s:"毛利397.1亿（+6.3%）· 同比持平"},
         {l:"归母净利润",v:"106.6亿",s:"同比+20.1% · 扣非93.4亿(+17.1%)"},
         {l:"经营现金流",v:"102.5亿",s:"同比-31.7% · 上年同期150.1亿"}]
 },
 cash:{title:"前三季现金：经营进 102亿，投资出 72亿",
   bars:[{l:"经营活动",v:102.48},{l:"投资活动",v:-71.80},{l:"筹资活动",v:-27.87}],
   max:110,
   facts:[{i:"资本开支",b:"36.7亿元",s:"购建固定资产、无形资产等支付的现金，同比 49.9亿"},
          {i:"自由现金流（计算值）",b:"65.8亿元",s:"经营现金流102.5−资本开支36.7，公司未直接披露"},
          {i:"最大一笔现金支出",b:"投资支付802.3亿元",s:"理财产品等滚动投资，同期收回投资767.3亿元"},
          {i:"分红与利息",b:"44.6亿元",s:"分配股利、利润或偿付利息支付的现金"}],
   note:"净利润 134.6亿元 < 经营现金流 102.5亿元 → 实际经营现金流低于净利润，主因存货增加（+37.5亿元）与经营性应收增加；公告未逐项解释，此处为资产负债表变动推算。"},
 bs:[{l:"货币资金",v:"716.8亿",s:"2026年初687.1亿，+4.3%"},
     {l:"有息债务",v:"392.9亿",s:"一年内到期159.4亿；年初395.1亿"},
     {l:"净现金（货币资金−有息债务）",v:"323.9亿",s:"公司未直接披露，为计算值"},
     {l:"资产负债率",v:"64.1%",s:"总资产3,727亿；年初资产负债率63.9%"}],
 trend:[
  {l:"2025Q1",rev:574.64,opm:5.4,ocf:-46.46,fcf:-60.56},
  {l:"2025Q2",rev:556.88,opm:7.6,ocf:114.84,fcf:94.26},
  {l:"2025Q3",rev:574.19,opm:8.9,ocf:81.77,fcf:66.55},
  {l:"2026Q1",rev:625.63,opm:7.6,ocf:-27.16,fcf:-35.94},
  {l:"2026Q2",rev:606.00,opm:10.6,ocf:140.66,fcf:124.59},
  {l:"2026Q3",rev:580.08,opm:8.4,ocf:-11.01,fcf:-22.84}
 ],
 trendNote:"单季数据由累计数倒减得出（计算值）：Q1为一季报原值，Q2=半年报−一季报，Q3=三季报−半年报；2025年同法。",
 notes:[
  {h:"口径：三季报为什么不披露分部金额",b:"三季度报告只披露合并报表，不含分部数据。顶部分部行用的是 2026 年半年报的分产品对外交易收入结构占比（动力总成41.9%、智慧物流37.1%、农业装备8.8%、其他12.2%，合计1,231.6亿元），不是前三季度金额，已在图内与脚注标明。"},
  {h:"口径：经营利润 150.9 与营业利润 160.3 的差别",b:"毛利397.1 − 费用及税金246.2（销售88.5＋管理81.8＋研发60.0＋财务8.9＋税金及附加6.9）＝ 经营利润150.9（计算值，非报表科目）；再加其他净收益9.3（投资收益17.3＋其他收益4.6＋公允价值与减值-12.6）＝ 营业利润160.3（报表原值）。"},
  {h:"口径：利润总额再往下",b:"营业利润160.3 + 营业外净收益2.8（收入3.7、支出0.9）= 利润总额163.0；− 所得税28.4（税率17.4%，去年同期13.8%）= 净利润134.6；归母106.6 + 少数股东28.0 = 134.6（差0.01为四舍五入）。"},
  {h:"行业指标：发动机与新能源",b:"2026年上半年发动机销量约41.5万台，M系列大缸径发动机6,700台（+31.5%），新能源电池4.7GWh（+103%），变速箱48.1万台、车桥56.7万根。以上为公开报道汇总口径，未在季报中披露，仅作参考。"}
 ],
 src:["数据来源：潍柴动力《2026年第三季度报告》（2026年10月29日，深交所，未经审计）第5—10页：合并资产负债表、合并年初到报告期末利润表、合并现金流量表；单季数据另取自《2026年第一季度报告》（2026-04-30）与《2026年半年度报告》（2026-08-28）。",
      "三季报 PDF：disc.static.szse.cn（2026-10-30 发布）；半年报 PDF：www1.hkexnews.hk（2026-08-27 海外监管公告）。金额四舍五入至亿元。",
      "注：分部结构引自2026年半年报，前三季度分部数据未披露；标“计算值”者为倒减/推算。仅供信息参考，不构成投资建议。"]
},{
  header:{"tY":96,"subY":142,"hz":170,"note":"四大业务 · 2026上半年收入结构（占比）"},
  draw:function(t,q,rect,icon,push,co,X,F,fmt,fmt0){

    const seg=[{n:"动力总成",sh:"41.9",y:"+7.7%",ic:"engine"},{n:"智慧物流",sh:"37.1",y:"+5.8%",ic:"forklift"},
               {n:"农业装备",sh:"8.8",y:"+5.5%",ic:"tractor"},{n:"其他",sh:"12.2",y:"+27.6%",ic:"grid"}];
    seg.forEach((s,i)=>{const n=q("s"+i);icon(s.ic,n.c,204,24,F.navy);
      t(n.c,240,s.n,{size:16.5,weight:700});t(n.c,266,"占比"+s.sh+"%",{size:18,weight:700});
      t(n.c,288,"同比"+s.y,{size:12,fill:F.grey});});
    push('<text x="540" y="'+(q("rev").y+41)+'" font-size="32" font-weight="800" fill="#fff" text-anchor="middle">营业收入 '+fmt(1811.71)+'亿<tspan font-size="15" font-weight="400" fill="#cfcfcd" dx="14">同比+6.2%</tspan></text>');
    const gp=q("gp"),cost=q("cost"),core=q("core"),opex=q("opex"),sell=q("sell"),op=q("op"),ptx=q("ptx"),tax=q("tax"),ni=q("ni");
    t(gp.c,gp.y+26,"毛利 "+fmt(397.10)+"亿",{size:24,weight:800,fill:"#fff"});
    t(gp.c,gp.y+46,"毛利率21.9% · 同比持平",{size:11,fill:"#e9f4e3"});
    t(cost.s+12,cost.y+74,"营业成本（"+fmt(1414.61)+"亿）",{size:21,weight:800,anchor:"start",fill:F.redT});
    t(cost.s+12,cost.y+96,"占收入78.1% · 同比+6.2%",{size:12,anchor:"start",fill:F.redT});
    t(core.c,core.y+17,"经营利润",{size:11.5,weight:700,fill:"#fff"});
    t(core.c,core.y+34,"150.9亿",{size:16,weight:800,fill:"#fff"});
    t(core.c,core.y+46,"8.3% · +24.9%",{size:8.5,fill:"#e2f0dc"});
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+19)+'" font-size="13.5" font-weight="700" fill="#fff" text-anchor="middle">费用及税金</text>');
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+36)+'" font-size="19" font-weight="800" fill="#fff" text-anchor="middle">246.2亿</text>');
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+48)+'" font-size="9.5" fill="#fbe3e1" text-anchor="middle">13.6% · 同比-2.6%</text>');
    const rows=[{n:"销售费用",v:"88.5",y:"-10.8%",p:"4.9%"},{n:"管理费用",v:"81.8",y:"-11.2%",p:"4.5%"},{n:"研发费用",v:"60.0",y:"-2.8%",p:"3.3%"}];
    rows.forEach((r,i)=>{const y=sell.y+34+i*18;
      t(sell.s,y,r.n+" "+r.v+"亿",{size:11.5,weight:700,anchor:"start",fill:F.redT,opa:.95});
      t(sell.s+118,y,"占收入"+r.p+" · 同比"+r.y,{size:10,anchor:"start",fill:F.grey});});
    t(sell.s,sell.y+34+54,"另：财务费用8.9亿 + 税金及附加6.9亿，合计15.8亿（占收入0.9%）",{size:10,anchor:"start",fill:F.grey});
    const othX=op.e+20;
    rect(othX,op.y+6,7,7,F.green,1);
    t(othX+13,op.y+14,"其他净收益 +9.3亿",{size:12,weight:700,anchor:"start",fill:F.greenT});
    t(othX+13,op.y+31,"投资收益17.3 · 其他收益4.6",{size:9.5,anchor:"start",fill:F.grey});
    t(othX+13,op.y+45,"减值及公允价值等 -12.6",{size:9.5,anchor:"start",fill:F.grey});
    push('<text x="'+core.c.toFixed(1)+'" y="'+(op.y+19)+'" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">营业利润</text>');
    push('<text x="'+core.c.toFixed(1)+'" y="'+(op.y+38)+'" font-size="17" font-weight="800" fill="#fff" text-anchor="middle">160.3亿</text>');
    push('<text x="'+core.c.toFixed(1)+'" y="'+(op.y+48)+'" font-size="8.5" fill="#e2f0dc" text-anchor="middle">8.8% · +29.4%</text>');
    push('<text x="'+((ptx.s+ptx.e)/2).toFixed(1)+'" y="'+(ptx.y+18)+'" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">利润总额</text>');
    push('<text x="'+((ptx.s+ptx.e)/2).toFixed(1)+'" y="'+(ptx.y+36)+'" font-size="17" font-weight="800" fill="#fff" text-anchor="middle">163.0亿</text>');
    push('<text x="'+((ptx.s+ptx.e)/2).toFixed(1)+'" y="'+(ptx.y+46)+'" font-size="8.5" fill="#e2f0dc" text-anchor="middle">9.0% · +29.5%</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+22)+'" font-size="11.5" font-weight="700" fill="#fff" text-anchor="middle">净利润</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+40)+'" font-size="15" font-weight="800" fill="#fff" text-anchor="middle">134.6亿</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+52)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">7.4% +24%</text>');
    t(X[0],ni.y+ni.h+26,"所得税 28.4亿 · 税率17.4%",{size:10.5,weight:700,anchor:"start",fill:F.redT});
    t(ni.e+18,ni.y+14,"归母净利润 106.6亿",{size:13,weight:700,anchor:"start",fill:F.navy});
    t(ni.e+18,ni.y+32,"同比+20.1% · 扣非归母 93.4亿（+17.1%）",{size:10,anchor:"start",fill:F.grey});
    t(ni.e+18,ni.y+48,"少数股东损益 28.0亿（+42.0%）",{size:10,anchor:"start",fill:F.grey});
    /* 右侧三张指标卡 */
    const cw=464,chh=100,cx0=560;
    co.poster.cards.forEach((c,i)=>{const y=756+i*(chh+18);
      push('<rect x="'+cx0+'" y="'+y+'" width="'+cw+'" height="'+chh+'" rx="16" fill="'+F.ink+'"/>');
      t(cx0+cw/2,y+32,c.l,{size:16,fill:"#e8e8e4"});
      t(cx0+cw/2,y+72,c.v,{size:34,weight:800,fill:"#fff"});
      t(cx0+cw/2,y+92,c.s,{size:11.5,fill:"#b6b6b1"});});
  
  }
}));
