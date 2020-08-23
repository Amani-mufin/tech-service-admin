import React, { useState, useEffect } from 'react';

interface SubCategoryProps {
  title: string;
  viewChange?: number;
  selectSubCategory?: (id: string) => void;
  id: string;
}

function SubCat(props: SubCategoryProps) {
  const [subcatActive, setSubCatActive] = useState<boolean>(false);

  useEffect(() => {
    setSubCatActive(false);
  }, [props.viewChange]);

  function activeHandler() {
    setSubCatActive(!subcatActive);
    props.selectSubCategory!(props.id);
  }

  return (
    <span onClick={activeHandler} className={subcatActive ? 'cat-active' : 'cat-inactive'}>
      {props.title}
    </span>
  );
}

export default SubCat;
