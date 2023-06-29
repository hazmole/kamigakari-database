var WEAPON_UPGRADE_LIST; // from "data/*"
var ITEMS;

var tabBuilder
function init(){
	var pageArr = [
		{ title:"武器:劍", key:'劍', subpageArr: [
				{ title: "一般武器", key:'normal' },
				{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:槍", key:'槍', subpageArr: [
				{ title: "一般武器", key:'normal' },
				{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:斧", key:'斧', subpageArr: [
				{ title: "一般武器", key:'normal' },
				{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:錘", key:'錘', subpageArr: [
				{ title: "一般武器", key:'normal' },
				{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:射擊", key:'射擊', subpageArr: [
				{ title: "一般武器", key:'normal' },
				{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:魔法", key:'魔法', subpageArr: [
				{ title: "一般武器", key:'normal' },
				{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"防具:鎧", key:'鎧', subpageArr: [
				{ title: "一般防具", key:'normal' },
				{ title: "神成神器", key:'legacy' },
			]
		},
		{ title:"防具:盾", key:'盾', subpageArr: [
				{ title: "一般防具", key:'normal' },
				{ title: "神成神器", key:'legacy' },
			]
		},
		{ title:"裝飾", key:'裝飾', subpageArr: [
				{ title: "一般裝飾", key:'normal' },
				{ title: "神成神器", key:'legacy' },
			]
		},
		{ title:"常備品", key:'常備' },
		{ title:"消耗品", key:'消耗' },
		{ title:"探索者套裝", key:'套裝' },
		{ title:"神器能力", key:'legacyFeat', subpageArr: [
				{ title: "共通", key:'common' },
				{ title: "武器", key:'weapon' },
				{ title: "防具", key:'armor' },
				{ title: "裝飾", key:'accessory' },
			]
		},
	];

	tabBuilder = new MyPageTabBuilder();
	tabBuilder.SetPageList(pageArr);
	tabBuilder.SetPageParser(BuildItemPage);
	tabBuilder.SetPageParseAfterFunc(function(){
		$(".subtab-btn").on('click', GoToSubPage);
		$(".subtab-btn:first-child").click();
	});
	tabBuilder.Build("FrameContentHeader", "ItemContainer");

}

function BuildItemPage(pageObj){
	return `
	<div class="Page">
		<h2>${pageObj.title}</h2>
		<div class="item-info"></div>

		${ getSubtabElem() }
		${ getNormalElem() }
		
		
	</div>`.fmt();
	//----------
	function getSubtabElem(){
		if( !Array.isArray(pageObj.subpageArr) ) return '';
		return `
			<div class="Subtab">
				<div class="subtab-bar">
					${ pageObj.subpageArr.map( (pageObj, idx) => getSubtabBtn(pageObj, idx) ).join('') }
				</div>
				<hr class="subtab-baseline">
			</div>
			<div id="Subtab-Container"></div>`;
		//------
		function getSubtabBtn(btnObj, idx){
			return `<div class="subtab-btn pseudoBtn" data-key="${btnObj.key}">${btnObj.title}</div>`;
		}
	}

	function getNormalElem(){
		if( Array.isArray(pageObj.subpageArr) ) return '';

		var typeKey = '';
		switch(pageObj.key){
			case "常備": typeKey = 'permanent'; break;
			case "消耗": typeKey = 'consumable'; break;
			case "套裝": typeKey = 'pack'; break;
		}
		return `<div id="Gear-Container">${getItemElemList(typeKey)}</div>`;
	}
	
}


function GoToSubPage(evt){
	if($(".subtab-btn").length<=0) return;

	// Render SubPage Tab
	$('.subtab-btn.active').removeClass('active');
	$(evt.target).addClass('active');

	// Get PageKey
	var classObj = tabBuilder.GetCurrentObj();
	var pageKey = classObj.key;
	var subpageKey = $(evt.target).attr('data-key');

	var filterKey = "";
	if(subpageKey=="upgrade") filterKey = `upgrade-${pageKey}`;
	else if(subpageKey=="normal"){
		if(pageKey=="裝飾") filterKey = `accessory`;
		else if(pageKey=="盾" || pageKey=="鎧") filterKey = `armor-${pageKey}`;
		else filterKey = `weapon-${pageKey}`;
	}
	else if(subpageKey=="legacy"){
		filterKey = `legacy-${pageKey}`;
	}
	else if(pageKey=="legacyFeat"){
		filterKey = `legacyFeat-${subpageKey}`;
	}

	$("#Subtab-Container").empty();
	$("#Subtab-Container").append(getItemElemList(filterKey));
}


function getItemElemList(filterKey){
	return ITEMS
		.filter( t => (Array.isArray(filterKey))? filterKey.indexOf(t.type)>=0: t.type == filterKey )
		.sort( Util.sort.cmpItem )
		.map( t => parseGear(t) )
		.join('');
}

window.onload = function(){ 
	init();
	WindowCtrl.UnblockUI();
}