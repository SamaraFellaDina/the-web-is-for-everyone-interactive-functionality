// importeren
import express from "express"
import fetchJson from './helpers/fetch-json.js'
const app = express()

// stel de mappen in
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// definieren van variabelen
const apiUrl = 'https://redpers.nl/wp-json/wp/v2'
const apiPosts = apiUrl + '/posts'
const apiUsers = apiUrl + '/users'
const apiCategories = apiUrl + '/categories'

// Routes aanmaken
app.get('/', (request, response) => {
    fetchJson(apiPosts).then((articleData) => {
        response.render('home.ejs', {
            articles: articleData
        })
    })  
})

app.get('/artikel/:slug', function (request, response) {
     fetchJson(apiPosts + '?slug=' + request.params.slug).then((apiData) => {
           response.render('article.ejs', {
            article: apiData[0] 
            // Door [0] te gebruiken hier, hoef je het niet in het ejs
            // bestand te gebruiken. Hiermee zorg je ervoor dat hij het eerste object pakt
            
      })
    })
  })

//   maken van post
let likes = []
app.post('/artikel/:slug', function (request, response) {
    let numberOfLikes = likes.find((like) => {
        return like.slug == request.params.slug
    })

    if (huidig == undefined) {
        likes.push({
            slug: request.params.slug,
            likes:1,
        })
    } 

    else {
        huidig.likes++
    }

    console.log(huidig)
    response.send('post route naar afhandeling')
    response.redirect(301, '/article/' + request.params.slug)
})

// Een port aanroepen om alles op te hosten
app.set('port', process.env.PORT || 8080)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})