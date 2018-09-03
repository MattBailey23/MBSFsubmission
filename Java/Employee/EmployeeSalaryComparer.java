import java.util.Comparator;


public class EmployeeSalaryComparer implements Comparator<Employee> {

	

	@Override
	public int compare(Employee e1, Employee e2) {
		
		return -new Double(e1.calculatePay()).compareTo(new Double(e2.calculatePay()));
	}

}
