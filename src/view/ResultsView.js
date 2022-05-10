import View from "./View";

class ResultsView extends View {
    _parentElement = document.querySelector('.main-section')

    _generateMarkup(){
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview(data){
        return `
        <div class=book>
        <div class='book-data'>
            <h1>${data.title}</h1>
            <p>${data.authors.map(author => author.author)}</p>
        </div>
        <div class='button'><a href='#${data.key}'><button id=${data.key}>More Info</button></a></div>
        </div>
        `;
    }
}

export default new ResultsView();