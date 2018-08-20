# Intel_Bot
Developer: Bradley knaysi 
Email: bak9cu@virginia.edu

Purpose: Create a Slack chatbot to retrieve Threat Intelligence data. 

Technical: Coded in JavaScript (Node.js) with the cheerio API. Coded search and parse methods to traverse web file databases. Coded methods to send data to chatbot on a Slack page, along with methods to read user text and react.

Directions for integrating chatBot.js into a Slack Workspace...

1) Running the SlackBot can be done by installing the botkit-starter-slack kit, which can be found at https://github.com/howdyai/botkit-starter-slack. Installing botkit directions under 'Install Botkit' section of the page!

2) Place the chatBot.js file in the botkit-starter-slack folder (which after completeing the botkit-starter-slack installation) will be located in the computer's 'Users' folder (Note: the 'Users' folder name will be dependent on the user logged in on your computer). 

3) Connect the bot to a slack page by navagating to your slack workspace's app directory (https://your-slack-workspace.slack.com/apps), then navagating to the 'Manage' page (located at the top of the page). 

4) Next clicking on the 'Custom Integrations' tab, then click the 'bots' tab. 

5) Finally you can click the big green 'Add Configuration' button and create a username for the bot (I used 'intelligence'). On the following page, change the 'API Token' setting to the 'token' variable in chatBot.js. 

6) Once Saved, the user can open up both the slack workspace (https://your-slack-workspace.slack.com/messages) and a terminal window on your computer. 

7) In the terminal, navigate to your botkit-starter-slack folder in the directory (most likely enter command 'cd botkit-starter-slack') then enter in the command (node chatBot.js) to run the file. 

8) Going back to your slack workspace, you should now be able to type in the chat '@intelligence help' to see available commands. Note that '@intellegence' depends on the username you gave your slackbot during the 'Add Configuration' step.

NOTE: When asking the chatBot for information, always use the '@intellegence' (or @ whatever username you gave the bot) in the message.
