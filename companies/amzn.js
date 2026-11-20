/* ==========================================================
   amzn · 单公司模块（数据 + 主图标注）
   ========================================================== */
addCompany(Object.assign({
 id:"amzn", nav:"亚马逊",
 name:"Amazon.com, Inc.", code:"NASDAQ: AMZN",
 period:"2026年第三季度（7—9月）", end:"2026年9月30日", disclosed:"2026-10-29",
 basis:"美国公认会计准则（US GAAP）· 未经审计 · 单季口径", unit:"亿美元",
 title:"亚马逊怎么赚钱", sub:"2026 Q3 利润表 · 单位：美元 · 同比对比2025 Q3",
 take:[
  {k:"经营",t:"收入 2,019.4亿美元、同比 +12%；经营利润 280.8亿美元、同比 +61%，经营利润率 13.9%——公司称是历史最高。增量全在 AWS：459.8亿美元、+39.3%（近五年最快），分部经营利润 177.7亿、利润率 38.7%；北美 1,128.5亿（+6%）、国际 431.1亿（+5%）。"},
  {k:"现金",t:"经营现金流 424.2亿美元、同比 +19%，但资本开支 772.6亿、同比 +120%，单季自由现金流 −334.6亿美元（计算值）；过去12个月经营现金流 1,683亿、自由现金流 −423.6亿，公司指引 2026 年现金资本开支约 2,200亿美元。"},
  {k:"观察",t:"下季看两点：一是资本开支与经营现金流的覆盖倍数（本季 424/773＝0.55 倍，去年同期 1.04 倍），2027 年 capex 还会“显著高于今年”；二是 AWS 39.3% 的增速能否延续，公司 Q4 指引收入 2,400—2,470亿、经营利润 285—335亿。"}
 ],
 poster:{
  h:1330, rev:2019.44,
  nodes:[
   {id:"s0",y:330,h:24,v:1128.52,parent:"__X__",fill:"ink"},
   {id:"s1",y:330,h:24,v:431.08, parent:"__X__",fill:"ink"},
   {id:"s2",y:330,h:24,v:459.84, parent:"__X__",fill:"ink"},
   {id:"rev", y:460,h:64,v:2019.44,mode:"root",fill:"ink"},
   {id:"gp",  y:590,h:58,v:1073.71,parent:"rev",fill:"green"},
   {id:"cost",y:590,h:58,v:945.73, parent:"rev",fill:"red"},
   {id:"op",  y:700,h:58,v:280.76, parent:"gp", fill:"green"},
   {id:"opex",y:700,h:58,v:792.95, parent:"gp", fill:"red"},
   {id:"ptx", y:944,h:52,v:268.69,mode:"left",fill:"green"},
   {id:"tax", y:1032,h:52,v:61.80, parent:"ptx",fill:"red"},
   {id:"ni",  y:1032,h:52,v:206.85,parent:"ptx",fill:"green"}
  ],
  links:[
   {f:"s0",t:"rev",v:1128.52,k:"w"},{f:"s1",t:"rev",v:431.08,k:"w"},{f:"s2",t:"rev",v:459.84,k:"w"},
   {f:"rev",t:"gp",v:1073.71,k:"g"},{f:"rev",t:"cost",v:945.73,k:"r"},
   {f:"gp",t:"op",v:280.76,k:"g"},{f:"gp",t:"opex",v:792.95,k:"r"},
   {f:"op",t:"ptx",v:268.69,k:"g"},
   {f:"ptx",t:"tax",v:61.80,k:"r"},{f:"ptx",t:"ni",v:206.85,k:"g"}
  ],
  cards:[{l:"AWS 收入",v:"459.8亿",s:"同比+39.3% · 占总收入23%"},
         {l:"资本开支",v:"772.6亿",s:"同比+120% · 全年指引2,200亿"},
         {l:"TTM 自由现金流",v:"−423.6亿",s:"上年同期+148亿（公司披露）"}]
 },
 cash:{title:"本季现金：经营进 424亿，投资出 1,136亿，靠发债补 489亿",
   bars:[{l:"经营活动",v:424.22},{l:"投资活动",v:-1136.42},{l:"筹资活动",v:489.35}],
   max:1200,
   facts:[{i:"资本开支",b:"772.6亿美元",s:"同比+120%；出售设备回款13.8亿，净额758.8亿"},
          {i:"自由现金流（计算值）",b:"−334.6亿美元",s:"424.2−758.8；公司TTM口径−423.6亿（净资本开支）"},
          {i:"最大一笔现金来源",b:"发行长期债务481.0亿",s:"另短期债务净增13.8亿；长期债务余额升至1,731亿"}],
   note:"净利润 206.9亿 < 经营现金流 424.2亿：差额主要来自折旧摊销 209.5亿、股权激励 54.1亿、递延所得税 50.3亿等非现金项；另库存增加 45.2亿、应收增加 21.3亿占用现金，预收服务款增加 32.8亿回补。"},
 bs:[{l:"现金及现金等价物",v:"557.8亿美元",s:"2025年末868.1亿（-35.7%）"},
     {l:"现金+有价证券",v:"1,142.3亿美元",s:"有价证券584.4亿 · 年末1,230.3亿"},
     {l:"长期债务",v:"1,731.3亿美元",s:"2025年末656.5亿；报表未单列一年内到期金额"},
     {l:"净现金（现金+证券−长债）",v:"−589.0亿美元",s:"计算值；未含融资租赁等其它有息项"}],
 trend:[
  {l:"25Q3",rev:1801.69,opm:9.7,ocf:355.25,fcf:12.97},
  {l:"25Q4",rev:2133.86,opm:11.7,ocf:544.59,fcf:159.96},
  {l:"26Q1",rev:1815.19,opm:13.1,ocf:260.32,fcf:-160.78},
  {l:"26Q2",rev:2006.06,opm:13.7,ocf:453.87,fcf:-88.13},
  {l:"26Q3",rev:2019.44,opm:13.9,ocf:424.22,fcf:-334.56}
 ],
 trendNote:"单位亿美元；单季数据为报表原值。25Q4 由全年减前三季得出（计算值）；自由现金流＝经营现金流−净资本开支，26Q1/Q2 未扣设备出售回款，与公司口径有数亿元差异。",
 notes:[
  {h:"口径：三个分部收入直接加总＝合并收入",b:"北美 1,128.52 + 国际 431.08 + AWS 459.84 = 2,019.44亿美元，与合并收入完全相等——10-Q 附注明确“分部之间没有内部收入交易”，所以这张图没有抵销项。"},
  {h:"口径：毛利−经营费用＝经营利润，没有其他收益冲抵",b:"毛利 1,073.71 − 经营费用 792.95（履约 300.0＋技术与基建 348.1＋销售及市场 116.5＋一般及行政 27.0＋其他经营 1.3）＝ 280.76亿美元，等于报表经营利润。亚马逊把“技术与基础设施”单列为费用行，这正是 AI 基建投入在利润表上的位置，同比 +20.2%。"},
  {h:"净利润同比 −2.4% 不是经营变差",b:"2025 Q3 的“其他收入净额”是 +101.86亿美元（其中 Anthropic 相关税前收益约 95亿），今年为 −7.03亿，直接把税前利润从 281.7 压到 268.7。经营利润本身同比 +61%。"},
  {h:"Prime Day 时点变化影响同比的可比性",b:"公司说明：2026 年 Prime Day 多数大国落在 Q2，2025 年全部落在 Q3。剔除该时点影响，Q3 同比增速约高 400 个基点；广告收入同比 +12%（剔除汇率）也受此拖累。"},
  {h:"资本开支的两个口径与自由现金流",b:"报表“购置固定资产”772.59亿（毛额），扣出售设备回款 13.81亿后净额 758.78亿。公司定义的 TTM 自由现金流用净额口径：1,683.00 − 2,106.57 = −423.57亿美元。本页单季 −334.56 为同一算法（净额），标注计算值。"},
  {h:"债务口径：报表没有单列短期债务",b:"资产负债表只列“长期债务 1,731.25亿”，一年内到期的长期债务未在表中单列；现金流量表显示本季发行长期债务 481.02亿、短期债务净增 13.80亿。因此净现金为计算值，且不含融资租赁负债。"},
  {h:"下季两个可验证问题",b:"① 资本开支能否落在指引内：跟踪季度购置固定资产（本季 772.6亿，2026 全年指引约 2,200亿美元）与经营现金流覆盖倍数。② AWS 增速是否守住 35% 以上：跟踪 AWS 分部收入（本季 459.8亿、+39.3%）与 AWS 未确认合同承诺（截至 9/30 约 5,780亿美元）。"}
 ],
 src:["数据来源：Amazon.com, Inc. Form 10-Q（截至2026年9月30日，未经审计）——合并现金流量表（第3页）、合并利润表（第4页）、合并资产负债表（第6页）、分部信息附注（第23—24页）：https://www.sec.gov/Archives/edgar/data/1018724/000101872426000040/amzn-20260930.htm",
      "同季业绩公告（2026年10月29日）及附件 99.1：https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Third-Quarter-Results/ ；历史季度数据取自 2026年2月5日、4月29日、7月30日各季公告的补充财务信息表。",
      "金额由报表的百万美元折算为亿美元（÷100）后四舍五入至一位小数。标“计算值”者为推算。仅供信息参考，不构成投资建议。"]
},{
  header:{"tY":96,"subY":142,"hz":170,"note":"三大分部收入＝合并收入（分部间无内部交易）"},
  draw:function(t,q,rect,icon,push,co,X,F,fmt,fmt0){

    const seg=[{n:"北美",v:1128.52,vv:"+6%",oi:"营业利润 87.2亿 · 7.7%",ic:"bag",x:326},
               {n:"国际",v:431.08,vv:"+5%",oi:"营业利润 15.8亿 · 3.7%",ic:"grid",x:700},
               {n:"AWS",v:459.84,vv:"+39.3%",oi:"营业利润 177.7亿 · 38.7%",ic:"cloud",x:922}];
    seg.forEach(s=>{
      icon(s.ic,s.x,196,24,F.navy);
      t(s.x,232,s.n,{size:17,weight:700});
      t(s.x,258,fmt(s.v)+"亿",{size:19,weight:700});
      t(s.x,278,"同比"+s.vv,{size:12,fill:F.grey});
      t(s.x,296,s.oi,{size:10.5,fill:F.sub});
    });
    push('<text x="540" y="'+(q("rev").y+41)+'" font-size="32" font-weight="800" fill="#fff" text-anchor="middle">营业收入 '+fmt(co.poster.rev)+'亿美元<tspan font-size="15" font-weight="400" fill="#cfcfcd" dx="14">同比+12%</tspan></text>');

    const gp=q("gp"),cost=q("cost"),op=q("op"),opex=q("opex"),ptx=q("ptx"),tax=q("tax"),ni=q("ni");
    t(gp.c,gp.y+27,"毛利 "+fmt(1073.71)+"亿美元",{size:25,weight:800,fill:"#fff"});
    t(gp.c,gp.y+46,"毛利率53.2% · 同比+2.4pp",{size:11,fill:"#e9f4e3"});
    t(cost.s+12,cost.y+25,"销货成本 "+fmt(945.73)+"亿美元",{size:16,weight:800,anchor:"start",fill:"#fff"});
    t(cost.s+12,cost.y+45,"占收入46.8% · 同比+6.7%",{size:10,anchor:"start",fill:"#fbe3e1"});
    t(op.c,op.y+20,"经营利润",{size:11,weight:700,fill:"#fff"});
    t(op.c,op.y+38,fmt(280.76)+"亿",{size:16,weight:800,fill:"#fff"});
    t(op.c,op.y+51,"13.9% · +61%",{size:9,fill:"#e2f0dc"});
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+22)+'" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">经营费用 '+fmt(792.95)+'亿美元</text>');
    push('<text x="'+opex.c.toFixed(1)+'" y="'+(opex.y+42)+'" font-size="11" fill="#fbe3e1" text-anchor="middle">占收入39.3% · 同比+7.0%</text>');

    t(200,782,"经营费用的五项构成（亿美元）",{size:10.5,weight:800,anchor:"start",fill:F.navy});
    const rows=[{n:"履约（配送与客服）",v:"300.0",p:"14.9%",y:"+8.4%"},
                {n:"技术与基础设施",v:"348.1",p:"17.2%",y:"+20.2%"},
                {n:"销售及市场",v:"116.5",p:"5.8%",y:"−0.3%"},
                {n:"一般及行政",v:"27.0",p:"1.3%",y:"−6.1%"},
                {n:"其他经营",v:"1.3",p:"0.1%",y:"上年28.8亿"}];
    rows.forEach((r,i)=>{const y=800+i*17;
      rect(200,y-7,5,5,i<2?"#c04a3e":F.redT,1);
      t(212,y,r.n+" "+r.v+"亿 · 收入占比"+r.p+" · 同比"+r.y,{size:9.5,anchor:"start",fill:F.grey});});

    t(200,912,"经营利润之外：非经营净支出 −12.1亿",{size:10.5,weight:800,anchor:"start",fill:F.redT});
    t(200,928,"＝ 利息净支出 −5.0 ＋ 其他净亏 −7.0（上年同期为 +101.9）",{size:9,anchor:"start",fill:F.grey});

    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+18)+'" font-size="10.5" font-weight="700" fill="#fff" text-anchor="middle">税前利润</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+37)+'" font-size="15" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(268.69)+'亿</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+49)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">13.3% · −4.6%</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+20)+'" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">净利润</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+38)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(206.85)+'亿</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+49)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">10.2% · −2.4%</text>');
    t(X[0],1112,"所得税 61.8亿 · 税率23.0%（上年24.5%）｜稀释 EPS 1.89美元 · 股本109.3亿股｜净利润 −2.4% 源于去年同期 101.9亿其他收入（Anthropic 约95亿），非经营恶化",{size:9,weight:700,anchor:"start",fill:F.navy});

    t(560,772,"收入构成 · 七条产品线（亿美元）",{size:12.5,weight:800,anchor:"start"});
    t(560,790,"合计 2,019.4亿；AWS 占23%、线上商店占34%",{size:9.5,fill:F.grey,anchor:"start"});
    const pl=[["线上商店",684.70],["三方卖家服务",464.92],["AWS",459.84],["广告服务",196.37],
              ["订阅服务",140.06],["实体店",57.10],["其他",16.45]];
    const pmax=684.70,bx=712,bw=196;
    pl.forEach((r,i)=>{const y=822+i*29;
      t(560,y,r[0],{size:10.5,fill:F.sub,anchor:"start"});
      push('<rect x="'+bx+'" y="'+(y-9)+'" width="'+Math.max(1.5,r[1]/pmax*bw).toFixed(1)+'" height="11" rx="2" fill="#7fb98a"/>');
      t(1024,y,fmt(r[1])+"亿",{size:10.5,weight:800,anchor:"end"});});
    t(560,1046,"广告 196.4亿（+12%，受Prime Day时点影响；剔除后更高）· 订阅 140.1亿（+11%）",{size:9,fill:F.grey,anchor:"start"});

    const cw=304,cg=28;
    co.poster.cards.forEach((c,i)=>{const x=X[0]+i*(cw+cg),y=1156;
      push('<rect x="'+x+'" y="'+y+'" width="'+cw+'" height="104" rx="16" fill="'+F.ink+'"/>');
      t(x+cw/2,y+34,c.l,{size:16,fill:"#e8e8e4"});
      t(x+cw/2,y+74,c.v,{size:30,weight:800,fill:"#fff"});
      t(x+cw/2,y+94,c.s,{size:10.5,fill:"#b6b6b1"});});

  }
}));
