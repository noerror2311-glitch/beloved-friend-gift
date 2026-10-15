document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.continue-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nextNum = btn.getAttribute('data-next');
      var current = document.querySelector('.page.active');
      var next = document.querySelector('.page[data-page="' + nextNum + '"]');
      if (current) current.classList.remove('active');
      if (next) next.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  });

  var photo = document.getElementById('hugPhoto');
  var placeholder = document.getElementById('placeholderText');
  if (photo && placeholder) {
    photo.addEventListener('load', function () {
      placeholder.style.display = 'none';
      photo.style.display = 'block';
    });
    photo.addEventListener('error', function () {
      placeholder.style.display = 'flex';
      photo.style.display = 'none';
    });
  }
});