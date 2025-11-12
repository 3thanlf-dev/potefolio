let sIndex = 0;
        
function showImage(n) {
    sIndex=n;
    displaySlide();
}
function nextSlide(n) {
    sIndex = sIndex + n;
    displaySlide();
}
function displaySlide() {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (sIndex >= slides.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sIndex].style.display = "block";
}
setInterval(autoSlide,4000);
function autoSlide() {
sIndex = sIndex + 1;
displaySlide();
}

window.addEventListener('load', function() {
    document.querySelector('.loader').classList.add('fondu-out');
    
    // Gestion du menu mobile
    const menuMobile = document.querySelector('.menumobile');
    if (menuMobile) {
        menuMobile.addEventListener('click', function(e) {
            e.preventDefault();
            const menu = document.getElementById('menuprincipal');
            menu.classList.toggle('active');
        });
    }
})

function light(){
    let b = document.getElementsByTagName("body");
    b[0].classList.add('bodyL');
}

function dark(){
    let c = document.getElementsByClassName("bodyL");
    c[0].classList.remove('bodyL');
}



let xmlhttp = new XMLHttpRequest();
function loadXMLDoc() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            fetchData();
        }
    };
    xmlhttp.open("GET", "../data/BD.xml", true);
    xmlhttp.send();
}

function fetchData() {
    let i;
    let xmlDoc = xmlhttp.responseXML;
    let table = "<tr><th>Avis</th><th>Nom</th></tr>";
    let x = xmlDoc.getElementsByTagName("BOOK");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue +
        "</td>" +
        "<td><button type=\"button\" onclick=\"editBook(" +
        x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
        "Modifier</button></td>" +
        "<td><button type=\"button\" onclick=\"deleteBook(" +
        x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
        "Effacer</button></td>" +                
        "</tr>";
    }
    document.getElementById("data").innerHTML = table;
}

function editBook(id) {
    let tblBook = document.getElementById("tblBook");
    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");
    let hId = document.getElementById("hId");

    let xmlDoc = xmlhttp.responseXML;
    let books = xmlDoc.getElementsByTagName("BOOK");
    let book;

    for (i = 0; i < books.length; i++) {
        if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            book = books[i];
        }
    }

    tblBook.style.display = "block";
    hId.value = book.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
    txtTitle.value = book.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    txtAuthor.value = book.getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue;
}
function updateBook() {
    let xmlDoc = xmlhttp.responseXML;
    let id = document.getElementById("hId").value;
    let books = xmlDoc.getElementsByTagName("BOOK");
    let book;

    for (i = 0; i < books.length; i++) {
        if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            book = books[i];
        }
    }

    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");

    book.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue = txtTitle.value;
    book.getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue = txtAuthor.value;

    fetchData();
}
function deleteBook(id) {
    let xmlDoc = xmlhttp.responseXML;
    let books = xmlDoc.getElementsByTagName("BOOK");
    let book;

    for (i = 0; i < books.length; i++) {
        if(books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            book = books[i];
        }
    }
    
    xmlDoc.documentElement.removeChild(book);
    fetchData();
}
function makeTextFile (text) {
    let textFile = null;
    let data = new Blob([text], { type: 'text/plain' });

    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
}

function saveBook() {                
    let create = document.getElementById('btnSave');

    let link = document.createElement('a');
    link.setAttribute('download', 'BD.xml');
    
    const s = new XMLSerializer();

    link.href = makeTextFile(s.serializeToString(xmlhttp.responseXML));
    document.body.appendChild(link);

    window.requestAnimationFrame(function () {
        let event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });
}
function addBook() {
    let xmlDoc = xmlhttp.responseXML;
    let books = xmlDoc.getElementsByTagName("BOOK");

    let book = xmlDoc.createElement("BOOK");    
    let id = xmlDoc.createElement("ID");
    let title = xmlDoc.createElement("TITLE");
    let author = xmlDoc.createElement("AUTHOR");

    let id_Text = xmlDoc.createTextNode(books.length+1);
    id.appendChild(id_Text);
    let title_Text = xmlDoc.createTextNode("Test Title");
    title.appendChild(title_Text);
    let author_Text = xmlDoc.createTextNode("Test Author");
    author.appendChild(author_Text);

    book.append(id);
    book.appendChild(title);
    book.appendChild(author);

    let library = xmlDoc.getElementsByTagName("LIBRARY")[0];
    library.appendChild(book);

    fetchData();
}

