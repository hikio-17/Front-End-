import './article-item.js';
import article from './article.js';

const containerElement = document.querySelector('.container');

const articleItemElement = document.createElement('article-item');
// set atribute
articleItemElement.article = article;

containerElement.appendChild(articleItemElement);
