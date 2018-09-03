import java.util.ArrayList;
import java.util.Collections;


public class EmployeeTester {
	
	public static void main(String[] args) {
		
		ArrayList<Employee> emps = new ArrayList<Employee>();
		
		emps.add(new SalariedEmployee("1", "bob", 456));
		emps.add(new SalariedEmployee("3", "sally", 4456));
		HourlyEmployee h1 = new HourlyEmployee("2", "fred", 4);
		HourlyEmployee h2 = new HourlyEmployee("20", "bill", 12);
		HourlyEmployee h3 = new HourlyEmployee("12", "quinn", 10);
		h1.setHoursWorked(10);
		h2.setHoursWorked(16);
		h3.setHoursWorked(24);
		emps.add(h3);
		emps.add(h2);
		emps.add(h1);
		emps.add(new SalariedEmployee("4", "zippy", 46));
		
		double payroll = 0;
		for(Employee emp : emps){
			payroll += emp.calculatePay();
		}
		
		System.out.println(payroll);
		
		//print unsorted
		System.out.println("unsorted");
		for(Employee emp : emps){
			System.out.println(emp.toString());
		}
		
		System.out.println();
		Collections.sort(emps);
		//print sorted
				System.out.println("sorted");
				for(Employee emp : emps){
					System.out.println(emp);
				}
		
		Collections.sort(emps, new EmployeeNameComparer());
		//print sorted by name
		System.out.println();
		System.out.println("sorted by name");
		for(Employee emp : emps){
			System.out.println(emp);
		}
		

		Collections.sort(emps, new EmployeeSalaryComparer());
		//print sorted by Salary
				System.out.println();
				System.out.println("sorted by salary");
				for(Employee emp : emps){
					System.out.println(emp);
				}
		
	}

}
