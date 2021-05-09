// ==UserScript==
// @name         LainTSX Korean Subtitle
// @namespace    http://cyle.xyz
// @version      0.94
// @description  Make me sad. Make me mad. Make me feel alright?
// @author       Cyle
// @match        https://3d.laingame.net/
// @icon         https://www.google.com/s2/favicons?domain=laingame.net
// @grant        none
// ==/UserScript==

function replaceVTT()
{
    document.querySelector('#media').crossOrigin = 'anonymous';
    const trackName = document.querySelector('#track').src.substr(37,).split(`.`)[0]
    const trackPrefix = trackName.replace(/[0-9]/g,'');
    let newVTT = 'https://raw.githubusercontent.com/CyleAR/web-script-lain/master/Translations/' + trackPrefix + '/' + trackName + '.vtt';
    document.querySelector("#track").src = newVTT;
    document.querySelector("#subtitle").style.fontFamily = "nanum gothic";
    document.querySelector("#subtitle").style.fontSize = '28px';
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

function loadCSS(){

}


(function() {
    function scanner(){
        //console.log("F scanner Started");
        let scanInterval = setInterval(() => {
            let target = document.querySelector('#track');
            if(!target){
                clearInterval(scanInterval);
                start();
                return;
            }
        },100 );
    }

    function start(){
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

    loadCSS();
    start();
})();