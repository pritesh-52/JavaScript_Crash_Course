/* class */

class personaldata{
    constructor(firstnae,lastname,email)
    {
        this.firstnae=firstnae,
        this.lastname=lastname,
        this.email=email

    }
    printdetaik()
    {
        console.log(`${this.firstnae}  ${this.lastname} ${this.email}`);
    }
}

const a1=new personaldata("Pritesh","Bhatiya","prite@gmail.com");
a1.printdetaik();
