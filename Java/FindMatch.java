import java.util.ArrayList;
import java.util.Scanner;


public class FindMatch {

private static ArrayList<BankAccount> accounts = new ArrayList<BankAccount>();

	public static void main(String[] args) 
	{
		
		accounts.add(new BankAccount("1", "checking", .05));
		accounts.add(new BankAccount("3", "checking", .05));
		accounts.add(new BankAccount("90", "savings", .05));
		accounts.add(new BankAccount("7A", "checking", .05));
		accounts.add(new BankAccount("65", "savings", .05));
		accounts.add(new BankAccount("4", "investment", .05));
		
		System.out.println("Which bank account do you want to see?");
		Scanner in = new Scanner(System.in);
		String numToFind = in.nextLine();
		
		BankAccount foundAccount = findBankAccountByNum(numToFind);
		if(foundAccount == null)
		{
			System.out.println("No account found.");
		}
		else
		{
		System.out.println(foundAccount);
		}
		
		System.out.println("What kind of account do you want a list of:");
		String typeToFind = in.nextLine();
		
		ArrayList<BankAccount> foundType = findBankAccountsByType(typeToFind);
		
		if(fountType.size() > 0)
		{
			for(BankAccount account: foundType)
			{
				System.out.println(account);
			}
		}
		else
		{
			System.out.println("None found with type: " + typeToFind);
		}
		
		in.close();
		
	}
	/**
	 * Find the first bank account with the given number and return it
	 * @param accountNumToFind
	 * @return
	 */
	public static BankAccount findBankAccountbyNum(String accountNumToFind)
	{
		for(BankAccount account : accounts)
		{
			if(account.getAccountNumber().equals(accountNumToFind))
			{
				return account;
			}
		}
		return null;
	}
	
	public static ArrayList<BankAccount> findBankAccountsByType(String type)
	{
		ArrayList<BankAccount> foundAccounts = new ArrayList<BankAccount>();
		for( BankAccount account: accounts)
		{
			if(account.getType().equals(type))
			{
				foundAccounts.add(account);
				
			}
		}
		return foundAccounts;
	}

}
