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

			// for selection of row
			var input = createElement('input');
			appendElement(input, div);
			input.setAttribute('type', 'checkbox');
			input.setAttribute('class', 'selectRow');
			input.addEventListener('click', selectEntireRow);
			if(obj.selected) {
				input.checked = true;
				document.getElementById('checkbox').checked = true;
			} else {
				input.checked = false;
			}

			// first column
			var keyDiv = createElement('div');
			appendElement(keyDiv, div);
			keyDiv.setAttribute('class', 'keyRow');
			keyDiv.innerHTML = obj.label;

			// second column
			var valueDiv = createElement('div');
			appendElement(valueDiv, div);
			valueDiv.setAttribute('class', 'value');
	
			if(obj.field.type === 'text') {
				var textInput = createElement('input');
				appendElement(textInput, valueDiv);
				textInput.setAttribute('type', 'text');
				textInput.setAttribute('placeholder', 'listing');
				textInput.setAttribute('class', 'textType');
				textInput.value = obj.field.defaultValue;
				if(input.checked){
					textInput.disabled = false;
				} else textInput.disabled = true;

			} else if (obj.field.type === 'select') {
				var select = createElement('select');
				appendElement(select, valueDiv);
				select.setAttribute('class', 'selectBox');
				select.innerHTML = '<option>'+ obj.field.options[0] +'</option>' + '<option>'+ obj.field.options[1] +'</option>';
				if(input.checked){
					select.disabled = false;
				} else select.disabled = true;
			}

			// third column
			var descriptionDiv = createElement('div');
			appendElement(descriptionDiv, div);
			descriptionDiv.setAttribute('class', 'description');
			descriptionDiv.innerHTML = obj.description;

		}

	}).catch(function(err){
		console.log(err);
	})
}

getTableData(); // entry point;

//create element
function createElement(ele) {
	return document.createElement(ele);
}
//append element
function appendElement(child, parent) {
	return parent.appendChild(child);
}

// seach operation
var inputSearch = document.getElementById('search');
inputSearch.addEventListener('keyup', filterKeys);

function filterKeys() {
	var textEntered = inputSearch.value.toUpperCase();
	var mainBlock = document.getElementById('dataContainer');

	var rows = mainBlock.querySelectorAll('.row'); //[]

	for(var i=0; i < rows.length; i++) {
		
		var key = rows[i].getElementsByClassName('keyRow')[0];

		if(key.innerHTML.toUpperCase().indexOf(textEntered) > -1) {
			rows[i].style.display = '';
		} else {
			rows[i].style.display = 'none';
		}
	}

}

// select function
function selectEntireRow() {
	var ele = event.target;
	if(ele.checked) {
		//ele.parentNode.querySelector('.textType').disabled = false;
		ele.nextSibling.nextSibling.childNodes[0].disabled = false;
	} else {
		//ele.parentNode.querySelector('.textType').disabled = true;
		ele.nextSibling.nextSibling.childNodes[0].disabled = true;
	}
}

// send Data
	document.getElementById('done').addEventListener('click', createJsonData);
	
	function createJsonData() {
		var createDataArr = [];
		// loop through number of selected rows
		var rows = document.querySelectorAll('.selectRow'); //[]
		for(var row of rows) {
			if(row.checked === true) {
				var obj = {label: "", value: "", description: ""};
				obj.label = row.parentNode.querySelector('.keyRow').textContent;
				if(row.parentNode.querySelector('.textType') !== null) {
					obj.value = row.parentNode.querySelector('.textType').value;
				} else if (row.parentNode.querySelector('.selectBox') !== null) {
					var sel = row.parentNode.querySelector('.selectBox');
					obj.value = sel.options[sel.selectedIndex].value;
				} else {
					obj.value = "";
				}
				obj.description = row.parentNode.querySelector('.description').textContent;
				createDataArr.push(obj);
			}
		}
		var mainOBJ = {'config' : createDataArr};
		console.log(mainOBJ);
	}





























