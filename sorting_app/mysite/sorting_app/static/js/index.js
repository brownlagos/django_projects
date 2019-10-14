function populateList(list){
    element_block_code = (value='') => { return '<div id="element">' + value + '</div>'};
    
    // contains the code to populate list
    code = '';

    for(var i=0;i < LIST_LENGTH;i++){
        if(i < list.length){
            code += element_block_code(list[i].toString())
        
        }else{
            code += element_block_code();

        }
    }

    LIST_ELEMENT.innerHTML = code;

}

const LIST_LENGTH = 10;
const LIST_ELEMENT = document.getElementById('list');

// the array list
list = [2, 4, 1, 5, 6, 8,1,7,2,7,3,6,9,3,8,4,2,6,8,2,6];

populateList(list)