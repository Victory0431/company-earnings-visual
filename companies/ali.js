/* ==========================================================
   ali · 单公司模块（数据 + 主图标注）
   新增一家：复制本文件改名，改 id/nav/name 与数据，然后在 _order.txt 加一行
   ========================================================== */
addCompany(Object.assign({
 id:"ali", nav:"阿里巴巴",
 name:"阿里巴巴集团控股有限公司", code:"NYSE: BABA ／ HKEX: 9988",
 period:"2026年7—9月季度（FY2027 第二财季）", end:"2026年9月30日", disclosed:"2026-11-19",
 basis:"美国公认会计准则（US GAAP）· 未经审计 · 单季口径", unit:"人民币亿元",
 title:"阿里巴巴怎么赚钱", sub:"2026年9月季度利润表 · 单位：人民币 · 同比对比2025年9月季度",
 take:[
  {k:"经营",t:"收入 2,715.2亿元、同比 +10%；经营利润 291.2亿元、同比 +443%，经营利润率回到 10.7%。增量最猛的是 AI 云与算力：收入 609.7亿元、同比 +53%，分部 EBITA 88.4亿元、利润率升到 14.5%。"},
  {k:"现金",t:"经营现金流 156.9亿元、同比 +55%，但资本开支 504.8亿元（同比 +60%，AI 基础设施为主），自由现金流净流出 344.7亿元；期末现金及流动投资 4,879.3亿元，有息债务 2,564.0亿元。"},
  {k:"观察",t:"两件事决定下季：AI 云外部客户经常性收入 +67% 的增速能不能延续；淘宝闪购（即时零售）亏损收窄的斜率——分部 EBITA 已同比 +243%。"}
 ],
 poster:{
  h:1490, rev:2715.19,
  nodes:[
   {id:"s0",y:340,h:18,v:1972.37,parent:"__X__",fill:"ink"},
   {id:"s1",y:340,h:18,v:609.73, parent:"__X__",fill:"ink"},
   {id:"s2",y:340,h:18,v:44.35,  parent:"__X__",fill:"ink"},
   {id:"s3",y:340,h:18,v:277.14, parent:"__X__",fill:"ink"},
   {id:"rev", y:500,h:64,v:2715.19,mode:"root",fill:"ink"},
   {id:"gp",  y:672,h:60,v:1030.43,parent:"rev",fill:"green"},
   {id:"cost",y:672,h:60,v:1684.76,parent:"rev",fill:"red"},
   {id:"op",  y:818,h:60,v:291.16, parent:"gp", fill:"green"},
   {id:"opex",y:818,h:60,v:747.26, parent:"gp", fill:"red"},
   {id:"sm",  y:930,h:18,v:413.41, parent:"opex",fill:"red"},
   {id:"rd",  y:930,h:18,v:226.32, parent:"opex",fill:"red"},
   {id:"ga",  y:930,h:18,v:100.97, parent:"opex",fill:"red"},
   {id:"inv", y:950,h:32,v:724.30, mode:"free",s:600,fill:"green"},
   {id:"ptx", y:1084,h:46,v:1015.46,mode:"left",fill:"green"},
   {id:"tax", y:1202,h:56,v:371.26, parent:"ptx",fill:"red"},
   {id:"ni",  y:1202,h:56,v:644.20, parent:"ptx",fill:"green"}
  ],
  links:[
   {f:"s0",t:"rev",v:1972.37,k:"w"},{f:"s1",t:"rev",v:609.73,k:"w"},
   {f:"s2",t:"rev",v:44.35,k:"w"},{f:"s3",t:"rev",v:277.14,k:"w"},
   {f:"rev",t:"gp",v:1030.43,k:"g"},{f:"rev",t:"cost",v:1684.76,k:"r"},
   {f:"gp",t:"op",v:291.16,k:"g"},{f:"gp",t:"opex",v:747.26,k:"r"},
   {f:"opex",t:"sm",v:413.41,k:"r"},{f:"opex",t:"rd",v:226.32,k:"r"},{f:"opex",t:"ga",v:100.97,k:"r"},
   {f:"op",t:"ptx",v:291.16,k:"g"},{f:"inv",t:"ptx",v:724.30,k:"g"},
   {f:"ptx",t:"tax",v:371.26,k:"r"},{f:"ptx",t:"ni",v:644.20,k:"g"}
  ],
  cards:[{l:"经调整EBITA",v:"326亿",s:"同比+260% · 利润率12.0%"},
         {l:"资本开支",v:"505亿",s:"同比+60% · AI基础设施"},
         {l:"非GAAP净利润",v:"199亿",s:"同比+92% · 剔除投资损益"}]
 },
 cash:{title:"本季现金：经营进 157亿，资本开支出 505亿",
   bars:[{l:"经营活动",v:156.90},{l:"投资活动",v:-198.31},{l:"筹资活动",v:526.95}],
   max:530,
   facts:[{i:"资本开支",b:"504.8亿元",s:"同比+60%，主要用于云与AI基础设施"},
          {i:"自由现金流（公司口径）",b:"-344.7亿元",s:"上年同期-218.4亿元；经营现金流−资本开支=−347.9亿元（计算值）"},
          {i:"最大一笔现金来源",b:"筹资净流入527.0亿元",s:"公告合并现金流量表口径，未拆分借款/票据明细"},
          {i:"汇率影响",b:"-12.8亿元",s:"外币折算对现金及受限资金的影响"}],
   note:"净利润644.2亿元远高于经营现金流156.9亿元，差额主要来自投资等净收益724.3亿元（含股权重估），这部分是账面收益、不进经营现金流。"},
 bs:[{l:"现金及现金等价物",v:"1,921.4亿",s:"3月末1,315.3亿（+46.1%）"},
     {l:"现金及流动投资",v:"4,879.3亿",s:"现金+短期投资+可动用的其他理财，公司口径"},
     {l:"有息债务",v:"2,564.0亿",s:"一年内到期232.5亿／3月末2,596亿"},
     {l:"净现金（流动投资−有息债务）",v:"2,315.3亿",s:"公司未直接披露，为计算值"}],
 trend:[
  {l:"25Q2",rev:2476.52,opm:14.1,ocf:null,fcf:null},
  {l:"25Q3",rev:2477.95,opm:2.2,ocf:100.99,fcf:-218.40},
  {l:"25Q4",rev:2848.43,opm:3.7,ocf:null,fcf:null},
  {l:"26Q1",rev:null},
  {l:"26Q2",rev:2689.53,opm:5.6,ocf:229.45,fcf:-446.70},
  {l:"26Q3",rev:2715.19,opm:10.7,ocf:156.90,fcf:-344.72}
 ],
 trendNote:"2026年3月季度公告未取到，该列留空；现金流量仅披露季度汇总，故部分季度为空。",
 notes:[
  {h:"口径：分部收入为什么加不出合并收入",b:"公告披露四大分部收入合计 2,904亿元，另有 5亿元未分摊；分部间抵销 194亿元后为合并收入 2,715亿元。桑基顶部的四个分区按各自占比呈现，宽度按分部金额计，抵销单列在标题行说明，不做等比例压缩。"},
  {h:"口径：毛利−经营费用 ≠ 经营利润",b:"毛利 1,030.4 − 经营费用 747.3 = 283.2亿元，经营利润 291.2亿元，差额 8.0亿元是“其他收益净额”（已计入经营利润、等额抵消费用），图中以绿色小标注单列。"},
  {h:"经调整 EBITA 与 GAAP 经营利润",b:"经调整 EBITA 326亿元（+260%，利润率12.0%）是非GAAP指标，剔除股权激励、无形资产摊销与减值；GAAP 经营利润 291亿元。两者在图中分别标注，不混用。"},
  {h:"自由现金流的两种数",b:"公司披露：-344.7亿元（经营现金流−资本开支，另含部分设备采购口径差异）。本页推算：156.9−504.8=−347.9亿元。差异 3.2亿元属口径，不修正。"}
 ],
 src:["数据来源：阿里巴巴集团《2026年9月季度业绩公告》（2026年11月19日，US GAAP，未经审计）。利润表与分部见公告正文及附注；资产负债表见“UNAUDITED CONSOLIDATED BALANCE SHEETS”（2026年9月30日 vs 2026年3月31日）；现金流量表见“UNAUDITED CONDENSED CONSOLIDATED STATEMENTS OF CASH FLOWS”。",
      "2025年6月、2025年12月季度数据分别由六个月累计数倒减、上年度公告取得；2026年6月季度为六个月累计减当季（计算值）。金额四舍五入至亿元。",
      "仅供信息参考，不构成投资建议。"]
},{
  header:{"tY":128,"subY":176,"hz":208,"note":"四大分部收入 2,904亿（含分部间抵销194亿）"},
  draw:function(t,q,rect,icon,push,co,X,F,fmt,fmt0){

    const seg=[{n:"电商集团",v:1972.37,vv:"+2%",ic:"bag"},{n:"AI云与算力",v:609.73,vv:"+53%",ic:"cloud"},
               {n:"AI实验室",v:44.35,vv:"+51%",ic:"chip"},{n:"其他",v:277.14,vv:"-5%",ic:"grid"}];
    seg.forEach((s,i)=>{
      const n=q("s"+i);
      if(i===2){icon(s.ic,911,236,24,F.navy);t(927,272,s.n,{size:15,weight:700,anchor:"end"});
        t(927,298,fmt0(s.v)+"亿",{size:17,weight:700,anchor:"end"});t(927,320,"同比"+s.vv,{size:12.5,fill:F.grey,anchor:"end"});}
      else{const cx=n.c;icon(s.ic,cx,236,24,F.navy);t(cx,272,s.n,{size:s.n.length>5?16.5:17,weight:700});
        t(cx,298,fmt0(s.v)+"亿",{size:19,weight:700});t(cx,320,"同比"+s.vv,{size:12.5,fill:F.grey});}
    });
    push('<text x="540" y="'+(q("rev").y+41)+'" font-size="32" font-weight="800" fill="#fff" text-anchor="middle">营业收入 '+fmt0(co.poster.rev)+'亿<tspan font-size="15" font-weight="400" fill="#cfcfcd" dx="14">同比+10%</tspan></text>');
    const gp=q("gp"),cost=q("cost"),op=q("op"),opex=q("opex"),sm=q("sm"),rd=q("rd"),ga=q("ga"),inv=q("inv"),ptx=q("ptx"),tax=q("tax"),ni=q("ni");
    t(gp.c,gp.y+28,"毛利 "+fmt0(1030.43)+"亿",{size:26,weight:800,fill:"#fff"});
    t(gp.c,gp.y+48,"毛利率38.0% · 同比+6.2%",{size:11.5,fill:"#e9f4e3"});
    t(cost.s+12,cost.y+88,"收入成本（"+fmt0(1684.76)+"亿）",{size:21,weight:800,anchor:"start",fill:F.redT});
    t(cost.s+12,cost.y+110,"占收入62.0% · 同比+11.7%",{size:12.5,anchor:"start",fill:F.redT});
    t(op.c,op.y+19,"经营利润",{size:13.5,weight:700,fill:"#fff"});
    t(op.c,op.y+37,fmt0(291.16)+"亿",{size:17,weight:800,fill:"#fff"});
    t(op.c,op.y+49,"10.7% +443%",{size:8.5,fill:"#e2f0dc"});
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+23)+'" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">经营费用 '+fmt0(747.26)+'亿</text>');
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+41)+'" font-size="11" fill="#fbe3e1" text-anchor="middle">占收入27.5% · 同比-18.6%</text>');
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+53)+'" font-size="10" fill="#f7dedb" text-anchor="middle">含无形资产摊销 7亿</text>');
    t(sm.c,sm.y+30,"销售及市场",{size:11.5,weight:700,fill:F.redT});
    t(sm.c,sm.y+45,fmt0(413.41)+"亿 · 占收入15.2%",{size:10.5,fill:F.redT,opa:.92});
    t(sm.c,sm.y+60,"同比-37.8%",{size:10.5,fill:F.grey});
    t(rd.c,rd.y+30,"产品研发",{size:10.5,weight:700,fill:F.redT});
    t(rd.c,rd.y+44,fmt0(226.32)+"亿 · 8.3%",{size:10,fill:F.redT,opa:.92});
    t(rd.c,rd.y+58,"同比+32.4%",{size:10,fill:F.grey});
    push('<path d="M'+(ga.e+1).toFixed(1)+' '+(ga.y+9)+'H'+(ga.e+9).toFixed(1)+'" stroke="'+F.redT+'" stroke-width="1" opacity=".45"/>');
    t(ga.e+13,ga.y+10,"一般及行政",{size:11.5,weight:700,anchor:"start",fill:F.redT});
    t(ga.e+13,ga.y+26,fmt0(100.97)+"亿 · 占收入3.7%",{size:10.5,anchor:"start",fill:F.redT,opa:.92});
    t(ga.e+13,ga.y+42,"同比+36.8%",{size:10.5,anchor:"start",fill:F.grey});
    rect(424,848,7,7,F.green,1);
    t(437,860,"其他收益，净 +8亿",{size:12,weight:700,anchor:"start",fill:F.greenT});
    t(424,878,"已计入经营利润，等额抵消费用",{size:10.5,anchor:"start",fill:F.grey});
    push('<text x="'+inv.s+'" y="892" font-size="13.5" font-weight="700" fill="'+F.greenT+'">投资等净收益<tspan font-size="19" font-weight="800" dx="6">+'+fmt0(724.30)+'亿</tspan><tspan font-size="11.5" font-weight="400" fill="'+F.grey+'" dx="7">同比+265%</tspan></text>');
    t(inv.s,914,"投资及利息+733 · 利息支出-27 · 其他收入+9 · 权益法+10",{size:10.5,anchor:"start",fill:F.grey});
    push('<text x="'+((ptx.s+ptx.e)/2).toFixed(1)+'" y="'+(ptx.y+28)+'" font-size="19" font-weight="800" fill="#fff" text-anchor="middle">税前利润 '+fmt0(1015.46)+'亿<tspan font-size="11.5" font-weight="400" fill="#e7f3e1" dx="9">同比+321% · 37.0%</tspan></text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+25)+'" font-size="22" font-weight="800" fill="#fff" text-anchor="middle">净利润 '+fmt0(644.20)+'亿</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+44)+'" font-size="11.5" fill="#e7f3e1" text-anchor="middle">净利率23.7% · 同比+213%</text>');
    t(ni.c,ni.y+ni.h+26,"归母净利润 645亿 · 同比+207%",{size:13.5,weight:700});
    push('<text x="'+tax.c.toFixed(1)+'" y="'+(tax.y+23)+'" font-size="16" font-weight="800" fill="#fff" text-anchor="middle">所得税 '+fmt0(371.26)+'亿</text>');
    push('<text x="'+tax.c.toFixed(1)+'" y="'+(tax.y+41)+'" font-size="10.5" fill="#fbe3d8" text-anchor="middle">占税前36.9%</text>');
  

    const cw=304,cg=28;
    co.poster.cards.forEach((c,i)=>{const x=X[0]+i*(cw+cg),y=1352;
      push('<rect x="'+x+'" y="'+y+'" width="'+cw+'" height="116" rx="16" fill="'+F.ink+'"/>');
      t(x+cw/2,y+36,c.l,{size:17,fill:"#e8e8e4"});
      t(x+cw/2,y+80,c.v,{size:34,weight:800,fill:"#fff"});
      t(x+cw/2,y+104,c.s,{size:11.5,fill:"#b6b6b1"});});
  
  }
}));
