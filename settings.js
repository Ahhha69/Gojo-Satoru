//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+201114227203']
global.premium = ['+201114227203']
global.ownernomer = '+201114227203'
global.ownername = '◜『⚚𝑽𝑰𝑨𝑳𝑼 ¦🎶¦ 𝑶𝑩𝑰𝑻𝑶⚚』◞'
global.botname = '𝑽𝑰𝑨𝑳𝑼 ¦🎶¦𝜝𝑶𝑻'
global.footer = '𝑽𝑰𝑨𝑳𝑼 ¦🎶¦𝜝𝑶𝑻'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.packname = '𝑽𝑰𝑨𝑳𝑼 ¦🎶¦𝜝𝑶𝑻'
global.author = '𝑽𝑰𝑨𝑳𝑼 ¦🎶¦𝜝𝑶𝑻'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'تم✓',
    admin: 'يالعضو الامر ذا للمشرفين🌹',
    botAdmin: 'خليني بوت يا حمار',
    owner: 'الأمر ذا لأوبيتو عمك بس!',
    group: 'إستخدم الأمر ذا بالقروبات بس!!',
    private: 'استخدم الامر بالخاص يا حلو 🌹!',
    bot: 'الامر ذا لاوبيتو عمك بس',
    wait: 'اصبر...',
    error: 'خطأ! ',
    endLimit: 'عدد اوامرك خلصوا ارجع بعد 12 ساعة',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
