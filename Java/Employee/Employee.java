
public abstract class Employee implements Comparable<Employee>{

	private String ID;
	private String name;
	
	public Employee(String iD, String name) {
		super();
		ID = iD;
		this.name = name;
	}
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * Calculate pay for one month
	 * @return
	 */
	public abstract double calculatePay();
	
	public int compareTo(Employee other){
		
		return new Integer(this.ID).compareTo(new Integer(other.ID));
	}
	
	public String toString()
	{
		return this.ID + " " + this.name;
	}
}
