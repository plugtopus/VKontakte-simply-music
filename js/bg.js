chrome.runtime.onMessage.removeListener(handleMessage);
chrome.runtime.onMessage.addListener(handleMessage);

var downloads = {};
var goodDownloads = 0;
var badDownloads = 0;
var processDownloads = 0;

var defaultMp3Dir = "VK simply music";

function getCfg() {
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

    return jsonDataSettings;
}

function handleMessage (request, sender, sendResponse) {
    switch (request.type) {
        case "download":
            console.log(request);
            if(request.link && request.name) {
                downloadItem(request.link, request.name, function(donwloadId) {
                    console.log("Download id: " + donwloadId);
                    downloads[donwloadId] = 1;

                    processDownloads = 0;
                    for(var index in downloads) {

                        if(downloads[index] == 1) {
                            processDownloads++;
                        }
                    }
                    sendResponse(donwloadId);
                });
            }
        break;

        case "getDownloadStatus":
            sendResponse({
                "good": goodDownloads,
                "bad": badDownloads,
                "process": processDownloads
            });
            break;
        case "getCfg":
            sendResponse(getCfg());
            break;
    }

    return true;
}

function downloadItem (url, filename, callbackOnComplete) {

    filename = filename.replace(/^\/*/, '');
    chrome.downloads.download({
        url : url,
        filename : strictReplace(filename)
    }, callbackOnComplete);
}

function strictReplace (fileName) {
    return fileName.replace(/[^0-9A-zА-я ()\[\]\-./]+/g, "");
}

chrome.downloads.onChanged.addListener(function (delta) {

    console.log(delta);

    if (delta.state && delta.state.current == "complete") {
        console.log("donwload id: " + delta.id);
        downloads[delta.id] = 2;
    }

    if(delta.state && delta.state.current == "interrupted") {
        console.log("cancel donwload id: " + delta.id);
        downloads[delta.id] = 3;
    }

    if(delta.state && delta.state.current) {
        goodDownloads = 0;
        badDownloads = 0;
        processDownloads = 0;
        for(var index in downloads) {
            if(downloads[index] == 2) {
                goodDownloads++;
            }
            if(downloads[index] == 3) {
                badDownloads++;
            }
            if(downloads[index] == 1) {
                processDownloads++;
            }
        }
    }
});
