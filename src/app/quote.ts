export class Quote {
    moreDetails: boolean;
  
    constructor(public id: number, public title: string,public quote: string, public author:string,public datePosted: Date){
        this.moreDetails=false;
    }
  
  }
  