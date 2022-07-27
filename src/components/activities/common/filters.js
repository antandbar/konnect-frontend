export const defaultFilters = {
    date: '',
    categories: [],
    locations: [],
  };

  
const filterByCatefory =
filter =>
({ tags }) =>
  !filter.length || filter.every(tag => tags.includes(tag));



  export const filterActivities = (activities, { date, categories, locations}) =>
  activities.filter(filterByCatefory(categories));