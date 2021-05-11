// ==UserScript==
// @name         LainTSX Korean Subtitle
// @namespace    http://cyle.xyz
// @version      0.99
// @description  Make me sad. Make me mad. Make me feel alright?
// @author       Cyle
// @match        https://3d.laingame.net/
// @icon         https://www.google.com/s2/favicons?domain=laingame.net
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( "@import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);" );
GM_addStyle ( "#subtitle { font-family: Nanum Gothic }" );
GM_addStyle ( "#subtitle { font-size: 28px !important; }" );

const vttLink = 'https://raw.githubusercontent.com/CyleAR/web-script-lain/master/Translations/';
const 
var checkLang;

function replaceVTT()
{
    document.querySelector('#media').crossOrigin = 'anonymous';
    const trackName = document.querySelector('#track').src.substr(37,).split(`.`)[0]
    const trackPrefix = trackName.replace(/[0-9]/g,'');
    let newVTT = vttLink + checkLang +trackPrefix + '/' + trackName + '.vtt';
    document.querySelector("#track").src = newVTT;
    //document.querySelector("#subtitle").style.fontFamily = "nanum gothic";
    //document.querySelector("#subtitle").style.fontSize = '28px';
    return;
}

function waitTrackSrc()
{
    //console.log('F waittracksrc started')
    let waitTrack = setInterval(() => {
        let target = document.querySelector('#track');
        try{
            if(!target.src == ''){
                clearInterval(waitTrack);
                replaceVTT();
                return;
            }
        }catch{clearInterval(waitTrack)}
    }, 100);
}

(function() {
    function scanner(){
        //console.log("F scanner Started");
        let scanInterval = setInterval(() => {
            let target = document.querySelector('#track');
            if(!target){
                clearInterval(scanInterval);
                startFirstScan();
                return;
            }
        },100 );
    }

    function startFirstScan(){
        //console.log("F start Started");
        let startScanInterval = setInterval(() => {
            let target = document.querySelector('#track');
            if(target){
                clearInterval(startScanInterval);
                scanner();
                waitTrackSrc(target);
                return;
            }
        },100)
    }

    startFirstScan();
})();