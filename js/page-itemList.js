var WEAPON_UPGRADE_LIST; // from "data/*"

var tabBuilder
function init(){
	var pageArr = [
		{ title:"武器:劍", key:'劍', subpageArr: [
				//{ title: "一般武器", key:'normal' },
				//{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:槍", key:'槍', subpageArr: [
				//{ title: "一般武器", key:'normal' },
				//{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:斧", key:'斧', subpageArr: [
				//{ title: "一般武器", key:'normal' },
				//{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:錘", key:'錘', subpageArr: [
				//{ title: "一般武器", key:'normal' },
				//{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:射擊", key:'射擊', subpageArr: [
				//{ title: "一般武器", key:'normal' },
				//{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"武器:魔法", key:'魔法', subpageArr: [
				//{ title: "一般武器", key:'normal' },
				//{ title: "神成神器", key:'legacy' },
				{ title: "追加效果", key:'upgrade' }
			]
		},
		{ title:"防具:鎧", key:'鎧' },
		{ title:"防具:盾", key:'盾' },
		{ title:"裝飾", key:'裝飾' },
		{ title:"常備品", key:'常備' },
		{ title:"消耗品", key:'消耗' },
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

		${ getSubtabElem() }
		<div id="Subtab-Container">
		</div>
		
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
			</div>`;
	}
	function getSubtabBtn(btnObj, idx){
		return `<div class="subtab-btn pseudoBtn" data-key="${btnObj.key}">${btnObj.title}</div>`;
	}
}
function GoToSubPage(evt){
	if($(".subtab-btn").length<=0) return;

	$('.subtab-btn.active').removeClass('active');
	$(evt.target).addClass('active');

	var classObj = tabBuilder.GetCurrentObj();
	var type = $(evt.target).attr('data-key');

	var content = "";
	if(type=="upgrade"){
		var content = WEAPON_UPGRADE_LIST.filter( u => u.type == `upgrade-${classObj.key}` ).sort(Util.sort.cmpWaeponUpgrade).map( u => parseGear(u));

	}


	$("#Subtab-Container").empty();
	$("#Subtab-Container").append(content);
}

window.onload = function(){ 
	init();
	WindowCtrl.UnblockUI();
}