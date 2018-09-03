public class Fighter
{

	private int fighterID;
	private String name;
	private double funding;
	private double skill;
	private double luck;
	private int trainerID;

	public Fighter(int ID, String name, double fund, double skill, double luck,
			int trainID)
	{
		this.fighterID = ID;
		this.name = name;
		this.funding = fund;
		this.skill = skill;
		this.luck = luck;

		this.trainerID = trainID;
	}

	public Fighter(int ID, String name, double fund, int trainID)
	{
		this.fighterID = ID;
		this.name = name;
		this.funding = fund;
		this.trainerID = trainID;
	}

	public void setFighterID(int ID)
	{
		this.fighterID = ID;
	}

	public int getFighterID()
	{
		return fighterID;
	}

	public void setFighterName(String name)
	{
		this.name = name;
	}

	public String getFighterName()
	{
		return name;
	}

	public void setFunding(double fund)
	{
		this.funding = fund;
	}

	public double getFunding()
	{
		return funding;
	}

	public void setSkill(double skill)
	{
		this.skill = skill;
	}

	public double getSkill()
	{
		return skill;
	}

	public void setLuck(double luck)
	{
		this.luck = luck;
	}

	public double getLuck()
	{
		return luck;
	}

	public void setTrainerID(int ID)
	{
		this.trainerID = ID;
	}

	public int getTrainerID()
	{
		return trainerID;
	}
}