import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        LibraryManager manager = new LibraryManager();
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("=====================================");
            System.out.println("Smart Digital Library Management System");
            System.out.println("=====================================");
            System.out.println("1. Add Book");
            System.out.println("2. Show All Books");
            System.out.println("3. Issue Book");
            System.out.println("4. Return Book");
            System.out.println("5. Search Book");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            
            if (!scanner.hasNextInt()) {
                System.out.println("Invalid input. Please enter a number.");
                scanner.next(); // consume the invalid input
                continue;
            }
            
            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline
            
            switch (choice) {
                case 1:
                    System.out.print("Enter Book ID: ");
                    int id = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("Enter Book Title: ");
                    String title = scanner.nextLine();
                    System.out.print("Enter Book Author: ");
                    String author = scanner.nextLine();
                    manager.addBook(id, title, author);
                    break;
                case 2:
                    manager.showBooks();
                    break;
                case 3:
                    System.out.print("Enter Book ID to issue: ");
                    int issueBookId = scanner.nextInt();
                    System.out.print("Enter User ID: ");
                    int issueUserId = scanner.nextInt();
                    manager.issueBook(issueBookId, issueUserId);
                    break;
                case 4:
                    System.out.print("Enter Book ID to return: ");
                    int returnBookId = scanner.nextInt();
                    manager.returnBook(returnBookId);
                    break;
                case 5:
                    System.out.print("Enter Book Title to search: ");
                    String searchTitle = scanner.nextLine();
                    manager.searchBook(searchTitle);
                    break;
                case 6:
                    System.out.println("Exiting system. Goodbye!");
                    scanner.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
            System.out.println();
        }
    }
}
