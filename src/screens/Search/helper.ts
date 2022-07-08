import _ from 'lodash';
import { itunesData } from '../../types/itunes';


 
export const sectionedList = (data: itunesData[]) => {
    let transactionList = [];


  const uniqueData = _.uniqBy(data, 'collectionName'); 

    for (let index = 0; index < uniqueData.length; index++) {
        const collectionName = uniqueData[index].collectionName;
        const compiledData: itunesData[] = [];
        data.map(row => {
          if (row['collectionName'] === collectionName) {
            compiledData.push(row);
          }
        });
        transactionList.push({title: collectionName, data: compiledData});
      }
    return transactionList;
}