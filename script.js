/**
 * Helper function for creating car
 **/
function createCar(name, id) {
  return {
    name: name,
    id: id,
  };
}

/**
 * Helper function for creating model
 **/
function createModel(name, id, car) {
  return {
    name: name,
    id: id,
    car: car,
  };
}

/**
 * Helper function for creating configuration
 **/
function createConfiguration(name, id, model) {
  return {
    name: name,
    id: id,
    model: model,
  };
}

/**
 * Removes all options but the first value in a given select
 * and than selects the only remaining option
 **/
function removeOptions(select) {
  while (select.options.length > 1) {                
    select.remove(1);
  }
  
  select.value = "";
}

/**
 * Adds given options to a given select
 **/
function addOptions(select, options) {
  console.log(select, options)
  options.forEach(function(option) {
    select.options.add(new Option(option.name, option.id));
  });
}

/**
 * Select elements references
 **/
var carsSelect = document.getElementById('cars-select');
var modelsSelect = document.getElementById('models-select');
var configurationSelect = document.getElementById('configurations-select');

/**
 * Available cars
 **/
var cars = [
  createCar('BMW', 'bmw'),
  createCar('Volkswagen', 'volk'),
  createCar('Ford', 'ford'),
  createCar('abc', 'abc'),
];

/**
 * Available models
 **/
var models = [
  createModel('M6', 'm6', 'bmw'),
  createModel('M5', 'm5', 'bmw'),
  createModel('Golf', 'golf', 'volk'),
  createModel('Passat', 'passat', 'volk'),
  createModel('Focus', 'focus', 'ford'),
  createModel('Mondeo', 'mondeo', 'ford'),
  createModel('def', 'def', 'abc'),
  createModel('gfgd', 'gfhf', 'abc'),
];

/**
 * Available configurations
 **/
var configurations = [
  createConfiguration('M6 Sedan', 'sedan', 'm6'),
  createConfiguration('M6 Coupe', 'coupe', 'm6'),
  createConfiguration('M5 Sedan', 'sedan', 'm5'),
  createConfiguration('M5 Coupe', 'coupe', 'm5'),
  createConfiguration('Golf Sedan', 'sedan', 'golf'),
  createConfiguration('Golf Coupe', 'coupe', 'golf'),
  createConfiguration('Passat Sedan', 'sedan', 'passat'),
  createConfiguration('Passat Coupe', 'coupe', 'passat'),
  createConfiguration('Focus Sedan', 'sedan', 'focus'),
  createConfiguration('Focus Coupe', 'coupe', 'focus'),
  createConfiguration('Mondeo Sedan', 'sedan', 'mondeo'),
  createConfiguration('Mondeo Coupe', 'coupe', 'mondeo'),
  createConfiguration('abc sedanme', 'sedan', 'def'),
  createConfiguration('abc coupe', 'coupe', 'gfhf'),
];

/** 
 * Updates models
 **/
function updateModels() {
  var selectedCar = carsSelect.value;
  var options = models.filter(function(model) {
    return model.car === selectedCar;
  });
  
  removeOptions(modelsSelect);
  removeOptions(configurationSelect);
  addOptions(modelsSelect, options);
}

/**
 * Updates configurations
 */
function updateConfigurations() {
  var selectedModel = modelsSelect.value;
  var options = configurations.filter(function(configuration) {
    return configuration.model === selectedModel;
  });
  
  removeOptions(configurationSelect);
  addOptions(configurationSelect, options);
}

/**
 * Adds options to car select
 **/
addOptions(carsSelect, cars);
