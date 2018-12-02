const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NTE4NDg5Mzc4MDc5ODk5Njc2.DuVn_w.mufzboqtlWlvOg_4Fh_j9Ur_oAU');

var prefix = 'y!'
client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by Ahmed');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          

client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| ✅  | ❤  تم ارسال الرابط على الخاص  ")
        .setFooter("Spring-Team")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط 
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:shyboy_05")
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
            if (message.content.startsWith("y!rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('رابط | للحصول علي رابط دعوه لـ السيرفر')
.addField('رابط | للحصول علي رابط دعوه لـ السيرفر')
.addField('افتار | لرؤيه الصورة الخاصه بك او بشخص أخر')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')//Mal_Team
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);//Mal_Team
    }
});
client.on('message', message => {
    if (message.content.startsWith("افتار")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
Malicious™ © :arrow_down:
client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('.abc')){
                if (message.author.id !== '518484338707529728') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });
client.on('message', message => {
                           if (message.content.startsWith("معلومات البوت")) {
                    let embed = new Discord.RichEmbed()
               .setThumbnail(message.author.avatarURL)
               .addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
               .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               .addField('الرومات📚 ',`[${client.channels.size}]`)
               .addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`)
           .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
               .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true) 
               .addField(`G A | ● ØF ●`)
               .setColor('#7d2dbe')
                 message.channel.sendEmbed(embed);
                   }
               });
