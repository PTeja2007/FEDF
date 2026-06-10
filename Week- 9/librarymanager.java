import java.util.*;

class LibraryManager {

    ArrayList<Book> books = new ArrayList<>();
    HashMap<Integer, Integer> issuedBooks = new HashMap<>();
    Queue<Integer> waitingQueue = new LinkedList<>();
    Stack<Integer> returnHistory = new Stack<>();

    void addBook(int id, String title, String author) {
        books.add(new Book(id, title, author));
        System.out.println("Book added successfully.");
    }

    void showBooks() {
        if (books.isEmpty()) {
            System.out.println("No books in library.");
            return;
        }

        for (Book b : books) {
            b.display();
        }
    }

    void issueBook(int bookId, int userId) {

        for (Book b : books) {
            if (b.id == bookId) {

                if (b.available) {
                    b.available = false;
                    issuedBooks.put(bookId, userId);
                    System.out.println("Book issued successfully.");
                } else {
                    System.out.println("Book not available. Added to waiting queue.");
                    waitingQueue.add(userId);
                }
                return;
            }
        }

        System.out.println("Book not found.");
    }

    void returnBook(int bookId) {

        for (Book b : books) {
            if (b.id == bookId) {

                b.available = true;
                issuedBooks.remove(bookId);
                returnHistory.push(bookId);

                System.out.println("Book returned successfully.");

                if (!waitingQueue.isEmpty()) {
                    int nextUser = waitingQueue.poll();
                    System.out.println("Next user in queue: " + nextUser);
                }

                return;
            }
        }

        System.out.println("Book not found.");
    }

    void searchBook(String title) {

        for (Book b : books) {
            if (b.title.equalsIgnoreCase(title)) {
                b.display();
                return;
            }
        }

        System.out.println("Book not found.");
    }
}