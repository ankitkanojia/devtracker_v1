﻿CKEDITOR.dialog.add("cssanimMainDialog",
    function(g) {
        function m(a, d) {
            var c;
            c =
                '\x3cform\x3e\x3cdiv style\x3d" overflow: auto; height: 350px; padding-bottom: 10px; margin-bottom: 10px;"\x3e';
            c += "\x3ctable\x3e";
            var f, g;
            for (f = 0; f < d.length; f += 1)
                c += "\x3ctr\x3e", c += '\x3ctd style\x3d"width:280px;"\x3e', c += d[f].toUpperCase(), c +=
                    "\x3c/td\x3e", c += '\x3ctd style\x3d"text-align:center; width:80px;"\x3e', g =
                    "", 0 <= a.indexOf(d[f]) && (g = "checked\x3dchecked"), c +=
                    ' \x3cinput type\x3d"checkbox" name\x3d"tags" ' +
                    g +
                    ' value\x3d"' +
                    d[f] +
                    '"\x3e', c += "\x3c/td\x3e", c += "\x3c/tr\x3e";
            c += "\x3c/table\x3e";
            c += "\x3c/div\x3e";
            return c += "\x3c/form\x3e"
        }

        function n() {
            var a = "", d = g.config.highlightBGColor;
            if (0 <= g.config.highlightBGColor.indexOf("rgb") && (d = g.config.highlightBGColor, "#" !== d.substr(0, 1))
            )
                var c = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(d),
                    d = parseInt(c[2], 10).toString(16),
                    f = parseInt(c[3], 10).toString(16),
                    c = parseInt(c[4], 10).toString(16),
                    d = "#" +
                    ((1 === d.length ? "0" + d : d) +
                        (1 === f.length ? "0" + f : f) +
                        (1 === c.length ? "0" + c : c));
            f = g.config.customCssFilePath;
            a += '\x3cform\x3e\x3cfieldset style\x3d"border-radius:10px"\x3e';
            a += '\x3clegend style\x3d"font-weight:bold;"\x3e' + h.HBS + "\x3c/legend\x3e";
            a += '\x3ctable style\x3d"width:300px;"\x3e';
            a += "\x3ctr\x3e";
            a += '\x3ctd style\x3d"width:250px;"\x3e';
            a += h.HBGC;
            a += "\x3c/td\x3e";
            a += "\x3ctd\x3e";
            a += '\x3cinput style\x3d"width:50px; height:25px; " type\x3d"color" name\x3d"HLBgColor" value\x3d"' +
                d +
                '"  onchange\x3d"CKEDITOR.plugins.cssanim.setHighLightBgColor(this.value)"\x3e';
            a += "\x3c/td\x3e";
            a += "\x3c/tr\x3e";
            a += "\x3ctr\x3e";
            a += "\x3ctd\x3e";
            a += h.HBW;
            a += "\x3c/td\x3e";
            a += '\x3ctd style\x3d"padding:2px;"\x3e';
            a +=
                '\x3cinput style\x3d"width:40px; border: 1px solid #ccc;" name\x3d"width" type\x3d"number" min\x3d"1" max\x3d"10"  onchange\x3d"CKEDITOR.plugins.cssanim.setHighLightBorder(this.value)"  value\x3d"' +
                parseInt(g.config.highlightBorder) +
                '"\x3e px';
            a += "\x3c/td\x3e";
            a += "\x3c/tr\x3e";
            a += "\x3c/table\x3e";
            a += "\x3c/fieldset\x3e";
            a += "\x3cbr\x3e";
            a += '\x3cfieldset style\x3d"border-radius:10px"\x3e';
            a += '\x3clegend style\x3d"font-weight:bold;"\x3e' +
                h.CustomCSS +
                "\x3c/legend\x3e";
            a += '\x3ctable style\x3d"width:300px;"\x3e';
            a += "\x3ctr\x3e";
            a += '\x3ctd style\x3d"width:50px;"\x3e';
            a += h.cssPath + "\x26nbsp;";
            a += "\x3c/td\x3e";
            a += '\x3ctd style\x3d"width:250px;"\x3e';
            a +=
                '\x3cinput type\x3d"text" style\x3d"width:400px; border: 1px solid #ccc;" name\x3d"cssName" value\x3d' +
                f +
                "\x3e";
            a += "\x3c/td\x3e";
            a += "\x3c/tr\x3e";
            a += "\x3ctr\x3e";
            a += '\x3ctd colspan\x3d"2" style\x3d"text-align:center; padding-top: 8px;color: tomato;"\x3e';
            a += h.cssInfo;
            a += "\x3c/td\x3e";
            a +=
                "\x3c/tr\x3e";
            a += "\x3c/table\x3e";
            a += "\x3c/fieldset\x3e";
            a +=
                '\x3cdiv id\x3d"cssResultsDiv" style\x3d"margin-top:10px; padding:5px; text-align: center; border: #ccc solid 1px; display:none;"\x3e';
            a += "test";
            a += "\x3c/div\x3e";
            return a += "\x3c/form\x3e"
        }

        function r(a) {
            var d = h.irrelevant,
                d = a.getContentElement("tab-parameters-box", "parametersSettings").getElement()
                    .getElementsByTag("input"),
                c,
                f,
                l;
            for (l = 0; l < d.count(); l += 1)
                if (f = d.getItem(l).getNameAtt(), "HLBgColor" === f) {
                    c = d.getItem(l).getValue();
                    break
                }
            l = CKEDITOR.plugins.cssanim.getAllAnimElem(g);
            var m = h.noElements, b;
            b =
                '\x3cdiv style\x3d"width: 90%; height: 1px; background: grey; margin-left: auto;margin-right: auto;"\x3e\x3c/div\x3e\x3cp style\x3d"text-align: center; padding: 5px; color: grey; font-weight:bold;"\x3e';
            b += '\x3cspan style\x3d"color: LightSkyBlue; font-weight:bold;"\x3e' + h.animFromDef + "\x3c/span\x3e";
            b += '\x3cbr\x3e\x3cspan style\x3d"color: cornflowerblue; font-weight:bold;"\x3e' +
                h.animPause +
                "\x3c/span\x3e";
            b += '\x3cbr\x3e\x3cspan style\x3d"color: PaleGreen; font-weight:bold;"\x3e' +
                h.animFromCustom +
                "\x3c/span\x3e";
            b += '\x3cbr\x3e\x3cspan style\x3d"color: orange; font-weight:bold;"\x3e' + h.animBoth + "\x3c/span\x3e";
            b += '\x3cbr\x3e\x3cspan style\x3d"color: Red; font-weight:bold;"\x3e' + h.animUndef + "\x3c/span\x3e";
            b += "\x3cbr\x3e";
            b += "\x3c/p\x3e";
            b +=
                '\x3cdiv style\x3d"width: 90%; height: 1px; background: grey; margin-left: auto;margin-right: auto;"\x3e\x3c/div\x3e';
            b += '\x3cp style\x3d"text-align: center; padding: 5px; color: grey; font-weight:bold;"\x3e';
            b += h.dblClick;
            b += "\x3c/p\x3e";
            b +=
                '\x3cdiv style\x3d"width: 90%; height: 1px; background: grey; margin-left: auto;margin-right: auto;margin-bottom: 10px;"\x3e\x3c/div\x3e';
            b += '\x3cdiv style\x3d" width: 600px; overflow: auto; height: 400px;"\x3e';
            b += "\x3ctable\x3e";
            b += "\x3ctr\x3e";
            b +=
                '\x3cth style\x3d"border: 1px solid gray; text-align:center; padding:5px; font-weight:bold; background-color: lightgray;"\x3eTag\x3c/th\x3e';
            b +=
                '\x3cth style\x3d"border: 1px solid gray; text-align:center; padding:5px; font-weight:bold; background-color: lightgray;"\x3eId\x3c/th\x3e';
            b +=
                '\x3cth style\x3d"border: 1px solid gray; text-align:center; padding:5px; font-weight:bold; background-color: lightgray;"\x3eOnLoad\x3c/th\x3e';
            b +=
                '\x3cth style\x3d"border: 1px solid gray; text-align:center; padding:5px; font-weight:bold; background-color: lightgray;"\x3eOnClick\x3c/th\x3e';
            b +=
                '\x3cth style\x3d"border: 1px solid gray; text-align:center; padding:5px; font-weight:bold; background-color: lightgray;"\x3eOnOver\x3c/th\x3e';
            b +=
                '\x3cth style\x3d"border: 1px solid gray; text-align:center; padding:5px; font-weight:bold; background-color: lightgray;"\x3e' +
                h.ral +
                "\x3c/th\x3e";
            b += "\x3c/tr\x3e";
            var p = 0, e = "azure;", n, k, q;
            for (q in l)
                l.hasOwnProperty(q) &&
                (k = l[q], d = h.irrelevant, f = '"\x3e', p += 1, e = "azure", n =
                        k.elem.nodeName.toLowerCase(), 0 > g.config.allowedTags.indexOf(n) && (e = "MistyRose"), b +=
                        '\x3ctr style\x3d"background-color:' + e + ';" ', b +=
                        " onmouseover\x3d\"this.style.backgroundColor\x3d'" +
                        c +
                        "'; CKEDITOR.plugins.cssanim.runHighLightElemById('" +
                        k.elem.id +
                        "'); \"", b += " onmouseout\x3d\"this.style.backgroundColor\x3d'" +
                        e +
                        "'; CKEDITOR.plugins.cssanim.cleanHighlight();\"",
                    b += " ondblclick\x3d\" CKEDITOR.plugins.cssanim.runAddAnimDialogById('" + k.elem.id + "')\"", b +=
                        " \x3e", b += '\x3ctd style\x3d"border: 1px solid gray; text-align:center; padding:5px;' + f,
                    b += k.elem.nodeName, b += "\x3c/td\x3e", b +=
                        '\x3ctd style\x3d"border: 1px solid gray; text-align:center; padding:5px;' + f, b += k.elem.id,
                    b += "\x3c/td\x3e", f =
                        '"\x3e',
                    k.cds
                        ? (e = k.cds.replace("{animation:", "").replace("}", "").replace(";", "").trim(), e =
                            parseCSS3AnimationShorthand(e), d = k.ral ? "YES" : "NO", e.name &&
                        (f = "cssAnimPause" === e.name
                            ? ' background-color:cornflowerblue;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsConflict &&
                            0 <= a.availableAnimsObj.allAvailableAnimsConflict.indexOf(e.name)
                            ? ' background-color:orange;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsCustom &&
                            0 <= a.availableAnimsObj.allAvailableAnimsCustom.indexOf(e.name)
                            ? ' background-color:PaleGreen;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsCssAnim &&
                            0 <= a.availableAnimsObj.allAvailableAnimsCssAnim.indexOf(e.name)
                            ? ' background-color:LightSkyBlue;"\x3e'
                            : ' background-color:Red;"\x3e'))
                        : e = { name: "" }, b +=
                        '\x3ctd style\x3d"border: 1px solid gray; text-align:center; padding:5px;' + f, b += e.name,
                    b += "\x3c/td\x3e", f =
                        '"\x3e', k.cdc
                        ? (0 <= k.cdc.indexOf("animation-play-state")
                            ? e = {
                                name: "cssAnimPause",
                                duration: null,
                                timingFunction: "linear",
                                delay: 0,
                                iterationCount: 1,
                                direction: "normal"
                            }
                            : (e = k.cdc.replace("{animation:", "").replace("}", "").replace(";", "").trim(), e =
                                parseCSS3AnimationShorthand(e)), e.name &&
                        (f = "cssAnimPause" === e.name
                            ? ' background-color:cornflowerblue;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsConflict &&
                            0 <= a.availableAnimsObj.allAvailableAnimsConflict.indexOf(e.name)
                            ? ' background-color:orange;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsCustom &&
                            0 <= a.availableAnimsObj.allAvailableAnimsCustom.indexOf(e.name)
                            ? ' background-color:PaleGreen;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsCssAnim &&
                            0 <= a.availableAnimsObj.allAvailableAnimsCssAnim.indexOf(e.name)
                            ? ' background-color:LightSkyBlue;"\x3e'
                            : ' background-color:Red;"\x3e'))
                        : e = { name: "" }, b +=
                        '\x3ctd style\x3d"border: 1px solid gray; text-align:center; padding:5px;' + f, b += e.name,
                    b += "\x3c/td\x3e", f = '"\x3e', k.cdo
                        ? (0 <= k.cdo.indexOf("animation-play-state")
                            ? e = {
                                name: "cssAnimPause",
                                duration: null,
                                timingFunction: "linear",
                                delay: 0,
                                iterationCount: 1,
                                direction: "normal"
                            }
                            : (e = k.cdo.replace("{animation:", "").replace("}", "").replace(";", "").trim(), e =
                                parseCSS3AnimationShorthand(e)), e.name &&
                        (f = "cssAnimPause" === e.name
                            ? ' background-color:cornflowerblue;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsConflict &&
                            0 <= a.availableAnimsObj.allAvailableAnimsConflict.indexOf(e.name)
                            ? ' background-color:orange;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsCustom &&
                            0 <= a.availableAnimsObj.allAvailableAnimsCustom.indexOf(e.name)
                            ? ' background-color:PaleGreen;"\x3e'
                            : a.availableAnimsObj &&
                            a.availableAnimsObj.allAvailableAnimsCssAnim &&
                            0 <= a.availableAnimsObj.allAvailableAnimsCssAnim.indexOf(e.name)
                            ? ' background-color:LightSkyBlue;"\x3e'
                            : ' background-color:Red;"\x3e'))
                        : e = { name: "" }, b +=
                        '\x3ctd style\x3d"border: 1px solid gray; text-align:center; padding:5px;' + f, b += e.name,
                    b += "\x3c/td\x3e", f =
                        '"\x3e', b += '\x3ctd style\x3d"border: 1px solid gray; text-align:center; padding:5px;' + f,
                    b += d, b += "\x3c/td\x3e", b += "\x3c/tr\x3e");
            0 < p &&
            (b += "\x3c/table\x3e", b += "\x3c/div\x3e", m =
                b += '\x3cdiv style\x3d"height: 6px;"\x3e\x3c/div\x3e');
            return m
        }

        var h = g.lang.cssanim;
        return{
            title: g.lang.cssanim.genProperties,
            minWidth: 550,
            width: 550,
            minHeight: 250,
            height: 250,
            resizable: CKEDITOR.DIALOG_RESIZE_NONE,
            contents: [
                {
                    id: "tab-doc-animations",
                    label: h.docAnim,
                    elements: [{ type: "html", id: "allAnimations", html: "" }]
                }, {
                    id: "tab-allowed-tags",
                    label: h.allowedTags,
                    elements: [
                        {
                            type: "html",
                            id: "allowedTags",
                            allowedTags: null,
                            html: "",
                            setup: function() { this.allowedTags = g.config.allowedTags },
                            cancel: function() {
                                g.config.allowedTags = this.allowedTags;
                                var a = this.getElement().getElementsByTag("input"), d;
                                for (d = 0; d < a.count(); d += 1)
                                    0 > g.config.allowedTags.indexOf(a.getItem(d).$.value)
                                        ? a.getItem(d).$.checked = !1
                                        : a.getItem(d).$.checked =
                                        !0
                            },
                            commit: function() {
                                var a = this.getElement().getElementsByTag("input"), d;
                                g.config.allowedTags = [];
                                for (d = 0; d < a.count(); d += 1)
                                    a.getItem(d).$.checked && g.config.allowedTags.push(a.getItem(d).$.value)
                            }
                        }
                    ]
                }, {
                    id: "tab-parameters-box",
                    label: h.advSettings,
                    elements: [
                        {
                            type: "html",
                            id: "parametersSettings",
                            html: "",
                            bg: "",
                            bw: 0,
                            pad: 0,
                            setup: function() {
                                var a = this.getElement().getElementsByTag("input"), d, c;
                                for (c = 0; c < a.count(); c += 1)
                                    d = a.getItem(c).$.name, "HLBgColor" === d
                                        ? this.bg = a.getItem(c).$.value
                                        : "width" === d &&
                                        (this.bw =
                                            a.getItem(c).$.value)
                            },
                            commit: function() {
                                var a = this.getElement().getElementsByTag("input"), d, c;
                                for (c = 0; c < a.count(); c += 1)
                                    d = a.getItem(c).$.name, "HLBgColor" === d
                                        ? g.config.highlightBGColor = a.getItem(c).$.value
                                        : "width" === d
                                        ? g.config.highlightBorder = a.getItem(c).$.value + "px"
                                        : "cssName" === d &&
                                        this.getDialog().initialCssFile !== a.getItem(c).$.value &&
                                        CKEDITOR.plugins.cssanim.getCustomCss(a.getItem(c).$.value)
                            },
                            cancel: function() {
                                var a = this.getElement().getElementsByTag("input"), d, c;
                                for (c = 0; c < a.count(); c += 1)
                                    d = a.getItem(c).$.name,
                                        "HLBgColor" === d
                                            ? (a.getItem(c).$.value = this.bg, g.config.highlightBGColor = this.bg)
                                            : "width" === d &&
                                            (a.getItem(c).$.value = this.bw, g.config.highlightBorder = this.bw + "px")
                            }
                        }
                    ]
                }
            ],
            onLoad: function() {
                CKEDITOR.plugins.cssanim.setCssAnimDialog(this);
                this.initialCssFile = "";
                var a;
                a = this.getContentElement("tab-doc-animations", "allAnimations").domId;
                a = document.getElementById(a);
                a.innerHTML = r(this);
                a = this.getContentElement("tab-allowed-tags", "allowedTags").domId;
                a = document.getElementById(a);
                a.innerHTML = m(g.config.allowedTags,
                    g.config.onLoadAllowedTags);
                a = this.getContentElement("tab-parameters-box", "parametersSettings").domId;
                a = document.getElementById(a);
                a.innerHTML = n();
                this.on("selectPage",
                    function(a) {
                        var c;
                        "tab-allowed-tags" === a.data.currentPage &&
                            (c = a.sender.getContentElement("tab-allowed-tags", "allowedTags"), c.commit());
                        "tab-doc-animations" === a.data.page
                            ? (c = a.sender.getContentElement("tab-doc-animations", "allAnimations").domId, a =
                                document.getElementById(c), a.innerHTML = r(this))
                            : "tab-allowed-tags" === a.data.page
                            ? (c = a.sender.getContentElement("tab-allowed-tags",
                                "allowedTags").domId, a = document.getElementById(c), a.innerHTML =
                                m(g.config.allowedTags, g.config.onLoadAllowedTags))
                            : "tab-parameters-box" === a.data.page &&
                            (a = a.sender.getContentElement("tab-parameters-box", "parametersSettings"), c =
                                a.domId, a = document.getElementById(c), a.innerHTML = n())
                    })
            },
            onShow: function() {
                this.setupContent();
                var a = this.getContentElement("tab-parameters-box", "parametersSettings").domId,
                    a = document.getElementById(a);
                g.config.customCssFilePath !== this.initialCssFile &&
                (CKEDITOR.plugins.cssanim.getCustomCss(a),
                    this.initialCssFile = g.config.customCssFilePath);
                this.availableAnimsObj = CKEDITOR.plugins.cssanim.getAvailableAnims();
                this.hidePage("tab-doc-animations");
                this.showPage("tab-doc-animations");
                this.selectPage("tab-doc-animations");
                CKEDITOR.plugins.cssanim.cleanHighlight()
            },
            onOk: function() {
                this.commitContent();
                CKEDITOR.plugins.cssanim.pendingChanges = []
            },
            onCancel: function() {
                if (CKEDITOR.plugins.cssanim.managePending) {
                    var a, d;
                    for (a = CKEDITOR.plugins.cssanim.pendingChanges.length - 1; 0 <= a; --a)
                        d = JSON.parse(CKEDITOR.plugins.cssanim.pendingChanges[a][1]),
                            CKEDITOR.plugins.cssanim.restoreAnimOnElemById(
                                CKEDITOR.plugins.cssanim.pendingChanges[a][0],
                                d);
                    CKEDITOR.plugins.cssanim.pendingChanges = []
                }
                g.config.customCssFilePath !== this.initialCssFile &&
                (a = this.getContentElement("tab-parameters-box", "parametersSettings"), a =
                    document.getElementById(a.domId), a.querySelector("#cssResultsDiv").parentElement.elements.cssName
                    .value = this.initialCssFile.trim(), CKEDITOR.plugins.cssanim.getCustomCss(a));
                this.foreach(function(a) { a.cancel && a.cancel.apply(a) })
            }
        }
    });