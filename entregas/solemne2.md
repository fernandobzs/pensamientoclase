# Solemne-02

## Integrantes del grupo

- Fernando Bazaes [fernandobzs](https://github.com/fernandobzs/pensamientoclase)
- Andrés Cuevas [drescuebbas](https://github.com/drescuebbas/bitacora-pensamiento-computacional)

## Descripción del disco

![Portada de álbum Salven a las Palomas](./img/bene.jpeg)

- Salven a las Palomas
- 2014
- Dr. Bene
- Tracklist

```txt
1. Paloma Mensaje del Pasado
2. Del Viento
3. Qué Vas a Hacer
4. 70 Lunas Llenas
5. Disgusto Adquirido
6. El Faro
7. Dejame Mirar
8. Vivir de Lo Lindo
9. Mundo al Revés
10. Cain & Abel (Green Grass)
11. El Sombrero del Mago
12. Una Palabra
13. Blanca y Dalí
14. Aunque No Pase el Tren
15. Batman Comienza
16. Quién Será
17. Tú
18. Catedral de Sal
19. Paloma Mensajera del Futuro
```

- Aspecto del álbum a desarrollar (premisa)

> La ilusión de querer juntar dos almas que nunca llegaron a coexistir en el plano temporal

## Conclusión del proceso

- Distancia entre premisa y resultado

> Lorem ipsum blablabla párrafo 1 
>
> Lorm ipsum párrafo 2

- Cosas no conseguidas

> Lorem ipsum blablabla

- Descubrimientos al trabajar

> Lorem ipsum blablabla

## Explicación del código (3 aspectos)

### Bloque de código 1

```js
// Tu pedazo de código acá
push();
  drawingContext.beginPath();
  drawingContext.rect(width / 2, 0, width / 2, height);
  drawingContext.clip();

  // Movimiento de luz difuminada
  noStroke();
  for (let f of flujosFuturo) {
    fill(100, 150, 255, f.alpha); 
    ellipse(f.x, f.y, f.ancho, f.alto);
    f.x += f.velX;
    
    if (f.x - f.ancho / 2 > width) {
      f.x = width / 2 - f.ancho / 2; 
      f.y = random(height);
    }
  }
  pop(); 
```
Las primeras 3 líneas (drawingContext) generan una máscara de recorte, usado para dibujar en un sector específico del lienzo (la mitad derecha), el for recorre el arreglo flujosFuturo para mostrar cada elipse con una opacidad distinta sumado a generaciones aleatorias (f.x, f.y, f.ancho, f.alto).

### Bloque de código 2

```js
// Tu pedazo de código acá
function dibujarRelojFuturista() {
  push();
  translate(width / 2, height / 2);
  
  // eje del reloj
  stroke(255, 150);
  strokeWeight(1);
  line(0, -45, 0, 45);

  anguloReloj += 0.015;
  rotate(anguloReloj);
  
  // estructura holografic
  noFill();
  stroke(100, 200, 255, 200); // Azul eléctrico
  strokeWeight(1.5);
  
  // triangulo superior
  beginShape();
  vertex(-25, -40);
  vertex(25, -40);
  vertex(0, -5);
  endShape(CLOSE);
  
  // triang inferior
  beginShape();
  vertex(-25, 40);
  vertex(25, 40);
  vertex(0, 5);
  endShape(CLOSE);

  // anillo orbitando en sentido del reloj o contra creo
  rotate(-anguloReloj * 3);
  stroke(180, 100, 255, 180); // Violeta
  strokeWeight(1);
  ellipse(0, 0, 45, 10);
  
  pop();
}
```
Este bloque dibuja un reloj de arena con un estilo futurista (luces de neón), primero definiendo el eje, seguido del ángulo de rotación y el estilo holográfico. Luego se define la forma del reloj, compuesta por dos triángulos uno frente a otro.

### Bloque de código 3

```js
// Tu pedazo de código acá
```

### Declaración sobre el uso de IA

- IA utilizada(s) y tipo de licencia (pago, gratuita)

> Claude gratis

- Problema a resolver a través de la IA

> Generación de un rayo láser que divida el lienzo en 2, modificación del reloj de arena para que adquiera un estilo futurista como si fuesen luces de neón

- Prompts utilizados

> agrega un rayo de luz o láser vertical justo en la mitad del lienzo (width/2) para dividir visualmente las dos dimensiones. que tenga un efecto de neón brillante potente. Para lograrlo en p5.js, superpón varias líneas verticales bajando gradualmente el grosor y subiendo la opacidad (en tonos violeta o magenta), y remata con una línea blanca súper fina y sólida en el centro absoluto para que funcione como el núcleo de la luz.

> modifica la función del reloj de arena para que tenga un estilo futurista, ciberpunk y holográfico. Que sea una estructura tipo ‘wireframe’ (solo líneas dibujadas con stroke, sin fill) formando dos triángulos o pirámides invertidas en color azul eléctrico o neón. Agrégale un eje vertical de luz en el centro de la estructura y un anillo de energía (un ellipse aplanado y rotado) en tono violeta que orbite alrededor del centro, girando en sentido contrario al reloj principal

- Secciones de código entregadas por la IA

>Prompt 1
```js
//código entregado por IA acá
function dibujarRayoCentral() {
  push();
  strokeCap(SQUARE);
  
  // Capas de brillo para crear el efecto neón (de más grueso a más fino)
  for (let i = 10; i > 0; i--) {
    // Tono violeta/magenta que se va volviendo más opaco hacia el centro
    stroke(160, 120, 255, 255 / (i * 1.5));
    strokeWeight(i * 1.5);
    line(width / 2, 0, width / 2, height);
  }
  
  // Núcleo blanco del láser para que se vea potente y puro
  stroke(255, 200);
  strokeWeight(1);
  line(width / 2, 0, width / 2, height);
  
  pop();
}
```

>Prompt 2
```js
// Recuerda poner esta variable global arriba de todo en tu archivo:
// let anguloReloj = 0;

function dibujarRelojFuturista() {
  push();
  translate(width / 2, height / 2); // Nos vamos al centro del lienzo
  
  // Eje de luz central del reloj (estático)
  stroke(255, 150);
  strokeWeight(1);
  line(0, -45, 0, 45);

  // Animación de rotación general
  anguloReloj += 0.015;
  rotate(anguloReloj);
  
  // Estructura Wireframe Holográfica (Triángulos sin relleno)
  noFill();
  stroke(100, 200, 255, 200); // Color azul eléctrico
  strokeWeight(1.5);
  
  // Triángulo superior
  beginShape();
  vertex(-25, -40);
  vertex(25, -40);
  vertex(0, -5);
  endShape(CLOSE);
  
  // Triángulo inferior
  beginShape();
  vertex(-25, 40);
  vertex(25, 40);
  vertex(0, 5);
  endShape(CLOSE);

  // Anillo de energía orbitando en sentido contrario
  rotate(-anguloReloj * 3); // Lo multiplicamos para que gire más rápido y en reversa
  stroke(180, 100, 255, 180); // Color violeta brillante
  strokeWeight(1);
  ellipse(0, 0, 45, 10); // Un círculo achatado
  
  pop();
}
```
