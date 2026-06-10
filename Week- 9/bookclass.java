import java.util.*;

class Book {
    int id;
    String title;
    String author;
    boolean available;

    Book(int id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = true;
    }

    void display() {
        System.out.println("ID: " + id +
                " | Title: " + title +
                " | Author: " + author +
                " | Status: " + (available ? "Available" : "Issued"));
    }
}