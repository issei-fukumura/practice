const express = require('express')
const app = express();



// app.use((req,res)=>{
//     console.log('リクエストを受け付けました！')
//     res.send('<h1>初めてのWebページ<h1>')
// })

app.get('/dogs',(req,res) => {
    res.send("ワンワン");
});




// app.get('/r/:subreddit',(req,res) => {
//     const { subreddit }= req.params;
//     res.send(`<h1>${subreddit}subredditのページ</h1>`);
// });

// app.get('/r/:subreddit',(req,res) => {
//     const { subreddit }= req.params;
//     res.send(`<h1>${subreddit}subredditのページ</h1>`);
// });

app.get('/search',(req,res) => {
    const {q} = req.query;
    if (q == ""){
        res.send('検索するものが指定されていません!')
    }else{
        res.send(`<h1>「${q}」の検索結果!!!</h1>`)
    }
})





app.get(/(.*)/,(req,res) => {
    res.send("そんなパスは知らない！!!");
});



app.listen(8080,()=> {
    console.log('リクエストをポートで待受中....')
})










