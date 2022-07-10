const form = document.getElementById("form1");

form.addEventListener("submit", formSubmit);
function formSubmit(e){
    e.preventDefault()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c07c1e5ffmsh4da314075dd8f5ap1f6aeejsn4fc9e1e66d6d',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    
     const input_string=document.getElementById("input_string").value
     
    const url=`https://online-movie-database.p.rapidapi.com/auto-complete?q=${input_string}`
    
    fetch(url, options)
        .then(response => response.json())
        .then(movie=>{
            const list=movie.d
            
            return list
        })
        .then((list)=>{
            let name=list[0].l
            let ranking=list[0].id
            let poster=list[0].i.imageUrl
            let year=list[0].y
            let year1=list[0].yr
            if(year==undefined ){
                year=year1
            }
            else if(year!==undefined & year1!==undefined){
                    year=year1
            }
            let actors=list[0].s
            let title=`<li>Title # ${name}</li>`
            let image=`<li><img src="${poster}" ></li>`
            let y=`<li>Release Year: ${year}</li>`
            let stars=`<li>Actors: ${actors}</li>`
            
            document.querySelector('.actors').innerHTML=stars
            document.querySelector('.title').innerHTML=title
            document.querySelector('.image').innerHTML=image
            document.querySelector('.year_release').innerHTML=y
           
           return (ranking)
        })

        .then((ranking)=>{fetch(`https://online-movie-database.p.rapidapi.com/title/get-ratings?tconst=${ranking}`, options)
        
            .then(response=>response.json())
            .then(rank=>{
                document.querySelector('.rating').innerHTML=`<li>IMDB: ${rank.rating} </li>`
        })
            return ranking
        })
        // .then((ranking)=>{fetch(`https://online-movie-database.p.rapidapi.com/title/get-plots?tconst=${ranking}`, options)
        //     .then(response=>response.json())
        //     .then(plot=>{
        //         document.querySelector('.about').innerHTML=`<li>Story <br> <br> ${plot.plots[0].text}</p> </li>`
        // })
        // })
        
        
        
        

       
    
        

       
    
}
