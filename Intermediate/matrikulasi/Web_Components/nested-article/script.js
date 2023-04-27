import './article-list.js';
import articles from './article.js';

const articleListElement = document.createElement('article-list');
// set atribute
articleListElement.articles = articles;

document.body.appendChild(articleListElement);