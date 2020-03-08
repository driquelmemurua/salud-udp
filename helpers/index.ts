export function filterBySchool(array, selectedSchool){
  return array
    .filter(contact => 
      contact.schools
      .filter(school => 
        school === "*" || school === selectedSchool)
      .length > 0
    );
}