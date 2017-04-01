import _ from 'lodash/fp';
import assert from 'assert';

const CITIES = [
  { nome: 'Vitória' },
  { nome: 'Serra' },
  { nome: 'Colatina' },
  { nome: 'Pedro Canário' },
  { nome: 'Cariacica' }
];
export const CARDINAL_LOCATIONS = { 
  north: 'north',
  south: 'south',
  west: 'west',
  east: 'east',
};
/**
 * foobarGPS
 * @param {Array.<{ nome: string, lat: number, long: number}>} citiesWithCoordinates 
 * @param {{ lat: number, long: number }} whereAmI 
 * @param {string} cardinalLocation 
 */

function calculateNextNorthernCity(citiesWithCoordinates, whereAmI) {
  const citiesNorthernFromMe = citiesWithCoordinates.filter(city => city.lat > whereAmI.lat);
  const closerCityFromTheNorth = _.flow(
    _.sort('lat'),
    _.last
  )(citiesNorthernFromMe);
  return closerCityFromTheNorth;
}
function calculateNextSouthernCity(citiesWithCoordinates, whereAmI) {
  const citiesSouthernFromMe = citiesWithCoordinates.filter(city => city.lat < whereAmI.lat);
  const closerCityFromTheNorth = _.flow(
    _.sort('lat'),
    _.head
  )(citiesSouthernFromMe);
  return closerCityFromTheNorth;
}
function calculateNextWesternCity(citiesWithCoordinates, whereAmI) {
  const citiesWesternFromMe = citiesWithCoordinates.filter(city => city.lat < whereAmI.lat);
  const closerCityFromTheNorth = _.flow(
    _.sort('lat'),
    _.head
  )(citiesWesternFromMe);
  return closerCityFromTheNorth;
}
function calculateNextEasternCity(citiesWithCoordinates, whereAmI) {
  const citiesEasternFromMe = citiesWithCoordinates.filter(city => city.lat < whereAmI.lat);
  const closerCityFromTheNorth = _.flow(
    _.sort('lat'),
    _.last
  )(citiesEasternFromMe);
  return closerCityFromTheNorth;
}

export function foobarGPS(citiesWithCoordinates, whereAmI, cardinalLocation) {
  switch (cardinalLocation) {
    case CARDINAL_LOCATIONS.north:
      return calculateNextNorthernCity(citiesWithCoordinates, whereAmI);
    case CARDINAL_LOCATIONS.south:
      return calculateNextSouthernCity(citiesWithCoordinates, whereAmI);
    case CARDINAL_LOCATIONS.east:
      return calculateNextEasternCity(citiesWithCoordinates, whereAmI);
    case CARDINAL_LOCATIONS.west:
      return calculateNextWesternCity(citiesWithCoordinates, whereAmI);
    default:
      throw new Error('invalid cardinalLocation');
  }
}
