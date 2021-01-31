

// La idea es que a partir de que introduzcamos los números del Dni y la letra nos compruebe si pertenece a un Dni verdadero o no.

function nueva(){         // creamos una función y la declaramos "nombramos" como nueva (), para más tarde, cuando la necesitemos; llamarla o ejecutarla.

    // Base de datos 
    // Array
    const letras_Dni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y' ,'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']  // Podemos usar tanto constantes como variables para definirlo, pero al ser texto invariable, mejor usar una constante

// Mediante el uso de prompt, conseguiremos que el navegador, nos pregunte a modo de formulario los datos que le pedimos que nos muestre: 
        let numero_Dni = prompt ("Introduce tu número de DNI (sin la letra)")
        let letra_Dni = prompt("Introduce la letra de tu DNI (en mayúsculas)").toUpperCase()
    
// Le decimos con (if) que tipos de datos no permitimos, en nuestro caso no permitimos números menores a cero, como los negativos ó (||) que tengan más de 8 cifras ya que el 999999999 sería el mayor número posible.
// Después con (else), pasaríamos a analizar los diferentes casos.

        if (numero_Dni < 0 || numero_Dni > 99999999){                                          
            alert("Disculpe, el número proporcionado no es válido");
        } 
        else{
            let letracalculada = letras_Dni [numero_Dni % 23]    // Fórmula para comprobar los números del Dni con la letra asociada a cada letra de la tabla
            if (letracalculada != letra_Dni) {                  // Si (if) la letra introducida no se corresponda con los de la fórmula (números + letra dni) aparecerá el mensaje de alert!!!            false
                alert ("Disculpe, la letra o el número proporcionados no son válidos")
            }
            else{                                         // Sino (else), que aquí sería que se correspondan con los de la fórmula aparecerá, este otro mensaje de alert!!!                               true
                alert("Gracias, el número de DNI y su letra son correctos")
            }
        }
}

nueva ()        // Aquí llamamos a la función

