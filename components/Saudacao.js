import React from 'react';
import{Text} from 'react-native';

export default function Saudacao({pessoa}){
  return(
  
    <Text style={{ fontSize: 18, marginBottom: 5 }} >Ola, {pessoa}! </Text>
    
  );
}