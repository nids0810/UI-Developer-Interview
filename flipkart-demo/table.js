const url = 'https://flipkart-configuration-table.now.sh/api';

function getTableData() {
	fetch(url)
	.then(function(response){
		if(response.ok) {
			return response.json();
		}
		return Promise.reject('API error encountered ' + response.status);
	}).then(function(data){

		var dataArr = data.config;

		for(var obj of dataArr) {

			var dataContainer = document.getElementById('dataContainer');
			var div = createElement('div');
			appendElement(div, dataContainer);
			div.setAttribute('class', 'row');

			var input = createElement('input');
			appendElement(input, div);
			input.setAttribute('type', 'checkbox');
			input.setAttribute('id', 'selectRow');
			input.value = obj.selected;
			if(obj.selected) {
				input.checked = true;
				document.getElementById('checkbox').checked = true;
			} else {
				input.checked = false;
			}

			var keyDiv = createElement('div');
			appendElement(keyDiv, div);
			keyDiv.setAttribute('class', 'keyRow');
			keyDiv.innerHTML = obj.label;

			var valueDiv = createElement('div');
			appendElement(valueDiv, div);
			valueDiv.setAttribute('class', 'value');
	
			if(obj.field.type === 'text') {
				var textInput = createElement('input');
				appendElement(textInput, valueDiv);
				textInput.setAttribute('type', 'text');
				textInput.setAttribute('placeholder', 'listing');
				textInput.setAttribute('id', 'textType');
				textInput.value = obj.field.defaultValue;
				if(input.checked){
					textInput.disabled = false;
				} else textInput.disabled = true;

			} else if (obj.field.type === 'select') {
				var select = createElement('select');
				appendElement(select, valueDiv);
				select.setAttribute('id', 'selectBox');
				select.innerHTML = '<option>'+ obj.field.options[0] +'</option>' + '<option>'+ obj.field.options[1] +'</option>';
				if(input.checked){
					select.disabled = false;
				} else select.disabled = true;
			}

			var descriptionDiv = createElement('div');
			appendElement(descriptionDiv, div);
			descriptionDiv.setAttribute('class', 'description');
			descriptionDiv.innerHTML = obj.description;

		}

	}).catch(function(err){
		console.log(err);
	})
}

getTableData();

function createElement(ele) {
	return document.createElement(ele);
}

function appendElement(child, parent) {
	return parent.appendChild(child);
}

var inputSearch = document.getElementById('search');
inputSearch.addEventListener('keyup', filterKeys);

function filterKeys() {
	var textEntered = inputSearch.value.toUpperCase();
	var mainBlock = document.getElementById('dataContainer');

	var rows = mainBlock.querySelectorAll('.row');

	for(var i=0; i < rows.length; i++) {
		
		var key = rows[i].getElementsByClassName('keyRow')[0];

		if(key.innerHTML.toUpperCase().indexOf(textEntered) > -1) {
			rows[i].style.display = '';
		} else {
			rows[i].style.display = 'none';
		}
	}

}



