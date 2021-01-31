function create(words) {

   let mainDiv = document.getElementById('content');

   for (let word of words) {
      let myDiv = createElement('div', '');
      let myPar = createElement('p', word);
      myPar.style.display = 'none';
      myDiv.appendChild(myPar);
      mainDiv.appendChild(myDiv);
   }

   mainDiv.addEventListener('click', onClick);

   function onClick(event) {
      if (event.target.tagName == 'DIV' || event.target.children[0].tagName == 'P') {
         if (event.target.children[0].style.display == 'none') {
            event.target.children[0].style.display = 'block';
         } else {
            event.target.children[0].style.display = 'none';
         }
      }
   }


   function createElement(type, content) {
      let createdEl = document.createElement(type);
      createdEl.textContent = content;
      return createdEl
   }

}