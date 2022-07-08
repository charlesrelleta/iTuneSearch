/**
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  TextInput,
  Text,
  View,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useItunes} from '../../hooks/useItunes';
import {itemData, sectionData} from '../../types/itunes';
import {sectionedList} from './helper';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('*');
  const {data, loading, error, refetch} = useItunes(searchText);

  const renderItem = ({item}: itemData) => {
    return (
      <TouchableOpacity
        style={{padding: 10, display: 'flex', flexDirection: 'row'}}>
        <Image
          resizeMode="contain"
          source={{uri: item?.artworkUrl100}}
          style={{height: 80, flex: 0.3}}
        />
        <View style={{padding: 10, flex: 0.7, flexDirection: 'column'}}>
          <Text style={{fontSize: 16, flex: 1, padding: 5}}>
            {item?.trackName}
          </Text>
          <Text style={{fontSize: 16, flex: 1, padding: 5}}>
            - {item?.artistName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = (
    <TextInput
      placeholder="Search..."
      style={{padding: 10, margin: 5, backgroundColor: 'gainsboro'}}
      onChangeText={text => setSearchText(text)}
    />
  );

  const renderSectionHeader = ({section}: sectionData) => (
    <View style={{borderTopColor: 'grey', borderWidth: 1}}>
      <Text style={{padding: 10}}>{section?.title}</Text>
    </View>
  );
  return (
    <View style={{backgroundColor: 'white', marginTop: 30}}>
      <Text style={{alignSelf: 'center'}}> iTuneSearch</Text>
      {data?.results ? (
        <SectionList
          ListHeaderComponent={renderHeader}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={false}
          sections={sectionedList(data?.results)}
          keyExtractor={(item, index) => `${index}`}
          refreshing={loading}
          onRefresh={() => refetch()}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
          maxToRenderPerBatch={12}
          initialNumToRender={12}
          ListEmptyComponent={
            <Text style={{alignSelf: 'center'}}> No Result Found!</Text>
          }
        />
      ) : (
        <Text style={{alignSelf: 'center'}}> No Result Found!</Text>
      )}
    </View>
  );
};

export default SearchScreen;
