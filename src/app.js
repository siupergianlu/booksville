import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './assets/Booksville-logos_black.png'
import _ from 'lodash';
import * as model from './model';
import ResultsView from './view/ResultsView';
import DescriptionView from './view/DescriptionView';

const input = document.querySelector('input');
const searchBtn = document.getElementById('search-btn');
const backdrop = document.querySelector('.backdrop');


const submitInputHandler = async () => {
  ResultsView.renderSpinner();
  await model.loadSearchResults(input.value);
  ResultsView.render(model.state.search.results);
  input.value = '';
  window.history.pushState('', '', `/${model.state.search.query}`)

};

const controlDescription = async (event) => {
  const key = window.location.hash.slice(1);
  DescriptionView.renderSpinner()

  await model.loadDescription(key);
  console.log(model.state.book.description);
  if (!model.state.book.description) {
    DescriptionView._parentElement.style.display = 'none';
    backdrop.style.display = 'none';
  } else {
    DescriptionView._parentElement.style.display = 'block';
    backdrop.style.display = 'block';
    window.onclick = function (event) {
      console.log(event.target);
      if (
        !_.isEqual(event.target, DescriptionView._parentElement) &&
        !_.isEqual(
          event.target,
          DescriptionView._parentElement.querySelector('.description-modal')
        ) &&
        !_.isEqual(
          DescriptionView._parentElement.querySelector('h1'),
          event.target
        ) &&
        !_.isEqual(
          DescriptionView._parentElement.querySelector('p'),
          event.target
        )
      ) {
        DescriptionView._parentElement.style.display = 'none';
        backdrop.style.display = 'none';
        window.history.pushState('', '', `/${model.state.search.query}`)
      }
    };
  }
  DescriptionView.render(model.state.book);
};

searchBtn.addEventListener('click', submitInputHandler);
DescriptionView.addHandlerRender(controlDescription);
