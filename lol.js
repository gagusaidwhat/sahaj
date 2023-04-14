import java.util.Scanner;
import java.util.Random;

public class GuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int randomNumber = random.nextInt(100) + 1;
        int tries = 0;

        System.out.println("Welcome to the Guessing Game!");
        System.out.println("I'm thinking of a number between 1 and 100. Can you guess what it is?");

        while (true) {
            System.out.print("Enter your guess: ");
            int guess = scanner.nextInt();
            tries++;

            if (guess < randomNumber) {
                System.out.println("Too low. Try again.");
            } else if (guess > randomNumber) {
                System.out.println("Too high. Try again.");
            } else {
                System.out.println("Congratulations! You guessed the number in " + tries + " tries.");
                break;
            }
        }

        scanner.close();
    }
}

