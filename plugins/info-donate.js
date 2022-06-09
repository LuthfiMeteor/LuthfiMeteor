let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
`🇮🇳 ᴅᴏᴍᴇsᴛɪᴄ ᴩᴀʏ :
⮕ ₹ ᴜᴩɪ – dineshvalor@apl
★ sᴄᴀɴ ǫʀ ᴄᴏᴅᴇ ﹠ ᴅᴏɴᴀᴛᴇ ᴠɪᴀ
ᴩᴀʏᴛᴍ, ᴀᴍᴀᴢᴏɴ ᴩᴀʏ , ʙʜɪᴍ, ғʀᴇᴇᴄʜᴀʀɢᴇ, ɢᴩᴀʏ ﹙ɢᴏᴏɢʟᴇ-ᴩᴀʏ﹚, ᴍᴏʙɪᴋᴡɪᴋ, ᴍʏᴊɪᴏ, ᴩʜᴏɴᴇᴩᴇ, ᴇᴛᴄ.

💱 ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴩᴀʏ :
⮕ PᴀʏPᴀʟ
★ ᴄʟɪᴄᴋ ᴏɴ ᴩᴀʏᴩᴀʟ ʟɪɴᴋ ᴛᴏ ᴍᴀᴋᴇ ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴛʀᴀɴsᴀᴄᴛɪᴏɴ.`, './media/donate.jpg', 'https://www.paypal.me/DineshValor', 'PᴀʏPᴀʟ', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler