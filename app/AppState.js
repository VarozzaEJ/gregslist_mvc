import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { Job } from './models/Job.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**
   * @type {Car[]}
   */
  cars = [
    new Car({
      make: 'Mazda',
      model: 'Miata',
      year: 2007,
      imgURL: 'https://images.unsplash.com/photo-1552615526-40e47a79f9d7?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 8000,
      mileage: 10000,
      runs: true,
      hasCleanTitle: true,
      fuelType: 'gasoline',
      description: 'zoom zoom',
      color: '#80869c'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      year: 1997,
      imgURL: 'https://images.unsplash.com/photo-1610884447640-42b8ec61a933?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 6000,
      mileage: 200000,
      runs: true,
      hasCleanTitle: false,
      fuelType: 'gasoline',
      description: 'zoom zoom zoom',
      color: '#992943'
    }),
    new Car({
      make: 'Chevrolet',
      model: 'Corvette',
      year: 2016,
      imgURL: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 30000,
      mileage: 20,
      runs: false,
      hasCleanTitle: false,
      fuelType: 'gasoline',
      description: 'Great project car 😉',
      color: '#292649'
    }),
    new Car({
      make: 'Isuzu',
      model: 'Rodeo',
      year: 1996,
      imgURL: 'https://images.unsplash.com/photo-1632407027814-f398db997b4a?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 5000,
      mileage: 280000,
      runs: false,
      hasCleanTitle: false,
      fuelType: 'oats',
      description: 'RIP in the jalopy jungle',
      color: '#8c9197'
    }),
  ]
  houses = [
    new House({
      name: 'Overpriced House',
      year: 2020,
      imgURL: 'https://photos.zillowstatic.com/fp/7def65e68c1612694e2d47dae36cc7f3-cc_ft_1536.webp',
      price: 594990,
      description: 'Beautiful Stunning House',
      bedrooms: 3,
      bathrooms: 4,
      sqft: 2900,

    }),
    new House({
      name: 'The Old Dog',
      imgURL: 'https://images.unsplash.com/photo-1617546127542-eb0dd8bdd52f?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 200000,
      description: 'Cant Go Wrong With This Beaut',
      bedrooms: 4,
      bathrooms: 5,
      sqft: 3400,

    }),
    new House({
      name: 'The Picture Perfect',
      year: 2023,
      imgURL: 'https://images.unsplash.com/photo-1566908829550-e6551b00979b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 1600000,
      description: 'Good Luck Affording This One',
      bedrooms: 8,
      bathrooms: 12,
      sqft: 5000,

    }),
  ]

  jobs = [
    new Job({
      imgURL: 'https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: "Software Developer",
      company: 'Google',
      salary: "$50000 - $150000",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veritatis ullam mollitia sit perspiciatis totam eligendi commodi, debitis earum alias!`
    }),
    new Job({
      imgURL: 'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: "Software Engineer",
      company: 'Microsoft',
      salary: "$100000 - $250000",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veritatis ullam mollitia sit perspiciatis totam eligendi commodi, debitis earum alias!`
    }),
    new Job({
      imgURL: 'https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: "Software God",
      company: 'Apple',
      salary: "$250000 - $500000",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veritatis ullam mollitia sit perspiciatis totam eligendi commodi, debitis earum alias!`
    }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())