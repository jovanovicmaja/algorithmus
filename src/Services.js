import $ from 'jquery';

const sanitize = (str) => {
  return str.replace(/[()[\\]/g, '');
};

const search = () => {
  const rows = $('tr');
  const term = $('#search').val();
  $(rows).show();
  const searchTerm = sanitize(term.toLocaleLowerCase());
  rows.each(function () {
    if (
      sanitize($(this).text()).toLocaleLowerCase().search(searchTerm) === -1 &&
      $(this).children().get(0).tagName !== 'TH'
    ) {
      $(this).hide();
    }
  });
};

const clearSearchTerm = () => {
  $('#search').val('');
};

const getSearchTerm = () => {
  return $('#search').val();
};

const setSearchTerm = (value) => {
  $('#search').val(value);
};

const sortTable = (array, sortValues, sortConfig) => {
  array.sort((a, b) => {
    if (
      sortValues[array.indexOf(a)][sortConfig.key] <
      sortValues[array.indexOf(b)][sortConfig.key]
    ) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (
      sortValues[array.indexOf(a)][sortConfig.key] >
      sortValues[array.indexOf(b)][sortConfig.key]
    ) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
};

export default {
  search,
  sortTable,
  clearSearchTerm,
  getSearchTerm,
  setSearchTerm,
};
