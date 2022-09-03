
const allCategory = () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        fetch(url)
            .then(res => res.json())
            .then(data => singleCategory(data.data.news_category))
    } catch (error) {
        console.log('May Be Something is Missing');
        console.log(error);
    }

}


const singleCategory = categories => {
    // console.log(categories);

    categories.forEach(category => {




        try {
            const categoriesContainer = document.getElementById('categories');
            const createCategory = document.createElement('ul');
            createCategory.classList.add('nav');
            createCategory.innerHTML = `

                <li class="nav-item" style="cursor:pointer;"> <a onclick="loadNews('${category.category_id}')">${category.category_name}</a></li>

            `;
            categoriesContainer.appendChild(createCategory);
        } catch (error) {
            console.log('May Be Something is Missing');
            console.log(error);
        }


    });

}







const loadNews = async category_id => {


    try {
        toggleSpinner(true);
        const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
        // console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data);
    } catch (error) {
        console.log('May Be Something is Missing');
        console.log(error);
    }





}



const displayNews = allnews => {


    const sortFind = allnews.sort((x, y) => {
        if (x.total_view < y.total_view) {
            return 1;
        }
        else {
            return -1;
        }
    })




    const showNumber = document.getElementById('shownumber');
    showNumber.innerText = allnews.length;

    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';


    allnews.forEach(news => {
        console.log(news);

        try {
            const createSingleNews = document.createElement('div');
            createSingleNews.classList.add('single-news');
            createSingleNews.innerHTML = `
              <div class="row g-0 m-3 rounded">
                 <div class="col-md-12 col-lg-3">
                    <img src="${news.image_url}" class="img-fluid rounded h-100" alt="...">
                 </div>
                 <div class="col-md-12 col-lg-9">
                     <div class="card-body">
                        <h3 class="card-title fw-bold">${news ? news.title : 'No Data Found'}</h3>
                        <p class="card-text">${news.details}</p>
         
                      </div>
                     <div class="card-bottom d-flex align-items-center justify-content-between">
                         
                            <div class="d-flex ">
                                  <div>
                                     <img src="${news.author ? news.author.img : 'No Image'}" alt="">
                                  </div>

                                  <div class="author">
                                     <h6>${news.author ? news.author.name : 'No Data Found'}</h6>
                                     <p>${news.author ? news.author.published_date : 'No Data Found'} </p>
                                  </div>
                            </div>
 
                            <div>
                                   <h5 id="viewList"><i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : '0'}M</h5>
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
        } catch (error) {
            console.log('May Be Something is Missing');
            console.log(error);
        }

    })
    toggleSpinner(false);

}


const loadDetails = async _id => {

    try {
        const url = `https://openapi.programming-hero.com/api/news/${_id}`;
        console.log(url);
        const res = await fetch(url);
        const data = await res.json();
        displayNewsDetails(data.data);
    } catch (error) {
        console.log('May Be Something is Missing');
        console.log(error);
    }
}


const displayNewsDetails = categories => {

    categories.forEach(category => {

        console.log(category)

        try {
            const newsTitle = document.getElementById('newsDetailModalLabel');
            newsTitle.innerText = category.title;
            const newsDetails = document.getElementById('news-details');
            newsDetails.innerHTML = `
            <img src=${category.image_url} class="mb-3 w-100"/>
            <h3>${category.title}</h3>
            <p>${category.details}</p>
           
    
            <div class="card-bottom d-flex align-items-center justify-content-between">
                      <div class="d-flex ">
                              <img  src="${category.author ? category.author.img : 'No Image'}" alt="">
                              <div class="author">
                                  <h6>${category.author ? category.author.name : 'No Data Found'}</h6>
                                  <p>${category.author ? category.author.published_date : 'No Data Fpund'} </p>
                              </div>
                      </div>
     
                      <div>
                              <h5><i class="fa-regular fa-eye"></i> ${category.total_view ? category.total_view : '0'}M</h5>
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
        } catch (error) {
            console.log('May Be Something is Missing');
            console.log(error);
        }



    })



}



const toggleSpinner = isLoading => {
    try {
        const loaderSection = document.getElementById('loader');
        if (isLoading) {
            loaderSection.classList.remove('d-none');
        }
        else {
            loaderSection.classList.add('d-none');

        }
    } catch (error) {
        console.log('May Be Something is Missing');
        console.log(error);
    }
}









loadNews('08')



allCategory();










