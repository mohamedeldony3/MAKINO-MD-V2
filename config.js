const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"6EQFCK45h0SVypeomn30ZK5HVS0Vlus0ubkl2j7Yqmk="},"public":{"type":"Buffer","data":"2oJ/0ddCl76BNZz0lO5602nfrmX8hB0KvnTQgKZnljY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OFnvXuO/2IgPg1hKVH7PWuZgnHSwfSLh5PjEUxABWE0="},"public":{"type":"Buffer","data":"tQZbVqGUY+FgFbybbFtLIIQ5WumGOu2qb03BA7FKVEo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MHYvj0cRgVKq0x/abD5L7buVdNUd4cGle+risuvE9Ww="},"public":{"type":"Buffer","data":"ZNiFYm/3BdqWqB+UZlW8+qNwzvqbKlZTKSohTsuKhRo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"QOKK2CevQMUC9pP6UwZYma18jRdiRagj0sD7jrAlf0I="},"public":{"type":"Buffer","data":"NBMeRRfaHeStH6Y4g9RCa7GXpBu8pUb8Vs1UyFg6OHc="}},"signature":{"type":"Buffer","data":"VT1Cb0G75hEldDPHy8vUulEnHcHdshuyLCcqagBPZ3xDLkaGxZFLLL9NNvTQ2iqlsfyCVw9eXHdvq3c0nF1NCw=="},"keyId":1},"registrationId":189,"advSecretKey":"Ul1dhCF7H6TH1/t4IoWAsdbyhogbnNul9v9k60OyBCs=","processedHistoryMessages":[{"key":{"remoteJid":"201288698650@s.whatsapp.net","fromMe":true,"id":"52A5D7879F2F637BA50077FCDF2E5BFA"},"messageTimestamp":1719932009},{"key":{"remoteJid":"201288698650@s.whatsapp.net","fromMe":true,"id":"4962FA3CAEB7081302FA3CAC51B8D305"},"messageTimestamp":1719932009},{"key":{"remoteJid":"201288698650@s.whatsapp.net","fromMe":true,"id":"8FE94F77F8620CCC8B9F7739C7FEA961"},"messageTimestamp":1719932011},{"key":{"remoteJid":"201288698650@s.whatsapp.net","fromMe":true,"id":"DE38000E1FAEC5414E7EFD5F9D06CBD9"},"messageTimestamp":1719932012}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"-OcqGugEQEuspLs90AKcCQ","phoneId":"69d5f7ce-0dcd-4acc-8d47-d864fbcb288c","identityId":{"type":"Buffer","data":"Vjff8WXGDwQDZYitBllayKqvVlc="},"registered":true,"backupToken":{"type":"Buffer","data":"5E3tkLvTM8pzOCnddxTLqH6uN/g="},"registration":{},"pairingCode":"CVX12FB4","me":{"id":"201288698650:1@s.whatsapp.net","name":"ZenonBot"},"account":{"details":"CITL/PcCEOWokLQGGAEgACgA","accountSignatureKey":"pWowpnPr6m2qifQdSYat1uJ7dfVh3ckkKpYw7zOFjyk=","accountSignature":"mHkrBDsGv3lD0Pf/8p/jDHPV50GLCG4AYQCojDjaRh5p7uKhMYGMXZmWq1tMfnNXorGh/91GWukoV3ozgkTQBA==","deviceSignature":"teAFT7M6x80URSnfyKjXOAf9AvNAv2I/7dI1zLpnB+DV2gv9sVcuD02krVanTE5TTb9k6hRjlDenwzo+3VxCCA=="},"signalIdentities":[{"identifier":{"name":"201288698650:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaVqMKZz6+ptqon0HUmGrdbie3X1Yd3JJCqWMO8zhY8p"}}],"platform":"smba","lastAccountSyncTimestamp":1719932007,"myAppStateKeyId":"AAAAAESC"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
