var defaultMp3Dir = "VK simply music";

(function() {
    var bitrateOp1 = document.getElementById("sb1").checked;

    var jsonDataSettings = {
        "bitrate": "showHover",
        "mp3Dir": defaultMp3Dir,
    };

    var posData = localStorage.getItem("settings")||null;
    if(posData) {
        posData = JSON.parse(posData);
        if(posData) {
            jsonDataSettings = posData;
        }
    }

    document.getElementById("lsb1").innerHTML = chrome.i18n.getMessage("lsb1");
    document.getElementById("lsb2").innerHTML = chrome.i18n.getMessage("lsb2");
    document.getElementById("settings_title").innerHTML = chrome.i18n.getMessage("settings_title");
    document.getElementById("chromeDownloadFolder").innerHTML = chrome.i18n.getMessage("chromeDownloadFolder");
    document.getElementById("laudioFolder").innerHTML = chrome.i18n.getMessage("laudioFolder");
    document.getElementById("save").innerHTML = chrome.i18n.getMessage("save");

    document.getElementById("audioDownloadFolder").value = jsonDataSettings['mp3Dir'];

    if(jsonDataSettings['bitrate'] == "showHover") {
        document.getElementById("sb2").checked = true;
    }

    if(jsonDataSettings['bitrate'] == "showNone") {
        document.getElementById("sb1").checked = true;
    }

    document.getElementById("save").addEventListener("click", function() {

        var bitrateOp1 = document.getElementById("sb1");
        var bitrateOp2 = document.getElementById("sb2");

        var bitrate = null;

        if(bitrateOp1.checked) {
            bitrate = bitrateOp1.value;
        }
        if(bitrateOp2.checked) {
            bitrate = bitrateOp2.value;
        }


        var mp3Dir = document.getElementById("audioDownloadFolder").value||defaultMp3Dir;

        var jsonDataSettings = {
            "bitrate": bitrate,
            "mp3Dir": mp3Dir,
        };

        localStorage.setItem("settings", JSON.stringify(jsonDataSettings));
        console.log(jsonDataSettings);
        window.close();
    })
})();