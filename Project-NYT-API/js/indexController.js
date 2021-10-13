//global parameters
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${}&api-key=${}`
//https://api.nytimes.com/svc/movies/v2/reviews/picks.json?query=&api-key=HvpEEsm87wQCkFNvH2NkAEZHmpbWTXXm
//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=avengers&api-key=HvpEEsm87wQCkFNvH2NkAEZHmpbWTXXm
//let urlSearch = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${}&api-key=${}`;
let apikey = `HvpEEsm87wQCkFNvH2NkAEZHmpbWTXXm`;
let apiKeyTemplate = `&api-key=${apikey}`
let baseURL = `https://api.nytimes.com/svc/movies/v2/`;
let articlesObj;
//functions
async function getArticleByMovieName(searchTerm) {
    try {
        const response = await ((await (fetch(`${baseURL}/reviews/search.json?query=${searchTerm}&${apiKeyTemplate}`))).json())
        let data = {
            numberOfArticles: response.num_results,
            arrayOfArticlesData: response.results.map(article => {
                return {
                    movieName: article.display_title, //
                    PEGI_rating: article.mpaa_rating, //
                    reviewer: article.byline, //
                    articleName: article.headline, //
                    articleSummary: article.summary_short, //
                    publishDate: article.publication_date, //
                    nytURL: article.link.url,
                    nytSuggestedText: article.link.suggested_link_text,
                    media: article.multimedia ? {
                        source: article.multimedia.src,
                        height: article.multimedia.height,
                        width: article.multimedia.width,
                    } : null
                }
            })
        }
        return data;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
async function getAllReviews() {
    try {
        const response = await ((await (fetch(`${baseURL}/reviews/picks.json?query=&${apiKeyTemplate}`))).json())
        let data = {
            numberOfArticles: response.num_results,
            arrayOfArticlesData: response.results.map(article => {
                return {
                    movieName: article.display_title, //
                    PEGI_rating: article.mpaa_rating, //
                    reviewer: article.byline, //
                    articleName: article.headline, //
                    articleSummary: article.summary_short, //
                    publishDate: article.publication_date, //
                    nytURL: article.link.url,
                    nytSuggestedText: article.link.suggested_link_text,
                    media: article.multimedia ? {
                        source: article.multimedia.src,
                        height: article.multimedia.height,
                        width: article.multimedia.width,
                    } : null
                }
            })
        }
        saveToLocalStorage(data, Date.now());
        return data;
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
function buildArticleHtml(article) {
    let str = `<div class='article'>`
        str += `<h3>${article.articleName}</h3>`
        str += `<h6>Author: ${article.reviewer}</h6>`
        str += `<h5>Movie: "${article.movieName}", PEGI: ${article.PEGI_rating ? article.PEGI_rating : `Not Disclosed`}</h5>`
        str += `<div class='summaryPreview'>`
        str += `<div><span class='summaryTitle'>Summary:</span></div>`
        str += `<div><span class='summaryText'>${article.articleSummary}</span></div>`
        str += `</div>`
        str += `<div class='articleFooter'>`
            str += `<div><span>Link: </span><a href="${article.nytURL}" target="_blank">${article.nytSuggestedText}</a></div>`
            str += `<div class='articleDate'><span class='publishDate'>${article.publishDate}</span></div>`
        str += `</div>`
    str += `</div>`;
    return str;
}
function generateArticles(dataSource,target) {
    dataSource.arrayOfArticlesData.forEach(articleData => {
        document.querySelector(`#${target}`).innerHTML += buildArticleHtml(articleData)
    });
}
//useful small functions
function cleanUpInput(locationName) {
    return (locationName.replace(/\s\s+/g, ' ')).trim()
}
function saveToLocalStorage(item, timeStamp) {
    const NYTObject = {
        articlesObj: item,
        lastSaved: timeStamp
    }
    window.localStorage.setItem('NYTObject', JSON.stringify(NYTObject));
}
function pullFromLocalStorage() {
    if (window.localStorage.getItem('NYTObject')) //if exists
    {
        console.log('pulled from local storage');
        return JSON.parse(window.localStorage.getItem('NYTObject'));
    }
    else {
        console.log('local storage empty');
        return null;
    }
}
//event listeners
function handleSearchArea(event) {
    if (event.keyCode === 13) {
        document.querySelector("#searchBtn").click(); //virtual button click
        event.target.value = ''; //clean search area after Enter
    }
}
async function handleSearchBtn(event) {
    event.preventDefault();
    document.querySelector('#searchResultsArea').innerHTML = '';
    const data = await getArticleByMovieName(cleanUpInput(document.querySelector('#searchField').value));
    console.log('search data=',data);
    if (data != false)
        generateArticles(data,'searchResultsArea')
    else
        document.querySelector('#searchResultsArea').innerHTML = `Didn't find any articles`;
}

window.onload = async function () {
    let localStorageData = pullFromLocalStorage();
    if (!localStorageData)
        localStorageData = {
            articlesObj: await getAllReviews(),
            lastSaved: Date.now()
        }
    articlesObj = localStorageData.articlesObj;
    console.log(articlesObj);
    document.querySelector('#searchField').addEventListener('keyup', handleSearchArea);
    document.querySelector('#searchBtn').addEventListener('click', handleSearchBtn);
    generateArticles(articlesObj,'recommendedArticles');
}