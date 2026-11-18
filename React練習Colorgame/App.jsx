import './App.css';
import Slots from './Slots';
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker  from './Clicker'
import Toggler from './Toggler';
import ColorBoxGrid from './ColorBoxGrid';


// const data = [
//   { id: 1, item: '卵', quantity: '12', completed: false },
//   { id: 2, item: '牛乳', quantity: 1, completed: true },
//   { id: 3, item: '鶏むね肉', quantity: 4, completed: false },
//   { id: 4, item: 'にんじん', quantity: 6, completed: true },
// ];

// const properties = [
//   { id: 200201, name: '砂丘の離れ', rating: 4.9, price: 18000 },
//   { id: 200202, name: '霧立つ山の庵', rating: 4.8, price: 30000 },
//   { id: 200203, name: '月見の庵', rating: 4.75, price: 36000 },
//   { id: 200204, name: '杉の木の隠れ家', rating: 4.9, price: 14400 },
//   { id: 200205, name: '波音の宿', rating: 4.7, price: 16800 },
//   { id: 200206, name: '炭焼き小屋', rating: 4.69, price: 11500 },
// ];

const colors = [
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
];




function App(){
      return(
        <ColorBoxGrid colors={colors}/>
      )
    }
export default App


