import React from 'react';
import TreeItem from '../treeItem';

const TreeList = ({items, show}) => {

    return (
        <ul>
            {items?.map((item) => <TreeItem {...item} show={show}/>)}
        </ul>
    )
};

export default TreeList;
