/*
1.DOM Selection
2.Event Listener,
3.Basic Validation,
4.Creating Elements
5.Append
*/
const title= document.querySelector('#bookTitle');
const author= document.querySelector('#bookAuthor');
const year= document.querySelector('#bookYear');
const btn= document.querySelector('.btn');
const bookList= document.querySelector('#book-list');


btn.addEventListener('click',function(e){
    e.preventDefault();
    if(title.value =='' && author.value=='' && year.value==''){
        alert('Please Input Some Data');
    }
    else{
        const newRow =document.createElement('tr');
        //creating New Title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        //creating New Title
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        //creating New Title
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
});