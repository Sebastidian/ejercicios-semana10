 'use stric'

//  Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.


let Gdrive = "https://docs.google.com/spreadsheets/d/1iW3hUt_PzmwDYDvRXQcnc1vhFIcERM1O/edit#gid=649327889"
let IDstar = Gdrive.indexOf('1');
let IDend = Gdrive.indexOf('/edit')

alert (Gdrive.slice(IDstar,IDend));