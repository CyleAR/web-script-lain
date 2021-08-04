// ==UserScript==
// @name         LainScript
// @namespace    http://cyle.xyz
// @version      0.01
// @description  lainTSX 한글패치 전용 스크립트
// @author       Cyle
// @match        https://3d.laingame.net/
// @icon         https://www.google.com/s2/favicons?domain=laingame.net
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( "@import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);" );
GM_addStyle ( "#subtitle { font-family: Nanum Gothic; font-size: 28px !important; word-break: keep-all;}" );

const Header = `<a href="#/">메인</a><a href="#/notes">노트</a><a href="#/game">시작</a><a href="#/guide">안내서</a><a href="https://discord.com/invite/W22Ga2R">디스코드</a><a href="#/options">옵션</a>`;
const Header_paragraph = `이 사이트는 다국어 지원을 목적으로 Serial Experiments Lain PSX 게임을 웹으로 재이식 해둔 사이트입니다.<br>게임을 시작하기 전에 <a href="#/notes">노트</a> 페이지를 읽어보는 것을 잊지 말아주세요.<br><br>`;
const faq = `FAQ:<br> <br>Q: <span class=\"cool-text\">이 게임 이해가 잘 안가요.</span><br>A: <span>좋아요! 그건 이 게임이 제대로 작동하고 있다는 뜻이에요.</span><br> <br>Q: <span class=\"cool-text\">게임이 너무 혼란스러워서 내가 뭘 하고있는지도 모르겠어요.</span><br>A: <span><a href=\"/#/guide\">안내서</a>를 읽어보세요. 이건 게임을 이식하는 동안 맞춰본 이 게임에 대한 제 해석일 뿐이고, 틀릴 수 있다는 걸 명심하세요.</span><br> <br>Q: <span class=\"cool-text\">소스 코드?</span><br>A: <span><a href=\"https://github.com/ad044/lainTSX\">깃허브에 있어요.</a></span><br> <br>Q: <span class=\"cool-text\">버그를 찾았어요/ 제안이 있어요/ 기타등등.</span><br>A: <span>저희 <a href=\"https://discord.com/invite/W22Ga2R\">디스코드 서버</a>에 접속해서 저희에게 알려주세요!</span><br> <br>Q: <span class=\"cool-text\">게임을 오프라인으로 실행할 수 있나요?</span><br>A: <span>네, <a href=\"https://laingame.net/offline.html\">이 안내서</a>를 따라 해보세요.</span><br> <br>`;
const Notes_performance = `<td><p>성능</p></td><td><p>이 게임은 Chromium, Chrome, Edge, Brave, Opera, Iridium, Vivaldi 등 크로미움 기반 브라우저에서 최고의 성능을 발휘해요. 최적의 경험을 위해서 그중 하나를 사용하는 것이 좋아요. 이건 특히 좋지 않은 사양의 기기를 사용하는 경우에 해당하며, 그러한 기기에서 Linux를 사용하는 경우엔 Firefox의 WebGL 구현에 한동안 문제가 있었기 때문에 더욱 그렇습니다.<br><br>이 게임을 처음 플레이하는 것이라면, 위에 언급한 요인 때문에 처음 로딩하는데 시간이 걸릴 수 있어요. 검은 화면이 보이면 그냥 잠깐 기다리세요. 브라우저가 모든 애셋을 캐시한 후에는 웹 사이트 방문이 훨씬 빨라집니다.</p></td>`;
const Notes_sounds = ``;
const Guide = `1998년에 출시한 과소평가된 플레이스테이션 게임, <i>Serial Experiments Lain</i>의 웹 기반, 오픈 소스, 다국어 개조 버전인 lainTSX에 어서오세요. 캐릭터 디자이너 요시토시 아베와의 인터뷰에 따르면, 이 게임은 동명의 더 유명한 애니메이션이 방영하기 전부터 개발이 시작되었다고 해요. 이건 SEL이 미디어 믹스를 노렸다는 걸 의미하죠. 안타깝게도, 게임은 애니메이션 만큼 흥행하지 못하고 망해버렸어요. 물론 당신은 게임이나 애니를 먼저 경험할 수 있지만, 애니메이션을 먼저 보았다면 더 말이 될 거에요.<br><br>실제로 어떻게 lainTSX를 플레이 하는지에 대해선 설명하기 좀 까다로워요. 비록 후자에 가깝긴 해도, 이건 사실 진짜 비디오 게임이 아니며 비주얼 소설이라고 부르기도 힘들어요. "게임 플레이"는 메뉴에서 파일을 선택하며 최종적으로 모든 파일을 경험하는 것을 중심으로 전개되어요.<br><br>파일 분류는 다음과 같아요:<br>Touko’s Diary (Tda) - 토우코의 개인적인 생각<br>Lain’s Diary (Lda) - 레인의 개인적인 생각.<br>Counseling (Cou) - 토우코와 레인의 대화.<br>Diagnosis (Dia) - 레인에 대한 토우코의 진단.<br>Digital Camera (Dc) - 짧은 영상.<br>Polytan (P2) - 레인의 곰인형, 폴리탄의 부품.<br>Saisei-kun (SSkn) - 더 많은 노드에 접근하기 위해 필요함.<br>Gate Passes (GaTE) - B 사이트에 진입하기 위해 필요함.<br>Talk (TaK) - 레인의 임의의 말.<br><br>게임을 시작하면, 파랑색 타원으로 가득찬 기이하고 투박한 허브를 볼 수 있을 거에요.이것이 메인 메뉴이니, 적응하는게 좋을 거에요. 그 타원들은 노드라고 하며, 특정 파일 하나하나를 나타내요. 파랑색 노드들은 아직 보지 않았다는 것을 의미하고, 회색 노드는 이미 보았다는 걸 뜻해요. 이미 본 노드가 여전히 파랑색이면, 그건 파일을 끝까지 듣거나 보지 않았다는 걸 의미해요. 화면 오른쪽 상단에 클립이 얼마나 진행되었는지 보여주는 진행 표시줄이 있으니 파일을 떠나기 전에 확인하는 걸 추천해요.<br><br>If you try to access a node by selecting it, there’s a good chance you’ll be greeted with an animation of Lain either knocking on the node with no result, knocking on the node and falling on her face, or getting shot at with lasers coming from the node. This is the only real puzzle that the game provides you with. What you need to do is access all the SSkn files in numerical order, meaning that you’re gonna have to search through four of these nodes starting from the very bottom of the map. There are also six P2 files, and after accessing them all you will unlock two more files. The GaTE files are the last collectable, and collecting all four will unlock Site B; Site B is another area that can be accessed by going to the menu and selecting “Change”, although I wouldn’t recommend doing this quite yet.<br><br>Now that you have all these files at your disposal, you’re probably extremely overwhelmed. “Oh no,” you might be saying to yourself. “How will I be able to experience this story in a streamlined, linear order?” Try as much as you want to go in a straightforward path, but the game will constantly discourage you. There is no direct order to experience everything in, even with the individual files being numbered and each level being a direct progression from the last. Even having gone through all the collectibles and upgrades, there’s still a ton of stuff you haven’t yet unlocked. As you chug through the game, more and more files will pile up. On top of this, each audio file contains three key words of literal or thematic importance, and each word brings you to a file that will most likely be on a completely different level. I strongly believe that part of the artistic vision behind this game was to have players jump around the map and experience it in their own unique order through whichever key words or plot elements they find themselves most interested in. Take this however you want and go through the files in whatever way you find the most engaging. Personally, I took full advantage of this unique system and found myself loving the game even more for it. It becomes a bit tedious when you only have a few nodes left since you’re booted so often to files you’ve already gone through, so at that point I just directly exited out of files after listening to them and selected the blue node closest to me.<br><br>Once every single node on all twenty-two levels has become gray, it’s time for you to go to Site B! This is a direct continuation of the story in Site A, and there are only thirteen levels this time around. There are no P2 or GaTE files in Site B, but you will have to find three more SSkn files before you can freely access everything you see. There’s also a one-shot manga called Serial Experiments Lain: The Nightmare of Fabrication that takes place sometime during the events of Site B, so you’re gonna want to read that.<br><br><br>Everything below this line is post-game, so you should have watched the ending before reading this final paragraph.<hr>After watching the final cutscene and pressing continue, you will be booted back to Site A. This time, there are a ton of added blue nodes! While some of these are useful or add to the story, there’s a new file type labeled TaK which is pretty much just a five-second quote from Lain. A majority of these new nodes are TaK files, making the post-game an absolutely tedious grind. If you want to unlock even more stuff, you will have to go through each and every one of these; there are one-hundred and twenty-one in total, counting those on both sites. After all your nodes are gray once again, watch the ending and you’ll get the remaining nodes—sixty-one of which are more TaK files. You get very, very few important files. If you grind your way through all of these and watch the ending once again, you’ll get… nothing. This is it. You’re done. Yeah, the post-game isn’t great to say the least, so you decide if you’re Lain enough to complete it.`;


