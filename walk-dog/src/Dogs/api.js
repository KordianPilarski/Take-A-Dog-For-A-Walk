import axios from 'axios';

const dogsURL = 'https://api-dog-breeds.herokuapp.com/api/dogs/mixed'

export function getDogsData (){
    return axios.get(dogsURL)
}

