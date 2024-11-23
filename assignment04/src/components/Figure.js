import {useEffect, useState} from 'react';
import {animals} from '../assets/database/AnimalsDb'
import '../assets/css/GameFigure.css'


export default function Figure(props){
    const [animal,setAnimal]=useState(null);
    const [result,setResult]=useState('');

    useEffect(()=>{
        getRandomAnimal();
    },[]);

    const getRandomAnimal=()=>{
        const randomIndex=Math.floor(Math.random() * 10)+1; 
        setAnimal(animals[randomIndex]);
        setResult('');
    }
    const checkClick=(selectedAnimal)=>{
        if(selectedAnimal === animal.name){
            setResult('Win!');
        }
        else{
            setResult('Loose!');
        }
        setTimeout(()=>{
            getRandomAnimal();
        },1500);
    }

    if(!animal){
        return <div className="loading">Loading...</div>;
    }

    return(
        <>
        <div className='gameFigure'>
            <table>
            <tr>
                <th colSpan={3}>Animal Matching Game 🎮</th>
            </tr>
            <tr>
                <th>Result</th>
                <th>Animal Name</th>
                <th>Select the Animal</th>
            </tr>
            <tr>
                <td>{result}</td>
                <td>{animal .name}</td>
                <td className='imageGrid'>
                    {animals.map((item)=>(
                        <div key={item.name} className='gridItem' onClick={()=>checkClick(item.name)}>
                            <img src={require(`../assets/images/${item.img}`)}className='image'/>
                        </div>
                    ))}
                </td>
            </tr>
            </table>
        </div>
        </>
    );
    
}