function replaceVTT() //VTT Files replacer
{   
    const vttLink = 'https://raw.githubusercontent.com/CyleAR/web-script-lain/master/Translations/';
    document.querySelector('#media').crossOrigin = 'anonymous';
    const trackName = document.querySelector('#track').src.substr(37,).split(`.`)[0];
    const trackType = trackName.replace(/[0-9]/g,'');
    let newVTT = vttLink + 'ko/' + trackType + '/' + trackName + '.vtt';
    document.querySelector("#track").src = newVTT;
    return;
}

function scanner(){
    let scanInterval = setInterval(() => {
        let target = document.querySelector('#track');
        if(!target){
            clearInterval(scanInterval);
            startTrackScan();
            return;
        }
    },100);
}

function startTrackScan(){
    let startScanInterval = setInterval(() => {
        let target = document.querySelector('#track');
        try{
            if(target.src){
                clearInterval(startScanInterval);
                scanner();
                replaceVTT();//if #track exist, try replace vtt files
                return;
            }
        }catch{}
    },100);
}

(function() { //Script Start from here
    function headScanner(){
        let scanInterval = setInterval(() => {
            const target = document.querySelector("head > title");
            
            if(target.innerText === "< index >"){
                let root = document.querySelector("#root");
                root.children[0].innerHTML = Header;
                root.children[1].innerHTML = Header_paragraph;
                root.children[2].innerHTML = faq;
                clearInterval(scanInterval);
                headScannerSub(target.innerText);
                return;
            }
            if(target.innerText === "< notes >"){
                document.getElementsByClassName("header")[0].innerHTML = Header;
                let root = document.querySelector("#root > table > tbody");
                root.children[0].innerHTML = Notes_performance;
                clearInterval(scanInterval);
                headScannerSub(target.innerText);
                return;
            }
            if(target.innerText === "< guide >"){
                document.getElementsByClassName("header")[0].innerHTML = Header;
                document.querySelector("#root > p").innerHTML = Guide;
                clearInterval(scanInterval);
                headScannerSub(target.innerText);
                return;
            }
            if(target.innerText === "< game >"){
                clearInterval(scanInterval);
                headScannerSub(target.innerText);
                startTrackScan();
                return;
            }
        }, 100);
    }

    function headScannerSub(oldTarget){
        let scanInterval = setInterval(() => {
            const target = document.querySelector("head > title");
            if(oldTarget !== target.innerText){
                clearInterval(scanInterval);
                headScanner();
                return;
            }
        }, 100);
    }
    
    headScanner();
})();