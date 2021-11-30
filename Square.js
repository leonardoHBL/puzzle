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

const Board1 = new Board(5,
"* El objetivo es colocar los números 1,2,3 en la primera fila, 4,5,6 en la segunda y 7,8 en la tercera.\n " 
+"* La celda vacía debe quedar en la esquina inferior derecha. \n"
+"* Al presionar un botón con numero si la celda presionada, tiene una celda vacía vecina, esta celda ocupará la celda vacía. \n"
+"* Si se presiona una celda sin tener la celda vacía de vecina, se contará como un movimiento."
);
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



//Reiniciar el tablero
Board1.restart();

//Obtener las instrucciones
function showInstructions(){
    alert(Board1.instructions);
}

function restart(){
    Board1.restart();
}



