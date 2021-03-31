
const container = document.querySelector("#booksContainer");
const button=document.querySelector(".button");
const formContainer=document.querySelector("#formContainer");
const submitButton = formContainer.querySelector("#submit");
const titleName= formContainer.querySelector("input[name=title]");
const authorName= formContainer.querySelector("input[name=author]");
const pagesNumber=formContainer.querySelector("input[name=pages]");
const readCheck=formContainer.querySelector("select[name=read]");



let myLibrary = [];
let authorValue;
let titleValue;
let pagesValue;
let readValue;
let books;


function Book(title,author,pages,read) {
  this.title=title,
  this.author=author,
  this.pages=pages,
  this.read=read
}

  function addBookToLibrary(obj) {
  myLibrary.push(obj)
  }

  button.addEventListener("click" , e=>{
  formContainer.classList.toggle("invisible")
  })

  function getInputValues(){
    titleValue = titleName.value ;
    authorValue=authorName.value
    pagesValue=pagesNumber.value
    readValue=readCheck.value;
  }

   function getBooksBio(){
    return  myLibrary
    .map(book=>{
     let bio ="";
     if (book.read==="read") { bio =  book.title +" Written By "+book.author+" and it has : "+book.pages+" pages " + ",you have already read this book";}

      else {bio = book.title +" Written By "+book.author+" and it has : "+book.pages+" pages " + ",you haven't read this book yet.";} 

     return bio;
     })
  } 
 /*  
  function removeDuplicate(array){
    return [...new Set(array)]
  } */


/*  
  function clearArray(array){
    array.length=0;
  } */


  function appendBooks(array) { 
  array
  .forEach(each=>{
    let book =  document.createElement("div");
    book.setAttribute("id",`${books.indexOf(each)}`);
    book.setAttribute("class","book");
    book.textContent=each;
    container.appendChild(book) }) }




  submitButton.addEventListener("click",e=>{
    e.preventDefault();
    getInputValues();
    let card = new Book(titleValue,authorValue,pagesValue,readValue); 
    addBookToLibrary(card);
    books = getBooksBio();
    container.innerHTML="";
    appendBooks(books);

   /*    clearArray(books); */
  })


   


