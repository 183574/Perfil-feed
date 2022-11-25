const feed = document.body
window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then( ({users}) => {
            users.forEach( user => {
                fetch('https://dummyjson.com/posts/'+user.id)
                .then(res => res.json())
                .then((post)=>{
                    fetch('https://jsonplaceholder.typicode.com/photos/'+user.id)
                    .then(res => res.json())
                    .then((foto)=>{
                        fetch('https://dummyjson.com/comments/'+post.id)
                        .then(res => res.json())
                        .then((comentario) =>{
                            const postagem = ` <div class="container">
                        <div class="card">
                            <div class="perfil">
                                <img src="${user.image}" class="cover">
                                <p>@${user.username}</p>
                            
                            </div>
                            <div class="feed">
                                <img src="${foto.url}" class="foto-feed">
                            </div>
                            <div class="icones">
                                <img class="icones" src="curtidaa.jpeg" alt="">
                                <img class="icones" src="Comentario.jpeg" alt="">
                                <img class="icones" src="compartilhar.jpeg" alt="">
                
                            </div>
                            <div><img src="salve.jpeg" alt="" class="salve"></div>
                            <h4>${post.body}</h4>
                            <div class="Comente">
                                <div class="comentario">
                                    <h3>${comentario.user.username}</h3>
                                    <h4>${comentario.body}</h4>
                                </div>
                            </div>
                            <div>
                                <img class="curtida" src="curtidaa.jpeg" alt="">
                                <input type="text" class="input" placeholder="Comment here...">
                            </div>
                        </div>
                     </div>`

                     feed.innerHTML += postagem
                        })
                        
                    })
                })
            
                
                
            });
        })
})