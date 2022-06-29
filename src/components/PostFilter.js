import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput 
            placeholder='search...' 
            value={filter.query} 
            onChange={e => setFilter({...filter, query:e.target.value})}
        />
        <MySelect 
          onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
          value={filter.sort} 
          defaultValue='select' 
          options={[
            { value: 'name', name: 'name' }, { value: 'description', name: 'description' }
          ]} 
      />
        </div>
    );
};

export default PostFilter;