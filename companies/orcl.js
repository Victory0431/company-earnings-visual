/* ==========================================================
   orcl · 单公司模块（数据 + 主图标注）
   ========================================================== */
addCompany(Object.assign({
 id:"orcl", nav:"甲骨文",
 name:"Oracle Corporation", code:"NYSE: ORCL",
 period:"FY2027 第一季度（2026年6—8月）", end:"2026年8月31日", disclosed:"2026-09-10",
 basis:"美国公认会计准则（US GAAP）· 未经审计 · 单季口径", unit:"亿美元",
 title:"甲骨文 怎么赚钱", sub:"FY2027 Q1 利润表 · 单位：美元 · 同比对比 FY2026 Q1",
 take:[
  {k:"经营",t:"收入 193.5亿美元、同比 +30%（公司史上最强 Q1）；云收入 116.1亿、+62%，其中 Cloud Infrastructure（IaaS）73.9亿、+121%，Cloud Applications（SaaS）42.2亿、+10%；传统的本地软件授权与支持 55.5亿、−3%，正在被云吃掉。剩余履约义务 RPO 升至 6,640亿美元（同比 +2,090亿）。"},
  {k:"现金",t:"经营现金流 231.0亿美元，同比 +184%——其中 113.6亿是客户为锁定算力预付的款项（含重大融资成分）；资本开支 285.0亿，自由现金流 −54.0亿。同期通过 ATM 增发普通股募资 199.1亿美元，债务余额 1,253.4亿。"},
  {k:"观察",t:"毛利率从上年 67.3% 掉到 60.0%（折旧 31.6亿、+134%），是这轮算力扩张最直接的代价；公司称本季新增 850MW 数据中心容量、交付超过 30 万块 GPU。Q2 指引收入 +30—34%、云 +64—70%，但 Q2 FY26 含出售 Ampere 的 27亿一次性收益，EPS 同比将下降 15—19%。"}
 ],
 poster:{
  h:1300, rev:193.45,
  nodes:[
   {id:"s0",y:330,h:24,v:116.07,parent:"__X__",fill:"ink"},
   {id:"s1",y:330,h:24,v:55.50, parent:"__X__",fill:"ink"},
   {id:"s2",y:330,h:24,v:7.74,  parent:"__X__",fill:"ink"},
   {id:"s3",y:330,h:24,v:14.14, parent:"__X__",fill:"ink"},
   {id:"rev", y:460,h:64,v:193.45,mode:"root",fill:"ink"},
   {id:"gp",  y:590,h:58,v:116.12,parent:"rev",fill:"green"},
   {id:"cost",y:590,h:58,v:77.33, parent:"rev",fill:"red"},
   {id:"op",  y:700,h:58,v:67.28, parent:"gp", fill:"green"},
   {id:"opex",y:700,h:58,v:48.84, parent:"gp", fill:"red"},
   {id:"ptx", y:944,h:52,v:56.07, parent:"op", fill:"green"},
   {id:"nop", y:944,h:52,v:11.21, parent:"op", fill:"red"},
   {id:"tax", y:1032,h:52,v:8.47, parent:"ptx",fill:"red"},
   {id:"ni",  y:1032,h:52,v:47.60,parent:"ptx",fill:"green"}
  ],
  links:[
   {f:"s0",t:"rev",v:116.07,k:"w"},{f:"s1",t:"rev",v:55.50,k:"w"},
   {f:"s2",t:"rev",v:7.74,k:"w"},{f:"s3",t:"rev",v:14.14,k:"w"},
   {f:"rev",t:"gp",v:116.12,k:"g"},{f:"rev",t:"cost",v:77.33,k:"r"},
   {f:"gp",t:"op",v:67.28,k:"g"},{f:"gp",t:"opex",v:48.84,k:"r"},
   {f:"op",t:"ptx",v:56.07,k:"g"},{f:"op",t:"nop",v:11.21,k:"r"},
   {f:"ptx",t:"tax",v:8.47,k:"r"},{f:"ptx",t:"ni",v:47.60,k:"g"}
  ],
  cards:[{l:"Cloud Infrastructure（IaaS）",v:"73.9亿",s:"同比+121% · 占总收入38%"},
         {l:"剩余履约义务 RPO",v:"6,640亿",s:"同比+2,090亿 · 本季新增AI合同>300亿"},
         {l:"单季自由现金流",v:"−54.0亿",s:"资本开支285.0亿 · 上年同期−3.6亿"}]
 },
 cash:{title:"本季现金：经营进 231亿（含客户预付114亿），投资出 286亿，发股补 131亿",
   bars:[{l:"经营活动",v:231.03},{l:"投资活动",v:-285.80},{l:"筹资活动",v:131.11}],
   max:300,
   facts:[{i:"客户预付款",b:"113.6亿美元",s:"含重大融资成分；AI 客户为锁定算力预付，记在经营现金流里"},
          {i:"资本开支",b:"285.0亿美元",s:"同比+235%；扣除预付款与短期融资后的净支出179.7亿"},
          {i:"ATM 增发普通股",b:"199.1亿美元",s:"净额；同时偿还到期债务42.0亿、分红15.7亿"}],
   note:"经营现金流 231.0亿 远超净利润 47.6亿，差额主要来自折旧 31.6亿、股权激励 11.3亿、递延收入增加 153.6亿（其中客户预付 113.6亿）——递延收入是「先收钱、后确认收入」，不等于当期利润。"},
 bs:[{l:"现金+有价证券",v:"370.8亿美元",s:"现金363.7亿 + 证券7.1亿；年初318.9亿"},
     {l:"债务（短期+长期）",v:"1,253.4亿美元",s:"一年内到期76.3亿；年初1,295.4亿"},
     {l:"净债务",v:"882.6亿美元",s:"计算值（债务−现金及证券）；未含经营租赁负债305.9亿"},
     {l:"总资产 / 股东权益",v:"3,033亿 / 672亿",s:"固定资产1,278.5亿（+28%）；权益从430.6亿升至672.0亿"}],
 trend:[
  {l:"FY26Q1",rev:149.26,opm:28.7,ocf:81.40,fcf:-3.62},
  {l:"FY26Q2",rev:160.58,opm:29.5,ocf:20.66,fcf:null},
  {l:"FY26Q3",rev:171.90,opm:31.8,ocf:71.51,fcf:null},
  {l:"FY26Q4",rev:191.84,opm:32.0,ocf:146.20,fcf:-18.73},
  {l:"FY27Q1",rev:193.45,opm:34.8,ocf:231.03,fcf:-53.96}
 ],
 trendNote:"单位亿美元。单季经营现金流由累计数相减得出：FY26Q2＝上半年102.06−Q1 81.40，FY26Q3＝前三季173.57−上半年102.06，FY26Q4＝全年319.77−前三季173.57；FY26Q2/Q3 的资本开支未单独披露（只给累计），故自由现金流留空。",
 notes:[
  {h:"口径：四段收入合计正好等于合并收入",b:"Cloud 116.07 ＋ Software 55.50 ＋ Hardware 7.74 ＋ Services 14.14 ＝ 193.45亿美元。Cloud 内部：IaaS（Cloud Infrastructure）73.88亿 ＋ SaaS（Cloud Applications）42.19亿 ＝ 116.07亿。Software 内部：授权 6.55亿 ＋ 支持 48.95亿。"},
  {h:"口径：从毛利到净利的每一步都要过利息",b:"成本 77.33（云与软件 64.00 ＋ 硬件 2.81 ＋ 服务 10.52）→ 毛利 116.12 → 减费用 48.84（销售 18.11 ＋ 研发 24.01 ＋ 管理 3.76 ＋ 摊销 2.02 ＋ 重组 0.94）＝ 经营利润 67.28 → 减利息 14.28 ＋ 其他收入 3.07 ＝ 税前 56.07 → 减税 8.47 ＝ 净利 47.60（另扣优先股股息 0.81，普通股 46.79）。"},
  {h:"毛利率掉了 7.3 个百分点，这是本季最重要的一件事",b:"毛利率 60.0%（上年 67.3%）。直接原因写在现金流与资产负债表里：折旧 31.56亿美元（上年 13.51亿，+134%），云与软件成本 64.00亿（+77%），固定资产从 999.6亿增至 1,278.5亿。IaaS 越卖越多，短期拉低毛利率是被普遍预期到的结构性代价。"},
  {h:"经营现金流 231亿里，113.6亿不是「赚来的」",b:"其中「客户预付款（含重大融资成分）」113.63亿美元记在经营活动，另有其他递延收入增加 39.97亿。这是客户为锁定未来算力先付的钱，本质是融资性现金流入。公司自己给出「净资本开支」口径：285.0亿 − 113.6亿 − 8.3亿（短期融资）= 179.7亿。"},
  {h:"钱从哪来：发股票，不是发债",b:"本季通过 ATM 增发普通股净得 199.09亿美元（普通股数与 APIC 从 432.4亿升至 643.2亿），同时净偿还债务约 50.3亿（偿还 42.0亿 ＋ 短期融资减少 8.3亿）。债务余额 1,253.36亿，其中一年内到期 76.25亿。累计亏损从 −43.09亿收窄到 −11.14亿。"},
  {h:"RPO 6,640亿：合同负债的未来收入",b:"剩余履约义务（RPO）同比 +2,090亿美元至 6,640亿，公司称本季新签 AI 云合同超过 300亿美元，且「合同结构不会带来额外的融资需求」。这是未来收入的蓄水池，但兑现要靠数据中心按期交付——本季新增 850MW 容量、交付超 30 万块 GPU（约为上季的近 3 倍）。"},
  {h:"下季两个可验证问题",b:"① 毛利率能否止跌：本季 60.0%，资本开支全年指引此前为 500亿美元级别，Q2 若 capex 继续抬升，毛利率仍有压力。② Q2 指引对比基数：Q2 FY26 含出售 Ampere 的 27亿税前收益，公司已明确 Q2 FY27 EPS 将同比 −15% 至 −19%，别把这份下滑读成经营恶化。"}
 ],
 src:["数据来源：Oracle Corporation Form 10-Q（截至2026年8月31日，未经审计）——合并资产负债表（第1页）、合并利润表（第2页）、合并现金流量表（第5页）：https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm",
      "同季业绩公告（2026年9月10日，含 IaaS/SaaS 拆分、RPO、GPU 与容量交付、Q2 指引）：https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-ex99_1.htm",
      "上季及全年累计数取自 FY2026 Form 10-K：https://www.sec.gov/Archives/edgar/data/1341439/000119312526277521/orcl-20260531.htm ；前三季度累计数取自 FY2026 Q3 Form 10-Q：https://www.sec.gov/Archives/edgar/data/1341439/000119312526101045/orcl-20260228.htm ；上半年累计数取自 Q2 业绩公告。金额由百万美元折算为亿美元（÷100）后四舍五入至一位小数。仅供信息参考，不构成投资建议。"]
},{
  header:{"tY":96,"subY":142,"hz":170,"note":"四段收入 116.1＋55.5＋7.7＋14.1＝193.5亿美元（云内含 IaaS 73.9＋SaaS 42.2）"},
  draw:function(t,q,rect,icon,push,co,X,F,fmt,fmt0){

    icon("cloud",346,196,24,F.navy);
    t(346,232,"Cloud 云收入",{size:16,weight:700});
    t(346,258,fmt(116.07)+"亿",{size:19,weight:700,fill:F.greenT});
    t(346,278,"同比+62% · 占收入60%",{size:12,fill:F.grey});
    t(346,296,"IaaS 73.9亿(+121%) / SaaS 42.2亿(+10%)",{size:10.5,fill:F.sub});

    icon("grid",726,196,24,F.navy);
    t(726,232,"Software 本地软件",{size:16,weight:700});
    t(726,258,fmt(55.50)+"亿",{size:19,weight:700});
    t(726,278,"同比−3% · 占收入29%",{size:12,fill:F.redT});
    t(726,296,"授权6.6亿 + 支持48.9亿（客户在迁往云）",{size:10.5,fill:F.sub});

    t(1024,232,"硬件 7.7亿 · 服务 14.1亿",{size:11,weight:700,anchor:"end",fill:F.sub});
    t(1024,250,"硬件+15% / 服务+5%",{size:9,anchor:"end",fill:F.grey});
    t(1024,264,"合计占收入11%",{size:9,anchor:"end",fill:F.grey});

    push('<text x="540" y="'+(q("rev").y+41)+'" font-size="32" font-weight="800" fill="#fff" text-anchor="middle">营业收入 '+fmt(co.poster.rev)+'亿美元<tspan font-size="15" font-weight="400" fill="#cfcfcd" dx="14">同比+30%</tspan></text>');

    const gp=q("gp"),cost=q("cost"),op=q("op"),opex=q("opex"),ptx=q("ptx"),nop=q("nop"),ni=q("ni"),tax=q("tax");
    t(gp.c,gp.y+27,"毛利 "+fmt(116.12)+"亿美元",{size:25,weight:800,fill:"#fff"});
    t(gp.c,gp.y+46,"毛利率60.0% · 同比−7.3pp（折旧+134%）",{size:11,fill:"#e9f4e3"});
    t(cost.s+12,cost.y+25,"直接成本 "+fmt(77.33)+"亿美元",{size:16,weight:800,anchor:"start",fill:"#fff"});
    t(cost.s+12,cost.y+45,"云与软件64.0 · 硬件2.8 · 服务10.5",{size:10,anchor:"start",fill:"#fbe3e1"});

    t(op.c,op.y+20,"经营利润",{size:11,weight:700,fill:"#fff"});
    t(op.c,op.y+38,fmt(67.28)+"亿",{size:16,weight:800,fill:"#fff"});
    t(op.c,op.y+51,"34.8% · +57%",{size:9,fill:"#e2f0dc"});
    push('<text x="'+(opex.c).toFixed(1)+'" y="'+(opex.y+22)+'" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">经营费用 '+fmt(48.84)+'亿美元</text>');
    push('<text x="'+(opex.c).toFixed(1)+'" y="'+(opex.y+42)+'" font-size="10.5" fill="#fbe3e1" text-anchor="middle">销售18.1 · 研发24.0 · 其他6.7</text>');

    t(X[0],1112,"税率15.1%（上年14.6%）｜稀释EPS 1.56美元（上年1.01）｜普通股净利46.79亿（扣优先股息0.81）｜利息支出14.28亿（+55%）",{size:9,weight:700,anchor:"start",fill:F.navy});

    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+18)+'" font-size="10.5" font-weight="700" fill="#fff" text-anchor="middle">税前利润</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+37)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(56.07)+'亿</text>');
    push('<text x="'+ptx.c.toFixed(1)+'" y="'+(ptx.y+49)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">29.0% · +64%</text>');
    push('<text x="'+(nop.c).toFixed(1)+'" y="'+(nop.y+21)+'" font-size="8.5" font-weight="700" fill="#fff" text-anchor="middle">净融资</text>');
    push('<text x="'+(nop.c).toFixed(1)+'" y="'+(nop.y+36)+'" font-size="10" font-weight="800" fill="#fff" text-anchor="middle">−11.2亿</text>');
    t(nop.s,1010,"利息14.3 − 其他收入3.1",{size:9,fill:F.redT,anchor:"start"});

    t(X[0]+2,tax.y+tax.h+14,"所得税 8.47亿",{size:9,fill:F.redT,weight:700,anchor:"start"});
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+20)+'" font-size="10" font-weight="700" fill="#fff" text-anchor="middle">净利润</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+38)+'" font-size="14" font-weight="800" fill="#fff" text-anchor="middle">'+fmt(47.60)+'亿</text>');
    push('<text x="'+ni.c.toFixed(1)+'" y="'+(ni.y+49)+'" font-size="8.5" fill="#e7f3e1" text-anchor="middle">24.6% · +63%</text>');

    t(664,668,"钱花在哪（亿美元）",{size:12,weight:800,anchor:"start"});
    const rows=[{n:"云与软件成本",v:"64.0",d:"+77%",c:"#c04a3e"},
                {n:"研发",v:"24.0",d:"−4%",c:"#7fb98a"},
                {n:"销售及市场",v:"18.1",d:"−12%",c:"#7fb98a"},
                {n:"利息支出",v:"14.3",d:"+55%",c:"#c04a3e"}];
    rows.forEach((r,i)=>{const y=692+i*18;
      rect(664,y-7,5,5,r.c,1);
      t(676,y,r.n+" "+r.v+"亿 · 同比"+r.d,{size:10,anchor:"start",fill:F.grey});});

    t(664,786,"这轮扩张的四个数",{size:12,weight:800,anchor:"start"});
    const kpi=[["剩余履约义务 RPO","6,640亿","同比+2,090亿"],
               ["资本开支","285.0亿","同比+235%"],
               ["新增数据中心容量","850 MW","一个季度"],
               ["交付 GPU","30 万块","约为上季3倍"]];
    kpi.forEach((r,i)=>{const y=812+i*32;
      t(664,y,r[0],{size:10,fill:F.sub,anchor:"start"});
      t(884,y,r[1],{size:14,weight:800,anchor:"end"});
      t(1024,y,r[2],{size:9,fill:F.grey,anchor:"end"});});
    t(664,984,"RPO＝已签约但未确认的收入；GPU 与容量交付决定它何时能转成收入",{size:9,fill:F.grey,anchor:"start"});

    const cw=304,cg=28;
    co.poster.cards.forEach((c,i)=>{const x=X[0]+i*(cw+cg),y=1156;
      push('<rect x="'+x+'" y="'+y+'" width="'+cw+'" height="104" rx="16" fill="'+F.ink+'"/>');
      t(x+cw/2,y+34,c.l,{size:16,fill:"#e8e8e4"});
      t(x+cw/2,y+74,c.v,{size:30,weight:800,fill:"#fff"});
      t(x+cw/2,y+94,c.s,{size:10.5,fill:"#b6b6b1"});});

  }
}));
