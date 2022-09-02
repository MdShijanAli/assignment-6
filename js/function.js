const loadCategory = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategory(data.data))
}

const displayCategory = categories => {
    // console.log(categories);
    categories.forEach(category => {
        console.log(category);

        const newsContainer = document.getElementById('news-container');
        const createSingleNews = document.createElement('div');
        createSingleNews.classList.add('single-news');
        createSingleNews.innerHTML = `
        <div class="row g-0 m-3 rounded">
           <div class="col-md-3">
              <img src="${category.image_url}" class="img-fluid rounded" alt="...">
           </div>
           <div class="col-md-9 ">
               <div class="card-body">
                  <h3 class="card-title fw-bold">${category.title}</h3>
                  <p class="card-text">From our favourite UK influencers to the best missives from Milan and
                    the coolest New Yorkers, read on some of the
                    best fashion blogs out there, and for even more inspiration, do head to our separate
                    black fashion influencer roundup.</p>
                <br>
    
    
                   <p>Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black
                    Friday, Missoma Black
                    Friday and Gucci Black Friday...
                   </p>
    
                </div>
            <div class="card-bottom d-flex align-items-center justify-content-between">
                    <div class="d-flex ">
                            <img src="images/shijan.jpg" alt="">
                            <div class="author">
                                <h6>Jane Cooper</h6>
                                <p>Jan 10, 2022 </p>
                            </div>
                    </div>
    
                    <div>
                            <h5><i class="fa-regular fa-eye"></i> 1.5M</h5>
                    </div>
                    <div>
                             <i class="fa-solid fa-star-half-stroke"></i>
                             <i class="fa-regular fa-star"></i>
                             <i class="fa-regular fa-star"></i>
                             <i class="fa-regular fa-star"></i>
                             <i class="fa-regular fa-star"></i>
                    </div>
    
                   <div>
                    <button><i class="fa-solid fa-arrow-right"></i></button>
    
                   </div>
    
            </div>
        </div>
        
        `;
        newsContainer.appendChild(createSingleNews);
    });


}


loadCategory('01');