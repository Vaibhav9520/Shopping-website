window.onload = function() {
    fetch('/Component/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Fetch and insert Landing page content
        fetch('/Component/landingpage.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main').innerHTML = data;
        });
        
        // Fetch and insert footer content
        fetch('/Component/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
    });
};
