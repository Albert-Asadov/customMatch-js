class CustomMatch{
    constructor(number){

        this.Number= number;
    }
        plus(plusNum){

            this.Number += plusNum;
            return this;

        }
        minus(minusNum){

            this.Number -= minusNum;
            return this;

        }
        multiplay(multiplayNum){

           this.Number *= multiplayNum;
            return this;
            

        }
        divide(divideNum){

            this.Number /= divideNum;
            return this;

        }
    }

    let customMatch = new CustomMatch(50).plus(6).minus(30).multiplay(3).divide(2);

    console.log(customMatch);

