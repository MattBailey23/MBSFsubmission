/*
 * GuessingGame.java
 * Created on October 30, 2012
 * 
 * Instructor: Matsuda
 * Class Section: 07
 * Lab Instructor: Reema
 * Lab Section: 09
 * ULID: mtbail2
 * 
 */

/**
 * demonstrates the use of a random generator to allow the user
 * to guess until the number is correct. writes guesses and answers to
 * a new file
 * 
 * @author Matthew Bailey
 */
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
import java.util.Scanner;

public class GuessingGame
{

	public static void main(String[] args) throws IOException
	{
		String name = null;
		int num = 0;
		int answer = 0;
		int ctr = 0;

		Random randomNumbers = new Random();
		Scanner keyboard = new Scanner(System.in);
		FileWriter outFile = new FileWriter("GuessingGameResults.txt");
		PrintWriter out = new PrintWriter(outFile);

		System.out.println("Please enter your name");
		name = keyboard.nextLine();
		num = randomNumbers.nextInt(101);

		while (ctr < 101)
		{

			System.out
					.println("Please guess a number between 1-100 (Enter -1 to quit)");
			answer = keyboard.nextInt();

			if (answer == -1)
			{
				System.exit(0);
			}

			if (answer < num)
			{
				System.out.println("Too Low");

			}
			else if (answer > num)
			{
				System.out.println("Too High");

			}
			else if (answer == num)
			{
				System.out.println("Correct!");
				out.println(name);
				out.println("Solution: " + num);
				out.println("Guesses: ");
				out.println("It took you " + ctr + " guesses");
				out.println("");

				ctr++;
			}

		}
		out.close();

	}

}
