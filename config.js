const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349098281393";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_59_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK0QrQ09IRUErZVEwOVZIZk84dGhEb0FVb1I4ckp6K256U3l3bkhpUXFyUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGhoVFY1M2FRaE9mZDdyLUpnUUxMQVwiLFxuICBcInBob25lSWRcIjogXCIyNmZkNTEwZS03N2Y4LTRmZDgtYTYzMC05YmI4YWM1Yjc3NTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTIzLFxuICAgICAgMTgyLFxuICAgICAgNzcsXG4gICAgICAyOSxcbiAgICAgIDI0NyxcbiAgICAgIDIzMCxcbiAgICAgIDUxLFxuICAgICAgNDUsXG4gICAgICAxODUsXG4gICAgICAxMDksXG4gICAgICAxNjIsXG4gICAgICAyNTQsXG4gICAgICA1LFxuICAgICAgMTg3LFxuICAgICAgMjksXG4gICAgICA4MSxcbiAgICAgIDE4NCxcbiAgICAgIDYzLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDIwMSxcbiAgICAgIDQ3LFxuICAgICAgNDQsXG4gICAgICAyMjMsXG4gICAgICAxNDEsXG4gICAgICAxNDMsXG4gICAgICAxMDEsXG4gICAgICAxMzEsXG4gICAgICAxMDgsXG4gICAgICAxNDcsXG4gICAgICAyNTQsXG4gICAgICAwLFxuICAgICAgMTIzLFxuICAgICAgMCxcbiAgICAgIDE5MyxcbiAgICAgIDE3NSxcbiAgICAgIDEzOSxcbiAgICAgIDg2LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNTRU03Qlk2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDk4MjgxMzkzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzcxNTg2NTIwNTE1NjE6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdKZ2RzQkVNUDduTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5OENyZTFnMTlzVzFHWlJza0F2RXRERWtidmg0cFNzM05BbmJtR3VJckVRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImo3MEduTk0zVGV1dTNPVDFKbEJPYzdmcS9vNmE3bzdlRFJ0MzhieXc5aGJVWmUzK1ZMMHJTVmtCQmlwaVFwT3RmaklmVWN5eWlmU1EvNVd6aTdwakJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJQWUlEWC9zR2xpQ0h6MVhEbi9VTmhoRzRvNnk5YUxGbTNFYkpQUEpqK3hzd01ZU3c4eTcwd1U4M3RxL1RFMzRGaEJidGlpTEpmcTRhaFVRRGd1M0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwOTgyODEzOTM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMzYzNTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
