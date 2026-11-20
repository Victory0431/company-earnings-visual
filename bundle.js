/* ==========================================================
   bundle.js —— 把模块化版本打包成一个可单独分发的 HTML
   用法：node bundle.js
   产物：财报图解总览_单文件版.html（内联全部公司模块，可单独发送）
   ========================================================== */
const fs=require("fs"),path=require("path");
const dir=path.join(__dirname,"companies");
const html=fs.readFileSync(path.join(__dirname,"财报图解总览.html"),"utf8");
const ORDER=JSON.parse(/window\.ORDER=(\[[^\]]*\]);/.exec(fs.readFileSync(path.join(dir,"_index.js"),"utf8"))[1]);
const reg=fs.readFileSync(path.join(dir,"_registry.js"),"utf8");
const mods=ORDER.map(id=>"/* ---- "+id+" ---- */\n"+fs.readFileSync(path.join(dir,id+".js"),"utf8")).join("\n");
const loader='<script src="companies/_registry.js"></script>\n<script src="companies/_index.js"></script>\n'+
  '<script>ORDER.forEach(function(id){document.write(\'<script src="companies/\'+id+'.js"><\\/script>\');});</script>\n';
if(!html.includes(loader))throw new Error("loader block not found");
const inline='<script>\n'+reg+'window.ORDER='+JSON.stringify(ORDER)+';\n</script>\n<script>\n'+mods+'\n</script>\n';
const out=html.split(loader).join(inline);
fs.writeFileSync(path.join(__dirname,"财报图解总览_单文件版.html"),out,"utf8");
console.log("bundled:",ORDER.join(","),"→ 财报图解总览_单文件版.html",out.length,"bytes");
