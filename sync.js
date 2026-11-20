/* ==========================================================
   sync.js —— 扫描 companies/ 目录，生成加载清单 _index.js
   用法：node sync.js
   规则：取 companies/*.js（忽略 _ 开头的注册表/模板）；
        若存在 companies/_order.txt，按其中行序排前，其余按文件名追加。
   ========================================================== */
const fs=require("fs"),path=require("path");
const dir=path.join(__dirname,"companies");
const files=fs.readdirSync(dir).filter(f=>f.endsWith(".js")&&!f.startsWith("_")).map(f=>f.replace(/\.js$/,""));
const orderFile=path.join(dir,"_order.txt");
let order=[];
if(fs.existsSync(orderFile))order=fs.readFileSync(orderFile,"utf8").split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
const final=[...order.filter(id=>files.includes(id)),...files.filter(id=>!order.includes(id)).sort()];
fs.writeFileSync(path.join(dir,"_index.js"),
  "/* 由 sync.js 生成，勿手改（要改顺序改 _order.txt）*/\nwindow.ORDER="+JSON.stringify(final)+";\n","utf8");
/* 回写 _order.txt，保持顺序稳定 */
fs.writeFileSync(orderFile,final.join("\n")+"\n","utf8");
console.log("loaded:",final.join(", "));
