const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : AJ`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : AJ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`AJ Server`,"http://twitch.tv/idk")
client.user.setStatus("dnd")
});

 

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("431132860523741184");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("511551397888524318");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("431132860523741184");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;        

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});




client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 25,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يوم
 استخدامات الرابط : 25**`)

    }
});











client.login(process.env.BOT_TOKEN);
