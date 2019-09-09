﻿window.parseCSS3AnimationShorthand = function(d) {
    var b = { name: null, duration: null, timingFunction: "ease", delay: 0, iterationCount: 1, direction: "normal" },
        a = d,
        c,
        e;
    c = function(a) { return-1 < a.indexOf("ms") ? parseInt(a, 10) : 1E3 * parseInt(a, 10) };
    if (e = d.match(/[0-9]+m?s/g))
        b.duration = 0 < e.length ? c(e[0]) : b.duration, b.delay = 1 < e.length ? c(e[1]) : b.delay, a =
            a.replace(e[0], "");
    c = new RegExp("(" +
        "linear(\\s|$)|ease(\\s|$)|ease-in(\\s|$)|ease-out(\\s|$)|ease-in-out".replace("-", "-") +
        "|cubic-bezier\\(.*?\\))");
    if (c = d.match(c))
        b.timingFunction =
            0 < c.length ? c[0].replace(/\s+/g, "") : b.timingFunction, a = a.replace(b.timingFunction, "");
    if (c = d.match(/(infinite|\s[0-9]+(\s|$))/)) b.iterationCount = c[0].replace(/\s+/g, ""), a = a.replace(c[0], "");
    if (d = d.match(/(normal|alternate)\s*$/)) b.direction = d[0].replace(/\s+/g, ""), a = a.replace(d[0], "");
    a = a.split(" ");
    0 < a.length && (b.name = a[0]);
    return b
};