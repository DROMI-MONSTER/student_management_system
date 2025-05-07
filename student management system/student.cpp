#include<iostream>
#include<vector>
#include<cstdlib>
using namespace std;

class student {
    public:
        string name;
        int roll;
        int marks;
        student(string n , int r , int m){
            name = n;
            roll = r;
            marks = m;
        }
        void display(){
            cout << "Name: " << name 
            << " , Roll: " << roll 
            << " , Marks: " << marks<<endl;
        }
        void search(vector<student>& stud , int r){
            for(int i = 0 ; i < stud.size() ; i++){
                if(stud[i].roll == r){
                    stud[i].display();
                    return;
                }
            }
            cout<<"\nroll dosent exisit\n"<<endl;
        }
        void update(vector<student>& stud , int r){
            for(int i = 0 ; i < stud.size() ; i++){
                if(stud[i].roll == r){
                    stud[i].display();
                    cout<<"What you want to update:\nPress 1 to update name\nPress 2 to update roll\nPress 3 to update marks"<<endl;
                    int option = 0;
                    cout<<"choice = ";
                    cin>>option;
                    if(option == 1){
                        string newName  = "";
                        cout<< "Enter the new name = ";
                        cin>>newName;
                        stud[i].name = newName;
                        cout<<"Name updated successfully";
                    }
                    else if(option == 2){
                        int newRoll  = 0;
                        cout<< "Enter the new roll = ";
                        cin>>newRoll;
                        stud[i].roll = newRoll;
                        cout<<"Roll updated successfully";
                    }
                    else if (option == 3){
                        int newMarks  = 0;
                        cout<< "Enter the new roll = ";
                        cin>>newMarks;
                        stud[i].marks = newMarks;
                        cout<<"marks updated successfully";
                    }
                    else{
                        cout<<"wrong choice";
                    }
                }
            }
        }
        void remove(vector<student>& stud , int r){
            for(auto id = stud.begin() ; id!=stud.end() ; id++){
                if(id->roll == r){
                    stud.erase(id);
                    return;
                }
            }
        }
};

int main()
{
    system("color 2");
    vector <student> stud;
    cout<<"Student Management System"<<endl;
    int choice = 0;
    string name = "";
    int marks = 0;
    int roll = 0;
    int searchByRoll = 0;
    while(choice!=6){
        cout<<"------------------------------------------------------------------------------------------------"<<endl;
        cout<<"1 - Add student data\n2 - Display student data\n3 - Search a student's data\n4 - Update student data\n5 - Delete student data\n6 - Exit"<<endl;
        cout<<"------------------------------------------------------------------------------------------------"<<endl;
        cout<<"enter your choice:"<<endl;
        cin>>choice;
        student ser("",0,0);
        switch(choice){
            case 1:
                system("CLS");
                cout<<"\t\t\t\tADDING THE RECORDS\n\n";
                cout<<"Enter the name of the student = ";
                cin>>name;
                cout<<"Enter the roll of the student = ";
                cin>>roll;
                cout<<"Enter the marks of the student = ";
                cin>>marks;
                stud.push_back(student(name , roll , marks));
                cout<<"entry succesfully added"<<endl;
                cout<<"\n\n\n\n\n\n\n";
                break;
            case 2:
                system("CLS");
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"\t\t\t\tRECORDS\n\n"<<endl;
                for(student s : stud){
                    s.display();
                }
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"\n\n\n\n\n\n\n";
                break;
            case 3:
                system("CLS");
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"\t\t\t\tLETS SEARCH IT\n\n"<<endl;
                cout<<"Enter the roll number to be searched: ";
                cin>>searchByRoll;
                ser.search(stud , searchByRoll);
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"\n\n\n\n\n\n\n";
                break;
            case 4:
                system("CLS");
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"enter the roll number student: ";
                cin>>searchByRoll;
                ser.update(stud , searchByRoll);
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"\n\n\n\n\n\n\n";
                break;
            case 5:
                system("CLS");
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"enter the roll number student: ";
                cin>>searchByRoll;
                ser.remove(stud , searchByRoll);
                cout<<"------------------------------------------------------------------------------------------------"<<endl;
                cout<<"\n\n\n\n\n\n\n";
                break;
            case 6:
                system("CLS");
                
                cout<<"Thankyou for using our system"<<endl;
                cout<<"\n\n\n\n\n\n\n";
                break;
            default:
                cout<<"Invalid Input"<<endl;
        }
    
    }

    return 0;
}


