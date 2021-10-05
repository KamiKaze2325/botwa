let handler = async m => m.reply(`
╭─「 Donasi • Pulsa & Dana」
│ • Pulsa [082217590187]
│ • Dana [082217590187]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282217590187
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
