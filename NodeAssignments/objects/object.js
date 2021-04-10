class Rectangle{
    constructor(width, height){
        this.height = height
        this.width = width
    }
}

Rectangle.prototype.getArea = function getArea(){
    return this.height * this.width
}

//1
function first(){
    var obj = new Rectangle(4, 5)
    document.getElementById('o1').innerHTML = "Height = " + obj.height + ", Width = " + obj.width
}

//2
function Area(){
    var obj = new Rectangle(4, 5)
    document.getElementById('o2').innerHTML = "Area of Reactangle = " + obj.getArea()
}

//3
function three(){
    const r = new Rectangle(4, 5)
    r.height = 50
    document.getElementById('o3').innerHTML = "Area of Reactangle with Width : " + r.width + " and Height : " + r.height + " is = " + r.getArea()
}

//4
let Name = {firstName: 'Durgapraveen', lastName: 'Panthangi'}
console.log(Name)
Name.lastName = 'Panthangi'
console.log(Name)

//5
Name.middleName = 'Prem'
console.log(Name)

//6
var string = "{firstName: 'Durgapraveen', lastName: 'P'}";
eval('var obj = ' + string)
console.log("eval = ", obj)

//7
var str = '{ "fisrtName": "Durgapraveen", "lastName": "P" }'
var obj1 = JSON.parse(str)
console.log("JSON.parse() = ", obj1)

-------------------------------------------------------------------------------------------------------------------------------------------------
//1 code
function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}
person1=new person("Monoj","Reddy",22,["c"],"29/06/1999",{city:"Vijayawada",pincode:"520011"},"false","sftwr Eng")
person2=new person("Durgapraveen","Chowdary",21,"HTML","23/12/1999",{city:"Hyderabad",pincode:"501122"},"false","junior analyst")
print=function(){
    console.log(person1);
    console.log(person2);
}();

-----------------------------------------------------------------------------------------------------------------------------------------------
//2

function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}


Chiranjeevi=new person("Chiranjeevi","konidela",62,["c"],"24/10/1976",{city:"hyd",pincode:"521185"},"false","senior analyst")
Ramcharan=new person("Ramcharan",31,"HTML","08/06/1997","false","jr analyst")
print=function(){
    console.log(Chiranjeevi);
    console.log(Chiranjeevi.lname);
    console.log(Ramcharan.address);
}();

----------------------------------------------------------------------------------------------------------------------------------------

//3

function person(fname,lname,age,skills,dateofbirth,address,married,profession)
{
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}


Chiranjeevi=new person("Chiranjeevi","Konidela",62,["c"],"24/10/1976",{city:"hyd",pincode:"521185"},"false","senior analyst")
Ramcharan=new person("Ramcharan",31,"HTML","08/06/1997","false","jr analyst")
Sameeksha=new person("Sameeksha","b",22,"sql","20/09/1995",{city:"vij",pincode:"000001"},"false","analyst")
print=function(){
    console.log(Chiranjeevi);
    console.log(Ramcharan.lname);
    console.log(Ramcharan.address);
    console.log(Sameeksha.address);

}();

------------------------------------------------------------------------------------------------------------------------------------------------

//4


function savings(accountNumber,accountHoldername,accountBalance,isSalary)
{
    this.accountNumber=accountNumber;
    this.accountHoldername=accountHoldername;
    this.accountBalance=accountBalance;
    this.isSalary=isSalary;

function withDraw(sal){
     console.log(this.accountBalance-sal);
}

}

saving=new savings(101,"vittal",1000,2000);
saving.withDraw(100);
current=new savings(102,"vit",2000,3000);
current.withDraw(100);
--------------------------------------------------------------------------------------------------------------------------------