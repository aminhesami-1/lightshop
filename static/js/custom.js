let csrftoken = getCookie('csrftoken');
// The following function are copying from 
// https://docs.djangoproject.com/en/dev/ref/csrf/#ajax
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
              }
            }
          }
          return cookieValue;
        }
function add_to_cart(product_id) {
  // console.log(product_id)
  fetch("http://127.0.0.1:8000/cart/addtocart/", {
  method: "POST",
  body: JSON.stringify({
    productid: product_id,
  }),
  headers: { "X-CSRFToken": csrftoken }
})
.then((response)=> response.json())
.then((json) => document.querySelector('.count').innerHTML++);
}
function delete_form_cart(product_id) {
  fetch("http://127.0.0.1:8000/cart/deleteformcart/", {
    method: "POST",
    body: JSON.stringify({
      productid: product_id,
    }),
    headers: { "X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => {if (json.data == 'success') {location.reload()}});
}
function add_count(product_id){
  fetch("http://127.0.0.1:8000/cart/addcount/" , {
  method : "POST",
  body: JSON.stringify({
    productid : product_id,
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => { if (json.data == "1" ) {location.reload()}} )
}
function minus_count(product_id){
  fetch("http://127.0.0.1:8000/cart/minuscount/" , {
  method : "POST",
  body: JSON.stringify({
    productid : product_id,
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => { if (json.data == "1" ) {location.reload()}} )
}
function like(comment_id){
  fetch("http://127.0.0.1:8000/product/like/" , {
  method : "POST",
  body: JSON.stringify({
    comment_id : comment_id,
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => { if (json.data == "1" ) {document.getElementById(`cosume-like-${comment_id}`).innerHTML++ } else if(json.data == "2") {document.getElementById(`cosume-like-${comment_id}`).innerHTML-- }})
}
function dislike(comment_id){
  fetch("http://127.0.0.1:8000/product/dislike/" , {
  method : "POST",
  body: JSON.stringify({
    comment_id : comment_id,
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => {if (json.data == "1" ) {document.getElementById(`cosume-dislike-${comment_id}`).innerHTML++ } else if(json.data == "2") {document.getElementById(`cosume-dislike-${comment_id}`).innerHTML-- } })
}

function reply_to_comment(comment_id,product_id){
  comment_text = document.querySelector(`#comment_reply${comment_id}`).value
  fetch("http://127.0.0.1:8000/product/reply_to_comment/" , {
  method : "POST",
  body: JSON.stringify({
    comment_id : comment_id,
    product_id: product_id,
    comment_text: comment_text
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => (console.log(json)))
  }


function blog_comment_dislike(comment_id){
  fetch("http://127.0.0.1:8000/blog/dislike/" , {
  method : "POST",
  body: JSON.stringify({
    comment_id : comment_id,
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => {if (json.data == "1" ) {document.getElementById(`cosume-dislike-${comment_id}`).innerHTML++ } else if(json.data == "2") {document.getElementById(`cosume-dislike-${comment_id}`).innerHTML-- } })
}

function blog_comment_like(comment_id){
  fetch("http://127.0.0.1:8000/blog/like/" , {
  method : "POST",
  body: JSON.stringify({
    comment_id : comment_id,
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => { if (json.data == "1" ) {document.getElementById(`cosume-like-${comment_id}`).innerHTML++ } else if(json.data == "2") {document.getElementById(`cosume-like-${comment_id}`).innerHTML-- }})
}


function product_create_comment(product_id){
  let comment_tetx_value = document.getElementById('id_comment_text').value
  fetch("http://127.0.0.1:8000/product/product_create_comment/" , {
  method : "POST",
  body: JSON.stringify({
    tetx_value : comment_tetx_value,
    product_id : product_id
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => { if (json.data == "1" ) {location.reload()}})
  
}

function blog_comment_create(blog_id){
  let comment_tetx_value = document.getElementById('comment_text').value
  fetch("http://127.0.0.1:8000/blog/blog_comment_create/" , {
  method : "POST",
  body: JSON.stringify({
    tetx_value : comment_tetx_value,
    blog_id : blog_id
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => { if (json.data == "1" ) {location.reload()}})
  
}


function reply_to_blog_comment(comment_id, blog_id){
  comment_text = document.querySelector(`#reply_blog_coment${comment_id}`).value
  fetch("http://127.0.0.1:8000/blog/blog_reply/" , {
  method : "POST",
  body: JSON.stringify({
    comment_id : comment_id,
    blog_id: blog_id,
    comment_text: comment_text
  }),
  headers: {"X-CSRFToken": csrftoken }
  })
  .then((response)=> response.json())
  .then((json) => { if (json.data == "1" ) {location.reload()}})
  }