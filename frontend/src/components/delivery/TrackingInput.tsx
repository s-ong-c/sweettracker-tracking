import React from 'react';
import styled, { css } from 'styled-components';
import useToggle from '@/lib/hooks/useToggle';
import palette from '@/lib/styles/palette';
import useInput from '@/lib/hooks/useInput';
import { MdSearch } from 'react-icons/md';
import { debounce } from 'throttle-debounce';

const TrackingInputBlock = styled.div<{ focus: boolean }>`
  display: flex;
  flex: 1;
  height: 43px;
  border: 1px solid ${palette.gray5};
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  align-items: center;
  transition: all 0.125s ease-in;
  cursor: text;
  svg {
    transition: all 0.125s ease-in;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: ${palette.gray5};
    flex-shrink: 0;
    cursor: pointer;
  }
  input {
    transition: all 0.125s ease-in;
    font-size: 0.875rem;
    flex: 1;
    display: block;
    line-height: 1rem;
    height: 1rem;
    padding: 0;
    border: none;
    outline: 0;
    color: ${palette.gray7};
    min-width: 0;
    &::placeholder {
      color: ${palette.gray5};
    }
  }

  ${props =>
    props.focus &&
    css`
      border: 1px solid ${palette.gray8};
      svg {
        fill: ${palette.gray9};
      }
      input {
        color: ${palette.gray9};
      }
    `}
`;
export interface TrackingInputProps {
  onSearch: (keyword: string) => void;
  initial: string;
}

const TrackingInput: React.FC<TrackingInputProps> = ({ onSearch, initial }) => {
  const [focus, toggleFocus] = useToggle(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, onChange] = useInput(initial);
  const mounted = React.useRef(false);

  const debouncedSearch = React.useMemo(() => {
    return debounce(300, (keyword: string) => {
      onSearch(keyword);
    });
  }, [onSearch]);
  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
  }, [debouncedSearch, value]);

  const onClick = () => {
    onSearch(value);
    if (!inputRef.current) return;
    inputRef.current.focus();
  };
  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };
  return (
    <TrackingInputBlock focus={focus}>
      <MdSearch />
      <input
        type="number"
        placeholder="운송장번호를 입력하세요"
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onKeyPress={onKeyPress}
        ref={inputRef}
        onChange={onChange}
        value={value}
        autoFocus
      />
      <button onClick={onClick}>조회</button>
    </TrackingInputBlock>
  );
};

export default TrackingInput;
