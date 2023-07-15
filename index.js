const { Telegraf } = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const binarySearchString = `
const binarysearch=function search(arr, x) {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return undefined;
}`

try{
    bot.start((ctx) => ctx.reply('Welcome to Vikas bot'));
bot.command('binarysearch', (ctx) => ctx.reply(binarySearchString)); 
bot.command('toplinuxcommands',(ctx)=>ctx.reply('ls grep pwd cd'));
bot.on('sticker', (ctx) => ctx.reply('❤️'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
// bot.command('quit', async (ctx) => {
//     // Explicit usage
//     await ctx.telegram.leaveChat(ctx.message.chat.id);
  
//     // Using context shortcut
//     await ctx.leaveChat();
//   });
// bot.on(message("text"), ctx => ctx.reply("i dont understand humans"));
// bot.on(message(param.), ctx => ctx.reply("i dont understand humans"));
bot.on('text', (ctx) => {
    console.log(ctx.update.message);
    if(ctx.update.message.text == 'I love you') {
        ctx.reply('love you too broo');
    } else {
        ctx.reply('i don\'t understand humans')
    }
});


bot.launch();






}catch{
    console.log("unexpected command") 
}




