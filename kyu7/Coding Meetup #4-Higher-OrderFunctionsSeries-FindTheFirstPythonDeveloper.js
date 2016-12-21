

function getFirstPython(list) {
  var pythonDevs = list.filter(person => person.language === 'Python')
  return pythonDevs.length > 0 ? pythonDevs[0].firstName + ', ' + pythonDevs[0].country : 'There will be no Python developers'
}
