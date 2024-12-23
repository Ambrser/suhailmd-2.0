const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_03_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMixcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaCtVaFNRM3ZVUGJHUTZNRUFJWVlYYkc3OGF5cEhreHR0WDdFUzVKSWtjaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTg4OTExNTE0MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAwOUI3Qzc2MDY3MkU2RUFENUE3NzM2OUUwODYzQzQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDkzNzM4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0cFA2dlVub1RYcU9iNjVhMmtiNl9RXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1ZjNiY2FmLWM2MDgtNDU1My1hYTEwLWQzYThmZTAwOGUxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE1NSxcbiAgICAgIDExNCxcbiAgICAgIDE5OSxcbiAgICAgIDgyLFxuICAgICAgMTAyLFxuICAgICAgMixcbiAgICAgIDQyLFxuICAgICAgMjE0LFxuICAgICAgNSxcbiAgICAgIDE4OCxcbiAgICAgIDczLFxuICAgICAgMjA4LFxuICAgICAgNjcsXG4gICAgICAxLFxuICAgICAgMTMxLFxuICAgICAgNTQsXG4gICAgICAyMTMsXG4gICAgICAyOSxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICA4LFxuICAgICAgODcsXG4gICAgICAyNDYsXG4gICAgICA0NSxcbiAgICAgIDIzNCxcbiAgICAgIDEwLFxuICAgICAgMTI3LFxuICAgICAgMjIwLFxuICAgICAgMTE5LFxuICAgICAgMTQzLFxuICAgICAgMjQ3LFxuICAgICAgMTc0LFxuICAgICAgMjUzLFxuICAgICAgMTE0LFxuICAgICAgMjcsXG4gICAgICA5NixcbiAgICAgIDEzMixcbiAgICAgIDkzLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZWUjg1NU5RXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg4OTExNTE0MDk6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0ODM1MjU5MTYzNDQ1OTo1NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCM8J2QqPCdkKHwnZCdIPCdkJLwnZCh8J2QmvCdkKHwnZCe8J2QnvCdkKdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbUM5Uk1RbjVha3V3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNUWnVVL3ZKcm1mUDhVRnVyZXhXZTl6K05lV050Q0RzTFVnbk1TTlI3aHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMUcrdlpDVlVGNEl4bzZOQ3B0WnBRSHdNT0QwQ0NOc2NzRWxSM0ZrQUIvSW90Nm1oVUFFa0Vka0ovOVYyQkhNVjJ2RGZPNzFURU51T25JWDI2SHZNQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQldsTFZER044NFdhWGhJNDZIem9uS2tVOGtwUzNCcnJVQUh2M20ydmFIbHhZanV3b2k3K00zQjB1aE5HQ3FHMHVJR1BIeDRVeTZQc0V2YXJtMktGZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4ODkxMTUxNDA5OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5MzczNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDeGNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN4Yy5qc29uIjogIntcImtleURhdGFcIjpcIk9iUkVJQTFISlp6MFU5alFGRU5zVmNuUDVrMmhiNHhLdGU5dC9zUFNkekE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE3NjMxNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDkzNzM4MzU3NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
