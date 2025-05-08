




function formatString(input: string, toUpper?: boolean): string {
       if (toUpper === false) {
    
        return input.toUpperCase();
       }
       return input.toLowerCase();
     }
     
     
      

     

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return (items.filter(item => item.rating >=4))
      
    
  }
  



  



class vichcle  {
   private make: string
    private year: number
    constructor(make:string,year:number){
        this.make = make
        this.year = year
    }

    getInfo(): string{
        return `make:${this.make}, year:${this.year}`
    }

}

class Car extends vichcle {
    private model:string
    constructor(make:string, year:number,model:string){
        super(make,year)
        this.model = model
    }
    getModel() :string{
        return `model:${this.model}`
    }
    
}




function processValue(value: string | number): number {
    if(typeof value === 'string'){
        return value.length
    }
    else{
        return value * 2
    }
}








  

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  function getDayType(day: Day): string{
    if(day === Day.Saturday || day === Day.Sunday){
        return 'weekend'
    }else{
        return 'weekday'
    }
  }



async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(n < 0){
                reject(new Error('the number is negative'))
            }else{
                resolve(n * n)
                
                
            }

        }, 1000)
    })

}




