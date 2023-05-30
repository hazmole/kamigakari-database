function parseArticle(doc){
	var output = [];
	var depth = 1;

	for(var section of doc) {
		output.push(handleEntry(section, depth));
	}
	return output;


	//====================
	function handleEntry(item, depth) {
		if(typeof item === 'string') {
			return `<p>${item.replace('\n', '<br/>')}</p>`;
		}

		// Section
		if(item.type == "section"){
			var entryList = [];
			if(item.title != null){
				entryList.push(getTitleElem(item.title, depth));
			}
			for(var entry of item.entry){
				entryList.push(handleEntry(entry, depth+1));
			}
			var section = entryList.join('');
			if(depth==1) return `<div class="section">${section}</div>`;
			else 				 return section;
		}
		
		// List
		if(item.type == "list"){
			var entryList = [];
			for(var entry of item.entry){
				entryList.push(`<li>${handleEntry(entry, depth+1)}</li>`);
			}
			return `<ul>${entryList.join('')}</ul>`;
		}

		// Table
		if(item.type == "table"){
			var rows = [];
			for(var rIdx in item.rows){
				var row = item.rows[rIdx];
				var tag = (rIdx == 0)? "th": "td";

				var cellArr = [];
				for(var cIdx in row){
					var cell = row[cIdx];
					var cStyle = item.colStyles[cIdx];
					cellArr.push(`<${tag} style="${cStyle}">${handleEntry(cell, depth+1)}</${tag}>`)
				}
				rows.push(`<tr>${cellArr.join('')}</tr>`);
			}
			var caption = (item.caption!="") ? `<div class="caption" style="font-size:0.8em;">${item.caption}</div>`: "";
			return `<div style="text-align:center; width:fit-content;"><table>${rows.join('')}</table>${caption}</div>`;
		}

		// Image
		if(item.type == "image"){
			return `<img src=${item.url} style="${item.style}"/>`;
		}
	}

	//====================
	function getTitleElem(txt, depth){
		switch(depth){
		case 1: return `<h2 id="tag_${txt}">${txt}</h2>`; break;
		case 2: return `<h3>${txt}</h3>`; break;
		case 3: return `<h4>${txt}</h4>`; break;
		default:
			return txt;
		}
	}
}

function parseQuickNav(doc){
	var arr = doc.map( obj => obj.title ).filter( txt => txt!=null );
	return arr.map(txt=>`<div><a href="#tag_${txt}">${txt}</div>`);
}