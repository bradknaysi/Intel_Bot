/**
 * Developer: Bradley Knaysi
 * Email: bak9cu@virginia.edu
 */

var Botkit = require('botkit'); 

// creates a new Botkit slackbot controller
var controller = Botkit.slackbot();

// creates a new bot
var bot = controller.spawn({
  token: 'xoxb-263572537764-cvRnWioTEcEorFjHrN0vYo42'
});

// tries to connect to Slack, if not throws exception or timesout
bot.startRTM(function(err, bot, payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

// Reading webpage
var request = require('request-promise');
var cheerio = require('cheerio');

// loads the request-promise result into cheerio
var load = {
  url: `http://rules.emergingthreats.net/blockrules/`,
  transform: function (body) {
    return cheerio.load(body);
  }
};
 
controller.hears('help',['direct_message','direct_mention','mention'], function(bot,message) {
 
  bot.reply(message,'List of commands include: help, FileLinks, OpenLink: (FileLink)');
});

controller.hears('FileLinks',['direct_message','direct_mention','mention'], function(bot,message) {

    // passing cherrio loaded object into request-promise, then retrieving file links
    request(load)
        .then(function ($) {
            var links = [];
            $('a').each(function() {
              var text = $(this).text();
              var link = $(this).attr('href');
              // checking for equality here filters out unwanted links
              if(text === link){
                links.push(link);
              };
            });
            var string_links = "";
            for (var i = 0; i < links.length; i++) {
                string_links += links[i] + ", ";
            }
            bot.reply(message, string_links);
        })
        .catch(function (error) {
            bot.reply(message, 'Unexpected error retrieving webpage');
        });
    });

controller.hears('OpenLink: ',['direct_message','direct_mention','mention'], function(bot,message) {
    
    //NOTE: I could not figure out how to parse an arbitrary message from the user to open sublinks
    
    
        // passing cherrio loaded object into request-promise, then retrieving file links
    request(load)
        .then(function ($) {
            var m = message;
            var s = JSON.stringify(m);
            bot.reply(message, "Method could not be solved... see chatBot.js code");
//            bot.reply(message, m + typeof m + '    ' + s + typeof s);
//            var link = 'http://rules.emergingthreats.net/' + m.substring(13);
//            request(link, function(error, result, html){
//                if (error) {
//                    bot.reply(message, 'Unexpected error retrieving webcontent');
//                }
//                
//                data = cheerio.load(html);
//                
//                bot.reply(message, 'Link content: ' + data.text());
//            });
        })
        .catch(function (error) {
            bot.reply(message, 'Unexpected error retrieving webpage');
        });
});
