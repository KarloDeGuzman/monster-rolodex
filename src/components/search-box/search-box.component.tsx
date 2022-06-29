import { ChangeEvent, ChangeEventHandler } from "react";

import "./search-box.styles.css";

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

interface IChangeHandlerProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: ISearchBoxProps) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
