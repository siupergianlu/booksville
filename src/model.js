export const state = {
  book: {},
  search: {
    query: '',
    results: [],
    description: '',
  },
};

export const loadSearchResults = async (query) => {
  try {
    state.search.query = query;
    const response = await fetch(
      `https://openlibrary.org/subjects/${query}.json`
    );
    const data = await response.json();

    state.search.results = data.works.map((work) => {
      return {
        key: work.key,
        title: work.title,
        authors: work.authors.map((author) => {
          return {
            author: author.name,
          };
        }),
      };
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadDescription = async (key) => {
  try {
    const response = await fetch(`https://openlibrary.org${key}.json`);
    const data = await response.json();

    const  bookDescritpion  = data.description;
    state.book = { description: bookDescritpion, title: data.title };

  } catch (error) {
    console.log(error);
  }
};
