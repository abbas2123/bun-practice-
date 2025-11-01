Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if(url.pathname==='/'){
        return new Response('welcome to Abbas Bun practice page');
    }
    if(url.pathname==='/about'){
        return new Response('I am muhammed Abbas and i am currently learning bun')
    }
    if(url.pathname==='/contact'){
        return Response.json({
            name:'Muhammed Abbas',
            email:'abbasakk51@gmail.com'
        });
    }
    return new Response('404 not found',{status : 404});
  }  
});
console.log('halooo')
console.log('halooo,hai')
console.log("✅ Server running at http://localhost:3000");