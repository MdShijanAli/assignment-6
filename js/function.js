const allCategory = () => {
    url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => singleCategory(data.data.news_category))
}

const singleCategory = categories => {
    // console.log(categories);
    categories.forEach(category => {

        // console.log(category)
        const categoriesContainer = document.getElementById('categories');
        const createCategory = document.createElement('ul');
        createCategory.classList.add('nav');
        createCategory.innerHTML = `
         
           <li class="nav-item" style="cursor:pointer;"> <a onclick="loadNews('${category.category_id}')">${category.category_name}</a></li>
         
         `;
        categoriesContainer.appendChild(createCategory);
    });

}


const loadNews = async category_id => {
    // console.log(id);
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}



const displayNews = allnews => {


    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    allnews.forEach(news => {
        console.log(news);

        let i = 0; i < news.length; i++;
        // console.log(selectedArray[i].playerName);
        const name = news[i];
        console.log(name);



        // const newsContainer = document.getElementById('news-container');
        /* newsContainer.innerHTML = ''; */
        const createSingleNews = document.createElement('div');
        createSingleNews.classList.add('single-news');
        createSingleNews.innerHTML = `
              <div class="row g-0 m-3 rounded">
                 <div class="col-md-3">
                    <img src="${news.image_url}" class="img-fluid rounded" alt="...">
                 </div>
                 <div class="col-md-9 ">
                     <div class="card-body">
                        <h3 class="card-title fw-bold">${news ? news.title : 'No Data Found'}</h3>
                        <p class="card-text">${news.details.slice(0, 1000)}</p>
         
                      </div>
                  <div class="card-bottom d-flex align-items-center justify-content-between">
                          <div class="d-flex ">
                                  <img src="${news.author.img}" alt="">
                                  <div class="author">
                                      <h6>${news.author ? news.author.name : 'No Data Found'}</h6>
                                      <p>${news.author ? news.author.published_date : 'No Data Found'} </p>
                                  </div>
                          </div>
         
                          <div>
                                  <h5><i class="fa-regular fa-eye"></i> ${news.total_view}</h5>
                          </div>
                          <div>
                                   <i class="fa-solid fa-star-half-stroke"></i>
                                   <i class="fa-regular fa-star"></i>
                                   <i class="fa-regular fa-star"></i>
                                   <i class="fa-regular fa-star"></i>
                                   <i class="fa-regular fa-star"></i>
                                   
                          </div>
         
                         <div>
                          <button onclick="loadDetails('${news._id}')" data-bs-toggle="modal" data-bs-target="#newsDetailModal"><i class="fa-solid fa-arrow-right"></i></button>
                          
                         </div>
         
                  </div>
              </div>
         
              `;
        newsContainer.appendChild(createSingleNews);

    })
    toggleSpinner(false);

}


const loadDetails = async _id => {

    const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}


const displayNewsDetails = categories => {

    categories.forEach(category => {

        console.log(category)
        const newsTitle = document.getElementById('newsDetailModalLabel');
        newsTitle.innerText = category.title;
        const newsDetails = document.getElementById('news-details');
        newsDetails.innerHTML = `
        <img src=${category.image_url} class="mb-3 w-100"/>
        <h3>${category.title}</h3>
        <p>${category.details}</p>
       

        <div class="card-bottom d-flex align-items-center justify-content-between">
                  <div class="d-flex ">
                          <img  src="${category.author.img}" alt="">
                          <div class="author">
                              <h6>${category.author ? category.author.name : 'No Data Found'}</h6>
                              <p>${category.author ? category.author.published_date : 'No Data Fpund'} </p>
                          </div>
                  </div>
 
                  <div>
                          <h5><i class="fa-regular fa-eye"></i> ${category.total_view}</h5>
                  </div>
                  <div>
                           <i class="fa-solid fa-star-half-stroke"></i>
                           <i class="fa-regular fa-star"></i>
                           <i class="fa-regular fa-star"></i>
                           <i class="fa-regular fa-star"></i>
                           <i class="fa-regular fa-star"></i>
                           
                  </div>
 
                 
 
          </div>
    

    
    `;
    })



}



const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');

    }
}



const newsArray = [];


allCategory();

const showNewsLength = () => {

}

// loadCategory('01');






