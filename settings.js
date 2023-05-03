const chalk = require("chalk")
const fs = require("fs")
require("./lib/vn")
require("./scrape/tiktok")
// Info Owner & Bot
global.ownerNomor = '6281398274790'
global.ownerName = 'Zeltoria'
global.ownerNumber = ["6281398274790@s.whatsapp.net"]
global.packname = `Rainchy - MD`
global.author = `DimsT`
global.botName = "Rainchy - MD"
global.wm = "Rainchy By Dims"
global.creator = "6281398274790@s.whatsapp.net"
global.fake = `Rainchy - MD`
// Info Payment
global.gopayno = "-"
global.danano = "-"
global.ovono = "6281398274790"
// Info Function 
global.hituet = 0
global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.autoreadsw = true
global.mess = {
    wait: '_Sedang Di Proses, Mohon Tunggu_',
    succes: 'Done >,<',
    admin: 'Fitur Ini Khusus Admin Grup!!!',
    botAdmin: 'Jadikan Aku Admin Terlebih Dahulu!!!',
    owner: 'Kelakuan, Inikan Fitur Khusus Ownerku!!!',
    group: 'Hanya Bisa Di Gunakan, Di Dalam Grup!!!',
    private: 'Hanya Bisa Di Gunakan, Di Dalam Chat Pribadi!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Maaf Kak, Terjadi Kesalahan, Silahkan Hubungi Owner...',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Tap Di Bawah Untuk Beli Premium',
}
// Nah Ini Jangan Di Tiru Ya Adik Adik :v
global.bad = ["anjing","Anjing","Memek","Asu","Asw","Bangsat","Tolol","Goblok","Gblk","Ajg","Mmk","memek","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Rainchy',]
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.qrisdonate = fs.readFileSync(`./image/qris.jpg`)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})