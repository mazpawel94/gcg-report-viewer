import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

import '../../css/react-tag.scss';

const InputTag = ({ tags, setTags }) => {
  const handleDelete = (i) => setTags(tags.filter((t, index) => index !== i));
  const handleAddition = (newTag) => setTags((prev) => [...prev, newTag]);

  return (
    <ReactTags
      placeholder="dodaj tagi"
      tags={tags}
      allowDragDrop={false}
      delimiters={[188, 13]}
      minQueryLength={0}
      inputFieldPosition="bottom"
      autofocus={true}
      editable={true}
      autocomplete
      handleDelete={handleDelete}
      handleAddition={handleAddition}
    />
  );
};

export default InputTag;
