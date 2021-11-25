const _private = new WeakMap();

class Board{

    constructor(movementsCounter,instructions){

        const properties ={    
            _movementsCounter : movementsCounter,
            _instructions : instructions,
        }

        _private.set(this, {properties})
    }

    /*
            Getter and setters
    */
    get movementsCounter(){
        return _private.get(this).properties['_movementsCounter'];
    }

    set movementsCounter(movement){
        return _private.get(this).properties['_movementsCounter'] = movement;
    }

    get instructions(){
        return _private.get(this).properties['_instructions'];
    }

    /*
            Metodos funcionales
    */

    calculateMovementsCounter(){
         console.log("Muchos movimientos");
     }       

    isGridSorted(){
        console.log("False");
    } 

    restart(){
        console.log("Reiniciando el juego");
    }


}

class Square{

    constructor(ID,color,isSwapable){

        const properties ={    
            _ID : ID,
            _color: color,
            _isSwapable: isSwapable
        }
    
            _private.set(this, {properties})
    }

    /*
            Getter and setters
    */
            get color(){
                return _private.get(this).properties['_color'];
            }
        
            set color(color){
                return _private.get(this).properties['_color'] = color;
            }

            get ID(){
                return _private.get(this).properties['_ID'];
            }
        
            set ID(id){
                return _private.get(this).properties['_ID'] = id;
            }

            get isSwapable(){
                return _private.get(this).properties['_isSwapable'];
            }
        
            set isSwapable(state){
                return _private.get(this).properties['_isSwapable'] = state;
            }
        


}



//instancias Board

const Board1 = new Board(5, "Juegue limpio y rapido");
console.log(Board1.movementsCounter);
Board1.movementsCounter=1000
console.log(Board1.movementsCounter);
console.log(Board1.instructions);
Board1.calculateMovementsCounter();
Board1.isGridSorted();
Board1.restart();

// probando clase Square

console.log("*************");
const square1 = new Square(1, "Verde", "F");
console.log(square1.color)
console.log(square1.ID)
console.log(square1.isSwapable)
