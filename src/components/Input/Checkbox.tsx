
interface IProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox = (props: IProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer input-container">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        className="hidden"
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
