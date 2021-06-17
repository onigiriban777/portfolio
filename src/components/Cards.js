import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './cards.css'



export default function Cards(imagenTarjeta, saludo) {
    return (
        <div>
                    <Card >
        <CardActionArea className="card-main">
            <CardMedia 
            image={imagenTarjeta}
            />
            <h1>Hola</h1>
        </CardActionArea>
    </Card>
        </div>
    )
}



