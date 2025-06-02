import React from 'react';
import{ScrollView} from 'react-native'
import Titulo from './components/Titulo'
import Saudacao from './components/Saudacao'
import FotoPerfil from './components/FotoPerfil'
import CartaoUsuario from './components/cartaoUsuario'
export default function App(){
  return(
    <ScrollView>
    <Titulo /> 
    <Saudacao nome='maria'/>
    <FotoPerfil />

< CartaoUsuario nome='Morgam' descricao='dev' img='perfil00' />
< CartaoUsuario nome='Clara' descricao='programador' img='perfil01' />

    </ScrollView>
  );
}

