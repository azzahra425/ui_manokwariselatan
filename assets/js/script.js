const DATA_DISTRIK = [
  { distrik: "Ransiki", ikon: "fa-city", gambar: "assets/img/distrik/ransiki.svg", kampung: [
      { nama: "Abreso", kode: "9211012007", jenis: "Kampung" },
      { nama: "Bamaha", kode: "9211012006", jenis: "Kampung" },
      { nama: "Hamawi", kode: "9211012008", jenis: "Kampung" },
      { nama: "Hamor", kode: "9211012011", jenis: "Kampung" },
      { nama: "Kobrey", kode: "9211012009", jenis: "Kampung" },
      { nama: "Mambrema", kode: "9211012013", jenis: "Kampung" },
      { nama: "Nuhuwei", kode: "9211012002", jenis: "Kampung" },
      { nama: "Ransiki", kode: "9211012001", jenis: "Kampung" },
      { nama: "Sabri", kode: "9211012005", jenis: "Kampung" },
      { nama: "Susmorof", kode: "9211012012", jenis: "Kampung" },
      { nama: "Tobou", kode: "9211012004", jenis: "Kampung" },
      { nama: "Wamcei", kode: "9211012010", jenis: "Kampung" },
      { nama: "Yamboi", kode: "9211012003", jenis: "Kampung" }
  ] },
  { distrik: "Oransbari", ikon: "fa-wheat-awn", gambar: "assets/img/distrik/oransbari.svg", kampung: [
      { nama: "Akeju", kode: "9211022013", jenis: "Kampung" },
      { nama: "Margo Rukun", kode: "9211022004", jenis: "Kampung" },
      { nama: "Margomulyo", kode: "9211022009", jenis: "Kampung" },
      { nama: "Masabui", kode: "9211022007", jenis: "Kampung" },
      { nama: "Masabui II", kode: "9211022014", jenis: "Kampung" },
      { nama: "Muari", kode: "9211022005", jenis: "Kampung" },
      { nama: "Oransbari", kode: "9211022001", jenis: "Kampung" },
      { nama: "Sidomulyo", kode: "9211022002", jenis: "Kampung" },
      { nama: "Sindang Jaya", kode: "9211022011", jenis: "Kampung" },
      { nama: "Wandoki", kode: "9211022012", jenis: "Kampung" },
      { nama: "Warbiadi", kode: "9211022008", jenis: "Kampung" },
      { nama: "Warkwandi", kode: "9211022010", jenis: "Kampung" },
      { nama: "Waroser", kode: "9211022003", jenis: "Kampung" },
      { nama: "Watariri", kode: "9211022006", jenis: "Kampung" }
  ] },
  { distrik: "Neney", ikon: "fa-tree", gambar: "assets/img/distrik/neney.svg", kampung: [
      { nama: "Aryawenmoho", kode: "9211032006", jenis: "Kampung" },
      { nama: "Benyas", kode: "9211032005", jenis: "Kampung" },
      { nama: "Disi", kode: "9211032002", jenis: "Kampung" },
      { nama: "Hiyou", kode: "9211032003", jenis: "Kampung" },
      { nama: "Neney", kode: "9211032007", jenis: "Kampung" },
      { nama: "Sesum", kode: "9211032004", jenis: "Kampung" },
      { nama: "Wama", kode: "9211032001", jenis: "Kampung" }
  ] },
  { distrik: "Dataran Isim", ikon: "fa-mountain-sun", gambar: "assets/img/distrik/dataran-isim.svg", kampung: [
      { nama: "Desra", kode: "9211042009", jenis: "Kampung" },
      { nama: "Dibera", kode: "9211042012", jenis: "Kampung" },
      { nama: "Dihisu", kode: "9211042007", jenis: "Kampung" },
      { nama: "Duhugesa", kode: "9211042002", jenis: "Kampung" },
      { nama: "Hugomot", kode: "9211042006", jenis: "Kampung" },
      { nama: "Inyuara", kode: "9211042008", jenis: "Kampung" },
      { nama: "Isim", kode: "9211042001", jenis: "Kampung" },
      { nama: "Mindermes", kode: "9211042010", jenis: "Kampung" },
      { nama: "Sibjo", kode: "9211042011", jenis: "Kampung" },
      { nama: "Tohosta", kode: "9211042005", jenis: "Kampung" },
      { nama: "Tubes", kode: "9211042003", jenis: "Kampung" },
      { nama: "Umuhousi", kode: "9211042004", jenis: "Kampung" }
  ] },
  { distrik: "Momi Waren", ikon: "fa-water", gambar: "assets/img/distrik/momi-waren.svg", kampung: [
      { nama: "Dembek", kode: "9211052001", jenis: "Kampung" },
      { nama: "Demini", kode: "9211052006", jenis: "Kampung" },
      { nama: "Gaya Baru", kode: "9211052004", jenis: "Kampung" },
      { nama: "Nij", kode: "9211052002", jenis: "Kampung" },
      { nama: "Siwi", kode: "9211052003", jenis: "Kampung" },
      { nama: "Waren", kode: "9211052005", jenis: "Kampung" },
      { nama: "Yekwandi", kode: "9211052007", jenis: "Kampung" }
  ] },
  { distrik: "Tahota", ikon: "fa-leaf", gambar: "assets/img/distrik/tahota.svg", kampung: [
      { nama: "Kaprus", kode: "9211062003", jenis: "Kampung" },
      { nama: "Reyob", kode: "9211062002", jenis: "Kampung" },
      { nama: "Seimeba", kode: "9211062004", jenis: "Kampung" },
      { nama: "Yarmatum", kode: "9211062001", jenis: "Kampung" }
  ] }
];
function buatTautanKampung(kode){return kode?`https://webdesa.klipaa.id/village/${kode}`:"https://webdesa.klipaa.id/";}
function highlightTeks(teks,k){if(!k)return teks;const re=new RegExp(`(${k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"ig");return teks.replace(re,"<mark>$1</mark>");}
function nomorDua(n){return String(n).padStart(2,"0");}
const grid=document.getElementById("gridDistrik"),inputCari=document.getElementById("inputCari"),infoHasil=document.getElementById("infoHasil"),tombolResetCari=document.getElementById("tombolResetCari"),panelKampung=document.getElementById("panelKampung"),panelKampungJudulTeks=document.getElementById("panelKampungJudulTeks"),daftarKampungEl=document.getElementById("daftarKampung"),tombolKembali=document.getElementById("tombolKembali");
let indexAktif=null;
function buatKartuDistrik(item,index,kata){const el=document.createElement("button");el.type="button";el.className="kartu-distrik";el.dataset.index=index;if(index===indexAktif)el.classList.add("kartu-distrik--aktif");el.innerHTML=`<div class="kartu-distrik__media"><img src="${item.gambar}" alt="Ilustrasi Distrik ${item.distrik}" class="kartu-distrik__ikon" loading="lazy"><span class="kartu-distrik__nomor-badge">${nomorDua(index+1)}</span><span class="kartu-distrik__tipe-badge"><i class="fa-solid ${item.ikon}"></i></span></div><div class="kartu-distrik__body"><span class="kartu-distrik__label">Distrik</span><span class="kartu-distrik__nama">${highlightTeks(item.distrik,kata)}</span><span class="kartu-distrik__jumlah">${item.kampung.length} Kampung</span></div>`;el.addEventListener("click",()=>bukaPanelKampung(index));return el;}
function renderGrid(list,k=""){grid.innerHTML="";const f=document.createDocumentFragment();list.forEach(({item,index})=>f.appendChild(buatKartuDistrik(item,index,k)));grid.appendChild(f);}
function bukaPanelKampung(index){indexAktif=index;const item=DATA_DISTRIK[index];panelKampungJudulTeks.textContent=`Kampung di Distrik ${item.distrik}`;daftarKampungEl.innerHTML=item.kampung.map((k,i)=>`<li><a class="tautan-kampung" href="${buatTautanKampung(k.kode)}" target="_blank" rel="noopener"><span class="tautan-kampung__nomor">${nomorDua(i+1)}</span><span class="tautan-kampung__nama">Kampung ${k.nama}</span><i class="fa-solid fa-arrow-up-right-from-square tautan-kampung__ikon"></i></a></li>`).join("");panelKampung.hidden=false;document.querySelectorAll(".kartu-distrik").forEach(e=>e.classList.toggle("kartu-distrik--aktif",Number(e.dataset.index)===index));panelKampung.scrollIntoView({behavior:"smooth",block:"nearest"});}
function tutupPanelKampung(){indexAktif=null;panelKampung.hidden=true;document.querySelectorAll(".kartu-distrik").forEach(e=>e.classList.remove("kartu-distrik--aktif"));}
tombolKembali.addEventListener("click",tutupPanelKampung);
function cariDanFilter(raw){const q=raw.trim().toLowerCase();tombolResetCari.classList.toggle("tampil",q.length>0);if(!q){infoHasil.textContent=`Menampilkan seluruh ${DATA_DISTRIK.length} distrik.`;renderGrid(DATA_DISTRIK.map((item,index)=>({item,index})));return;}const hasil=[];DATA_DISTRIK.forEach((item,index)=>{if(item.distrik.toLowerCase().includes(q)||item.kampung.some(k=>k.nama.toLowerCase().includes(q)))hasil.push({item,index});});infoHasil.textContent=hasil.length?`Ditemukan ${hasil.length} distrik cocok dengan "${raw}".`:`Tidak ada distrik atau kampung yang cocok dengan "${raw}".`;renderGrid(hasil,q);if(hasil.length===1)bukaPanelKampung(hasil[0].index);else tutupPanelKampung();}
inputCari.addEventListener("input",e=>cariDanFilter(e.target.value));tombolResetCari.addEventListener("click",()=>{inputCari.value="";cariDanFilter("");inputCari.focus();});
const tombolMenuHp=document.getElementById("tombolMenuHp"),navHp=document.getElementById("navHp");tombolMenuHp.addEventListener("click",()=>{const t=navHp.classList.toggle("terbuka");tombolMenuHp.setAttribute("aria-expanded",String(t));});navHp.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navHp.classList.remove("terbuka");tombolMenuHp.setAttribute("aria-expanded","false");}));
function animasiAngka(el,target,d=1200){const s=performance.now();function tik(n){const p=Math.min(1,(n-s)/d);el.textContent=Math.round(p*target);if(p<1)requestAnimationFrame(tik);}requestAnimationFrame(tik);}
document.addEventListener("DOMContentLoaded",()=>{cariDanFilter("");document.getElementById("tahunFooter").textContent=new Date().getFullYear();const e=document.getElementById("angkaKampung");if(e)animasiAngka(e,57);});
(function(){const top=document.getElementById("topbar"),up=document.getElementById("tombolKeAtas");function s(){const y=window.scrollY||document.documentElement.scrollTop;if(top)top.classList.toggle("topbar--melayang",y>40);if(up)up.classList.toggle("tampil",y>400);}window.addEventListener("scroll",s,{passive:true});s();if(up)up.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));})();
