import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

import { useState } from "react";
import Row from "react-bootstrap/esm/Row";

let pos = 0;

function Quiz(props){

let questions = [
    "Preguntas Quiz",
    "Cómo se define un nuevo componente en React?",
    "Cómo se define un nuevo estado?",
    "F o V ... El inicializador del estdo puede ser una funcion",
    "Qué es el virtual DOM?"
]

let answers = [
    "",
    "Hay dos formas, hay componentes funcionales los cuales devuelven elementos JSX y hay componentes de clase los cuales son clases JS que extienden la clase 'React.Component'",
    "se importa la función useState y luego se usa esta dentro del componente funcional para inicializar y gestionar el estado. useState toma un valor inicial como argumento y devuelve un array con dos elementos que son el estado acutal y una función para actualizar ese estado",
    "Verdadero. El inicializador puede ser una función la cual calcule y devuelva el valor inicial del estado",
    "El virtual DOM es una técnica que React utiliza para optimizar la actualización del DOM, y el DOM es el que representa todos los elementos HTML en la página, sus atributos y sus relaciones"
]

const [quest, setQuest] = useState("Preguntas Quiz")
const [answ, setAnsw] = useState("")

function handleRestart(e) {
    pos = 0;
    console.log(pos)
    updateQuestion()
    updateAnswer()
}    

function handleNext(e) {
    if (pos <= 3) {
    pos += 1;
    }
    updateQuestion()
    updateAnswer()
    console.log(pos)
}

function handleBack(e) {
    if (pos >= 2){
    pos -= 1;
    }
    updateQuestion()
    updateAnswer()
    console.log(pos)
}

const updateQuestion = () => {
    setQuest(questions[pos]);
  };

const updateAnswer = () => {
    setAnsw(answers[pos])
}

return (
    // <div class="container">
        // <div class="row d-flex justify-content-center">
    <Col>
    <Row className="justify-content-md-center">
        <Col md="auto">
            <Button variant="primary" onClick={handleRestart}>Restart</Button>
        </Col>    
        <Col md="auto">    
            <Button variant="primary" onClick={handleBack}>Back</Button>
        </Col>
        <Col md="auto">    
            <Button variant="primary" onClick={handleNext}>Next</Button>
        </Col>
    </Row>
    <Row className="justify-content-md-center">
        <Col md="auto">
            <h1>{quest}</h1>
        </Col>
    </Row>
    <Row>
        <p>{answ}</p>
        {pos === 4 && (<Image src="https://miro.medium.com/v2/resize:fit:1400/1*wrh_lW6mpQHRsuGtw1FuqA.png" onerror='this.style.display = "none"' />)}
    </Row>
    </Col>
    );

}
export default Quiz;