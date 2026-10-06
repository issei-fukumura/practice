const form = document.querySelector('#searchForm');


    form.addEventListener('submit',async function(e){
    e.preventDefault();

    const searchWord = form.elements.query.value;

    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchWord}`)
        
        const img = document.createElement('IMG')
        img.src=res.data[0].show.image.medium
        document.body.append(img);

    } catch (error) {
        console.error('取得に失敗しました', error);
    }

    });