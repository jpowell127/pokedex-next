interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className='bg-white shadow p-4 flex items-center max-w-md mx-auto mb-8 border-black'>
      <label
        className='block text-gray-700 text-sm font-bold mr-2'
        htmlFor='search'
      >
        Search
      </label>
      <input
        id='search'
        className='w-full rounded p-2'
        type='text'
        placeholder="Try'Charizard'"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
