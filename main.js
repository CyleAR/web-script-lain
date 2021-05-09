function replaceVTT()
{   
    try{
        document.querySelector('#media').crossOrigin = 'anonymous';
        const trackName = document.querySelector('#track').src.substr(37,).split(`.`)[0]
        const trackPrefix = trackName.replace(/[0-9]/g,'');
        let newVTT = 'https://raw.githubusercontent.com/CyleAR/web-script-lain/master/Translations/' + trackPrefix + '/' + trackName + '.vtt';
        document.querySelector("#track").src = newVTT;
        document.querySelector("#subtitle").style.fontFamily = "nanum gothic";
        document.querySelector("#subtitle").style.fontSize = '28px';
    }catch{}
}

function waitTrackSrc(target)
{
    let waitTrack = setInterval(() => {
        if(!target.src == ''){
            clearInterval(waitTrack);
            replaceVTT();
        }
    }, 100);
}


(function() {
    function scanner(target){
        let scanInterval = setInterval(() => {
            if(!target){
                clearInterval(scanInterval);
                start();
            }
        },100 );
    }

    function start(){
        let startScanInterval = setInterval(() => {
            let target = document.querySelector('#track');
            if(target){
                clearInterval(startScanInterval);
                scanner(target);
                waitTrackSrc(target);
            }
        },100)
    }
    start();
})();