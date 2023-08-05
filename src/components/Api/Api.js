
import axios from 'axios';
const API_KEY = '36775018-abad017b89dacc6f8ffcc7875';

const fetchImages = ({ query = '', pageNumber = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
};

export default  fetchImages ;
