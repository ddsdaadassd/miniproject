import { useNavigate } from 'react-router-dom';
import '../component-css/MenuCard.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function MenuCard({ data }) {

  const navigate = useNavigate();
console.log(data);
  return (
    <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={() => {
      navigate('/'); //페이지 구현하면 정하기
    }}>

      <Card.Img variant="top" src={data.img} className='img' />

      <Card.Body>
        <div className='text'>
          <Card.Title>{data.title}</Card.Title>
          <div>{data.price}</div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;