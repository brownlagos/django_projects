function populateList(list){
    element_block_code = (value=0) => { return `<div id="element">{value}</div>`};
    
    // contains the code to populate list
    code = '';

    for(var i=0;i < LIST_LENGTH;i++){
        if(i >= list.length){
            code += element_block_code();
        }

        console.log(list[i].toString())
        code += element_block_code(list[i].toString())
    }

    LIST_ELEMENT.innerHTML = code;

}

const LIST_LENGTH = 10;
const LIST_ELEMENT = document.getElementById('list');

// the array list
list = [2, 4, 1, 4, 6, 7.2, 58, 4];

populateList(list)