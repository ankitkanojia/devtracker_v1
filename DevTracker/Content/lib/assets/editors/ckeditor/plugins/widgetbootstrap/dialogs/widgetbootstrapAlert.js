﻿CKEDITOR.dialog.add("widgetfoundationAlert",
    function() {
        var c = CKEDITOR.config.widgetfoundationAlert_alertTypes, d = [], b;
        for (b in c) d.push([c[b], b]);
        return{
            title: "Edit Alert Type",
            minWidth: 200,
            minHeight: 100,
            contents: [
                {
                    id: "info",
                    elements: [
                        {
                            id: "type",
                            type: "select",
                            label: "Alert Type",
                            items: d,
                            required: !0,
                            validate: CKEDITOR.dialog.validate.notEmpty("Alert type required"),
                            setup: function(a) { this.setValue(void 0 != a.data.type ? a.data.type : "alert") },
                            commit: function(a) { a.setData("type", this.getValue()) }
                        }
                    ]
                }
            ]
        }
    });