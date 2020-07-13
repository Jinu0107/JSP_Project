package test;

import java.util.ArrayList;

public class StudentMng {
	
	private static StudentMng instance = new StudentMng();
	
    ArrayList<Student> list = new ArrayList<Student>();
 
	public StudentMng() {
    	Student temp = new Student("qwer", "1111", 100);
		list.add(temp);
		temp = new Student("abcd", "2222", 87);
		list.add(temp);		
		temp = new Student("javaking", "3333", 42);
		list.add(temp);
		
	}
	
	public static StudentMng getInstance() {
		return instance;
	}
	
	void addStudent(Student st) {
		list.add(st);
	}
	
	Student removeStudent(int index) {
		Student delSt = list.get(index);
		list.remove(index);
		return delSt;
	}
	
	int checkId(Student st) {
		int check = -1;
		for(int i=0; i<list.size(); i++) {
			if(list.get(i).getId().equals(st.getId())) {
				check = i;
				break;
			}
		}
		return check;
	}
	
	void printStudent() {
		for(int i=0; i<list.size(); i++) {
			list.get(i).printData();
		}
	}
	
	void sortData() {
		for(int i=0; i<list.size(); i++) {
			int maxScore = list.get(i).getScore();
			int maxIdx = i;
			for(int j=i; j<list.size(); j++) {
				if(maxScore < list.get(j).getScore()) {
					maxScore = list.get(j).getScore();
					maxIdx = j;
				}
			}
			
			Student temp = list.get(i);
			list.set(i, list.get(maxIdx));
			list.set(maxIdx, temp);
		}
	}
	
	int getSize() {
		return list.size();
	}
}