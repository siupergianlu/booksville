export default class View {
    _data;

    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    

    _clear(){
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const markup = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
            `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }

}