/* 
#include <iostream>
#include <unordered_map>
#include <cstdlib>  // For system() commands

using namespace std;

class Student {
public:
    string name;
    int marks;

    Student(string n, int m) {
        name = n;
        marks = m;
    }

    void display() const {
        cout << "Name: " << name << ", Marks: " << marks << endl;
    }
};

void addStudent(unordered_map<int, Student>& students) {
    string name;
    int roll, marks;

    cout << "Enter Roll Number: ";
    cin >> roll;

    cin.ignore();  // Ignore previous newline
    cout << "Enter Name: ";
    getline(cin, name);

    cout << "Enter Marks: ";
    cin >> marks;

    if (students.find(roll) != students.end()) {
        cout << "Error: Roll number already exists!\n";
    } else {
        students[roll] = Student(name, marks);
        cout << "Student added successfully!\n";
    }
}

void displayStudents(const unordered_map<int, Student>& students) {
    if (students.empty()) {
        cout << "No student records available.\n";
        return;
    }

    cout << "---------- Student Records ----------\n";
    for (const auto& [roll, student] : students) {
        cout << "Roll: " << roll << " | ";
        student.display();
    }
    cout << "--------------------------------------\n";
}

void searchStudent(const unordered_map<int, Student>& students) {
    int roll;
    cout << "Enter Roll Number to Search: ";
    cin >> roll;

    auto it = students.find(roll);
    if (it != students.end()) {
        cout << "Student Found:\n";
        it->second.display();
    } else {
        cout << "Roll number not found.\n";
    }
}

void updateStudent(unordered_map<int, Student>& students) {
    int roll;
    cout << "Enter Roll Number to Update: ";
    cin >> roll;

    auto it = students.find(roll);
    if (it == students.end()) {
        cout << "Roll number not found.\n";
        return;
    }

    int option;
    cout << "Press 1 to Update Name\n";
    cout << "Press 2 to Update Marks\n";
    cout << "Choice: ";
    cin >> option;

    cin.ignore(); // Ignore previous newline

    if (option == 1) {
        cout << "Enter New Name: ";
        getline(cin, it->second.name);
        cout << "Name updated successfully.\n";
    } 
    else if (option == 2) {
        cout << "Enter New Marks: ";
        cin >> it->second.marks;
        cout << "Marks updated successfully.\n";
    } 
    else {
        cout << "Invalid choice.\n";
    }
}

void removeStudent(unordered_map<int, Student>& students) {
    int roll;
    cout << "Enter Roll Number to Delete: ";
    cin >> roll;

    if (students.erase(roll)) {
        cout << "Student record deleted successfully.\n";
    } else {
        cout << "Roll number not found.\n";
    }
}

int main() {
    unordered_map<int, Student> students;
    int choice;

    while (true) {
        cout << "\nStudent Management System\n";
        cout << "1 - Add Student\n";
        cout << "2 - Display Students\n";
        cout << "3 - Search Student\n";
        cout << "4 - Update Student\n";
        cout << "5 - Delete Student\n";
        cout << "6 - Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1: addStudent(students); break;
            case 2: displayStudents(students); break;
            case 3: searchStudent(students); break;
            case 4: updateStudent(students); break;
            case 5: removeStudent(students); break;
            case 6: cout << "Exiting...\n"; return 0;
            default: cout << "Invalid input! Try again.\n";
        }
    }
}

 */