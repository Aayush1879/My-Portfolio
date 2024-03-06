function toggleReadMore() {
    var extraContent = document.getElementById("extra-content");
    var readMoreBtn = document.querySelector('.about-content .btn');

    if (extraContent.style.display === "none" || extraContent.style.display === "") {
        extraContent.style.display = "block";
        readMoreBtn.innerText = "Read Less";
    } else {
        extraContent.style.display = "none";
        readMoreBtn.innerText = "Read More";
    }
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbwJRu86nfrAMRHmhqW_7wBSnWrsBlfDJau5P-r8i4BwfMyt0MDMMsl2-M9YtOiiUJ4law/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
});