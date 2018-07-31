(function () {

    var downloader = {
        ajax: function (url, method, body, callback) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open(method, url, true);

            if (method == "POST") {
                xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xmlhttp.setRequestHeader('X-Requested-With', "XMLHttpRequest");
            }

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4) {
                    callback(xmlhttp.responseText);
                }

            };
            xmlhttp.send((method == "POST") ? body : null);
        }
    };

    var injectCss = {
        vk: function () {
            return ".audio_w_covers .audio_row .audio_row__actions {	float: left;	margin-top: 12px !important;	margin-right: 30px;}.audio_w_covers .audio_row .audio_row__duration {	float: right;	visibility: visible !important;}.audio_row .audio_row__actions {	width: 160px;	margin-right: 20px;	margin-top: 2px !important;	text-align: right;}.audio_row__current .audio_inline_player {	margin-right: 28px;}.audio_row .audio_row__duration {	float: left;}.size {	font-size: .8em;	color: #939699;	position: absolute;	right:0;}.audio_row__info .downloadButton {	float: right;	z-index: 9999;}.fngfng {	cursor: pointer;	display: block;	width: 16px;	height: 16px;	background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5MEQyMEMwOTQ4MTExRThBRDExQTE4RTdDMDI0NEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ5MEQyMEMxOTQ4MTExRThBRDExQTE4RTdDMDI0NEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDkwRDIwQkU5NDgxMTFFOEFEMTFBMThFN0MwMjQ0QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDkwRDIwQkY5NDgxMTFFOEFEMTFBMThFN0MwMjQ0QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7cHoRXAAABnklEQVR42qSTzytEURTHz7lzaZrJjBg/82sji8me/MjOAsnCkrISsVEk/gSUhbAR2c3axlKxkOysLUSYaQYjacx7913fO556TTODnPrc23vnfL/3xzuP4/FHiiefKRiuIdIOISKgiQrHPUgQC3pPJylSFSZ5sL9H67sx6h6dJdvKIq/HMWwWMVgBG7LcT+dHuzQ3OULStm3KZDKUtRQMlDGQGMqLGJgcOayg+SDLskgyMwkhCFMO40DFI5czdV8aaOmfIYqtUmoHhQzM2QLus/hhQeHWlnkNgu7NX4PVEgYLbs0OCHkN0mAZnIG6Ega14BIsgpTHwByNnzBMgHmQLSA2XbYE0Cec+L4OwZz7KECzW7gFBsGNR/wAhsCauyC7UhbN0d6pjp6xK2VbMY/gBPSBU3ABesHxd1JZ2cP2ruGr1s6BaekPhOsD4UhUa8fO2/It6C/4LbXTHghFov5gZaN0HKUU2lmWSfMDbefVKnf25b1vMxpobdPKjk+wFoKrkZj5bQcajdFy6uWtIZ56bWHmP7WwozXVVVXcfQowAD+Xf95ZGoAuAAAAAElFTkSuQmCC') no-repeat;	display:block;}";
        }
    };

    var app = {
        isTrueHostname: function () {
            var hostname = document.location.hostname;
            return (hostname.indexOf("vk.com") >= 0) ? true : false;
        },
        config: {},
        runDelegate: function () {
            this.loadModal();

        },

        init: function () {
            console.log("init");
            var self = this;

            if (this.isTrueHostname()) {

                chrome.runtime.sendMessage(chrome.runtime.id, {
                    type: 'getCfg'
                }, function (data) {
                    self.config = data;
                    console.log(data);

                    self.runDelegate();
                });

                this.onModPage(function (body) {
                    self.injectCss(body, injectCss.vk());

                    self.updateLinks(document);

                    setInterval(function () {
                        self.addMassAudioButton(document.getElementsByClassName('audio_pl_snippet__actions')[0]);

                        self.addMassMainMusic(document.getElementsByClassName('audio_page__sort_dd')[0]);
                    }, 1000);

                    self.observer.observe(body, {
                        childList: true,
                        subtree: true
                    });
                });

            }
        },

        injectCss: function (elem, text) {
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = text;
            elem.appendChild(css);
        },

        onModPage: function (callback) {
            setInterval(function () {
                if (document.body && !document.body.classList.contains("loaded_libpng")) {
                    document.body.classList.add("loaded_libpng");
                    callback(document.body);
                }
            }, 500);
        },

        hasClass: function (element, cls) {
            return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        },

        MutationObserver: window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        observer: new this.MutationObserver(function (mutations) {
            var self = this;
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList') {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        const audioClassName = "audio_row";
                        if (app.hasClass(mutation.addedNodes[i], audioClassName)) {
                            app.updateOneAudio(mutation.addedNodes[i]);
                        } else {
                            app.updateLinks(mutation.addedNodes[i]);
                        }


                        if (mutation.addedNodes[i].nodeType != 1 && mutation.addedNodes[i].nodeType != 9)
                            continue;

                    }
                }
            });
        }),

        updateLinks: function (collection) {
            if (collection.nodeType == 1 || collection.nodeType == 9) {
                var audioSelector = '.audio_row';
                var audios = collection.querySelectorAll(audioSelector);
                for (var i = 0; i < audios.length; i++) {
                    this.updateOneAudio(audios[i]);
                }

                var audiosAlbum = collection.querySelectorAll(".audio_pl_item");
                for (var i = 0; i < audiosAlbum.length; i++) {
                    this.addHashEvent(audiosAlbum[i]);
                }
            }
        },

        addHashEvent: function (elem) {
            elem.addEventListener("click", function (e) {
                console.log(e);
                if (!e) return;
                var el = e.currentTarget;
                if (el) {
                    el = el.getElementsByClassName("audio_pl__cover")[0];

                    var string = el.getAttribute("onclick");
                    var result = string.match(/showAudioPlaylist\([^,]*, [^,]*, '([^\']*)', '[^\']*'\);/i);

                    console.log("hash: " + result[1]);
                    localStorage.setItem("hashA", (result[1]) ? result[1] : "");

                }
            });
        },

        updateOneAudio: function (audio) {
            'use strict';
            var link = null;

            var audioActs = audio.querySelector('.audio_row__info');
            if (audioActs.querySelector('.downloadButton')) {
                return;
            }

            var info = this.getAudioInfo(audio);

            var artist = info.artist;
            var title = info.title;

            const stringTitle = artist + " - " + title + ".mp3";

            var downloadButton = document.createElement("div");
            downloadButton.className = "downloadButton audio_act";

            downloadButton.setAttribute("style", "display:block; margin: 17px 5px 0 5px");
            const htmlLink = document.createElement("a");
            htmlLink.className = "downloadButton fngfng";
            htmlLink.setAttribute("download", stringTitle);

            htmlLink.setAttribute("href", link);
            htmlLink.href = "#";

            downloadButton.appendChild(htmlLink);

            const audiosToDownload = {
                artist: artist,
                title: title,
                url: link,
                album: "",
                fullId: audio.dataset.fullId
            };
            var self = this;
            if (htmlLink && this.config.bitrate == "showHover") {
                var size = document.createElement('div');
                size.style = "z-index: 9999; padding: 2px 5px; border: 1px solid #ccc; margin-top: -20px; display: none; background-color: #f2f4f7;";
                size.className = "size";
                size.innerText = "load...";
                htmlLink.parentNode.appendChild(size);

                htmlLink.addEventListener("mouseover", function (e) {
                    size.style.display = "block";

                    if (size.classList.contains("loaded")) return;

                    size.classList.add("loaded");

                    var url = self.getUrlMp3(audiosToDownload.fullId, function (data) {
                        var url = self.parseMp3(data);

                        if (url == 0) {
                            size.innerText = "N/A";
                        } else {
                            url.then(function (link) {
                                self.getSize(link, info.length, size);
                            });
                        }
                    });
                }, false);
                htmlLink.addEventListener("mouseout", function (e) {
                    size.style.display = "none";
                }, false);
            }

            var loader = document.createElement("span");
            loader.innerText = "0%";
            loader.style.display = "none";

            htmlLink.parentNode.appendChild(loader);

            htmlLink.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                var url = self.getUrlMp3(audiosToDownload.fullId, function (data) {
                    var url = self.parseMp3(data);

                    if (url) {
                        url.then(function (link) {
                            chrome.runtime.sendMessage(chrome.runtime.id, {
                                type: 'download',
                                link: link,
                                name: self.getSavePath(audiosToDownload),
                            });
                        });
                    }
                });
            });
            audioActs.insertBefore(downloadButton, audioActs.firstChild);

        },

        getSavePath: function (info) {
            const audioInfo = {};
            audioInfo.album = this.replaceRestrictedSymbols(info.album);
            audioInfo.artist = this.replaceRestrictedSymbols(info.artist);
            audioInfo.title = this.replaceRestrictedSymbols(info.title);

            var filename;
            var onlyFileName = audioInfo.artist.trim() + " - " + audioInfo.title.trim() + ".mp3";
            onlyFileName = onlyFileName.replace(/^ +/, "");

            if (!onlyFileName) {
                onlyFileName = 'Unnamed.mp3';
            }
            if (audioInfo.album) {
                if (audioInfo.album.endsWith(".")) {
                    audioInfo.album = audioInfo.album.substring(0, audioInfo.album.length - 1);
                }
                filename = this.sanitizePathString(audioInfo.album) + "/" + onlyFileName;
            } else {
                filename = onlyFileName;
            }

            return this.config.mp3Dir + "/" + filename;

        },

        bytesToStr: function (length) {
            var b = {0: "PB", 1: "TB", 2: "GB", 3: "MB", 4: "KB", 5: "B"};
            for (var c in b) {
                var d = length / Math.pow(2, 10 * (5 - c));
                if (d >= .5) return d.toFixed(2) + " " + b[c]
            }
            return "0 B"
        },

        getSize: function (link, len, elem) {
            var length = 0;
            if (link) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("head", link, true);

                var self = this;

                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState === 4) {
                        var length = xmlhttp.getResponseHeader("content-length") || xmlhttp.getResponseHeader("Content-Length");

                        var bitrate = length * 8 / 1024 / len;
                        var temp = Math.round(bitrate / 32);

                        elem.innerText = Math.min(32 * temp, 320) + "kbs - " + self.bytesToStr(length);
                    }
                };
                xmlhttp.send(null);
            }
        },

        getAudioInfo: function (audio) {
            var id = audio.getAttribute("data-full-id");
            if (id) {
                const info = JSON.parse(audio.dataset["audio"]);
                return {
                    type: "getAudioInfo",
                    fullId: audio.dataset.fullId,
                    length: info[5],
                    artist: info[4],
                    title: info[3],
                }
            }
        },

        sanitizePathString: function (audioDownloadFolder) {
            audioDownloadFolder = audioDownloadFolder || '';

            audioDownloadFolder = audioDownloadFolder.replace('\\', '/');
            if (audioDownloadFolder.endsWith('/')) {
                audioDownloadFolder = audioDownloadFolder.substring(0, audioDownloadFolder.length - 1);
            }
            return this.replaceRestrictedSymbols(audioDownloadFolder);
        },

        replaceRestrictedSymbols: function (str) {
            if (str && str[0] == '.') {
                str = str.replaceAt(0, '_');
            }
            str = str.replace(/quot;/g, "\"").replace(/<em>/g, '').replace(/<\/em>/g, '').replace('&amp;', '&');
            const array = str.split("");
            for (var i = 0; i < array.length; i++) {
                const number = array[i].charCodeAt(0);
                if (this.isWhiteSpace(number) || number == 173) {
                    array[i] = ' ';
                }
            }
            return array.join("").replace(this.restrictedSymbols, '').trim();
        },

        isWhiteSpace: function (number) {
            return number == 9 ||
                number == 10 ||
                number == 11 ||
                number == 12 ||
                number == 13 ||
                number == 32 ||
                number == 133 ||
                number == 160 ||
                number == 5760 ||
                (number >= 8192 && number <= 8202) ||
                number == 8232 ||
                number == 8233 ||
                number == 8239 ||
                number == 8287 ||
                number == 8232 ||
                number == 12288 ||
                number == 6158 ||
                number == 8203 ||
                number == 8204 ||
                number == 8205 ||
                number == 8288 ||
                number == 65279
        },

        restrictedSymbols: /[|&\/\\+":*?<>]/g,

        setCookie: function (name, value, props) {
            props = props || {};
            var exp = props.expires;
            if (typeof exp == "number" && exp) {
                var d = new Date();
                d.setTime(d.getTime() + exp * 1000);
                exp = props.expires = d
            }
            if (exp && exp.toUTCString) {
                props.expires = exp.toUTCString()
            }
            value = encodeURIComponent(value);
            var updatedCookie = name + "=" + value;
            for (var propName in props) {
                updatedCookie += "; " + propName;
                var propValue = props[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue
                }
            }
            document.cookie = updatedCookie
        },
        z: function (B) {
            var C = "vkmusic-player-data-" + Math.random();
            return new Promise(function (D) {
                var E = document.createElement("script");
                E.text = "\n(function(){\n const player = new AudioPlayerHTML5({onFrequency:function(){}});\n player.setUrl('" + B + "');\n document.body.setAttribute('" + C + "',player._currentAudioEl.src)\n})();\n", document.body.appendChild(E), D(document.body.getAttribute(C)), setTimeout(function () {
                    return document.body.getAttribute(C, "")
                })
            })
        },

        parseMp3: function (responce) {
            var json = responce.split("<!json>")[1].split("<!>")[0];
            var data = JSON.parse(json);
            if (data && data[0] && data[0][2]) {
                var lnk = data[0][2];
                var obj = this.z(lnk);
                return obj;

            }
            return 0;
        },

        getUrlMp3: function (vkId, callback) {
            var body = 'act=reload_audio&al=1&ids=' + vkId;

            this.setCookie("remixcurr_audio", vkId);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://vk.com/al_audio.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('X-Requested-With', "XMLHttpRequest");

            xhr.responseType = 'text';
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState != 4) return;

                if (xhr.status == 200) {
                    callback(xhr.responseText);
                }
            };
            xhr.send(body);
        },

        text: function (response) {
            return response.text()
        },
        n: 0,
        block: false,
        items: [],
        interval: null,
        checkLoadStatus: function () {
            var self = this;
            self.interval = setInterval(function () {
                chrome.runtime.sendMessage(chrome.runtime.id, {
                    type: 'getDownloadStatus'
                }, function (downloads) {
                    if (downloads && downloads.process == 0) {
                        self.startLoadMvp();
                    }
                });
            }, 1000);
        },

        startLoadMvp: function () {
            if (this.items.length == 0) return;
            console.log("count items to download: " + this.items.length);
            var item = this.items[0];
            var self = this;
            var url = app.getUrlMp3(item.fullId, function (data) {
                var url = app.parseMp3(data);

                if (url) {
                    url.then(function (link) {

                        item.url = link;

                        var itemsTmp = [];
                        for (var i in self.items) {
                            if (i == 0) continue;

                            itemsTmp.push(self.items[i]);
                        }

                        self.items = itemsTmp;

                        chrome.runtime.sendMessage(chrome.runtime.id, {
                            type: 'download',
                            link: item.url,
                            name: app.getSavePath(item)
                        });


                    });
                } else {
                    var itemsTmp = [];
                    for (var i in self.items) {
                        if (i == 0) continue;
                        itemsTmp.push(self.items[i]);
                    }

                    self.items = itemsTmp;
                }
            });
        },

        startTimer: false,
        addToDownload: function (list) {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                this.items.push(item);
                console.log("append to download: " + this.items.length);
            }
            if (this.startTimer) return 0;
            this.checkLoadStatus();
        },

        startLoad: function () {
            if (this.block) return;
            if (this.items.length == 0) return;
            var item = this.items[0];
            var url = app.getUrlMp3(item.fullId, function (data) {
                var url = app.parseMp3(data);
                url.then(function (link) {
                    item.url = link;
                    chrome.runtime.sendMessage(chrome.runtime.id, {
                        type: 'download',
                        link: item.url,
                        name: app.getSavePath(item)
                    });


                });
            });

        },

        showModal: function (list) {
            document.getElementById("modal-savefrom").style.display = "block";
            document.getElementById("savefrom-count").innerText = list.length;
            var self = this;
            document.getElementById("start-download-savefrom").addEventListener("click", function () {
                self.addToDownload(list);
            });

        },

        loadModal: function () {
            var url = "chrome-extension://" + chrome.runtime.id + "/modal.html";
            downloader.ajax(url, "GET", null, function (html) {
                var modalScript = document.createElement("script");
                modalScript.src = "chrome-extension://" + chrome.runtime.id + "/js/modal.js";

                var modal = document.createElement("div");
                modal.class = "savefrom-modals";
                modal.innerHTML = html;

                modal.appendChild(modalScript);
                document.body.appendChild(modal);
            });
        },
        addMassMainMusic: function (elem) {
            if (!elem) return;
            if (elem.classList.contains("added")) return;

            var self = this;
            elem.classList.add("added");

            var image = document.createElement("img");
            image.style = "margin: 0px 0px -2px 6px;";
            image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5MEQyMEMwOTQ4MTExRThBRDExQTE4RTdDMDI0NEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ5MEQyMEMxOTQ4MTExRThBRDExQTE4RTdDMDI0NEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDkwRDIwQkU5NDgxMTFFOEFEMTFBMThFN0MwMjQ0QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDkwRDIwQkY5NDgxMTFFOEFEMTFBMThFN0MwMjQ0QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7cHoRXAAABnklEQVR42qSTzytEURTHz7lzaZrJjBg/82sji8me/MjOAsnCkrISsVEk/gSUhbAR2c3axlKxkOysLUSYaQYjacx7913fO556TTODnPrc23vnfL/3xzuP4/FHiiefKRiuIdIOISKgiQrHPUgQC3pPJylSFSZ5sL9H67sx6h6dJdvKIq/HMWwWMVgBG7LcT+dHuzQ3OULStm3KZDKUtRQMlDGQGMqLGJgcOayg+SDLskgyMwkhCFMO40DFI5czdV8aaOmfIYqtUmoHhQzM2QLus/hhQeHWlnkNgu7NX4PVEgYLbs0OCHkN0mAZnIG6Ega14BIsgpTHwByNnzBMgHmQLSA2XbYE0Cec+L4OwZz7KECzW7gFBsGNR/wAhsCauyC7UhbN0d6pjp6xK2VbMY/gBPSBU3ABesHxd1JZ2cP2ruGr1s6BaekPhOsD4UhUa8fO2/It6C/4LbXTHghFov5gZaN0HKUU2lmWSfMDbefVKnf25b1vMxpobdPKjk+wFoKrkZj5bQcajdFy6uWtIZ56bWHmP7WwozXVVVXcfQowAD+Xf95ZGoAuAAAAAElFTkSuQmCC";

            var btn = document.createElement("a");
            btn.classList.add("downloadButton");
            btn.classList.add("fngfng");
            btn.style = "width: 120px;padding: 0 0 0 15px;cursor: pointer;border: none;font-size: 13px;text-decoration: none;display: block;border-radius: 13px;margin-right: 6px;text-align: center;float: left;";
            btn.title = chrome.i18n.getMessage("downloadBtnTitle");
            btn.innerHTML = chrome.i18n.getMessage("downloadBtnIn");
            btn.appendChild(image);

            btn.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();

                var uri = document.location.href;
                var result = uri.match(/audios([0-9-]+)/i);

                if (result[1]) {

                    var post = "access_hash=&act=load_section&al=1&claim=0&is_loading_all=1&offset=0&owner_id=" + result[1] + "&playlist_id=-1&type=playlist";
                    downloader.ajax("https://vk.com/al_audio.php", "POST", post, function (response) {
                        if (response) {

                            var math = response.match(/<!json>(.+)<!>/i);
                            if (math && math[1]) {
                                var json = JSON.parse(math[1]);
                                if (json && json.list) {
                                    var list = [];
                                    for (var i in json.list) {
                                        var track = json.list[i];
                                        if (track) {
                                            var artist = (track[4]) ? track[4] : "";
                                            var name = (track[3]) ? track[3] : "";
                                            var id = (track[0] && track[1]) ? track[1] + "_" + track[0] : "13069493_456239188";
                                            var obj = {artist: artist, title: name, url: null, album: "", fullId: id};
                                            list[i] = obj;

                                        }
                                    }

                                    self.showModal(list);
                                    return 0;

                                }

                            }
                        }
                    });
                }
            });

            elem.appendChild(btn);
        },
        addMassAudioButton: function (elem) {

            if (!elem) return;
            if (elem.classList.contains("added")) return;

            var self = this;
            elem.classList.add("added");

            var image = document.createElement("img");
            image.style = "margin: 0px 0px -2px 6px;";
            image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5MEQyMEMwOTQ4MTExRThBRDExQTE4RTdDMDI0NEFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ5MEQyMEMxOTQ4MTExRThBRDExQTE4RTdDMDI0NEFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDkwRDIwQkU5NDgxMTFFOEFEMTFBMThFN0MwMjQ0QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDkwRDIwQkY5NDgxMTFFOEFEMTFBMThFN0MwMjQ0QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7cHoRXAAABnklEQVR42qSTzytEURTHz7lzaZrJjBg/82sji8me/MjOAsnCkrISsVEk/gSUhbAR2c3axlKxkOysLUSYaQYjacx7913fO556TTODnPrc23vnfL/3xzuP4/FHiiefKRiuIdIOISKgiQrHPUgQC3pPJylSFSZ5sL9H67sx6h6dJdvKIq/HMWwWMVgBG7LcT+dHuzQ3OULStm3KZDKUtRQMlDGQGMqLGJgcOayg+SDLskgyMwkhCFMO40DFI5czdV8aaOmfIYqtUmoHhQzM2QLus/hhQeHWlnkNgu7NX4PVEgYLbs0OCHkN0mAZnIG6Ega14BIsgpTHwByNnzBMgHmQLSA2XbYE0Cec+L4OwZz7KECzW7gFBsGNR/wAhsCauyC7UhbN0d6pjp6xK2VbMY/gBPSBU3ABesHxd1JZ2cP2ruGr1s6BaekPhOsD4UhUa8fO2/It6C/4LbXTHghFov5gZaN0HKUU2lmWSfMDbefVKnf25b1vMxpobdPKjk+wFoKrkZj5bQcajdFy6uWtIZ56bWHmP7WwozXVVVXcfQowAD+Xf95ZGoAuAAAAAElFTkSuQmCC";

            var btn = document.createElement("a");
            btn.classList.add("downloadButton");
            btn.classList.add("fngfng");
            btn.style = "width: 100px;background-color: rgb(81, 129, 184);padding: 7px 16px 8px;cursor: pointer;border: none;color: rgb(255, 255, 255);font-size: 13px;text-decoration: none;display: block;border-radius: 13px;margin-top: 6px;text-align: center;";
            btn.title = chrome.i18n.getMessage("downloadBtnTitle");
            btn.innerHTML = chrome.i18n.getMessage("downloadBtnIn");
            btn.appendChild(image);
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();

                var uri = document.location.href;
                var result = uri.match(/z=audio_playlist([0-9-]+)_([0-9]+)/i);
                if (result[1] && result[2]) {
                    var hashA = localStorage.getItem("hashA") || "";
                    console.log(hashA);
                    var post = "access_hash=" + hashA + "&act=load_section&al=1&claim=0&is_loading_all=1&offset=0&owner_id=" + result[1] + "&playlist_id=" + result[2] + "&type=playlist";
                    downloader.ajax("https://vk.com/al_audio.php", "POST", post, function (response) {
                        if (response) {
                            var math = response.match(/<!json>(.+)<!>/i);
                            if (math && math[1]) {
                                var json = JSON.parse(math[1]);
                                if (json && json.list) {
                                    var list = [];
                                    for (var i in json.list) {
                                        var track = json.list[i];
                                        if (track) {
                                            var artist = (track[4]) ? track[4] : "";
                                            var name = (track[3]) ? track[3] : "";
                                            var id = (track[0] && track[1]) ? track[1] + "_" + track[0] : "13069493_456239188";
                                            var obj = {artist: artist, title: name, url: null, album: "", fullId: id};
                                            list[i] = obj;

                                        }
                                    }
                                    self.addToDownload(list, btn);

                                }

                            }

                        }
                    });

                }
            });
            elem.appendChild(btn);
            return;
        }
    };
    if (document.location.href.match(/https?:\/\/vk.com/)) {
        app.init();
    }
})();