/* function inside object */

function about() {
    console.log(`This is ${this.lname}`);

}

function college()
{
    console.log(`This is  ${this.cname}`);
}
const person = {
    lname: "abc",
    cname:"GLS",
    basicdetail: about,
    collegedetil:college
}

person.basicdetail();
person.collegedetil();



const user1={
    college:"GLS",
    year:2023,
    depatrtment:function getdata()
    {
        console.log(`data is ${this.college} ${this.year}`);
    }

}



user1.depatrtment();