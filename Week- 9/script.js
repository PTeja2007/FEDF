let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0743273565" },
    { title: "1984", author: "George Orwell", isbn: "978-0451524935" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0060935467" }
];

function renderBooks(booksToRender = books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    
    booksToRender.forEach((book, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <button class="delete-btn" onclick="deleteBook(${index})">Delete</button>
            </td>
        `;
        bookList.appendChild(row);
    });
}

function addBook() {
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const isbnInput = document.getElementById("isbn");
    
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();
    
    if (title && author && isbn) {
        books.push({ title, author, isbn });
        
        // Clear inputs
        titleInput.value = "";
        authorInput.value = "";
        isbnInput.value = "";
        
        renderBooks();
    } else {
        alert("Please fill in all fields.");
    }
}

function deleteBook(index) {
    books.splice(index, 1);
    renderBooks();
}

function searchBook() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput) ||
        book.isbn.toLowerCase().includes(searchInput)
    );
    
    renderBooks(filteredBooks);
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
    renderBooks();
});
