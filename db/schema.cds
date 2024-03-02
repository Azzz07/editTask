namespace task;
entity college{
key cid : String;
name : String;
collegetostudent : Composition of many student on collegetostudent.studenttocollege = $self; 
}

entity student {
    
    key id : Integer;
    cid : Integer;
    name : String;
    course : String;
    studenttocollege : Association to one college on studenttocollege.cid = cid;

}

entity student2 {
    
    key id : Integer;
    name : String;
    course : String;
    email :String;

}

entity math {
    
    key id : Integer;
    firstnum : Integer;
    secondnum : Integer;
    result :Integer;
}