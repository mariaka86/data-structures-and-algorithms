let yearComparator = (a, b) => {
  const yearA = a.year;
  const yearB = b.year;

  if (yearA < yearB) {
    return -1;
  }
  if (yearB > yearA) {
    return 1;
  }

  // if years are equal
  return 0;
};

function titleComparator(a, b){
  const titleA = a.title.replace('The', '');
  const titleB = b.title.replace('The ', '');

  if(titleA < titleB) return -1;
  if(titleB > titleB) return 1;

  return 0;
}

module.export= {yearComparator, titleComparator};



