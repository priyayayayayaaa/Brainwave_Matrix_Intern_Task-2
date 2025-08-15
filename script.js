document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert(`Thank you for subscribing, ${email}!`);
  this.reset();
});