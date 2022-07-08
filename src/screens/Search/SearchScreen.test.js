import SearchScreen from './SearchScreen';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
configure({adapter: new Adapter()});
describe('Check existence of Search Screen Component', () => {
  beforeEach(() => {
    wrapper = shallow(<SearchScreen />);
  });
  test('component renders', () => {
    expect(wrapper).toExist;
  });
  test('it contains search input field', () => {
    const p = wrapper.find('searchInput');
    expect(p).toExist;
  });
});
