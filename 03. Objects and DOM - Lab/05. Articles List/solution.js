function createArticle() {

    let titleArticle = document.getElementById('createTitle');
    let textArticle = document.getElementById('createContent');

	if (titleArticle.value != '' && textArticle.value != '') {
        
        let articleCreate = document.createElement('article');
        let section = document.getElementById('articles');
        section.appendChild(articleCreate);

        let h3Create = document.createElement('h3');
        let pCreate = document.createElement('p');
        articleCreate.appendChild(h3Create);
        articleCreate.appendChild(pCreate);

        h3Create.innerHTML = titleArticle.value;
        pCreate.innerHTML = textArticle.value;

        titleArticle.value = '';
        textArticle.value = '';
    }
}