
/*cменить тему*/
/*const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
}
);*/

$('a.yourlink').click(function(e) {
  e.preventDefault();
  window.open('http://yoururl1.com');
  window.open('http://yoururl2.com');
});


/*копирование текста*/
function copytext(el) {
    var $tmp = $("<input>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
  }

   
  
