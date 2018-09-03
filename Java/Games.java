import java.io.File;
import java.io.FileNotFoundException;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;


public class Games implements Comparable{
	
	private String name;
	private String releaseDate;
	private String company;
	private Set<Games> nesList = new TreeSet<Games>();
	private Set<Games> snesList = new TreeSet<Games>();
	private Set<Games> n64List = new TreeSet<Games>();
	private Set<Games> gamecubeList = new TreeSet<Games>();
	private Set<Games> wiiList = new TreeSet<Games>();
	private Set<Games> wiiUList = new TreeSet<Games>();
	
//	public Games(String name, String release, String comp){
//		this.name = name;
//		this.releaseDate = release;
//		this.company = comp;
//		}
	
	public Games(String name){
		this.name = name;
	}
	
	public Games(){
		
	}
	
//	public void loadNESGames() throws FileNotFoundException{
//		Scanner in = new Scanner(new File("nes-games.txt"));
//		
//		  
//		while(in.hasNext()){
//			String gameInfo = in.nextLine();
//			String[] game = gameInfo.split(",");
////			for(int i = 0; i < game.length; i++){
////				System.out.println(game[i]);
////			}
//			Games nesGame = new Games(game[0], game[1], game[2]);
//			nesList.add(nesGame);
//			
////			System.out.println(nesGame.getName() + " "+nesGame.getReleaseDate() +" "+ nesGame.getCompany());
//			for(Games nes : nesList){
//			System.out.println(nes.getName());
//			}
//	}
//	}
	
	public void loadNESGames() throws FileNotFoundException{
		Scanner in = new Scanner(new File("nes-games.txt"));
		
		while(in.hasNext()){
			String name = in.nextLine();
			Games nesGame = new Games(name);
			nesList.add(nesGame);
		}
	}
	
	public void loadSNESGames() throws FileNotFoundException{
		Scanner in = new Scanner(new File("snes-games.txt"));
		
		while(in.hasNext()){
			String name = in.nextLine();
			Games snesGame = new Games(name);
			snesList.add(snesGame);
		}
	}
	
	public void loadN64Games() throws FileNotFoundException{
		Scanner in = new Scanner(new File("n64-games.txt"));
		
		while(in.hasNext()){
			String name = in.nextLine();
			Games n64Game = new Games(name);
			n64List.add(n64Game);
		}
		
		for(Games game : n64List){
			System.out.println(game.getName());
		}
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String release) {
		this.releaseDate = release;
	}
	
	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	@Override
	public int compareTo(Object arg0) {
		getName().compareTo(((Games) arg0).getName());
		return 1;
	}

}