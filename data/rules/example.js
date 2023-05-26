var DOC;
if(!DOC) DOC = [];

Array.prototype.push.apply(DOC, [
	{
		type: "section",
		entry: [
			"測試語法。"
		],
	},
	{
		type: "section",
		title: "表格",
		entry: [
			{
				type: "table",
				caption: "表格說明文字",
				colStyles: [ "text-align:center", "" ],
				rows: [
					[ "D2", "效果" ],
					[ "1", "某種效果1" ],
					[ "2", "某種效果2" ],
				],
			}
		],
	},
	{
		type: "section",
		title: "列表",
		entry: [
			"",
			{
				type: "list",
				entry: [
					"第一點",
					"第二點",
					"第三點"
				]
			}
		],
	},
	{
		type: "section",
		title: "圖片",
		entry: [
			{
				type: "image",
				style: "width:40%;",
				url: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/skimmer-hat.svg"
			}
		],
	},
	{
		type: "section",
		title: "邊欄",
		entry: [
			{
				type: "sidebar",
				entry: [
					"說點悄悄話吧"
				],
			}
		],
	},
]);