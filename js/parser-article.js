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

		if(item.type == "section"){
			var entryList = [];
			if(item.title != null){
				entryList.push(getTitleElem(item.title, depth));
			}
			for(var entry of item.entry){
				entryList.push(handleEntry(entry, depth+1));
			}
			return entryList.join('');
		}
		
		if(item.type == "list"){
			var entryList = [];
			for(var entry of item.entry){
				entryList.push(`<li>${handleEntry(entry, depth+1)}</li>`);
			}
			return `<ul>${entryList.join('')}</ul>`;
		}
	}

	//====================
	function getTitleElem(txt, depth){
		switch(depth){
		case 1: return `<h2>${txt}</h2>`; break;
		case 2: return `<h3>${txt}</h3>`; break;
		case 3: return `<h4>${txt}</h4>`; break;
		default:
			return txt;
		}
	}
}