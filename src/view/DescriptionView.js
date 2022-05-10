import View from './View';

class DescriptionView extends View {
  _parentElement = document.querySelector('.modal');

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _generateMarkup() {
    console.log(this._data)
    return `
            <div class='description-modal'>
                <h1>${this._data.title}</h1>
                <p class='description'>${this._data.description}</p>
                <div class = 'button'>
                  <button >Close</button>
                </div>
            </div>
            `;
  }
}

export default new DescriptionView()